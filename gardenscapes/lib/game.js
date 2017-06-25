const padding = 30;
const tileWidth = 60;
const tileHeight = 60;

class Game {
  constructor(domId, cols = 7, rows = 7, deadzones = ['0-0', '0-6', '6-0', '6-6']) {
    this.cols = cols;
    this.rows = rows;
    this.deadzones = deadzones;
    this.matrix = [];
    this.selected = null;
    this.animation = false;

    const element = document.getElementById(domId);
    const canvas = document.createElement('canvas');
    canvas.width = cols * tileWidth + padding * 2;
    canvas.height = rows * tileHeight + padding * 2;
    canvas.addEventListener('click', (event) => this.onClick(
      parseInt((event.pageY - canvas.offsetTop - padding) / tileHeight),
      parseInt((event.pageX - canvas.offsetLeft - padding) / tileWidth)
    ), false);

    element.appendChild(canvas);

    this.ctx = canvas.getContext('2d');
  }

  start() {
    Promise.all([
      this.loadResource('res/bg.jpg'),
      this.loadResource('res/sprite.png')
    ]).then((resources) => {
      this.background = resources[0];
      this.sprite = resources[1];

      for (let y = 0; y < this.rows; y++) {
        this.matrix[y] = [];

        for (let x = 0; x < this.cols; x++) {
          this.spawn(x, y);
        }
      }

      this.render();

      this.checkResult().then((result) => {
        if (result) {
          this.combine();
        }

        // Turn on animation
        this.animation = true;
        this.hintTimer = 0;

        // Hint timer
        setInterval(() => {
          this.hintTimer++;

          if (this.hintTimer > 5) {
            this.hint(true);
          }
        }, 1000);
      });
    });
  }

  spawn(x, y) {
    if (this.deadzones.indexOf(`${y}-${x}`) === -1) {
      this.matrix[y][x] = new Sprite(
        this.ctx,
        this.sprite,
        this.background,
        tileWidth,
        tileHeight,
        parseInt(Math.random() * parseInt(Math.sqrt(this.cols * this.rows)))
      );
    } else {
      this.matrix[y][x] = null;
    }

    return this.matrix[y][x];
  }

