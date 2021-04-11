// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/data/gallery-items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
  description: 'Hokkaido Flower'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
  description: 'Container Haulage Freight'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
  description: 'Aerial Beach View'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
  description: 'Flower Blooms'
}, {
  preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
  description: 'Alpine Mountains'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
  description: 'Mountain Lake Sailing'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
  description: 'Alpine Spring Meadows'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
  description: 'Nature Landscape'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
  description: 'Lighthouse Coast Sea'
}];
exports.default = _default;
},{}],"js/gallery_container.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImagesItemMarkup = createImagesItemMarkup;

/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */
// CREATE GALLERY ITEMS
function createImagesItemMarkup(obj) {
  return obj.map(function (image) {
    var galleryItem = createItemList();
    var galleryItemLink = createItemLink(image.original);
    var galleryItemImage = createItemImage(image);
    galleryItemLink.append(galleryItemImage);
    galleryItem.append(galleryItemLink); // console.log(galleryItem);

    return galleryItem;
  });
}

function createItemList() {
  var galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');
  return galleryItem;
}

function createItemLink(attrHref) {
  var galleryItemLink = document.createElement('a');
  galleryItemLink.classList.add('gallery__link');
  galleryItemLink.setAttribute('href', attrHref);
  return galleryItemLink;
}

function createItemImage(obj) {
  var galleryItemImage = document.createElement('img');
  galleryItemImage.classList.add('gallery__image');
  galleryItemImage.setAttribute('src', obj.preview);
  galleryItemImage.setAttribute('data-source', obj.original);
  galleryItemImage.setAttribute('alt', obj.description);
  return galleryItemImage;
}
},{}],"js/elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightBoxOverlayEl = exports.lightBoxImageEl = exports.closeButtonEl = exports.galleryLightboxEl = exports.galleryContainerEl = void 0;
// DOCUMENT ELEMENTS
var galleryContainerEl = document.querySelector('.js-gallery');
exports.galleryContainerEl = galleryContainerEl;
var galleryLightboxEl = document.querySelector('.js-lightbox');
exports.galleryLightboxEl = galleryLightboxEl;
var closeButtonEl = document.querySelector('button[data-action="close-lightbox"]');
exports.closeButtonEl = closeButtonEl;
var lightBoxImageEl = document.querySelector('.lightbox__image');
exports.lightBoxImageEl = lightBoxImageEl;
var lightBoxOverlayEl = document.querySelector('.lightbox__overlay');
exports.lightBoxOverlayEl = lightBoxOverlayEl;
},{}],"js/gallery_events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onShowImage = onShowImage;
exports.onCloseModal = onCloseModal;
exports.onLightBoxClick = onLightBoxClick;
exports.onKeyPress = onKeyPress;

var _elements = require("./elements");

// EVENTS FUNCTIONS
function onShowImage(e) {
  var isImageEl = e.target.classList.contains('gallery__image');

  if (!isImageEl) {
    return;
  }

  e.preventDefault();
  var imageEl = e.target;
  var imageSrc = imageEl.dataset.source;

  _elements.galleryLightboxEl.classList.add('is-open');

  _elements.lightBoxImageEl.src = imageSrc;
}

function onCloseModal(e) {
  closeModal();
}

function closeModal() {
  _elements.galleryLightboxEl.classList.remove('is-open');

  _elements.lightBoxImageEl.src = '';
}

function onLightBoxClick(e) {
  console.log(e.currentTarget);
  console.log(e.target);
  closeModal();
} // GET ARRAY ORIGINAL IMAGES


function getArrayImagesSrc(obj) {
  var arrSrc = [];
  obj.forEach(function (image) {
    return arrSrc.push(image.dataset.source);
  });
  return arrSrc;
}

function onKeyPress(e) {
  // console.log(e.code);
  // code: "ArrowRight"
  // code: "ArrowLeft"
  if (e.code != 'Escape' && e.code != 'ArrowRight' && e.code != 'ArrowLeft') {
    return;
  }

  if (e.code === 'Escape') {
    closeModal();
    return;
  }

  if (e.code === 'ArrowRight') {
    if (_elements.galleryLightboxEl.classList.contains('is-open')) {
      var arrImageSrc = getArrayImagesSrc(document.querySelectorAll('.gallery__image'));
      var currentIndexSrc = arrImageSrc.indexOf(_elements.lightBoxImageEl.src);
      var nextIndexSrc = arrImageSrc[currentIndexSrc + 1];

      if (!nextIndexSrc) {
        nextIndexSrc = arrImageSrc[0];
      } // console.log('3 nextIndexSrc: ', nextIndexSrc);


      _elements.lightBoxImageEl.src = '';
      _elements.lightBoxImageEl.src = nextIndexSrc;
      console.log('3: ', _elements.lightBoxImageEl.src);
      return;
    }
  }

  if (e.code === 'ArrowLeft') {
    if (_elements.galleryLightboxEl.classList.contains('is-open')) {
      // console.log('3: ', e.code);
      var _arrImageSrc = getArrayImagesSrc(document.querySelectorAll('.gallery__image'));

      var _currentIndexSrc = _arrImageSrc.indexOf(_elements.lightBoxImageEl.src);

      var _nextIndexSrc = _arrImageSrc[_currentIndexSrc - 1];

      if (!_nextIndexSrc) {
        _nextIndexSrc = _arrImageSrc[_arrImageSrc.length - 1];
      }

      _elements.lightBoxImageEl.src = '';
      _elements.lightBoxImageEl.src = _nextIndexSrc;
      console.log('3: ', _elements.lightBoxImageEl.src);
      return;
    }
  }
}
},{"./elements":"js/elements.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _galleryItems = _interopRequireDefault(require("./data/gallery-items.js"));

var _gallery_container = require("./gallery_container");

var _elements = require("./elements");

var _gallery_events = require("./gallery_events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// CREATE GALLERY ITEMS
var galleryBody = (0, _gallery_container.createImagesItemMarkup)(_galleryItems.default);

_elements.galleryContainerEl.append.apply(_elements.galleryContainerEl, _toConsumableArray(galleryBody)); // EVENTS


_elements.galleryContainerEl.addEventListener('click', _gallery_events.onShowImage);

_elements.closeButtonEl.addEventListener('click', _gallery_events.onCloseModal);

_elements.lightBoxOverlayEl.addEventListener('click', _gallery_events.onLightBoxClick);

window.addEventListener('keydown', _gallery_events.onKeyPress);
},{"./data/gallery-items.js":"js/data/gallery-items.js","./gallery_container":"js/gallery_container.js","./elements":"js/elements.js","./gallery_events":"js/gallery_events.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45809" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map