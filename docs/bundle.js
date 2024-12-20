(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../paths.json
  var require_paths = __commonJS({
    "../paths.json"(exports, module) {
    }
  });

  // ../index.js
  var require_material_design_icons_svg = __commonJS({
    "../index.js"(exports, module) {
      module.exports = function icons2(paths2, prefix) {
        function initialize(host, names) {
          if (typeof host === "undefined") throw new Error("A host-dom element is required. Initialize is only supported in browsers.");
          var doc = host.ownerDocument;
          var div = doc.createElement("div");
          div.innerHTML = getSymbols(names);
          host.appendChild(div.firstChild);
        }
        function getSVG(name, attributes) {
          if (typeof paths2[name] !== "string") return;
          var path = paths2[name];
          return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"' + (attributes || "") + ">" + getPath(path) + "</svg>";
        }
        function getSymbols(names) {
          if (!names) names = Object.keys(paths2);
          var symbols = names.map(function(name) {
            return toSymbol(name, paths2[name], prefix);
          }).filter(Boolean);
          return '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">' + symbols.join("") + "</svg>";
        }
        function getIcon(name, attributes) {
          if (!paths2[name]) return;
          var id = prefix ? prefix + "-" + name : name;
          return "<svg " + (attributes || "") + '><use xlink:href="#' + id + '" /></svg>';
        }
        return {
          initialize,
          getSVG,
          getSymbols,
          getIcon
        };
      };
      function getPath(path) {
        path = path.trim();
        if (/^<svg/.test(path)) return path;
        if (/^<path/.test(path)) return path;
        return '<path d="' + path + '" />';
      }
      function toSymbol(name, path, prefix) {
        if (!path) return;
        var id = prefix ? prefix + "-" + name : name;
        return '<symbol id="' + id + '" viewBox="0 0 24 24"><title>' + name + "</title>" + getPath(path) + "</symbol>";
      }
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/now.js
  var require_now = __commonJS({
    "node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "node_modules/lodash/debounce.js"(exports, module) {
      var isObject = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce2;
    }
  });

  // node_modules/simple-text-search/index.js
  var require_simple_text_search = __commonJS({
    "node_modules/simple-text-search/index.js"(exports, module) {
      module.exports = prepareSimpleTextSearch;
      function prepareSimpleTextSearch(collection, property) {
        let cachedPrunedElements;
        function prunedElements() {
          const elements2 = [];
          for (const elem of collection) {
            let val = elem;
            if (typeof property === "string") val = val && val[property];
            else if (typeof property === "function") val = val && property(val);
            if (typeof val === "object") val = JSON.stringify(val);
            else if (typeof val !== "string") continue;
            val = { pruned: clean(val), elem };
            elements2.push(val);
          }
          cachedPrunedElements = elements2;
          return cachedPrunedElements;
        }
        return function simpleTextSearch(q) {
          if (!collection || !q) return collection;
          const tokens = clean(q).split(/\W/);
          const result = [];
          entries: for (const { pruned, elem } of cachedPrunedElements || prunedElements()) {
            let i = tokens.length;
            while (i--) if (pruned.indexOf(tokens[i]) === -1) continue entries;
            result.push(elem);
          }
          return result;
        };
      }
      var specialCharMap = {
        \u00E4\u00E0\u00E1\u00E2\u00E4\u00E6\u00E3\u00E5\u0101: "a",
        \u00E7\u0107\u010D: "c",
        \u0111\u00F0: "d",
        \u00E8\u00E9\u00EA\u00EB\u0113\u0117\u0119: "e",
        \u00EE\u00EF\u00ED\u012B\u012F\u00EC: "i",
        \u0142: "l",
        \u00F1\u0144\u0148: "n",
        \u00F4\u00F6\u00F2\u00F3\u0153\u00F8\u014D\u00F5: "o",
        \u0159: "r",
        \u015B\u0161: "s",
        \u00DF: "ss",
        \u0165: "t",
        \u00FB\u00FC\u00F9\u00FA\u016B\u016F: "u",
        \u00FF\u00FD: "y",
        \u017E\u017C\u017B\u017A: "z"
      };
      var charMap = {};
      for (const keys of Object.keys(specialCharMap)) {
        for (const char of keys) {
          charMap[char] = specialCharMap[keys];
        }
      }
      var toReplace = new RegExp("[" + Object.keys(charMap).join("") + "]|\\W+", "g");
      function replacer(char) {
        return charMap[char] || " ";
      }
      function clean(str) {
        return String(str).toLowerCase().replace(toReplace, replacer).trim();
      }
    }
  });

  // index.js
  var paths = require_paths();
  var iconNames = Object.keys(paths);
  var icons = require_material_design_icons_svg()(paths, "vendor-prefix");
  var debounce = require_debounce();
  function toIcon(name) {
    const el = document.createElement("div");
    el.innerHTML = `<div class="icon show" name="${name}">
      ${icons.getIcon(name, `title="${name}"`)}
      <p>${name}</p>
    </div>
  `;
    return el.firstChild;
  }
  var elements = [];
  var withName = [];
  for (const iconName in paths) {
    withName.push({
      name: iconName,
      element: elements[elements.push(toIcon(iconName)) - 1]
    });
  }
  function attach() {
    const search = document.createElement("div");
    search.className = "panel";
    search.innerHTML = '<input class="search" type="text" placeholder="Search for some icons...">';
    const wrapper = document.createElement("div");
    wrapper.className = "icons";
    wrapper.innerHTML = icons.getSymbols();
    document.body.append(search, wrapper);
    wrapper.append(...elements);
    const iconSearch = require_simple_text_search()(withName, "name");
    search.querySelector("input").addEventListener("keyup", debounce(function debouncedKeyUp(evt) {
      if (!evt.target.value) {
        for (const element of elements) element.classList.add("show");
      } else {
        for (const element of elements) element.classList.remove("show");
        for (const entry of iconSearch(evt.target.value)) entry.element.classList.add("show");
      }
    }, 300, { maxWait: 600 }));
  }
  if (typeof window !== "undefined") {
    if (window.document && window.document.body) attach();
    window.document.addEventListener("DOMContentLoaded", attach);
  }
})();