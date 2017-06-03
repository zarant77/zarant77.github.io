webpackJsonp([0],{

/***/ 26:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(64)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(65),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(10);

var _vue2 = _interopRequireDefault(_vue);

var _Hello = __webpack_require__(27);

var _Hello2 = _interopRequireDefault(_Hello);

__webpack_require__(26);

var _vueRouter = __webpack_require__(9);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
  mode: 'history',
  routes: [{
    path: '*',
    components: {
      default: _Hello2.default
    }
  }]
});

exports.default = new _vue2.default({
  el: '#root',
  router: router,
  render: function render(h) {
    return h('router-view');
  }
});

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(44);

var _config2 = _interopRequireDefault(_config);

var _googleImages = __webpack_require__(17);

var _googleImages2 = _interopRequireDefault(_googleImages);

var _annyang = __webpack_require__(16);

var _annyang2 = _interopRequireDefault(_annyang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var google = new _googleImages2.default(_config2.default.googleAPI.id, _config2.default.googleAPI.key); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'Hello',
  methods: {
    message: function message(text) {
      var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.text = text;
      this.image = null;
      this.animation = animation;

      if (text) {
        window.responsiveVoice.speak(text, 'UK English Male', {
          pitch: 0.8,
          rate: 1,
          volume: 1
        });
      }
    }
  },
  data: function data() {
    var _this = this;

    var commands = {
      hello: function hello() {
        _this.message('Hi dude!', 'wave');

        setTimeout(function () {
          _this.animation = null;
        }, 1000);
      },
      dance: function dance() {
        var songs = _config2.default.bender.songs || [];
        var song = songs[parseInt(Math.random() * songs.length)];

        _this.message(null, 'dance');
        _this.$refs.audio.src = song.src;
        _this.$refs.audio.play();

        setTimeout(function () {
          _this.text = 'Speak to me';
          _this.animation = null;
        }, song.time * 1000);
      },
      'show (me) *tag': function showMeTag(tag) {
        _this.message('Moment, I\'ll show you "' + tag + '"');

        setTimeout(function () {
          google.search(tag).then(function (images) {
            _this.image = images[0] ? images[0] : null;
          });
        }, 2000);
      },
      'say (me) *tag': function sayMeTag(tag) {
        _this.message(tag);
      }
    };

    _annyang2.default.addCommands(commands);

    _annyang2.default.start();

    return {
      text: 'Speak to me',
      image: null,
      animation: null
    };
  }
};

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = {
	"googleAPI": {
		"id": "009741287909610820457:kgn1wetx_au",
		"key": "AIzaSyDWVN1Pht2aXW_vPqYGlc-d47GPZQD0jCs"
	},
	"bender": {
		"songs": [
			{
				"src": "http://www.gotfuturama.com/Multimedia/MP3Sounds/froggy.mp3",
				"time": 12
			},
			{
				"src": "http://www.gotfuturama.com/Multimedia/MP3Sounds/blasting%20all%20the%20humans.mp3",
				"time": 26
			}
		]
	}
};

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "page"
    }
  }, [_vm._m(0), _vm._v(" "), _c('audio', {
    ref: "audio"
  }, [_c('source', {
    attrs: {
      "type": "audio/mpeg"
    }
  }), _vm._v("\n    Your browser does not support the audio tag.\n  ")]), _vm._v(" "), _c('div', {
    class: _vm.animation,
    attrs: {
      "id": "bender"
    }
  }, [(_vm.image || _vm.text) ? _c('p', {
    staticClass: "bubble"
  }, [(!_vm.image) ? _c('span', [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._v(" "), (_vm.image) ? _c('img', {
    attrs: {
      "src": _vm.image.url
    }
  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "help"
    }
  }, [_c('h2', [_vm._v("Available commands:")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Hello")]), _vm._v(" "), _c('li', [_vm._v("Dance")]), _vm._v(" "), _c('li', [_vm._v("Say <something>")]), _vm._v(" "), _c('li', [_vm._v("Show <something>")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "left",
    attrs: {
      "id": "foot"
    }
  }, [_c('div', {
    attrs: {
      "id": "f1"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "f2"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "first",
    attrs: {
      "id": "leg1"
    }
  }, [_c('div', {
    staticClass: "next1",
    attrs: {
      "id": "leg1"
    }
  }, [_c('div', {
    staticClass: "next1",
    attrs: {
      "id": "leg1"
    }
  }, [_c('div', {
    staticClass: "next1",
    attrs: {
      "id": "leg1"
    }
  }, [_c('div', {
    staticClass: "next1",
    attrs: {
      "id": "leg1"
    }
  })])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right",
    attrs: {
      "id": "foot"
    }
  }, [_c('div', {
    attrs: {
      "id": "f1"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "f2"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "first",
    attrs: {
      "id": "leg2"
    }
  }, [_c('div', {
    staticClass: "next2",
    attrs: {
      "id": "leg2"
    }
  }, [_c('div', {
    staticClass: "next2",
    attrs: {
      "id": "leg2"
    }
  }, [_c('div', {
    staticClass: "next2",
    attrs: {
      "id": "leg2"
    }
  }, [_c('div', {
    staticClass: "next2",
    attrs: {
      "id": "leg2"
    }
  })])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "body"
    }
  }, [_c('div', {
    attrs: {
      "id": "b1"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "b2"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "b3"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "head"
    }
  }, [_c('div', {
    attrs: {
      "id": "h1"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "h2"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "h3"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "h4"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "h5"
    }
  }, [_c('span')]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "eyes"
    }
  }, [_c('div', {
    attrs: {
      "id": "e"
    }
  }, [_c('div', {
    attrs: {
      "id": "e1"
    }
  }, [_c('div', {
    attrs: {
      "id": "eye"
    }
  }), _vm._v(" "), _c('span')]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "e2"
    }
  }, [_c('div', {
    attrs: {
      "id": "eye"
    }
  }), _vm._v(" "), _c('span')])])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "mouth"
    }
  }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('div', {
    attrs: {
      "id": "m1"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "m2"
    }
  })])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "b4"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "b5"
    }
  }, [_c('div', {
    attrs: {
      "id": "b51"
    }
  }, [_c('div', {
    attrs: {
      "id": "b51"
    }
  }, [_c('div', {
    attrs: {
      "id": "b51"
    }
  }, [_c('div', {
    attrs: {
      "id": "b51"
    }
  }, [_c('div', {
    attrs: {
      "id": "ab"
    }
  }, [_c('div', {
    attrs: {
      "id": "a1"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "a2"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "a31",
    attrs: {
      "id": "a3"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "a32",
    attrs: {
      "id": "a3"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "a33",
    attrs: {
      "id": "a3"
    }
  })])])])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "b6"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "b7"
    }
  }, [_c('div', {
    attrs: {
      "id": "b71"
    }
  }, [_c('div', {
    attrs: {
      "id": "b71"
    }
  }, [_c('div', {
    attrs: {
      "id": "b71"
    }
  }, [_c('div', {
    attrs: {
      "id": "b71"
    }
  }, [_c('div', {
    attrs: {
      "id": "ac"
    }
  }, [_c('div', {
    attrs: {
      "id": "a1"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "a2"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "a31",
    attrs: {
      "id": "a3"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "a32",
    attrs: {
      "id": "a3"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "a33",
    attrs: {
      "id": "a3"
    }
  })])])])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "b8"
    }
  }, [_c('span')]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "b9"
    }
  })])
}]}

/***/ })

},[28]);