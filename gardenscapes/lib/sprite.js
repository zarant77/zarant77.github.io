class Sprite {
  constructor(context, spriteImage, bgImage, width, height, initialValue) {
    this.context = context;
    this.spriteImage = spriteImage;
    this.bgImage = bgImage;
    this.width = width;
    this.height = height;
    this.value = initialValue;
    this.lastPos = null;
    this.isSelected = null;
  }

  clear(x, y) {
    this.context.drawImage(
      this.bgImage,
      x,
      y,
      this.width,
      this.height,
      x,
      y,
      this.width,
      this.height
    );

    if (this.lastPos && (this.lastPos[0] !== x || this.lastPos[1] !== y)) {
      this.context.drawImage(
        this.bgImage,
        this.lastPos[0],
        this.lastPos[1],
        this.width,
        this.height,
        this.lastPos[0],
        this.lastPos[1],
        this.width,
        this.height
      );
    }
  }

  render(x = this.lastPos[0], y = this.lastPos[1]) {
    this.clear(x, y);

    if (this.value !== null) {
      this.context.drawImage(
        this.spriteImage,
        (this.value + 1) * this.width,
        0,
        this.width,
        this.height,
        x,
        y,
        this.width,
        this.height
      );
    }

    this.lastPos = [x, y];

    if (this.isSelected) {
      this.context.drawImage(
        this.spriteImage,
        0,
        0,
        this.width,
        this.height,
        x,
        y,
        this.width,
        this.height
      );
    }
  }

  select(isSelected) {
    this.isSelected = isSelected;
    this.render(this.lastPos[0], this.lastPos[1]);
  }

  moveTo(x, y, animate = true) {
    return new Promise((resolve) => {
      this.isSelected = false;

      if (animate) {
        let tick = 0;
        const ticks = 4;
        const offsetX = this.lastPos[0] - x;
        const offsetY = this.lastPos[1] - y;

        const timerId = setInterval(() => {
          if (tick === ticks) {
            clearInterval(timerId);
            this.render(x, y);
            resolve();
          } else {
            this.render(
              this.lastPos[0] - offsetX / ticks,
              this.lastPos[1] - offsetY / ticks
            );
          }

          tick++;
        }, 50);
      } else {
        this.render(x, y);
        resolve();
      }
    });
  }

  wipe(animate = true) {
    return new Promise((resolve) => {
      this.value = null;

      if (animate) {
        // Play explode animation
        const ticks = 9;
        let tick = 0;

        const timerId = setInterval(() => {
          this.context.drawImage(
            this.bgImage,
            this.lastPos[0],
            this.lastPos[1],
            this.width,
            this.height,
            this.lastPos[0],
            this.lastPos[1],
            this.width,
            this.height
          );

          this.context.drawImage(
            this.spriteImage,
            tick * this.width,
            this.height,
            this.width,
            this.height,
            this.lastPos[0],
            this.lastPos[1],
            this.width,
            this.height
          );

          tick++;

          if (tick === ticks) {
            clearInterval(timerId);
            resolve();
          }
        }, 400 / ticks);
      } else {
        // Just draw empty field
        this.context.drawImage(
          this.bgImage,
          this.lastPos[0],
          this.lastPos[1],
          this.width,
          this.height,
          this.lastPos[0],
          this.lastPos[1],
          this.width,
          this.height
        );

        resolve();
      }
    });
  }

  animateHint(x, y) {
    return new Promise((resolve) => {
      let tick = 0;
      const ticks = 4;
      const originalPos = this.lastPos;
      const offsetX = this.lastPos[0] - x;
      const offsetY = this.lastPos[1] - y;

      const timerId = setInterval(() => {
        if (tick === ticks) {
          clearInterval(timerId);
          this.render(originalPos[0], originalPos[1]);
          resolve();
        } else {
          this.render(
            this.lastPos[0] - offsetX / ticks,
            this.lastPos[1] - offsetY / ticks
          );
        }

        tick++;
      }, 50);
    });
  }
}