  loadResource(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.addEventListener('load', () => resolve(img), false);
    });
  }

  render() {
    this.ctx.drawImage(this.background, 0, 0);

    this.matrix.forEach((row, rowNum) => {
      row.forEach((item, colNum) => {
        if (item !== null) {
          item.render(colNum * tileWidth + padding, rowNum * tileHeight + padding);
        }
      });
    });
  }

  switchItems(from, to) {
    return new Promise((resolve) => {
      if (!this.matrix[from[0]][from[1]] || !this.matrix[to[0]][to[1]]) {
        return resolve();
      }

      const tmp = this.matrix[from[0]][from[1]];
      this.matrix[from[0]][from[1]] = this.matrix[to[0]][to[1]];
      this.matrix[to[0]][to[1]] = tmp;

      Promise.all([
        this.matrix[from[0]][from[1]].moveTo(
          from[1] * tileWidth + padding,
          from[0] * tileHeight + padding,
          this.animation
        ),
        this.matrix[to[0]][to[1]].moveTo(
          to[1] * tileWidth + padding,
          to[0] * tileHeight + padding,
          this.animation
        )
      ]).then(() => resolve());
    });
  }

  onClick(row, col) {
    this.hintTimer = 0;

    if (!this.matrix[row][col] || this.matrix[row][col].value === null) {
      // Interrupt if click was out of sprite.
      return false;
    }

    if (!this.selected) {
      // If no have selected item - select item
      this.matrix[row][col].select(true);
      this.selected = [row, col];
    } else {
      // If have selected item - cancel select and try to move item to new position
      const [selRow, selCol] = this.selected;
      this.selected = null;

      if (
        (selRow !== row && selCol !== col) ||
        (selRow === row && selCol === col) ||
        Math.abs(selRow - row) > 1 ||
        Math.abs(selCol - col) > 1
      ) {
        // Illegal move. New selection.
        this.matrix[selRow][selCol].select(false);
        this.matrix[row][col].select(true);
        this.selected = [row, col];
      } else {
        // Legal move. Try to switch items.
        this.switchItems([selRow, selCol], [row, col]).then(() => {
          // Check result after move.
          this.checkResult().then((result) => {
            if (result) {
              // If we have result - remove empty fields.
              this.combine();
            } else {
              // If we no have result - turn it back.
              this.switchItems([selRow, selCol], [row, col]).then(() => {
                this.matrix[selRow][selCol].select(false);
              });
            }
          });
        });
      }
    }
  }

  checkResult() {
    const result = {
      wipeList: [],
      lastValue: null,
      chain: [],
      check: (rowNum, colNum) => {
        const item = this.matrix[rowNum][colNum];

        if (item && item.value !== null) {
          if (result.lastValue !== item.value) {
            result.chain = [];
          }

          result.chain.push(`${rowNum}-${colNum}`);

          result.lastValue = item.value;

          if (result.chain.length >= 3) {
            result.chain.forEach((item) => {
              if (result.wipeList.indexOf(item) === -1) {
                result.wipeList.push(item);
              }
            });
          }
        }
      }
    };

    return new Promise((resolve) => {
      for (let y = 0; y < this.matrix.length; y++) {
        result.lastValue = null;
        result.chain = [];

        for (let x = 0; x < this.matrix[y].length; x++) {
          result.check(y, x);
        }
      }

      for (let x = 0; x < this.matrix[0].length; x++) {
        result.lastValue = null;
        result.chain = [];

        for (let y = 0; y < this.matrix.length; y++) {
          result.check(y, x);
        }
      }

      if (result.wipeList.length) {
        const promises = [];

        result.wipeList.forEach((item) => {
          const [row, col] = item.split('-');

          promises.push(this.matrix[row][col].wipe(this.animation));
        });

        Promise.all(promises).then(() => resolve(true));
      } else {
        resolve(false);
      }
    });
  }

  combine() {
    const promises = [];

    for (let col = 0; col < this.cols; col++) {
      for (let row = this.rows - 1; row >= 0; row--) {
        const item = this.matrix[row][col];

        if (item && item.value === null) {
          if (this.matrix[row - 1] && this.matrix[row - 1][col]) {
            const itemFrom = this.matrix[row - 1][col];

            if (itemFrom.value !== null) {
              promises.push(this.switchItems([row - 1, col], [row, col]));
            }
          } else {
            const newItem = this.spawn(col, row);

            newItem.render(col * tileHeight + padding, 0);

            promises.push(newItem.moveTo(
              col * tileHeight + padding,
              row * tileWidth + padding,
              this.animation
            ));
          }
        }
      }
    }

    Promise.all(promises).then(() => {
      // Check empty items
      let hasEmpty = false;

      this.matrix.forEach((row) => {
        if (row.find((i) => {
            return (i && i.value === null);
          })) {
          hasEmpty = true;
        }
      });

      if (hasEmpty) {
        this.combine();
      } else {
        this.checkResult().then((result) => {
          if (result) {
            // If we have result - remove empty fields.
            this.combine();
          }
        });
      }
    });
  }

  getValue(col, row) {
    return (this.matrix[row] && this.matrix[row][col]) ? this.matrix[row][col].value : null;
  }

  checkNeighbors(item, first, second, third) {
    if (
      this.getValue(item[0] + first[0], item[1] + first[1]) === this.getValue(item[0] + second[0], item[1] + second[1]) &&
      this.getValue(item[0] + first[0], item[1] + first[1]) === this.getValue(item[0] + third[0], item[1] + third[1])
    ) {
      return [item[0] + third[0], item[1] + third[1]];
    }

    return null;
  }

  hint(isAnimate = false) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        // Check neighbors to calculate hint
        const from = game.checkNeighbors([col, row], [-1, 0], [1, 0], [0, -1]) ||
          game.checkNeighbors([col, row], [-1, 0], [-2, 0], [1, 0]) ||
          game.checkNeighbors([col, row], [-2, 0], [1, 0], [2, 0]) ||
          game.checkNeighbors([col, row], [0, -1], [0, -2], [0, 1]) ||
          game.checkNeighbors([col, row], [0, -2], [0, 1], [0, 2]);

        if (from) {
          if (isAnimate) {
            this.matrix[from[1]][from[0]].animateHint(
              col * tileHeight + padding,
              row * tileWidth + padding
            ).then(() => {
              this.matrix[from[1]][from[0]].render();
              this.matrix[row][col].render();
            });
          }

          return {
            from: from,
            to: [col, row]
          };
        }
      }
    }
  }
}
