/* LetsForm react v0.12.15 - UMD */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["lets-form/react"] = {}, global.React$1));
})(this, (function (exports, React$1) { 'use strict';

  function _AsyncGenerator(gen) {
    var front, back;
    function resume(key, arg) {
      try {
        var result = gen[key](arg),
          value = result.value,
          overloaded = value instanceof _OverloadYield;
        Promise.resolve(overloaded ? value.v : value).then(function (arg) {
          if (overloaded) {
            var nextKey = "return" === key ? "return" : "next";
            if (!value.k || arg.done) return resume(nextKey, arg);
            arg = gen[nextKey](arg).value;
          }
          settle(result.done ? "return" : "normal", arg);
        }, function (err) {
          resume("throw", err);
        });
      } catch (err) {
        settle("throw", err);
      }
    }
    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: !0
          });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({
            value: value,
            done: !1
          });
      }
      (front = front.next) ? resume(front.key, front.arg) : back = null;
    }
    this._invoke = function (key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };
        back ? back = back.next = request : (front = back = request, resume(key, arg));
      });
    }, "function" != typeof gen.return && (this.return = void 0);
  }
  _AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
    return this;
  }, _AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  }, _AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  }, _AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };
  function _OverloadYield(value, kind) {
    this.v = value, this.k = kind;
  }
  function _asyncIterator(iterable) {
    var method,
      async,
      sync,
      retry = 2;
    for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) {
      if (async && null != (method = iterable[async])) return method.call(iterable);
      if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
      async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
  }
  function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
      if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
      var done = r.done;
      return Promise.resolve(r.value).then(function (value) {
        return {
          value: value,
          done: done
        };
      });
    }
    return AsyncFromSyncIterator = function (s) {
      this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
      s: null,
      n: null,
      next: function () {
        return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
      },
      return: function (value) {
        var ret = this.s.return;
        return void 0 === ret ? Promise.resolve({
          value: value,
          done: !0
        }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
      },
      throw: function (value) {
        var thr = this.s.return;
        return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
      }
    }, new AsyncFromSyncIterator(s);
  }
  function _awaitAsyncGenerator(value) {
    return new _OverloadYield(value, 0);
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _wrapAsyncGenerator(fn) {
    return function () {
      return new _AsyncGenerator(fn.apply(this, arguments));
    };
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */

  function arrayMap$2(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var _arrayMap = arrayMap$2;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */

  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }
  var _listCacheClear = listCacheClear$1;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */

  function eq$2(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_1 = eq$2;

  var eq$1 = eq_1;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf$4(array, key) {
    var length = array.length;
    while (length--) {
      if (eq$1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var _assocIndexOf = assocIndexOf$4;

  var assocIndexOf$3 = _assocIndexOf;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete$1(key) {
    var data = this.__data__,
      index = assocIndexOf$3(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var _listCacheDelete = listCacheDelete$1;

  var assocIndexOf$2 = _assocIndexOf;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet$1(key) {
    var data = this.__data__,
      index = assocIndexOf$2(data, key);
    return index < 0 ? undefined : data[index][1];
  }
  var _listCacheGet = listCacheGet$1;

  var assocIndexOf$1 = _assocIndexOf;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }
  var _listCacheHas = listCacheHas$1;

  var assocIndexOf = _assocIndexOf;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet$1(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var _listCacheSet = listCacheSet$1;

  var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache$4(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache$4.prototype.clear = listCacheClear;
  ListCache$4.prototype['delete'] = listCacheDelete;
  ListCache$4.prototype.get = listCacheGet;
  ListCache$4.prototype.has = listCacheHas;
  ListCache$4.prototype.set = listCacheSet;
  var _ListCache = ListCache$4;

  var ListCache$3 = _ListCache;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear$1() {
    this.__data__ = new ListCache$3();
    this.size = 0;
  }
  var _stackClear = stackClear$1;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function stackDelete$1(key) {
    var data = this.__data__,
      result = data['delete'](key);
    this.size = data.size;
    return result;
  }
  var _stackDelete = stackDelete$1;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function stackGet$1(key) {
    return this.__data__.get(key);
  }
  var _stackGet = stackGet$1;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function stackHas$1(key) {
    return this.__data__.has(key);
  }
  var _stackHas = stackHas$1;

  /** Detect free variable `global` from Node.js. */

  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;

  var freeGlobal = _freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$8 = freeGlobal || freeSelf || Function('return this')();
  var _root = root$8;

  var root$7 = _root;

  /** Built-in value references. */
  var Symbol$6 = root$7.Symbol;
  var _Symbol = Symbol$6;

  var Symbol$5 = _Symbol;

  /** Used for built-in method references. */
  var objectProto$e = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$b = objectProto$e.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$e.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$b.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;

  /** Used for built-in method references. */

  var objectProto$d = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$d.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;

  var Symbol$4 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag$a(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var _baseGetTag = baseGetTag$a;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */

  function isObject$7(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }
  var isObject_1 = isObject$7;

  var _isObject = /*@__PURE__*/getDefaultExportFromCjs(isObject_1);

  var baseGetTag$9 = _baseGetTag,
    isObject$6 = isObject_1;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$3(value) {
    if (!isObject$6(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag$9(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_1 = isFunction$3;

  var _isFunction = /*@__PURE__*/getDefaultExportFromCjs(isFunction_1);

  var root$6 = _root;

  /** Used to detect overreaching core-js shims. */
  var coreJsData$1 = root$6['__core-js_shared__'];
  var _coreJsData = coreJsData$1;

  var coreJsData = _coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var _isMasked = isMasked$1;

  /** Used for built-in method references. */

  var funcProto$2 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$2.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }
  var _toSource = toSource$2;

  var isFunction$2 = isFunction_1,
    isMasked = _isMasked,
    isObject$5 = isObject_1,
    toSource$1 = _toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
    objectProto$c = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$c.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$a).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative$1(value) {
    if (!isObject$5(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }
  var _baseIsNative = baseIsNative$1;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */

  function getValue$1(object, key) {
    return object == null ? undefined : object[key];
  }
  var _getValue = getValue$1;

  var baseIsNative = _baseIsNative,
    getValue = _getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative$7(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }
  var _getNative = getNative$7;

  var getNative$6 = _getNative,
    root$5 = _root;

  /* Built-in method references that are verified to be native. */
  var Map$3 = getNative$6(root$5, 'Map');
  var _Map = Map$3;

  var getNative$5 = _getNative;

  /* Built-in method references that are verified to be native. */
  var nativeCreate$4 = getNative$5(Object, 'create');
  var _nativeCreate = nativeCreate$4;

  var nativeCreate$3 = _nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }
  var _hashClear = hashClear$1;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var _hashDelete = hashDelete$1;

  var nativeCreate$2 = _nativeCreate;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$b = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? undefined : result;
    }
    return hasOwnProperty$9.call(data, key) ? data[key] : undefined;
  }
  var _hashGet = hashGet$1;

  var nativeCreate$1 = _nativeCreate;

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== undefined : hasOwnProperty$8.call(data, key);
  }
  var _hashHas = hashHas$1;

  var nativeCreate = _nativeCreate;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet$1(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
    return this;
  }
  var _hashSet = hashSet$1;

  var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash$1(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype['delete'] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;
  var _Hash = Hash$1;

  var Hash = _Hash,
    ListCache$2 = _ListCache,
    Map$2 = _Map;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map$2 || ListCache$2)(),
      'string': new Hash()
    };
  }
  var _mapCacheClear = mapCacheClear$1;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */

  function isKeyable$1(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }
  var _isKeyable = isKeyable$1;

  var isKeyable = _isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData$4(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }
  var _getMapData = getMapData$4;

  var getMapData$3 = _getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var _mapCacheDelete = mapCacheDelete$1;

  var getMapData$2 = _getMapData;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
  }
  var _mapCacheGet = mapCacheGet$1;

  var getMapData$1 = _getMapData;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }
  var _mapCacheHas = mapCacheHas$1;

  var getMapData = _getMapData;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet$1(key, value) {
    var data = getMapData(this, key),
      size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var _mapCacheSet = mapCacheSet$1;

  var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache$3(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache$3.prototype.clear = mapCacheClear;
  MapCache$3.prototype['delete'] = mapCacheDelete;
  MapCache$3.prototype.get = mapCacheGet;
  MapCache$3.prototype.has = mapCacheHas;
  MapCache$3.prototype.set = mapCacheSet;
  var _MapCache = MapCache$3;

  var ListCache$1 = _ListCache,
    Map$1 = _Map,
    MapCache$2 = _MapCache;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE$1 = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet$1(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache$1) {
      var pairs = data.__data__;
      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache$2(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var _stackSet = stackSet$1;

  var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack$1(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack$1.prototype.clear = stackClear;
  Stack$1.prototype['delete'] = stackDelete;
  Stack$1.prototype.get = stackGet;
  Stack$1.prototype.has = stackHas;
  Stack$1.prototype.set = stackSet;
  var _Stack = Stack$1;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */

  function arrayEach$1(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  var _arrayEach = arrayEach$1;

  var getNative$4 = _getNative;
  var defineProperty$2 = function () {
    try {
      var func = getNative$4(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }();
  var _defineProperty = defineProperty$2;

  var defineProperty$1 = _defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue$2(object, key, value) {
    if (key == '__proto__' && defineProperty$1) {
      defineProperty$1(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }
  var _baseAssignValue = baseAssignValue$2;

  var baseAssignValue$1 = _baseAssignValue,
    eq = eq_1;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue$3(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$7.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      baseAssignValue$1(object, key, value);
    }
  }
  var _assignValue = assignValue$3;

  var assignValue$2 = _assignValue,
    baseAssignValue = _baseAssignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject$5(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1,
      length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue$2(object, key, newValue);
      }
    }
    return object;
  }
  var _copyObject = copyObject$5;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */

  function baseTimes$1(n, iteratee) {
    var index = -1,
      result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var _baseTimes = baseTimes$1;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */

  function isObjectLike$b(value) {
    return value != null && typeof value == 'object';
  }
  var isObjectLike_1 = isObjectLike$b;

  var baseGetTag$8 = _baseGetTag,
    isObjectLike$a = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments$1(value) {
    return isObjectLike$a(value) && baseGetTag$8(value) == argsTag$2;
  }
  var _baseIsArguments = baseIsArguments$1;

  var baseIsArguments = _baseIsArguments,
    isObjectLike$9 = isObjectLike_1;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$8.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments$4 = baseIsArguments(function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
    return isObjectLike$9(value) && hasOwnProperty$6.call(value, 'callee') && !propertyIsEnumerable$1.call(value, 'callee');
  };
  var isArguments_1 = isArguments$4;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */

  var isArray$b = Array.isArray;
  var isArray_1 = isArray$b;

  var _isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray_1);

  var isBuffer$3 = {exports: {}};

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false;
  }
  var stubFalse_1 = stubFalse;

  isBuffer$3.exports;

  (function (module, exports) {
  	var root = _root,
  	  stubFalse = stubFalse_1;

  	/** Detect free variable `exports`. */
  	var freeExports = exports && !exports.nodeType && exports;

  	/** Detect free variable `module`. */
  	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  	/** Detect the popular CommonJS extension `module.exports`. */
  	var moduleExports = freeModule && freeModule.exports === freeExports;

  	/** Built-in value references. */
  	var Buffer = moduleExports ? root.Buffer : undefined;

  	/* Built-in method references for those with the same name as other `lodash` methods. */
  	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  	/**
  	 * Checks if `value` is a buffer.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 4.3.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
  	 * @example
  	 *
  	 * _.isBuffer(new Buffer(2));
  	 * // => true
  	 *
  	 * _.isBuffer(new Uint8Array(2));
  	 * // => false
  	 */
  	var isBuffer = nativeIsBuffer || stubFalse;
  	module.exports = isBuffer; 
  } (isBuffer$3, isBuffer$3.exports));

  var isBufferExports = isBuffer$3.exports;

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex$3(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }
  var _isIndex = isIndex$3;

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength$3(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var isLength_1 = isLength$3;

  var baseGetTag$7 = _baseGetTag,
    isLength$2 = isLength_1,
    isObjectLike$8 = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$3 = '[object Boolean]',
    dateTag$3 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$5 = '[object Map]',
    numberTag$3 = '[object Number]',
    objectTag$3 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$5 = '[object Set]',
    stringTag$3 = '[object String]',
    weakMapTag$2 = '[object WeakMap]';
  var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray$1(value) {
    return isObjectLike$8(value) && isLength$2(value.length) && !!typedArrayTags[baseGetTag$7(value)];
  }
  var _baseIsTypedArray = baseIsTypedArray$1;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */

  function baseUnary$4(func) {
    return function (value) {
      return func(value);
    };
  }
  var _baseUnary = baseUnary$4;

  var _nodeUtil = {exports: {}};

  _nodeUtil.exports;

  (function (module, exports) {
  	var freeGlobal = _freeGlobal;

  	/** Detect free variable `exports`. */
  	var freeExports = exports && !exports.nodeType && exports;

  	/** Detect free variable `module`. */
  	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  	/** Detect the popular CommonJS extension `module.exports`. */
  	var moduleExports = freeModule && freeModule.exports === freeExports;

  	/** Detect free variable `process` from Node.js. */
  	var freeProcess = moduleExports && freeGlobal.process;

  	/** Used to access faster Node.js helpers. */
  	var nodeUtil = function () {
  	  try {
  	    // Use `util.types` for Node.js 10+.
  	    var types = freeModule && freeModule.require && freeModule.require('util').types;
  	    if (types) {
  	      return types;
  	    }

  	    // Legacy `process.binding('util')` for Node.js < 10.
  	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  	  } catch (e) {}
  	}();
  	module.exports = nodeUtil; 
  } (_nodeUtil, _nodeUtil.exports));

  var _nodeUtilExports = _nodeUtil.exports;

  var baseIsTypedArray = _baseIsTypedArray,
    baseUnary$3 = _baseUnary,
    nodeUtil$3 = _nodeUtilExports;

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil$3 && nodeUtil$3.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray$2 = nodeIsTypedArray ? baseUnary$3(nodeIsTypedArray) : baseIsTypedArray;
  var isTypedArray_1 = isTypedArray$2;

  var baseTimes = _baseTimes,
    isArguments$3 = isArguments_1,
    isArray$a = isArray_1,
    isBuffer$2 = isBufferExports,
    isIndex$2 = _isIndex,
    isTypedArray$1 = isTypedArray_1;

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$a(value),
      isArg = !isArr && isArguments$3(value),
      isBuff = !isArr && !isArg && isBuffer$2(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$5.call(value, key)) && !(skipIndexes && (
      // Safari 9 has enumerable `arguments.length` in strict mode.
      key == 'length' ||
      // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == 'offset' || key == 'parent') ||
      // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
      // Skip index properties.
      isIndex$2(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var _arrayLikeKeys = arrayLikeKeys$2;

  /** Used for built-in method references. */

  var objectProto$6 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype$4(value) {
    var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$6;
    return value === proto;
  }
  var _isPrototype = isPrototype$4;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */

  function overArg$2(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }
  var _overArg = overArg$2;

  var overArg$1 = _overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys$1 = overArg$1(Object.keys, Object);
  var _nativeKeys = nativeKeys$1;

  var isPrototype$3 = _isPrototype,
    nativeKeys = _nativeKeys;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys$2(object) {
    if (!isPrototype$3(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$4.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeys = baseKeys$2;

  var isFunction$1 = isFunction_1,
    isLength$1 = isLength_1;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike$3(value) {
    return value != null && isLength$1(value.length) && !isFunction$1(value);
  }
  var isArrayLike_1 = isArrayLike$3;

  var arrayLikeKeys$1 = _arrayLikeKeys,
    baseKeys$1 = _baseKeys,
    isArrayLike$2 = isArrayLike_1;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys$3(object) {
    return isArrayLike$2(object) ? arrayLikeKeys$1(object) : baseKeys$1(object);
  }
  var keys_1 = keys$3;

  var _keys = /*@__PURE__*/getDefaultExportFromCjs(keys_1);

  var copyObject$4 = _copyObject,
    keys$2 = keys_1;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign$1(object, source) {
    return object && copyObject$4(source, keys$2(source), object);
  }
  var _baseAssign = baseAssign$1;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var _nativeKeysIn = nativeKeysIn$1;

  var isObject$4 = isObject_1,
    isPrototype$2 = _isPrototype,
    nativeKeysIn = _nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn$1(object) {
    if (!isObject$4(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype$2(object),
      result = [];
    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$3.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeysIn = baseKeysIn$1;

  var arrayLikeKeys = _arrayLikeKeys,
    baseKeysIn = _baseKeysIn,
    isArrayLike$1 = isArrayLike_1;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn$3(object) {
    return isArrayLike$1(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var keysIn_1 = keysIn$3;

  var copyObject$3 = _copyObject,
    keysIn$2 = keysIn_1;

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn$1(object, source) {
    return object && copyObject$3(source, keysIn$2(source), object);
  }
  var _baseAssignIn = baseAssignIn$1;

  var _cloneBuffer = {exports: {}};

  _cloneBuffer.exports;

  (function (module, exports) {
  	var root = _root;

  	/** Detect free variable `exports`. */
  	var freeExports = exports && !exports.nodeType && exports;

  	/** Detect free variable `module`. */
  	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  	/** Detect the popular CommonJS extension `module.exports`. */
  	var moduleExports = freeModule && freeModule.exports === freeExports;

  	/** Built-in value references. */
  	var Buffer = moduleExports ? root.Buffer : undefined,
  	  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  	/**
  	 * Creates a clone of  `buffer`.
  	 *
  	 * @private
  	 * @param {Buffer} buffer The buffer to clone.
  	 * @param {boolean} [isDeep] Specify a deep clone.
  	 * @returns {Buffer} Returns the cloned buffer.
  	 */
  	function cloneBuffer(buffer, isDeep) {
  	  if (isDeep) {
  	    return buffer.slice();
  	  }
  	  var length = buffer.length,
  	    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  	  buffer.copy(result);
  	  return result;
  	}
  	module.exports = cloneBuffer; 
  } (_cloneBuffer, _cloneBuffer.exports));

  var _cloneBufferExports = _cloneBuffer.exports;

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */

  function copyArray$1(source, array) {
    var index = -1,
      length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  var _copyArray = copyArray$1;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */

  function arrayFilter$1(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var _arrayFilter = arrayFilter$1;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */

  function stubArray$2() {
    return [];
  }
  var stubArray_1 = stubArray$2;

  var arrayFilter = _arrayFilter,
    stubArray$1 = stubArray_1;

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function (object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols$1(object), function (symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var _getSymbols = getSymbols$3;

  var copyObject$2 = _copyObject,
    getSymbols$2 = _getSymbols;

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols$1(source, object) {
    return copyObject$2(source, getSymbols$2(source), object);
  }
  var _copySymbols = copySymbols$1;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */

  function arrayPush$3(array, values) {
    var index = -1,
      length = values.length,
      offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  var _arrayPush = arrayPush$3;

  var overArg = _overArg;

  /** Built-in value references. */
  var getPrototype$3 = overArg(Object.getPrototypeOf, Object);
  var _getPrototype = getPrototype$3;

  var arrayPush$2 = _arrayPush,
    getPrototype$2 = _getPrototype,
    getSymbols$1 = _getSymbols,
    stubArray = stubArray_1;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function (object) {
    var result = [];
    while (object) {
      arrayPush$2(result, getSymbols$1(object));
      object = getPrototype$2(object);
    }
    return result;
  };
  var _getSymbolsIn = getSymbolsIn$2;

  var copyObject$1 = _copyObject,
    getSymbolsIn$1 = _getSymbolsIn;

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn$1(source, object) {
    return copyObject$1(source, getSymbolsIn$1(source), object);
  }
  var _copySymbolsIn = copySymbolsIn$1;

  var arrayPush$1 = _arrayPush,
    isArray$9 = isArray_1;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$9(object) ? result : arrayPush$1(result, symbolsFunc(object));
  }
  var _baseGetAllKeys = baseGetAllKeys$2;

  var baseGetAllKeys$1 = _baseGetAllKeys,
    getSymbols = _getSymbols,
    keys$1 = keys_1;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys$1(object) {
    return baseGetAllKeys$1(object, keys$1, getSymbols);
  }
  var _getAllKeys = getAllKeys$1;

  var baseGetAllKeys = _baseGetAllKeys,
    getSymbolsIn = _getSymbolsIn,
    keysIn$1 = keysIn_1;

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn$2(object) {
    return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
  }
  var _getAllKeysIn = getAllKeysIn$2;

  var getNative$3 = _getNative,
    root$4 = _root;

  /* Built-in method references that are verified to be native. */
  var DataView$1 = getNative$3(root$4, 'DataView');
  var _DataView = DataView$1;

  var getNative$2 = _getNative,
    root$3 = _root;

  /* Built-in method references that are verified to be native. */
  var Promise$2 = getNative$2(root$3, 'Promise');
  var _Promise = Promise$2;

  var getNative$1 = _getNative,
    root$2 = _root;

  /* Built-in method references that are verified to be native. */
  var Set$3 = getNative$1(root$2, 'Set');
  var _Set = Set$3;

  var getNative = _getNative,
    root$1 = _root;

  /* Built-in method references that are verified to be native. */
  var WeakMap$1 = getNative(root$1, 'WeakMap');
  var _WeakMap = WeakMap$1;

  var DataView = _DataView,
    Map = _Map,
    Promise$1 = _Promise,
    Set$2 = _Set,
    WeakMap = _WeakMap,
    baseGetTag$6 = _baseGetTag,
    toSource = _toSource;

  /** `Object#toString` result references. */
  var mapTag$4 = '[object Map]',
    objectTag$2 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$4 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';
  var dataViewTag$2 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$2),
    weakMapCtorString = toSource(WeakMap);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag$4 = baseGetTag$6;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if (DataView && getTag$4(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag$4(new Map()) != mapTag$4 || Promise$1 && getTag$4(Promise$1.resolve()) != promiseTag || Set$2 && getTag$4(new Set$2()) != setTag$4 || WeakMap && getTag$4(new WeakMap()) != weakMapTag$1) {
    getTag$4 = function (value) {
      var result = baseGetTag$6(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2;
          case mapCtorString:
            return mapTag$4;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag$4;
          case weakMapCtorString:
            return weakMapTag$1;
        }
      }
      return result;
    };
  }
  var _getTag = getTag$4;

  /** Used for built-in method references. */

  var objectProto$2 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray$1(array) {
    var length = array.length,
      result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty$2.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  var _initCloneArray = initCloneArray$1;

  var root = _root;

  /** Built-in value references. */
  var Uint8Array$1 = root.Uint8Array;
  var _Uint8Array = Uint8Array$1;

  var Uint8Array = _Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer$3(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  var _cloneArrayBuffer = cloneArrayBuffer$3;

  var cloneArrayBuffer$2 = _cloneArrayBuffer;

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  var _cloneDataView = cloneDataView$1;

  /** Used to match `RegExp` flags from their coerced string values. */

  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp$1(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  var _cloneRegExp = cloneRegExp$1;

  var Symbol$3 = _Symbol;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol$1(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  var _cloneSymbol = cloneSymbol$1;

  var cloneArrayBuffer$1 = _cloneArrayBuffer;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray$1(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  var _cloneTypedArray = cloneTypedArray$1;

  var cloneArrayBuffer = _cloneArrayBuffer,
    cloneDataView = _cloneDataView,
    cloneRegExp = _cloneRegExp,
    cloneSymbol = _cloneSymbol,
    cloneTypedArray = _cloneTypedArray;

  /** `Object#toString` result references. */
  var boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    mapTag$3 = '[object Map]',
    numberTag$2 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$3 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$2 = '[object Symbol]';
  var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag$1(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object);
      case boolTag$2:
      case dateTag$2:
        return new Ctor(+object);
      case dataViewTag$1:
        return cloneDataView(object, isDeep);
      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(object, isDeep);
      case mapTag$3:
        return new Ctor();
      case numberTag$2:
      case stringTag$2:
        return new Ctor(object);
      case regexpTag$1:
        return cloneRegExp(object);
      case setTag$3:
        return new Ctor();
      case symbolTag$2:
        return cloneSymbol(object);
    }
  }
  var _initCloneByTag = initCloneByTag$1;

  var isObject$3 = isObject_1;

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate$1 = function () {
    function object() {}
    return function (proto) {
      if (!isObject$3(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  }();
  var _baseCreate = baseCreate$1;

  var baseCreate = _baseCreate,
    getPrototype$1 = _getPrototype,
    isPrototype$1 = _isPrototype;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject$1(object) {
    return typeof object.constructor == 'function' && !isPrototype$1(object) ? baseCreate(getPrototype$1(object)) : {};
  }
  var _initCloneObject = initCloneObject$1;

  var getTag$3 = _getTag,
    isObjectLike$7 = isObjectLike_1;

  /** `Object#toString` result references. */
  var mapTag$2 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap$1(value) {
    return isObjectLike$7(value) && getTag$3(value) == mapTag$2;
  }
  var _baseIsMap = baseIsMap$1;

  var baseIsMap = _baseIsMap,
    baseUnary$2 = _baseUnary,
    nodeUtil$2 = _nodeUtilExports;

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil$2 && nodeUtil$2.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap$1 = nodeIsMap ? baseUnary$2(nodeIsMap) : baseIsMap;
  var isMap_1 = isMap$1;

  var getTag$2 = _getTag,
    isObjectLike$6 = isObjectLike_1;

  /** `Object#toString` result references. */
  var setTag$2 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet$1(value) {
    return isObjectLike$6(value) && getTag$2(value) == setTag$2;
  }
  var _baseIsSet = baseIsSet$1;

  var baseIsSet = _baseIsSet,
    baseUnary$1 = _baseUnary,
    nodeUtil$1 = _nodeUtilExports;

  /* Node.js helper references. */
  var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet$1 = nodeIsSet ? baseUnary$1(nodeIsSet) : baseIsSet;
  var isSet_1 = isSet$1;

  var Stack = _Stack,
    arrayEach = _arrayEach,
    assignValue$1 = _assignValue,
    baseAssign = _baseAssign,
    baseAssignIn = _baseAssignIn,
    cloneBuffer = _cloneBufferExports,
    copyArray = _copyArray,
    copySymbols = _copySymbols,
    copySymbolsIn = _copySymbolsIn,
    getAllKeys = _getAllKeys,
    getAllKeysIn$1 = _getAllKeysIn,
    getTag$1 = _getTag,
    initCloneArray = _initCloneArray,
    initCloneByTag = _initCloneByTag,
    initCloneObject = _initCloneObject,
    isArray$8 = isArray_1,
    isBuffer$1 = isBufferExports,
    isMap = isMap_1,
    isObject$2 = isObject_1,
    isSet = isSet_1,
    keys = keys_1,
    keysIn = keysIn_1;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG$1 = 2,
    CLONE_SYMBOLS_FLAG$2 = 4;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone$2(value, bitmask, customizer, key, object, stack) {
    var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG$1,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$2;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject$2(value)) {
      return value;
    }
    var isArr = isArray$8(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag$1(value),
        isFunc = tag == funcTag || tag == genTag;
      if (isBuffer$1(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag$1 || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
      value.forEach(function (subValue) {
        result.add(baseClone$2(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function (subValue, key) {
        result.set(key, baseClone$2(subValue, bitmask, customizer, key, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn$1 : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue$1(result, key, baseClone$2(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }
  var _baseClone = baseClone$2;

  var baseGetTag$5 = _baseGetTag,
    isObjectLike$5 = isObjectLike_1;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol$3(value) {
    return typeof value == 'symbol' || isObjectLike$5(value) && baseGetTag$5(value) == symbolTag;
  }
  var isSymbol_1 = isSymbol$3;

  var isArray$7 = isArray_1,
    isSymbol$2 = isSymbol_1;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey$2(value, object) {
    if (isArray$7(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol$2(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var _isKey = isKey$2;

  var MapCache$1 = _MapCache;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize$1(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function () {
      var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache$1)();
    return memoized;
  }

  // Expose `MapCache`.
  memoize$1.Cache = MapCache$1;
  var memoize_1 = memoize$1;

  var memoize = memoize_1;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped$1(func) {
    var result = memoize(func, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var _memoizeCapped = memoizeCapped$1;

  var memoizeCapped = _memoizeCapped;

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath$2 = memoizeCapped(function (string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function (match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
  });
  var _stringToPath = stringToPath$2;

  var Symbol$2 = _Symbol,
    arrayMap$1 = _arrayMap,
    isArray$6 = isArray_1,
    isSymbol$1 = isSymbol_1;

  /** Used as references for various `Number` constants. */
  var INFINITY$2 = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString$2(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray$6(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap$1(value, baseToString$2) + '';
    }
    if (isSymbol$1(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$2 ? '-0' : result;
  }
  var _baseToString = baseToString$2;

  var baseToString$1 = _baseToString;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString$5(value) {
    return value == null ? '' : baseToString$1(value);
  }
  var toString_1 = toString$5;

  var isArray$5 = isArray_1,
    isKey$1 = _isKey,
    stringToPath$1 = _stringToPath,
    toString$4 = toString_1;

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath$6(value, object) {
    if (isArray$5(value)) {
      return value;
    }
    return isKey$1(value, object) ? [value] : stringToPath$1(toString$4(value));
  }
  var _castPath = castPath$6;

  /**
   * Gets the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of `array`.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   */

  function last$1(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
  }
  var last_1 = last$1;

  var isSymbol = isSymbol_1;

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey$4(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
  }
  var _toKey = toKey$4;

  var castPath$5 = _castPath,
    toKey$3 = _toKey;

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet$3(object, path) {
    path = castPath$5(path, object);
    var index = 0,
      length = path.length;
    while (object != null && index < length) {
      object = object[toKey$3(path[index++])];
    }
    return index && index == length ? object : undefined;
  }
  var _baseGet = baseGet$3;

  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */

  function baseSlice$2(array, start, end) {
    var index = -1,
      length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  var _baseSlice = baseSlice$2;

  var baseGet$2 = _baseGet,
    baseSlice$1 = _baseSlice;

  /**
   * Gets the parent value at `path` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} path The path to get the parent value of.
   * @returns {*} Returns the parent value.
   */
  function parent$1(object, path) {
    return path.length < 2 ? object : baseGet$2(object, baseSlice$1(path, 0, -1));
  }
  var _parent = parent$1;

  var castPath$4 = _castPath,
    last = last_1,
    parent = _parent,
    toKey$2 = _toKey;

  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The property path to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */
  function baseUnset$1(object, path) {
    path = castPath$4(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey$2(last(path))];
  }
  var _baseUnset = baseUnset$1;

  var baseGetTag$4 = _baseGetTag,
    getPrototype = _getPrototype,
    isObjectLike$4 = isObjectLike_1;

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
    objectProto$1 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject$2(value) {
    if (!isObjectLike$4(value) || baseGetTag$4(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isPlainObject_1 = isPlainObject$2;

  var isPlainObject$1 = isPlainObject_1;

  /**
   * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
   * objects.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {string} key The key of the property to inspect.
   * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
   */
  function customOmitClone$1(value) {
    return isPlainObject$1(value) ? undefined : value;
  }
  var _customOmitClone = customOmitClone$1;

  var Symbol$1 = _Symbol,
    isArguments$2 = isArguments_1,
    isArray$4 = isArray_1;

  /** Built-in value references. */
  var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable$1(value) {
    return isArray$4(value) || isArguments$2(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  var _isFlattenable = isFlattenable$1;

  var arrayPush = _arrayPush,
    isFlattenable = _isFlattenable;

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten$1(array, depth, predicate, isStrict, result) {
    var index = -1,
      length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten$1(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  var _baseFlatten = baseFlatten$1;

  var baseFlatten = _baseFlatten;

  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten$1(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }
  var flatten_1 = flatten$1;

  var _flatten = /*@__PURE__*/getDefaultExportFromCjs(flatten_1);

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */

  function apply$1(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var _apply = apply$1;

  var apply = _apply;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest$1(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  var _overRest = overRest$1;

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */

  function constant$1(value) {
    return function () {
      return value;
    };
  }
  var constant_1 = constant$1;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */

  function identity$1(value) {
    return value;
  }
  var identity_1 = identity$1;

  var constant = constant_1,
    defineProperty = _defineProperty,
    identity = identity_1;

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString$1 = !defineProperty ? identity : function (func, string) {
    return defineProperty(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };
  var _baseSetToString = baseSetToString$1;

  /** Used to detect hot functions by number of calls within a span of milliseconds. */

  var HOT_COUNT = 800,
    HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut$1(func) {
    var count = 0,
      lastCalled = 0;
    return function () {
      var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }
  var _shortOut = shortOut$1;

  var baseSetToString = _baseSetToString,
    shortOut = _shortOut;

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString$1 = shortOut(baseSetToString);
  var _setToString = setToString$1;

  var flatten = flatten_1,
    overRest = _overRest,
    setToString = _setToString;

  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  function flatRest$2(func) {
    return setToString(overRest(func, undefined, flatten), func + '');
  }
  var _flatRest = flatRest$2;

  var arrayMap = _arrayMap,
    baseClone$1 = _baseClone,
    baseUnset = _baseUnset,
    castPath$3 = _castPath,
    copyObject = _copyObject,
    customOmitClone = _customOmitClone,
    flatRest$1 = _flatRest,
    getAllKeysIn = _getAllKeysIn;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG$1 = 4;

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable property paths of `object` that are not omitted.
   *
   * **Note:** This method is considerably slower than `_.pick`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to omit.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = flatRest$1(function (object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = arrayMap(paths, function (path) {
      path = castPath$3(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) {
      result = baseClone$1(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG$1, customOmitClone);
    }
    var length = paths.length;
    while (length--) {
      baseUnset(result, paths[length]);
    }
    return result;
  });
  var omit_1 = omit;

  var _omit = /*@__PURE__*/getDefaultExportFromCjs(omit_1);

  var baseKeys = _baseKeys,
    getTag = _getTag,
    isArguments$1 = isArguments_1,
    isArray$3 = isArray_1,
    isArrayLike = isArrayLike_1,
    isBuffer = isBufferExports,
    isPrototype = _isPrototype,
    isTypedArray = isTypedArray_1;

  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
    setTag = '[object Set]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if `value` is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
   * jQuery-like collections are considered empty if they have a `length` of `0`.
   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
  function isEmpty$1(value) {
    if (value == null) {
      return true;
    }
    if (isArrayLike(value) && (isArray$3(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments$1(value))) {
      return !value.length;
    }
    var tag = getTag(value);
    if (tag == mapTag || tag == setTag) {
      return !value.size;
    }
    if (isPrototype(value)) {
      return !baseKeys(value).length;
    }
    for (var key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  }
  var isEmpty_1 = isEmpty$1;

  var _isEmpty = /*@__PURE__*/getDefaultExportFromCjs(isEmpty_1);

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd$1(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  var _setCacheAdd = setCacheAdd$1;

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */

  function setCacheHas$1(value) {
    return this.__data__.has(value);
  }
  var _setCacheHas = setCacheHas$1;

  var MapCache = _MapCache,
    setCacheAdd = _setCacheAdd,
    setCacheHas = _setCacheHas;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache$1(values) {
    var index = -1,
      length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
  SetCache$1.prototype.has = setCacheHas;
  var _SetCache = SetCache$1;

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
    var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  var _baseFindIndex = baseFindIndex$1;

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */

  function baseIsNaN$1(value) {
    return value !== value;
  }
  var _baseIsNaN = baseIsNaN$1;

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function strictIndexOf$1(array, value, fromIndex) {
    var index = fromIndex - 1,
      length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  var _strictIndexOf = strictIndexOf$1;

  var baseFindIndex = _baseFindIndex,
    baseIsNaN = _baseIsNaN,
    strictIndexOf = _strictIndexOf;

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf$3(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var _baseIndexOf = baseIndexOf$3;

  var baseIndexOf$2 = _baseIndexOf;

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes$1(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf$2(array, value, 0) > -1;
  }
  var _arrayIncludes = arrayIncludes$1;

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */

  function arrayIncludesWith$1(array, value, comparator) {
    var index = -1,
      length = array == null ? 0 : array.length;
    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }
  var _arrayIncludesWith = arrayIncludesWith$1;

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function cacheHas$1(cache, key) {
    return cache.has(key);
  }
  var _cacheHas = cacheHas$1;

  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */

  function noop$1() {
    // No operation performed.
  }
  var noop_1 = noop$1;

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */

  function setToArray$2(set) {
    var index = -1,
      result = Array(set.size);
    set.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }
  var _setToArray = setToArray$2;

  var Set$1 = _Set,
    noop = noop_1,
    setToArray$1 = _setToArray;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Creates a set object of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */
  var createSet$1 = !(Set$1 && 1 / setToArray$1(new Set$1([, -0]))[1] == INFINITY) ? noop : function (values) {
    return new Set$1(values);
  };
  var _createSet = createSet$1;

  var SetCache = _SetCache,
    arrayIncludes = _arrayIncludes,
    arrayIncludesWith = _arrayIncludesWith,
    cacheHas = _cacheHas,
    createSet = _createSet,
    setToArray = _setToArray;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseUniq$1(array, iteratee, comparator) {
    var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;
    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith;
    } else if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : createSet(array);
      if (set) {
        return setToArray(set);
      }
      isCommon = false;
      includes = cacheHas;
      seen = new SetCache();
    } else {
      seen = iteratee ? [] : result;
    }
    outer: while (++index < length) {
      var value = array[index],
        computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }
  var _baseUniq = baseUniq$1;

  var baseUniq = _baseUniq;

  /**
   * Creates a duplicate-free version of an array, using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons, in which only the first occurrence of each element
   * is kept. The order of result values is determined by the order they occur
   * in the array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.uniq([2, 1, 2]);
   * // => [2, 1]
   */
  function uniq(array) {
    return array && array.length ? baseUniq(array) : [];
  }
  var uniq_1 = uniq;

  var _uniq = /*@__PURE__*/getDefaultExportFromCjs(uniq_1);

  var isCheckBoxInput = (element) => element.type === 'checkbox';

  var isDateObject = (value) => value instanceof Date;

  var isNullOrUndefined = (value) => value == null;

  const isObjectType = (value) => typeof value === 'object';
  var isObject$1 = (value) => !isNullOrUndefined(value) &&
      !Array.isArray(value) &&
      isObjectType(value) &&
      !isDateObject(value);

  var getEventValue = (event) => isObject$1(event) && event.target
      ? isCheckBoxInput(event.target)
          ? event.target.checked
          : event.target.value
      : event;

  var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;

  var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));

  var isPlainObject = (tempObject) => {
      const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
      return (isObject$1(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf'));
  };

  var isWeb = typeof window !== 'undefined' &&
      typeof window.HTMLElement !== 'undefined' &&
      typeof document !== 'undefined';

  function cloneObject(data) {
      let copy;
      const isArray = Array.isArray(data);
      const isFileListInstance = typeof FileList !== 'undefined' ? data instanceof FileList : false;
      if (data instanceof Date) {
          copy = new Date(data);
      }
      else if (data instanceof Set) {
          copy = new Set(data);
      }
      else if (!(isWeb && (data instanceof Blob || isFileListInstance)) &&
          (isArray || isObject$1(data))) {
          copy = isArray ? [] : {};
          if (!isArray && !isPlainObject(data)) {
              copy = data;
          }
          else {
              for (const key in data) {
                  if (data.hasOwnProperty(key)) {
                      copy[key] = cloneObject(data[key]);
                  }
              }
          }
      }
      else {
          return data;
      }
      return copy;
  }

  var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];

  var isUndefined = (val) => val === undefined;

  var get = (object, path, defaultValue) => {
      if (!path || !isObject$1(object)) {
          return defaultValue;
      }
      const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], object);
      return isUndefined(result) || result === object
          ? isUndefined(object[path])
              ? defaultValue
              : object[path]
          : result;
  };

  var isBoolean$1 = (value) => typeof value === 'boolean';

  var isKey = (value) => /^\w*$/.test(value);

  var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

  var set = (object, path, value) => {
      let index = -1;
      const tempPath = isKey(path) ? [path] : stringToPath(path);
      const length = tempPath.length;
      const lastIndex = length - 1;
      while (++index < length) {
          const key = tempPath[index];
          let newValue = value;
          if (index !== lastIndex) {
              const objValue = object[key];
              newValue =
                  isObject$1(objValue) || Array.isArray(objValue)
                      ? objValue
                      : !isNaN(+tempPath[index + 1])
                          ? []
                          : {};
          }
          if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
              return;
          }
          object[key] = newValue;
          object = object[key];
      }
      return object;
  };

  const EVENTS = {
      BLUR: 'blur',
      FOCUS_OUT: 'focusout',
      CHANGE: 'change',
  };
  const VALIDATION_MODE = {
      onBlur: 'onBlur',
      onChange: 'onChange',
      onSubmit: 'onSubmit',
      onTouched: 'onTouched',
      all: 'all',
  };
  const INPUT_VALIDATION_RULES = {
      max: 'max',
      min: 'min',
      maxLength: 'maxLength',
      minLength: 'minLength',
      pattern: 'pattern',
      required: 'required',
      validate: 'validate',
  };

  const HookFormContext = React$1.createContext(null);
  /**
   * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
   *
   * @returns return all useForm methods
   *
   * @example
   * ```tsx
   * function App() {
   *   const methods = useForm();
   *   const onSubmit = data => console.log(data);
   *
   *   return (
   *     <FormProvider {...methods} >
   *       <form onSubmit={methods.handleSubmit(onSubmit)}>
   *         <NestedInput />
   *         <input type="submit" />
   *       </form>
   *     </FormProvider>
   *   );
   * }
   *
   *  function NestedInput() {
   *   const { register } = useFormContext(); // retrieve all hook methods
   *   return <input {...register("test")} />;
   * }
   * ```
   */
  const useFormContext$1 = () => React$1.useContext(HookFormContext);

  var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
      const result = {
          defaultValues: control._defaultValues,
      };
      for (const key in formState) {
          Object.defineProperty(result, key, {
              get: () => {
                  const _key = key;
                  if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
                      control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                  }
                  localProxyFormState && (localProxyFormState[_key] = true);
                  return formState[_key];
              },
          });
      }
      return result;
  };

  var isEmptyObject$1 = (value) => isObject$1(value) && !Object.keys(value).length;

  var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
      updateFormState(formStateData);
      const { name, ...formState } = formStateData;
      return (isEmptyObject$1(formState) ||
          Object.keys(formState).length >= Object.keys(_proxyFormState).length ||
          Object.keys(formState).find((key) => _proxyFormState[key] ===
              (!isRoot || VALIDATION_MODE.all)));
  };

  var convertToArrayPayload = (value) => (Array.isArray(value) ? value : [value]);

  var shouldSubscribeByName = (name, signalName, exact) => !name ||
      !signalName ||
      name === signalName ||
      convertToArrayPayload(name).some((currentName) => currentName &&
          (exact
              ? currentName === signalName
              : currentName.startsWith(signalName) ||
                  signalName.startsWith(currentName)));

  function useSubscribe(props) {
      const _props = React$1.useRef(props);
      _props.current = props;
      React$1.useEffect(() => {
          const subscription = !props.disabled &&
              _props.current.subject &&
              _props.current.subject.subscribe({
                  next: _props.current.next,
              });
          return () => {
              subscription && subscription.unsubscribe();
          };
      }, [props.disabled]);
  }

  /**
   * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
   *
   * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
   *
   * @example
   * ```tsx
   * function App() {
   *   const { register, handleSubmit, control } = useForm({
   *     defaultValues: {
   *     firstName: "firstName"
   *   }});
   *   const { dirtyFields } = useFormState({
   *     control
   *   });
   *   const onSubmit = (data) => console.log(data);
   *
   *   return (
   *     <form onSubmit={handleSubmit(onSubmit)}>
   *       <input {...register("firstName")} placeholder="First Name" />
   *       {dirtyFields.firstName && <p>Field is dirty.</p>}
   *       <input type="submit" />
   *     </form>
   *   );
   * }
   * ```
   */
  function useFormState(props) {
      const methods = useFormContext$1();
      const { control = methods.control, disabled, name, exact } = props || {};
      const [formState, updateFormState] = React$1.useState(control._formState);
      const _mounted = React$1.useRef(true);
      const _localProxyFormState = React$1.useRef({
          isDirty: false,
          isLoading: false,
          dirtyFields: false,
          touchedFields: false,
          validatingFields: false,
          isValidating: false,
          isValid: false,
          errors: false,
      });
      const _name = React$1.useRef(name);
      _name.current = name;
      useSubscribe({
          disabled,
          next: (value) => _mounted.current &&
              shouldSubscribeByName(_name.current, value.name, exact) &&
              shouldRenderFormState(value, _localProxyFormState.current, control._updateFormState) &&
              updateFormState({
                  ...control._formState,
                  ...value,
              }),
          subject: control._subjects.state,
      });
      React$1.useEffect(() => {
          _mounted.current = true;
          _localProxyFormState.current.isValid && control._updateValid(true);
          return () => {
              _mounted.current = false;
          };
      }, [control]);
      return React$1.useMemo(() => getProxyFormState(formState, control, _localProxyFormState.current, false), [formState, control]);
  }

  var isString$2 = (value) => typeof value === 'string';

  var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
      if (isString$2(names)) {
          isGlobal && _names.watch.add(names);
          return get(formValues, names, defaultValue);
      }
      if (Array.isArray(names)) {
          return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
      }
      isGlobal && (_names.watchAll = true);
      return formValues;
  };

  /**
   * Custom hook to subscribe to field change and isolate re-rendering at the component level.
   *
   * @remarks
   *
   * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
   *
   * @example
   * ```tsx
   * const { control } = useForm();
   * const values = useWatch({
   *   name: "fieldName"
   *   control,
   * })
   * ```
   */
  function useWatch(props) {
      const methods = useFormContext$1();
      const { control = methods.control, name, defaultValue, disabled, exact, } = props || {};
      const _name = React$1.useRef(name);
      _name.current = name;
      useSubscribe({
          disabled,
          subject: control._subjects.values,
          next: (formState) => {
              if (shouldSubscribeByName(_name.current, formState.name, exact)) {
                  updateValue(cloneObject(generateWatchOutput(_name.current, control._names, formState.values || control._formValues, false, defaultValue)));
              }
          },
      });
      const [value, updateValue] = React$1.useState(control._getWatch(name, defaultValue));
      React$1.useEffect(() => control._removeUnmounted());
      return value;
  }

  /**
   * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
   *
   * @param props - the path name to the form field value, and validation rules.
   *
   * @returns field properties, field and form state. {@link UseControllerReturn}
   *
   * @example
   * ```tsx
   * function Input(props) {
   *   const { field, fieldState, formState } = useController(props);
   *   return (
   *     <div>
   *       <input {...field} placeholder={props.name} />
   *       <p>{fieldState.isTouched && "Touched"}</p>
   *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
   *     </div>
   *   );
   * }
   * ```
   */
  function useController(props) {
      const methods = useFormContext$1();
      const { name, disabled, control = methods.control, shouldUnregister } = props;
      const isArrayField = isNameInFieldArray(control._names.array, name);
      const value = useWatch({
          control,
          name,
          defaultValue: get(control._formValues, name, get(control._defaultValues, name, props.defaultValue)),
          exact: true,
      });
      const formState = useFormState({
          control,
          name,
          exact: true,
      });
      const _registerProps = React$1.useRef(control.register(name, {
          ...props.rules,
          value,
          ...(isBoolean$1(props.disabled) ? { disabled: props.disabled } : {}),
      }));
      const fieldState = React$1.useMemo(() => Object.defineProperties({}, {
          invalid: {
              enumerable: true,
              get: () => !!get(formState.errors, name),
          },
          isDirty: {
              enumerable: true,
              get: () => !!get(formState.dirtyFields, name),
          },
          isTouched: {
              enumerable: true,
              get: () => !!get(formState.touchedFields, name),
          },
          isValidating: {
              enumerable: true,
              get: () => !!get(formState.validatingFields, name),
          },
          error: {
              enumerable: true,
              get: () => get(formState.errors, name),
          },
      }), [formState, name]);
      const field = React$1.useMemo(() => ({
          name,
          value,
          ...(isBoolean$1(disabled) || formState.disabled
              ? { disabled: formState.disabled || disabled }
              : {}),
          onChange: (event) => _registerProps.current.onChange({
              target: {
                  value: getEventValue(event),
                  name: name,
              },
              type: EVENTS.CHANGE,
          }),
          onBlur: () => _registerProps.current.onBlur({
              target: {
                  value: get(control._formValues, name),
                  name: name,
              },
              type: EVENTS.BLUR,
          }),
          ref: (elm) => {
              const field = get(control._fields, name);
              if (field && elm) {
                  field._f.ref = {
                      focus: () => elm.focus(),
                      select: () => elm.select(),
                      setCustomValidity: (message) => elm.setCustomValidity(message),
                      reportValidity: () => elm.reportValidity(),
                  };
              }
          },
      }), [
          name,
          control._formValues,
          disabled,
          formState.disabled,
          value,
          control._fields,
      ]);
      React$1.useEffect(() => {
          const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
          const updateMounted = (name, value) => {
              const field = get(control._fields, name);
              if (field && field._f) {
                  field._f.mount = value;
              }
          };
          updateMounted(name, true);
          if (_shouldUnregisterField) {
              const value = cloneObject(get(control._options.defaultValues, name));
              set(control._defaultValues, name, value);
              if (isUndefined(get(control._formValues, name))) {
                  set(control._formValues, name, value);
              }
          }
          !isArrayField && control.register(name);
          return () => {
              (isArrayField
                  ? _shouldUnregisterField && !control._state.action
                  : _shouldUnregisterField)
                  ? control.unregister(name)
                  : updateMounted(name, false);
          };
      }, [name, control, isArrayField, shouldUnregister]);
      React$1.useEffect(() => {
          control._updateDisabledField({
              disabled,
              fields: control._fields,
              name,
          });
      }, [disabled, name, control]);
      return React$1.useMemo(() => ({
          field,
          formState,
          fieldState,
      }), [field, formState, fieldState]);
  }

  /**
   * Component based on `useController` hook to work with controlled component.
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
   *
   * @param props - the path name to the form field value, and validation rules.
   *
   * @returns provide field handler functions, field and form state.
   *
   * @example
   * ```tsx
   * function App() {
   *   const { control } = useForm<FormValues>({
   *     defaultValues: {
   *       test: ""
   *     }
   *   });
   *
   *   return (
   *     <form>
   *       <Controller
   *         control={control}
   *         name="test"
   *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
   *           <>
   *             <input
   *               onChange={onChange} // send value to hook form
   *               onBlur={onBlur} // notify when input is touched
   *               value={value} // return updated value
   *               ref={ref} // set ref for focus management
   *             />
   *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
   *             <p>{fieldState.isTouched ? "touched" : ""}</p>
   *           </>
   *         )}
   *       />
   *     </form>
   *   );
   * }
   * ```
   */
  const Controller = (props) => props.render(useController(props));

  var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
      ? {
          ...errors[name],
          types: {
              ...(errors[name] && errors[name].types ? errors[name].types : {}),
              [type]: message || true,
          },
      }
      : {};

  var getValidationModes = (mode) => ({
      isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
      isOnBlur: mode === VALIDATION_MODE.onBlur,
      isOnChange: mode === VALIDATION_MODE.onChange,
      isOnAll: mode === VALIDATION_MODE.all,
      isOnTouch: mode === VALIDATION_MODE.onTouched,
  });

  var isWatched = (name, _names, isBlurEvent) => !isBlurEvent &&
      (_names.watchAll ||
          _names.watch.has(name) ||
          [..._names.watch].some((watchName) => name.startsWith(watchName) &&
              /^\.\w+/.test(name.slice(watchName.length))));

  const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly) => {
      for (const key of fieldsNames || Object.keys(fields)) {
          const field = get(fields, key);
          if (field) {
              const { _f, ...currentField } = field;
              if (_f) {
                  if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
                      return true;
                  }
                  else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
                      return true;
                  }
                  else {
                      if (iterateFieldsByAction(currentField, action)) {
                          break;
                      }
                  }
              }
              else if (isObject$1(currentField)) {
                  if (iterateFieldsByAction(currentField, action)) {
                      break;
                  }
              }
          }
      }
      return;
  };

  var updateFieldArrayRootError = (errors, error, name) => {
      const fieldArrayErrors = convertToArrayPayload(get(errors, name));
      set(fieldArrayErrors, 'root', error[name]);
      set(errors, name, fieldArrayErrors);
      return errors;
  };

  var isFileInput = (element) => element.type === 'file';

  var isFunction = (value) => typeof value === 'function';

  var isHTMLElement = (value) => {
      if (!isWeb) {
          return false;
      }
      const owner = value ? value.ownerDocument : 0;
      return (value instanceof
          (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement));
  };

  var isMessage = (value) => isString$2(value);

  var isRadioInput = (element) => element.type === 'radio';

  var isRegex = (value) => value instanceof RegExp;

  const defaultResult = {
      value: false,
      isValid: false,
  };
  const validResult = { value: true, isValid: true };
  var getCheckboxValue = (options) => {
      if (Array.isArray(options)) {
          if (options.length > 1) {
              const values = options
                  .filter((option) => option && option.checked && !option.disabled)
                  .map((option) => option.value);
              return { value: values, isValid: !!values.length };
          }
          return options[0].checked && !options[0].disabled
              ? // @ts-expect-error expected to work in the browser
                  options[0].attributes && !isUndefined(options[0].attributes.value)
                      ? isUndefined(options[0].value) || options[0].value === ''
                          ? validResult
                          : { value: options[0].value, isValid: true }
                      : validResult
              : defaultResult;
      }
      return defaultResult;
  };

  const defaultReturn = {
      isValid: false,
      value: null,
  };
  var getRadioValue = (options) => Array.isArray(options)
      ? options.reduce((previous, option) => option && option.checked && !option.disabled
          ? {
              isValid: true,
              value: option.value,
          }
          : previous, defaultReturn)
      : defaultReturn;

  function getValidateError(result, ref, type = 'validate') {
      if (isMessage(result) ||
          (Array.isArray(result) && result.every(isMessage)) ||
          (isBoolean$1(result) && !result)) {
          return {
              type,
              message: isMessage(result) ? result : '',
              ref,
          };
      }
  }

  var getValueAndMessage = (validationData) => isObject$1(validationData) && !isRegex(validationData)
      ? validationData
      : {
          value: validationData,
          message: '',
      };

  var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
      const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, } = field._f;
      const inputValue = get(formValues, name);
      if (!mount || disabledFieldNames.has(name)) {
          return {};
      }
      const inputRef = refs ? refs[0] : ref;
      const setCustomValidity = (message) => {
          if (shouldUseNativeValidation && inputRef.reportValidity) {
              inputRef.setCustomValidity(isBoolean$1(message) ? '' : message || '');
              inputRef.reportValidity();
          }
      };
      const error = {};
      const isRadio = isRadioInput(ref);
      const isCheckBox = isCheckBoxInput(ref);
      const isRadioOrCheckbox = isRadio || isCheckBox;
      const isEmpty = ((valueAsNumber || isFileInput(ref)) &&
          isUndefined(ref.value) &&
          isUndefined(inputValue)) ||
          (isHTMLElement(ref) && ref.value === '') ||
          inputValue === '' ||
          (Array.isArray(inputValue) && !inputValue.length);
      const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
      const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
          const message = exceedMax ? maxLengthMessage : minLengthMessage;
          error[name] = {
              type: exceedMax ? maxType : minType,
              message,
              ref,
              ...appendErrorsCurry(exceedMax ? maxType : minType, message),
          };
      };
      if (isFieldArray
          ? !Array.isArray(inputValue) || !inputValue.length
          : required &&
              ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
                  (isBoolean$1(inputValue) && !inputValue) ||
                  (isCheckBox && !getCheckboxValue(refs).isValid) ||
                  (isRadio && !getRadioValue(refs).isValid))) {
          const { value, message } = isMessage(required)
              ? { value: !!required, message: required }
              : getValueAndMessage(required);
          if (value) {
              error[name] = {
                  type: INPUT_VALIDATION_RULES.required,
                  message,
                  ref: inputRef,
                  ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message),
              };
              if (!validateAllFieldCriteria) {
                  setCustomValidity(message);
                  return error;
              }
          }
      }
      if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
          let exceedMax;
          let exceedMin;
          const maxOutput = getValueAndMessage(max);
          const minOutput = getValueAndMessage(min);
          if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
              const valueNumber = ref.valueAsNumber ||
                  (inputValue ? +inputValue : inputValue);
              if (!isNullOrUndefined(maxOutput.value)) {
                  exceedMax = valueNumber > maxOutput.value;
              }
              if (!isNullOrUndefined(minOutput.value)) {
                  exceedMin = valueNumber < minOutput.value;
              }
          }
          else {
              const valueDate = ref.valueAsDate || new Date(inputValue);
              const convertTimeToDate = (time) => new Date(new Date().toDateString() + ' ' + time);
              const isTime = ref.type == 'time';
              const isWeek = ref.type == 'week';
              if (isString$2(maxOutput.value) && inputValue) {
                  exceedMax = isTime
                      ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value)
                      : isWeek
                          ? inputValue > maxOutput.value
                          : valueDate > new Date(maxOutput.value);
              }
              if (isString$2(minOutput.value) && inputValue) {
                  exceedMin = isTime
                      ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value)
                      : isWeek
                          ? inputValue < minOutput.value
                          : valueDate < new Date(minOutput.value);
              }
          }
          if (exceedMax || exceedMin) {
              getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
              if (!validateAllFieldCriteria) {
                  setCustomValidity(error[name].message);
                  return error;
              }
          }
      }
      if ((maxLength || minLength) &&
          !isEmpty &&
          (isString$2(inputValue) || (isFieldArray && Array.isArray(inputValue)))) {
          const maxLengthOutput = getValueAndMessage(maxLength);
          const minLengthOutput = getValueAndMessage(minLength);
          const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
              inputValue.length > +maxLengthOutput.value;
          const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
              inputValue.length < +minLengthOutput.value;
          if (exceedMax || exceedMin) {
              getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
              if (!validateAllFieldCriteria) {
                  setCustomValidity(error[name].message);
                  return error;
              }
          }
      }
      if (pattern && !isEmpty && isString$2(inputValue)) {
          const { value: patternValue, message } = getValueAndMessage(pattern);
          if (isRegex(patternValue) && !inputValue.match(patternValue)) {
              error[name] = {
                  type: INPUT_VALIDATION_RULES.pattern,
                  message,
                  ref,
                  ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message),
              };
              if (!validateAllFieldCriteria) {
                  setCustomValidity(message);
                  return error;
              }
          }
      }
      if (validate) {
          if (isFunction(validate)) {
              const result = await validate(inputValue, formValues);
              const validateError = getValidateError(result, inputRef);
              if (validateError) {
                  error[name] = {
                      ...validateError,
                      ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message),
                  };
                  if (!validateAllFieldCriteria) {
                      setCustomValidity(validateError.message);
                      return error;
                  }
              }
          }
          else if (isObject$1(validate)) {
              let validationResult = {};
              for (const key in validate) {
                  if (!isEmptyObject$1(validationResult) && !validateAllFieldCriteria) {
                      break;
                  }
                  const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                  if (validateError) {
                      validationResult = {
                          ...validateError,
                          ...appendErrorsCurry(key, validateError.message),
                      };
                      setCustomValidity(validateError.message);
                      if (validateAllFieldCriteria) {
                          error[name] = validationResult;
                      }
                  }
              }
              if (!isEmptyObject$1(validationResult)) {
                  error[name] = {
                      ref: inputRef,
                      ...validationResult,
                  };
                  if (!validateAllFieldCriteria) {
                      return error;
                  }
              }
          }
      }
      setCustomValidity(true);
      return error;
  };

  function baseGet$1(object, updatePath) {
      const length = updatePath.slice(0, -1).length;
      let index = 0;
      while (index < length) {
          object = isUndefined(object) ? index++ : object[updatePath[index++]];
      }
      return object;
  }
  function isEmptyArray$1(obj) {
      for (const key in obj) {
          if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
              return false;
          }
      }
      return true;
  }
  function unset(object, path) {
      const paths = Array.isArray(path)
          ? path
          : isKey(path)
              ? [path]
              : stringToPath(path);
      const childObject = paths.length === 1 ? object : baseGet$1(object, paths);
      const index = paths.length - 1;
      const key = paths[index];
      if (childObject) {
          delete childObject[key];
      }
      if (index !== 0 &&
          ((isObject$1(childObject) && isEmptyObject$1(childObject)) ||
              (Array.isArray(childObject) && isEmptyArray$1(childObject)))) {
          unset(object, paths.slice(0, -1));
      }
      return object;
  }

  var createSubject = () => {
      let _observers = [];
      const next = (value) => {
          for (const observer of _observers) {
              observer.next && observer.next(value);
          }
      };
      const subscribe = (observer) => {
          _observers.push(observer);
          return {
              unsubscribe: () => {
                  _observers = _observers.filter((o) => o !== observer);
              },
          };
      };
      const unsubscribe = () => {
          _observers = [];
      };
      return {
          get observers() {
              return _observers;
          },
          next,
          subscribe,
          unsubscribe,
      };
  };

  var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

  function deepEqual(object1, object2) {
      if (isPrimitive(object1) || isPrimitive(object2)) {
          return object1 === object2;
      }
      if (isDateObject(object1) && isDateObject(object2)) {
          return object1.getTime() === object2.getTime();
      }
      const keys1 = Object.keys(object1);
      const keys2 = Object.keys(object2);
      if (keys1.length !== keys2.length) {
          return false;
      }
      for (const key of keys1) {
          const val1 = object1[key];
          if (!keys2.includes(key)) {
              return false;
          }
          if (key !== 'ref') {
              const val2 = object2[key];
              if ((isDateObject(val1) && isDateObject(val2)) ||
                  (isObject$1(val1) && isObject$1(val2)) ||
                  (Array.isArray(val1) && Array.isArray(val2))
                  ? !deepEqual(val1, val2)
                  : val1 !== val2) {
                  return false;
              }
          }
      }
      return true;
  }

  var isMultipleSelect = (element) => element.type === `select-multiple`;

  var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

  var live = (ref) => isHTMLElement(ref) && ref.isConnected;

  var objectHasFunction = (data) => {
      for (const key in data) {
          if (isFunction(data[key])) {
              return true;
          }
      }
      return false;
  };

  function markFieldsDirty(data, fields = {}) {
      const isParentNodeArray = Array.isArray(data);
      if (isObject$1(data) || isParentNodeArray) {
          for (const key in data) {
              if (Array.isArray(data[key]) ||
                  (isObject$1(data[key]) && !objectHasFunction(data[key]))) {
                  fields[key] = Array.isArray(data[key]) ? [] : {};
                  markFieldsDirty(data[key], fields[key]);
              }
              else if (!isNullOrUndefined(data[key])) {
                  fields[key] = true;
              }
          }
      }
      return fields;
  }
  function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
      const isParentNodeArray = Array.isArray(data);
      if (isObject$1(data) || isParentNodeArray) {
          for (const key in data) {
              if (Array.isArray(data[key]) ||
                  (isObject$1(data[key]) && !objectHasFunction(data[key]))) {
                  if (isUndefined(formValues) ||
                      isPrimitive(dirtyFieldsFromValues[key])) {
                      dirtyFieldsFromValues[key] = Array.isArray(data[key])
                          ? markFieldsDirty(data[key], [])
                          : { ...markFieldsDirty(data[key]) };
                  }
                  else {
                      getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
                  }
              }
              else {
                  dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
              }
          }
      }
      return dirtyFieldsFromValues;
  }
  var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));

  var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
      ? value
      : valueAsNumber
          ? value === ''
              ? NaN
              : value
                  ? +value
                  : value
          : valueAsDate && isString$2(value)
              ? new Date(value)
              : setValueAs
                  ? setValueAs(value)
                  : value;

  function getFieldValue(_f) {
      const ref = _f.ref;
      if (isFileInput(ref)) {
          return ref.files;
      }
      if (isRadioInput(ref)) {
          return getRadioValue(_f.refs).value;
      }
      if (isMultipleSelect(ref)) {
          return [...ref.selectedOptions].map(({ value }) => value);
      }
      if (isCheckBoxInput(ref)) {
          return getCheckboxValue(_f.refs).value;
      }
      return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
  }

  var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
      const fields = {};
      for (const name of fieldsNames) {
          const field = get(_fields, name);
          field && set(fields, name, field._f);
      }
      return {
          criteriaMode,
          names: [...fieldsNames],
          fields,
          shouldUseNativeValidation,
      };
  };

  var getRuleValue = (rule) => isUndefined(rule)
      ? rule
      : isRegex(rule)
          ? rule.source
          : isObject$1(rule)
              ? isRegex(rule.value)
                  ? rule.value.source
                  : rule.value
              : rule;

  const ASYNC_FUNCTION = 'AsyncFunction';
  var hasPromiseValidation = (fieldReference) => !!fieldReference &&
      !!fieldReference.validate &&
      !!((isFunction(fieldReference.validate) &&
          fieldReference.validate.constructor.name === ASYNC_FUNCTION) ||
          (isObject$1(fieldReference.validate) &&
              Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION)));

  var hasValidation = (options) => options.mount &&
      (options.required ||
          options.min ||
          options.max ||
          options.maxLength ||
          options.minLength ||
          options.pattern ||
          options.validate);

  function schemaErrorLookup(errors, _fields, name) {
      const error = get(errors, name);
      if (error || isKey(name)) {
          return {
              error,
              name,
          };
      }
      const names = name.split('.');
      while (names.length) {
          const fieldName = names.join('.');
          const field = get(_fields, fieldName);
          const foundError = get(errors, fieldName);
          if (field && !Array.isArray(field) && name !== fieldName) {
              return { name };
          }
          if (foundError && foundError.type) {
              return {
                  name: fieldName,
                  error: foundError,
              };
          }
          names.pop();
      }
      return {
          name,
      };
  }

  var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
      if (mode.isOnAll) {
          return false;
      }
      else if (!isSubmitted && mode.isOnTouch) {
          return !(isTouched || isBlurEvent);
      }
      else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
          return !isBlurEvent;
      }
      else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
          return isBlurEvent;
      }
      return true;
  };

  var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);

  const defaultOptions = {
      mode: VALIDATION_MODE.onSubmit,
      reValidateMode: VALIDATION_MODE.onChange,
      shouldFocusError: true,
  };
  function createFormControl(props = {}) {
      let _options = {
          ...defaultOptions,
          ...props,
      };
      let _formState = {
          submitCount: 0,
          isDirty: false,
          isLoading: isFunction(_options.defaultValues),
          isValidating: false,
          isSubmitted: false,
          isSubmitting: false,
          isSubmitSuccessful: false,
          isValid: false,
          touchedFields: {},
          dirtyFields: {},
          validatingFields: {},
          errors: _options.errors || {},
          disabled: _options.disabled || false,
      };
      let _fields = {};
      let _defaultValues = isObject$1(_options.defaultValues) || isObject$1(_options.values)
          ? cloneObject(_options.defaultValues || _options.values) || {}
          : {};
      let _formValues = _options.shouldUnregister
          ? {}
          : cloneObject(_defaultValues);
      let _state = {
          action: false,
          mount: false,
          watch: false,
      };
      let _names = {
          mount: new Set(),
          disabled: new Set(),
          unMount: new Set(),
          array: new Set(),
          watch: new Set(),
      };
      let delayErrorCallback;
      let timer = 0;
      const _proxyFormState = {
          isDirty: false,
          dirtyFields: false,
          validatingFields: false,
          touchedFields: false,
          isValidating: false,
          isValid: false,
          errors: false,
      };
      const _subjects = {
          values: createSubject(),
          array: createSubject(),
          state: createSubject(),
      };
      const validationModeBeforeSubmit = getValidationModes(_options.mode);
      const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
      const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
      const debounce = (callback) => (wait) => {
          clearTimeout(timer);
          timer = setTimeout(callback, wait);
      };
      const _updateValid = async (shouldUpdateValid) => {
          if (!_options.disabled && (_proxyFormState.isValid || shouldUpdateValid)) {
              const isValid = _options.resolver
                  ? isEmptyObject$1((await _executeSchema()).errors)
                  : await executeBuiltInValidation(_fields, true);
              if (isValid !== _formState.isValid) {
                  _subjects.state.next({
                      isValid,
                  });
              }
          }
      };
      const _updateIsValidating = (names, isValidating) => {
          if (!_options.disabled &&
              (_proxyFormState.isValidating || _proxyFormState.validatingFields)) {
              (names || Array.from(_names.mount)).forEach((name) => {
                  if (name) {
                      isValidating
                          ? set(_formState.validatingFields, name, isValidating)
                          : unset(_formState.validatingFields, name);
                  }
              });
              _subjects.state.next({
                  validatingFields: _formState.validatingFields,
                  isValidating: !isEmptyObject$1(_formState.validatingFields),
              });
          }
      };
      const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
          if (args && method && !_options.disabled) {
              _state.action = true;
              if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                  const fieldValues = method(get(_fields, name), args.argA, args.argB);
                  shouldSetValues && set(_fields, name, fieldValues);
              }
              if (shouldUpdateFieldsAndState &&
                  Array.isArray(get(_formState.errors, name))) {
                  const errors = method(get(_formState.errors, name), args.argA, args.argB);
                  shouldSetValues && set(_formState.errors, name, errors);
                  unsetEmptyArray(_formState.errors, name);
              }
              if (_proxyFormState.touchedFields &&
                  shouldUpdateFieldsAndState &&
                  Array.isArray(get(_formState.touchedFields, name))) {
                  const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                  shouldSetValues && set(_formState.touchedFields, name, touchedFields);
              }
              if (_proxyFormState.dirtyFields) {
                  _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
              }
              _subjects.state.next({
                  name,
                  isDirty: _getDirty(name, values),
                  dirtyFields: _formState.dirtyFields,
                  errors: _formState.errors,
                  isValid: _formState.isValid,
              });
          }
          else {
              set(_formValues, name, values);
          }
      };
      const updateErrors = (name, error) => {
          set(_formState.errors, name, error);
          _subjects.state.next({
              errors: _formState.errors,
          });
      };
      const _setErrors = (errors) => {
          _formState.errors = errors;
          _subjects.state.next({
              errors: _formState.errors,
              isValid: false,
          });
      };
      const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
          const field = get(_fields, name);
          if (field) {
              const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
              isUndefined(defaultValue) ||
                  (ref && ref.defaultChecked) ||
                  shouldSkipSetValueAs
                  ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f))
                  : setFieldValue(name, defaultValue);
              _state.mount && _updateValid();
          }
      };
      const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
          let shouldUpdateField = false;
          let isPreviousDirty = false;
          const output = {
              name,
          };
          if (!_options.disabled) {
              const disabledField = !!(get(_fields, name) &&
                  get(_fields, name)._f &&
                  get(_fields, name)._f.disabled);
              if (!isBlurEvent || shouldDirty) {
                  if (_proxyFormState.isDirty) {
                      isPreviousDirty = _formState.isDirty;
                      _formState.isDirty = output.isDirty = _getDirty();
                      shouldUpdateField = isPreviousDirty !== output.isDirty;
                  }
                  const isCurrentFieldPristine = disabledField || deepEqual(get(_defaultValues, name), fieldValue);
                  isPreviousDirty = !!(!disabledField && get(_formState.dirtyFields, name));
                  isCurrentFieldPristine || disabledField
                      ? unset(_formState.dirtyFields, name)
                      : set(_formState.dirtyFields, name, true);
                  output.dirtyFields = _formState.dirtyFields;
                  shouldUpdateField =
                      shouldUpdateField ||
                          (_proxyFormState.dirtyFields &&
                              isPreviousDirty !== !isCurrentFieldPristine);
              }
              if (isBlurEvent) {
                  const isPreviousFieldTouched = get(_formState.touchedFields, name);
                  if (!isPreviousFieldTouched) {
                      set(_formState.touchedFields, name, isBlurEvent);
                      output.touchedFields = _formState.touchedFields;
                      shouldUpdateField =
                          shouldUpdateField ||
                              (_proxyFormState.touchedFields &&
                                  isPreviousFieldTouched !== isBlurEvent);
                  }
              }
              shouldUpdateField && shouldRender && _subjects.state.next(output);
          }
          return shouldUpdateField ? output : {};
      };
      const shouldRenderByError = (name, isValid, error, fieldState) => {
          const previousFieldError = get(_formState.errors, name);
          const shouldUpdateValid = _proxyFormState.isValid &&
              isBoolean$1(isValid) &&
              _formState.isValid !== isValid;
          if (_options.delayError && error) {
              delayErrorCallback = debounce(() => updateErrors(name, error));
              delayErrorCallback(_options.delayError);
          }
          else {
              clearTimeout(timer);
              delayErrorCallback = null;
              error
                  ? set(_formState.errors, name, error)
                  : unset(_formState.errors, name);
          }
          if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) ||
              !isEmptyObject$1(fieldState) ||
              shouldUpdateValid) {
              const updatedFormState = {
                  ...fieldState,
                  ...(shouldUpdateValid && isBoolean$1(isValid) ? { isValid } : {}),
                  errors: _formState.errors,
                  name,
              };
              _formState = {
                  ..._formState,
                  ...updatedFormState,
              };
              _subjects.state.next(updatedFormState);
          }
      };
      const _executeSchema = async (name) => {
          _updateIsValidating(name, true);
          const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
          _updateIsValidating(name);
          return result;
      };
      const executeSchemaAndUpdateState = async (names) => {
          const { errors } = await _executeSchema(names);
          if (names) {
              for (const name of names) {
                  const error = get(errors, name);
                  error
                      ? set(_formState.errors, name, error)
                      : unset(_formState.errors, name);
              }
          }
          else {
              _formState.errors = errors;
          }
          return errors;
      };
      const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
          valid: true,
      }) => {
          for (const name in fields) {
              const field = fields[name];
              if (field) {
                  const { _f, ...fieldValue } = field;
                  if (_f) {
                      const isFieldArrayRoot = _names.array.has(_f.name);
                      const isPromiseFunction = field._f && hasPromiseValidation(field._f);
                      if (isPromiseFunction && _proxyFormState.validatingFields) {
                          _updateIsValidating([name], true);
                      }
                      const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                      if (isPromiseFunction && _proxyFormState.validatingFields) {
                          _updateIsValidating([name]);
                      }
                      if (fieldError[_f.name]) {
                          context.valid = false;
                          if (shouldOnlyCheckValid) {
                              break;
                          }
                      }
                      !shouldOnlyCheckValid &&
                          (get(fieldError, _f.name)
                              ? isFieldArrayRoot
                                  ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name)
                                  : set(_formState.errors, _f.name, fieldError[_f.name])
                              : unset(_formState.errors, _f.name));
                  }
                  !isEmptyObject$1(fieldValue) &&
                      (await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context));
              }
          }
          return context.valid;
      };
      const _removeUnmounted = () => {
          for (const name of _names.unMount) {
              const field = get(_fields, name);
              field &&
                  (field._f.refs
                      ? field._f.refs.every((ref) => !live(ref))
                      : !live(field._f.ref)) &&
                  unregister(name);
          }
          _names.unMount = new Set();
      };
      const _getDirty = (name, data) => !_options.disabled &&
          (name && data && set(_formValues, name, data),
              !deepEqual(getValues(), _defaultValues));
      const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
          ...(_state.mount
              ? _formValues
              : isUndefined(defaultValue)
                  ? _defaultValues
                  : isString$2(names)
                      ? { [names]: defaultValue }
                      : defaultValue),
      }, isGlobal, defaultValue);
      const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
      const setFieldValue = (name, value, options = {}) => {
          const field = get(_fields, name);
          let fieldValue = value;
          if (field) {
              const fieldReference = field._f;
              if (fieldReference) {
                  !fieldReference.disabled &&
                      set(_formValues, name, getFieldValueAs(value, fieldReference));
                  fieldValue =
                      isHTMLElement(fieldReference.ref) && isNullOrUndefined(value)
                          ? ''
                          : value;
                  if (isMultipleSelect(fieldReference.ref)) {
                      [...fieldReference.ref.options].forEach((optionRef) => (optionRef.selected = fieldValue.includes(optionRef.value)));
                  }
                  else if (fieldReference.refs) {
                      if (isCheckBoxInput(fieldReference.ref)) {
                          fieldReference.refs.length > 1
                              ? fieldReference.refs.forEach((checkboxRef) => (!checkboxRef.defaultChecked || !checkboxRef.disabled) &&
                                  (checkboxRef.checked = Array.isArray(fieldValue)
                                      ? !!fieldValue.find((data) => data === checkboxRef.value)
                                      : fieldValue === checkboxRef.value))
                              : fieldReference.refs[0] &&
                                  (fieldReference.refs[0].checked = !!fieldValue);
                      }
                      else {
                          fieldReference.refs.forEach((radioRef) => (radioRef.checked = radioRef.value === fieldValue));
                      }
                  }
                  else if (isFileInput(fieldReference.ref)) {
                      fieldReference.ref.value = '';
                  }
                  else {
                      fieldReference.ref.value = fieldValue;
                      if (!fieldReference.ref.type) {
                          _subjects.values.next({
                              name,
                              values: { ..._formValues },
                          });
                      }
                  }
              }
          }
          (options.shouldDirty || options.shouldTouch) &&
              updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
          options.shouldValidate && trigger(name);
      };
      const setValues = (name, value, options) => {
          for (const fieldKey in value) {
              const fieldValue = value[fieldKey];
              const fieldName = `${name}.${fieldKey}`;
              const field = get(_fields, fieldName);
              (_names.array.has(name) ||
                  isObject$1(fieldValue) ||
                  (field && !field._f)) &&
                  !isDateObject(fieldValue)
                  ? setValues(fieldName, fieldValue, options)
                  : setFieldValue(fieldName, fieldValue, options);
          }
      };
      const setValue = (name, value, options = {}) => {
          const field = get(_fields, name);
          const isFieldArray = _names.array.has(name);
          const cloneValue = cloneObject(value);
          set(_formValues, name, cloneValue);
          if (isFieldArray) {
              _subjects.array.next({
                  name,
                  values: { ..._formValues },
              });
              if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) &&
                  options.shouldDirty) {
                  _subjects.state.next({
                      name,
                      dirtyFields: getDirtyFields(_defaultValues, _formValues),
                      isDirty: _getDirty(name, cloneValue),
                  });
              }
          }
          else {
              field && !field._f && !isNullOrUndefined(cloneValue)
                  ? setValues(name, cloneValue, options)
                  : setFieldValue(name, cloneValue, options);
          }
          isWatched(name, _names) && _subjects.state.next({ ..._formState });
          _subjects.values.next({
              name: _state.mount ? name : undefined,
              values: { ..._formValues },
          });
      };
      const onChange = async (event) => {
          _state.mount = true;
          const target = event.target;
          let name = target.name;
          let isFieldValueUpdated = true;
          const field = get(_fields, name);
          const getCurrentFieldValue = () => target.type ? getFieldValue(field._f) : getEventValue(event);
          const _updateIsFieldValueUpdated = (fieldValue) => {
              isFieldValueUpdated =
                  Number.isNaN(fieldValue) ||
                      (isDateObject(fieldValue) && isNaN(fieldValue.getTime())) ||
                      deepEqual(fieldValue, get(_formValues, name, fieldValue));
          };
          if (field) {
              let error;
              let isValid;
              const fieldValue = getCurrentFieldValue();
              const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
              const shouldSkipValidation = (!hasValidation(field._f) &&
                  !_options.resolver &&
                  !get(_formState.errors, name) &&
                  !field._f.deps) ||
                  skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
              const watched = isWatched(name, _names, isBlurEvent);
              set(_formValues, name, fieldValue);
              if (isBlurEvent) {
                  field._f.onBlur && field._f.onBlur(event);
                  delayErrorCallback && delayErrorCallback(0);
              }
              else if (field._f.onChange) {
                  field._f.onChange(event);
              }
              const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
              const shouldRender = !isEmptyObject$1(fieldState) || watched;
              !isBlurEvent &&
                  _subjects.values.next({
                      name,
                      type: event.type,
                      values: { ..._formValues },
                  });
              if (shouldSkipValidation) {
                  if (_proxyFormState.isValid) {
                      if (_options.mode === 'onBlur' && isBlurEvent) {
                          _updateValid();
                      }
                      else if (!isBlurEvent) {
                          _updateValid();
                      }
                  }
                  return (shouldRender &&
                      _subjects.state.next({ name, ...(watched ? {} : fieldState) }));
              }
              !isBlurEvent && watched && _subjects.state.next({ ..._formState });
              if (_options.resolver) {
                  const { errors } = await _executeSchema([name]);
                  _updateIsFieldValueUpdated(fieldValue);
                  if (isFieldValueUpdated) {
                      const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                      const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                      error = errorLookupResult.error;
                      name = errorLookupResult.name;
                      isValid = isEmptyObject$1(errors);
                  }
              }
              else {
                  _updateIsValidating([name], true);
                  error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                  _updateIsValidating([name]);
                  _updateIsFieldValueUpdated(fieldValue);
                  if (isFieldValueUpdated) {
                      if (error) {
                          isValid = false;
                      }
                      else if (_proxyFormState.isValid) {
                          isValid = await executeBuiltInValidation(_fields, true);
                      }
                  }
              }
              if (isFieldValueUpdated) {
                  field._f.deps &&
                      trigger(field._f.deps);
                  shouldRenderByError(name, isValid, error, fieldState);
              }
          }
      };
      const _focusInput = (ref, key) => {
          if (get(_formState.errors, key) && ref.focus) {
              ref.focus();
              return 1;
          }
          return;
      };
      const trigger = async (name, options = {}) => {
          let isValid;
          let validationResult;
          const fieldNames = convertToArrayPayload(name);
          if (_options.resolver) {
              const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
              isValid = isEmptyObject$1(errors);
              validationResult = name
                  ? !fieldNames.some((name) => get(errors, name))
                  : isValid;
          }
          else if (name) {
              validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
                  const field = get(_fields, fieldName);
                  return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
              }))).every(Boolean);
              !(!validationResult && !_formState.isValid) && _updateValid();
          }
          else {
              validationResult = isValid = await executeBuiltInValidation(_fields);
          }
          _subjects.state.next({
              ...(!isString$2(name) ||
                  (_proxyFormState.isValid && isValid !== _formState.isValid)
                  ? {}
                  : { name }),
              ...(_options.resolver || !name ? { isValid } : {}),
              errors: _formState.errors,
          });
          options.shouldFocus &&
              !validationResult &&
              iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
          return validationResult;
      };
      const getValues = (fieldNames) => {
          const values = {
              ...(_state.mount ? _formValues : _defaultValues),
          };
          return isUndefined(fieldNames)
              ? values
              : isString$2(fieldNames)
                  ? get(values, fieldNames)
                  : fieldNames.map((name) => get(values, name));
      };
      const getFieldState = (name, formState) => ({
          invalid: !!get((formState || _formState).errors, name),
          isDirty: !!get((formState || _formState).dirtyFields, name),
          error: get((formState || _formState).errors, name),
          isValidating: !!get(_formState.validatingFields, name),
          isTouched: !!get((formState || _formState).touchedFields, name),
      });
      const clearErrors = (name) => {
          name &&
              convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
          _subjects.state.next({
              errors: name ? _formState.errors : {},
          });
      };
      const setError = (name, error, options) => {
          const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
          const currentError = get(_formState.errors, name) || {};
          // Don't override existing error messages elsewhere in the object tree.
          const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
          set(_formState.errors, name, {
              ...restOfErrorTree,
              ...error,
              ref,
          });
          _subjects.state.next({
              name,
              errors: _formState.errors,
              isValid: false,
          });
          options && options.shouldFocus && ref && ref.focus && ref.focus();
      };
      const watch = (name, defaultValue) => isFunction(name)
          ? _subjects.values.subscribe({
              next: (payload) => name(_getWatch(undefined, defaultValue), payload),
          })
          : _getWatch(name, defaultValue, true);
      const unregister = (name, options = {}) => {
          for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
              _names.mount.delete(fieldName);
              _names.array.delete(fieldName);
              if (!options.keepValue) {
                  unset(_fields, fieldName);
                  unset(_formValues, fieldName);
              }
              !options.keepError && unset(_formState.errors, fieldName);
              !options.keepDirty && unset(_formState.dirtyFields, fieldName);
              !options.keepTouched && unset(_formState.touchedFields, fieldName);
              !options.keepIsValidating &&
                  unset(_formState.validatingFields, fieldName);
              !_options.shouldUnregister &&
                  !options.keepDefaultValue &&
                  unset(_defaultValues, fieldName);
          }
          _subjects.values.next({
              values: { ..._formValues },
          });
          _subjects.state.next({
              ..._formState,
              ...(!options.keepDirty ? {} : { isDirty: _getDirty() }),
          });
          !options.keepIsValid && _updateValid();
      };
      const _updateDisabledField = ({ disabled, name, field, fields, }) => {
          if ((isBoolean$1(disabled) && _state.mount) ||
              !!disabled ||
              _names.disabled.has(name)) {
              disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
              updateTouchAndDirty(name, getFieldValue(field ? field._f : get(fields, name)._f), false, false, true);
          }
      };
      const register = (name, options = {}) => {
          let field = get(_fields, name);
          const disabledIsDefined = isBoolean$1(options.disabled) || isBoolean$1(_options.disabled);
          set(_fields, name, {
              ...(field || {}),
              _f: {
                  ...(field && field._f ? field._f : { ref: { name } }),
                  name,
                  mount: true,
                  ...options,
              },
          });
          _names.mount.add(name);
          if (field) {
              _updateDisabledField({
                  field,
                  disabled: isBoolean$1(options.disabled)
                      ? options.disabled
                      : _options.disabled,
                  name,
              });
          }
          else {
              updateValidAndValue(name, true, options.value);
          }
          return {
              ...(disabledIsDefined
                  ? { disabled: options.disabled || _options.disabled }
                  : {}),
              ...(_options.progressive
                  ? {
                      required: !!options.required,
                      min: getRuleValue(options.min),
                      max: getRuleValue(options.max),
                      minLength: getRuleValue(options.minLength),
                      maxLength: getRuleValue(options.maxLength),
                      pattern: getRuleValue(options.pattern),
                  }
                  : {}),
              name,
              onChange,
              onBlur: onChange,
              ref: (ref) => {
                  if (ref) {
                      register(name, options);
                      field = get(_fields, name);
                      const fieldRef = isUndefined(ref.value)
                          ? ref.querySelectorAll
                              ? ref.querySelectorAll('input,select,textarea')[0] || ref
                              : ref
                          : ref;
                      const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                      const refs = field._f.refs || [];
                      if (radioOrCheckbox
                          ? refs.find((option) => option === fieldRef)
                          : fieldRef === field._f.ref) {
                          return;
                      }
                      set(_fields, name, {
                          _f: {
                              ...field._f,
                              ...(radioOrCheckbox
                                  ? {
                                      refs: [
                                          ...refs.filter(live),
                                          fieldRef,
                                          ...(Array.isArray(get(_defaultValues, name)) ? [{}] : []),
                                      ],
                                      ref: { type: fieldRef.type, name },
                                  }
                                  : { ref: fieldRef }),
                          },
                      });
                      updateValidAndValue(name, false, undefined, fieldRef);
                  }
                  else {
                      field = get(_fields, name, {});
                      if (field._f) {
                          field._f.mount = false;
                      }
                      (_options.shouldUnregister || options.shouldUnregister) &&
                          !(isNameInFieldArray(_names.array, name) && _state.action) &&
                          _names.unMount.add(name);
                  }
              },
          };
      };
      const _focusError = () => _options.shouldFocusError &&
          iterateFieldsByAction(_fields, _focusInput, _names.mount);
      const _disableForm = (disabled) => {
          if (isBoolean$1(disabled)) {
              _subjects.state.next({ disabled });
              iterateFieldsByAction(_fields, (ref, name) => {
                  const currentField = get(_fields, name);
                  if (currentField) {
                      ref.disabled = currentField._f.disabled || disabled;
                      if (Array.isArray(currentField._f.refs)) {
                          currentField._f.refs.forEach((inputRef) => {
                              inputRef.disabled = currentField._f.disabled || disabled;
                          });
                      }
                  }
              }, 0, false);
          }
      };
      const handleSubmit = (onValid, onInvalid) => async (e) => {
          let onValidError = undefined;
          if (e) {
              e.preventDefault && e.preventDefault();
              e.persist && e.persist();
          }
          let fieldValues = cloneObject(_formValues);
          if (_names.disabled.size) {
              for (const name of _names.disabled) {
                  set(fieldValues, name, undefined);
              }
          }
          _subjects.state.next({
              isSubmitting: true,
          });
          if (_options.resolver) {
              const { errors, values } = await _executeSchema();
              _formState.errors = errors;
              fieldValues = values;
          }
          else {
              await executeBuiltInValidation(_fields);
          }
          unset(_formState.errors, 'root');
          if (isEmptyObject$1(_formState.errors)) {
              _subjects.state.next({
                  errors: {},
              });
              try {
                  await onValid(fieldValues, e);
              }
              catch (error) {
                  onValidError = error;
              }
          }
          else {
              if (onInvalid) {
                  await onInvalid({ ..._formState.errors }, e);
              }
              _focusError();
              setTimeout(_focusError);
          }
          _subjects.state.next({
              isSubmitted: true,
              isSubmitting: false,
              isSubmitSuccessful: isEmptyObject$1(_formState.errors) && !onValidError,
              submitCount: _formState.submitCount + 1,
              errors: _formState.errors,
          });
          if (onValidError) {
              throw onValidError;
          }
      };
      const resetField = (name, options = {}) => {
          if (get(_fields, name)) {
              if (isUndefined(options.defaultValue)) {
                  setValue(name, cloneObject(get(_defaultValues, name)));
              }
              else {
                  setValue(name, options.defaultValue);
                  set(_defaultValues, name, cloneObject(options.defaultValue));
              }
              if (!options.keepTouched) {
                  unset(_formState.touchedFields, name);
              }
              if (!options.keepDirty) {
                  unset(_formState.dirtyFields, name);
                  _formState.isDirty = options.defaultValue
                      ? _getDirty(name, cloneObject(get(_defaultValues, name)))
                      : _getDirty();
              }
              if (!options.keepError) {
                  unset(_formState.errors, name);
                  _proxyFormState.isValid && _updateValid();
              }
              _subjects.state.next({ ..._formState });
          }
      };
      const _reset = (formValues, keepStateOptions = {}) => {
          const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
          const cloneUpdatedValues = cloneObject(updatedValues);
          const isEmptyResetValues = isEmptyObject$1(formValues);
          const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
          if (!keepStateOptions.keepDefaultValues) {
              _defaultValues = updatedValues;
          }
          if (!keepStateOptions.keepValues) {
              if (keepStateOptions.keepDirtyValues) {
                  const fieldsToCheck = new Set([
                      ..._names.mount,
                      ...Object.keys(getDirtyFields(_defaultValues, _formValues)),
                  ]);
                  for (const fieldName of Array.from(fieldsToCheck)) {
                      get(_formState.dirtyFields, fieldName)
                          ? set(values, fieldName, get(_formValues, fieldName))
                          : setValue(fieldName, get(values, fieldName));
                  }
              }
              else {
                  if (isWeb && isUndefined(formValues)) {
                      for (const name of _names.mount) {
                          const field = get(_fields, name);
                          if (field && field._f) {
                              const fieldReference = Array.isArray(field._f.refs)
                                  ? field._f.refs[0]
                                  : field._f.ref;
                              if (isHTMLElement(fieldReference)) {
                                  const form = fieldReference.closest('form');
                                  if (form) {
                                      form.reset();
                                      break;
                                  }
                              }
                          }
                      }
                  }
                  _fields = {};
              }
              _formValues = _options.shouldUnregister
                  ? keepStateOptions.keepDefaultValues
                      ? cloneObject(_defaultValues)
                      : {}
                  : cloneObject(values);
              _subjects.array.next({
                  values: { ...values },
              });
              _subjects.values.next({
                  values: { ...values },
              });
          }
          _names = {
              mount: keepStateOptions.keepDirtyValues ? _names.mount : new Set(),
              unMount: new Set(),
              array: new Set(),
              disabled: new Set(),
              watch: new Set(),
              watchAll: false,
              focus: '',
          };
          _state.mount =
              !_proxyFormState.isValid ||
                  !!keepStateOptions.keepIsValid ||
                  !!keepStateOptions.keepDirtyValues;
          _state.watch = !!_options.shouldUnregister;
          _subjects.state.next({
              submitCount: keepStateOptions.keepSubmitCount
                  ? _formState.submitCount
                  : 0,
              isDirty: isEmptyResetValues
                  ? false
                  : keepStateOptions.keepDirty
                      ? _formState.isDirty
                      : !!(keepStateOptions.keepDefaultValues &&
                          !deepEqual(formValues, _defaultValues)),
              isSubmitted: keepStateOptions.keepIsSubmitted
                  ? _formState.isSubmitted
                  : false,
              dirtyFields: isEmptyResetValues
                  ? {}
                  : keepStateOptions.keepDirtyValues
                      ? keepStateOptions.keepDefaultValues && _formValues
                          ? getDirtyFields(_defaultValues, _formValues)
                          : _formState.dirtyFields
                      : keepStateOptions.keepDefaultValues && formValues
                          ? getDirtyFields(_defaultValues, formValues)
                          : keepStateOptions.keepDirty
                              ? _formState.dirtyFields
                              : {},
              touchedFields: keepStateOptions.keepTouched
                  ? _formState.touchedFields
                  : {},
              errors: keepStateOptions.keepErrors ? _formState.errors : {},
              isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful
                  ? _formState.isSubmitSuccessful
                  : false,
              isSubmitting: false,
          });
      };
      const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues)
          ? formValues(_formValues)
          : formValues, keepStateOptions);
      const setFocus = (name, options = {}) => {
          const field = get(_fields, name);
          const fieldReference = field && field._f;
          if (fieldReference) {
              const fieldRef = fieldReference.refs
                  ? fieldReference.refs[0]
                  : fieldReference.ref;
              if (fieldRef.focus) {
                  fieldRef.focus();
                  options.shouldSelect &&
                      isFunction(fieldRef.select) &&
                      fieldRef.select();
              }
          }
      };
      const _updateFormState = (updatedFormState) => {
          _formState = {
              ..._formState,
              ...updatedFormState,
          };
      };
      const _resetDefaultValues = () => isFunction(_options.defaultValues) &&
          _options.defaultValues().then((values) => {
              reset(values, _options.resetOptions);
              _subjects.state.next({
                  isLoading: false,
              });
          });
      return {
          control: {
              register,
              unregister,
              getFieldState,
              handleSubmit,
              setError,
              _executeSchema,
              _getWatch,
              _getDirty,
              _updateValid,
              _removeUnmounted,
              _updateFieldArray,
              _updateDisabledField,
              _getFieldArray,
              _reset,
              _resetDefaultValues,
              _updateFormState,
              _disableForm,
              _subjects,
              _proxyFormState,
              _setErrors,
              get _fields() {
                  return _fields;
              },
              get _formValues() {
                  return _formValues;
              },
              get _state() {
                  return _state;
              },
              set _state(value) {
                  _state = value;
              },
              get _defaultValues() {
                  return _defaultValues;
              },
              get _names() {
                  return _names;
              },
              set _names(value) {
                  _names = value;
              },
              get _formState() {
                  return _formState;
              },
              set _formState(value) {
                  _formState = value;
              },
              get _options() {
                  return _options;
              },
              set _options(value) {
                  _options = {
                      ..._options,
                      ...value,
                  };
              },
          },
          trigger,
          register,
          handleSubmit,
          watch,
          setValue,
          getValues,
          reset,
          resetField,
          clearErrors,
          unregister,
          setError,
          setFocus,
          getFieldState,
      };
  }

  /**
   * Custom hook to manage the entire form.
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
   *
   * @param props - form configuration and validation parameters.
   *
   * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
   *
   * @example
   * ```tsx
   * function App() {
   *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   *   const onSubmit = data => console.log(data);
   *
   *   console.log(watch("example"));
   *
   *   return (
   *     <form onSubmit={handleSubmit(onSubmit)}>
   *       <input defaultValue="test" {...register("example")} />
   *       <input {...register("exampleRequired", { required: true })} />
   *       {errors.exampleRequired && <span>This field is required</span>}
   *       <button>Submit</button>
   *     </form>
   *   );
   * }
   * ```
   */
  function useForm(props = {}) {
      const _formControl = React$1.useRef(undefined);
      const _values = React$1.useRef(undefined);
      const [formState, updateFormState] = React$1.useState({
          isDirty: false,
          isValidating: false,
          isLoading: isFunction(props.defaultValues),
          isSubmitted: false,
          isSubmitting: false,
          isSubmitSuccessful: false,
          isValid: false,
          submitCount: 0,
          dirtyFields: {},
          touchedFields: {},
          validatingFields: {},
          errors: props.errors || {},
          disabled: props.disabled || false,
          defaultValues: isFunction(props.defaultValues)
              ? undefined
              : props.defaultValues,
      });
      if (!_formControl.current) {
          _formControl.current = {
              ...createFormControl(props),
              formState,
          };
      }
      const control = _formControl.current.control;
      control._options = props;
      useSubscribe({
          subject: control._subjects.state,
          next: (value) => {
              if (shouldRenderFormState(value, control._proxyFormState, control._updateFormState, true)) {
                  updateFormState({ ...control._formState });
              }
          },
      });
      React$1.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
      React$1.useEffect(() => {
          if (control._proxyFormState.isDirty) {
              const isDirty = control._getDirty();
              if (isDirty !== formState.isDirty) {
                  control._subjects.state.next({
                      isDirty,
                  });
              }
          }
      }, [control, formState.isDirty]);
      React$1.useEffect(() => {
          if (props.values && !deepEqual(props.values, _values.current)) {
              control._reset(props.values, control._options.resetOptions);
              _values.current = props.values;
              updateFormState((state) => ({ ...state }));
          }
          else {
              control._resetDefaultValues();
          }
      }, [props.values, control]);
      React$1.useEffect(() => {
          if (props.errors) {
              control._setErrors(props.errors);
          }
      }, [props.errors, control]);
      React$1.useEffect(() => {
          if (!control._state.mount) {
              control._updateValid();
              control._state.mount = true;
          }
          if (control._state.watch) {
              control._state.watch = false;
              control._subjects.state.next({ ...control._formState });
          }
          control._removeUnmounted();
      });
      React$1.useEffect(() => {
          props.shouldUnregister &&
              control._subjects.values.next({
                  values: control._getWatch(),
              });
      }, [props.shouldUnregister, control]);
      _formControl.current.formState = getProxyFormState(formState, control);
      return _formControl.current;
  }

  var classnames = {exports: {}};

  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */

  (function (module) {
  	/* global define */

  	(function () {

  	  var hasOwn = {}.hasOwnProperty;
  	  function classNames() {
  	    var classes = [];
  	    for (var i = 0; i < arguments.length; i++) {
  	      var arg = arguments[i];
  	      if (!arg) continue;
  	      var argType = typeof arg;
  	      if (argType === 'string' || argType === 'number') {
  	        classes.push(arg);
  	      } else if (Array.isArray(arg)) {
  	        if (arg.length) {
  	          var inner = classNames.apply(null, arg);
  	          if (inner) {
  	            classes.push(inner);
  	          }
  	        }
  	      } else if (argType === 'object') {
  	        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  	          classes.push(arg.toString());
  	          continue;
  	        }
  	        for (var key in arg) {
  	          if (hasOwn.call(arg, key) && arg[key]) {
  	            classes.push(key);
  	          }
  	        }
  	      }
  	    }
  	    return classes.join(' ');
  	  }
  	  if (module.exports) {
  	    classNames.default = classNames;
  	    module.exports = classNames;
  	  } else {
  	    window.classNames = classNames;
  	  }
  	})(); 
  } (classnames));

  var classnamesExports = classnames.exports;
  var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

  var baseGetTag$3 = _baseGetTag,
    isArray$2 = isArray_1,
    isObjectLike$3 = isObjectLike_1;

  /** `Object#toString` result references. */
  var stringTag = '[object String]';

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString$1(value) {
    return typeof value == 'string' || !isArray$2(value) && isObjectLike$3(value) && baseGetTag$3(value) == stringTag;
  }
  var isString_1 = isString$1;

  var _isString = /*@__PURE__*/getDefaultExportFromCjs(isString_1);

  /**
   * processFieldsHash
   * Tkae a field and process the "fields" key, which can be ah hash of value / array of fields
   * @param {*} field
   * @param {*} predicate
   * @returns
   */
  var processFieldsHash = function processFieldsHash(field, predicate) {
    var newField = field;
    var subkeys = Object.keys(field.fields);
    subkeys.forEach(function (subkey) {
      var newFields = mapFields(field.fields[subkey], predicate);
      if (newFields !== field.fields[subkey]) {
        newField = _objectSpread2(_objectSpread2({}, newField), {}, {
          fields: _objectSpread2(_objectSpread2({}, newField.fields), {}, _defineProperty$1({}, subkey, newFields))
        });
      }
    });
    return newField;
  };

  /**
   * mapFields
   * Return an array of fields with the only elements changed by the predicate, it takes a field as parameter
   * and return the same field or a changed one. It recursively iterate over subfields for group, two-columns and
   * three columns components
   * @param {Array} fields
   * @param {Function} predicate Take a field as paramenter and return a field object
   * @returns
   */
  var mapFields = function mapFields(fields) {
    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (obj) {
      return obj;
    };
    var needsFlatten = false;
    if (!fields) {
      return fields;
    }
    // replace with predicated
    var newFields = fields.filter(Boolean).map(function (field) {
      var newField = predicate(field);
      // if returns an array, means the mapping is replacing with two fields
      // and it will need to be flattened later
      if (Array.isArray(newField)) {
        needsFlatten = true;
      }
      if (field.component === 'group') {
        var _newFields = mapFields(field.fields, predicate);
        if (_newFields !== field.fields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            fields: _newFields
          });
        }
      } else if (field.component === 'array') {
        var _newFields2 = mapFields(field.fields, predicate);
        if (_newFields2 !== field.fields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            fields: _newFields2
          });
        }
      } else if (field.component === 'two-columns') {
        var newLeftFields = mapFields(field.leftFields, predicate);
        if (newLeftFields !== field.leftFields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            leftFields: newLeftFields
          });
        }
        var newRightFields = mapFields(field.rightFields, predicate);
        if (newRightFields !== field.rightFields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            rightFields: newRightFields
          });
        }
      } else if (field.component === 'three-columns') {
        var _newLeftFields = mapFields(field.leftFields, predicate);
        if (_newLeftFields !== field.leftFields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            leftFields: _newLeftFields
          });
        }
        var newCenterFields = mapFields(field.centerFields, predicate);
        if (newCenterFields !== field.centerFields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            centerFields: newCenterFields
          });
        }
        var _newRightFields = mapFields(field.rightFields, predicate);
        if (_newRightFields !== field.rightFields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            rightFields: _newRightFields
          });
        }
      } else if ((field.component === 'tabs' || field.component === 'steps' || field.component === 'columns') && _isObject(field.fields) && !_isArray(field.fields)) {
        // Problem here: the new field can be an array because the map field, can return an array with
        // additional field to be put somewhere in the mapping, of those only the one of type "tab" need to be
        // mapped, the other one must be left untouched since they where added by the helper method
        if (_isArray(newField)) {
          // if an array is returned, then it's already changed, we don't need to worry too much about
          // referential integrity
          // here only process the original field
          newField = newField.map(function (fieldToProcess) {
            if (fieldToProcess === field) {
              return processFieldsHash(fieldToProcess, predicate);
            }
            return fieldToProcess;
          });
        } else {
          newField = processFieldsHash(newField, predicate);
        }
      }
      return newField;
    });
    var hasChanges;
    if (needsFlatten) {
      // if needs to be flattened, for sure is changed
      newFields = _flatten(newFields);
      hasChanges = true;
    } else {
      // check if some element of the array is changed, keep instance consistency otherwise
      hasChanges = fields.some(function (field, idx) {
        return field !== newFields[idx];
      });
    }
    return hasChanges ? newFields : fields;
  };

  var replaceField = function replaceField(form, field) {
    return _objectSpread2(_objectSpread2({}, form), {}, {
      fields: mapFields(form.fields, function (currentField) {
        if (currentField.id === field.id) {
          return field;
        }
        return currentField;
      })
    });
  };

  var toString$3 = toString_1;

  /** Used to generate unique IDs. */
  var idCounter = 0;

  /**
   * Generates a unique ID. If `prefix` is given, the ID is appended to it.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {string} [prefix=''] The value to prefix the ID with.
   * @returns {string} Returns the unique ID.
   * @example
   *
   * _.uniqueId('contact_');
   * // => 'contact_104'
   *
   * _.uniqueId();
   * // => '105'
   */
  function uniqueId(prefix) {
    var id = ++idCounter;
    return toString$3(prefix) + id;
  }
  var uniqueId_1 = uniqueId;

  var _uniqueId = /*@__PURE__*/getDefaultExportFromCjs(uniqueId_1);

  var fillIds = function fillIds(fields) {
    var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return mapFields(fields, function (field) {
      // if not id, then create it
      if (!field.id) {
        return _objectSpread2({
          id: _uniqueId(namespace)
        }, field);
      }
      // special case of array
      //if (field.component === 'array') {
      //  field.fields = fillIds(field.fields);
      //}
      return field;
    });
  };

  var assignValue = _assignValue,
    castPath$2 = _castPath,
    isIndex$1 = _isIndex,
    isObject = isObject_1,
    toKey$1 = _toKey;

  /**
   * The base implementation of `_.set`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @param {Function} [customizer] The function to customize path creation.
   * @returns {Object} Returns `object`.
   */
  function baseSet$1(object, path, value, customizer) {
    if (!isObject(object)) {
      return object;
    }
    path = castPath$2(path, object);
    var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;
    while (nested != null && ++index < length) {
      var key = toKey$1(path[index]),
        newValue = value;
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return object;
      }
      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : undefined;
        if (newValue === undefined) {
          newValue = isObject(objValue) ? objValue : isIndex$1(path[index + 1]) ? [] : {};
        }
      }
      assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }
  var _baseSet = baseSet$1;

  var baseGet = _baseGet,
    baseSet = _baseSet,
    castPath$1 = _castPath;

  /**
   * The base implementation of  `_.pickBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @param {Function} predicate The function invoked per property.
   * @returns {Object} Returns the new object.
   */
  function basePickBy$1(object, paths, predicate) {
    var index = -1,
      length = paths.length,
      result = {};
    while (++index < length) {
      var path = paths[index],
        value = baseGet(object, path);
      if (predicate(value, path)) {
        baseSet(result, castPath$1(path, object), value);
      }
    }
    return result;
  }
  var _basePickBy = basePickBy$1;

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */

  function baseHasIn$1(object, key) {
    return object != null && key in Object(object);
  }
  var _baseHasIn = baseHasIn$1;

  var castPath = _castPath,
    isArguments = isArguments_1,
    isArray$1 = isArray_1,
    isIndex = _isIndex,
    isLength = isLength_1,
    toKey = _toKey;

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath$1(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1,
      length = path.length,
      result = false;
    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments(object));
  }
  var _hasPath = hasPath$1;

  var baseHasIn = _baseHasIn,
    hasPath = _hasPath;

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn$1(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }
  var hasIn_1 = hasIn$1;

  var basePickBy = _basePickBy,
    hasIn = hasIn_1;

  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @returns {Object} Returns the new object.
   */
  function basePick$1(object, paths) {
    return basePickBy(object, paths, function (value, path) {
      return hasIn(object, path);
    });
  }
  var _basePick = basePick$1;

  var basePick = _basePick,
    flatRest = _flatRest;

  /**
   * Creates an object composed of the picked `object` properties.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to pick.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.pick(object, ['a', 'c']);
   * // => { 'a': 1, 'c': 3 }
   */
  var pick = flatRest(function (object, paths) {
    return object == null ? {} : basePick(object, paths);
  });
  var pick_1 = pick;

  var _pick = /*@__PURE__*/getDefaultExportFromCjs(pick_1);

  var baseGetTag$2 = _baseGetTag,
    isObjectLike$2 = isObjectLike_1;

  /** `Object#toString` result references. */
  var numberTag = '[object Number]';

  /**
   * Checks if `value` is classified as a `Number` primitive or object.
   *
   * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
   * classified as numbers, use the `_.isFinite` method.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(3);
   * // => true
   *
   * _.isNumber(Number.MIN_VALUE);
   * // => true
   *
   * _.isNumber(Infinity);
   * // => true
   *
   * _.isNumber('3');
   * // => false
   */
  function isNumber$1(value) {
    return typeof value == 'number' || isObjectLike$2(value) && baseGetTag$2(value) == numberTag;
  }
  var isNumber_1 = isNumber$1;

  var _isNumber = /*@__PURE__*/getDefaultExportFromCjs(isNumber_1);

  var baseGetTag$1 = _baseGetTag,
    isObjectLike$1 = isObjectLike_1;

  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]';

  /**
   * Checks if `value` is classified as a boolean primitive or object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
   * @example
   *
   * _.isBoolean(false);
   * // => true
   *
   * _.isBoolean(null);
   * // => false
   */
  function isBoolean(value) {
    return value === true || value === false || isObjectLike$1(value) && baseGetTag$1(value) == boolTag;
  }
  var isBoolean_1 = isBoolean;

  var _isBoolean = /*@__PURE__*/getDefaultExportFromCjs(isBoolean_1);

  var FRAMEWORKS = ['react', 'react-rsuite5', 'react-material-ui', 'react-bootstrap', 'react-antd', 'react-mantine'];
  var FRAMEWORKS_LABELS = ['React', 'React + RSuite5', 'React + MaterialUI', 'React + Bootstrap', 'React + Ant Design', 'React + Mantine'];
  var FIELDS_KEY = ['fields', 'leftFields', 'rightField', 'centerFields'];

  var isI18n = function isI18n(obj) {
    return _isObject(obj) && Object.keys(obj).every(function (key) {
      return key.length === 2 || key.length === 5 && key[2] === '-';
    });
  };

  var collectEmptyKeys = function collectEmptyKeys(obj) {
    return _keys(obj).filter(function (key) {
      return _isEmpty(obj[key]) && !(_isBoolean(obj[key]) || _isNumber(obj[key]));
    });
  };
  var removeEmptyKeys = function removeEmptyKeys(obj) {
    // collect all empty keys
    var emptyKeys = collectEmptyKeys(obj);
    // clone and remove id and empty keys
    return _omit(obj, emptyKeys);
  };
  var removeUnusedLocalesFromI18n = function removeUnusedLocalesFromI18n(obj, locales) {
    if (_isArray(locales) && !_isEmpty(locales)) {
      var keysToRemove = Object.keys(obj).filter(function (key) {
        return !locales.includes(key);
      });
      var cleaned = !_isEmpty(keysToRemove) ? _omit(obj, keysToRemove) : obj;
      if (Object.keys(cleaned).length !== 0) {
        return cleaned;
      }
      return null;
    } else {
      // no locales specified, so try to extract english dialect or the first available key
      if (obj['en-US']) {
        return obj['en-US'];
      } else if (obj['en-GB']) {
        return obj['en-GB'];
      } else if (Object.keys(obj).length !== 0) {
        return obj[Object.keys(obj)[0]];
      }
      return null;
    }
  };
  var removeUnusedLocalesFromObj = function removeUnusedLocalesFromObj(obj, locales) {
    var cloned = _objectSpread2({}, obj);
    Object.keys(obj || {}).forEach(function (key) {
      if (_isArray(cloned[key])) {
        cloned[key] = cloned[key].map(function (item) {
          return removeUnusedLocalesFromObj(item, locales);
        });
      } else if (isI18n(cloned[key])) {
        cloned[key] = removeUnusedLocalesFromI18n(cloned[key], locales);
      } else if (key === 'validation' && isI18n(cloned.validation.message)) {
        cloned.validation = _objectSpread2(_objectSpread2({}, cloned.validation), {}, {
          message: removeUnusedLocalesFromI18n(cloned.validation.message, locales)
        });
      }
    });
    return cloned;
  };
  var removeUnusedTabs = function removeUnusedTabs(obj) {
    if (obj.component === 'tabs') {
      return _objectSpread2(_objectSpread2({}, obj), {}, {
        fields: _pick(obj.fields, (obj.tabs || []).map(function (tab) {
          return tab.value;
        }))
      });
    }
    return obj;
  };

  /**
   * cleanUp
   * Remove id from json file and all empty keys, all frameworks props not used, empty tabs
   * @param {*} json
   * @returns
   */
  var cleanUp = function cleanUp(json, framework) {
    var cloned = _objectSpread2({}, json);

    // remove unused locales
    if (cloned.labelSubmit && isI18n(cloned.labelSubmit)) {
      cloned.labelSubmit = removeUnusedLocalesFromI18n(cloned.labelSubmit, json.locales);
    }
    if (cloned.labelCancel && isI18n(cloned.labelCancel)) {
      cloned.labelCancel = removeUnusedLocalesFromI18n(cloned.labelCancel, json.locales);
    }
    var emptyKeys = _keys(cloned).filter(function (key) {
      return _isEmpty(cloned[key]) && !(_isBoolean(cloned[key]) || _isNumber(cloned[key]));
    });
    var cleanedUp = _omit(cloned, emptyKeys);
    var newForm = _objectSpread2(_objectSpread2({}, cleanedUp), {}, {
      fields: mapFields(json.fields, function (field) {
        // clone and remove id
        var cloned = _omit(field, 'id');
        // clean all platform subkeys
        FRAMEWORKS.forEach(function (key) {
          if (cloned[key]) {
            cloned[key] = removeEmptyKeys(cloned[key]);
            // remove if empty after cleaning
            if (Object.keys(cloned[key]).length === 0) {
              delete cloned[key];
            }
          }
        });
        // remove all other frameworks if one is specified
        if (framework) {
          FRAMEWORKS.filter(function (s) {
            return s !== framework;
          }).forEach(function (framework) {
            return delete cloned[framework];
          });
        }
        // collect all empty keys
        cloned = removeEmptyKeys(cloned);
        // cycle all keys and check if it's an i18n object
        cloned = removeUnusedLocalesFromObj(cloned, json.locales);
        // remove unused tabl
        cloned = removeUnusedTabs(cloned);
        return cloned;
      })
    });
    return newForm;
  };

  var baseClone = _baseClone;

  /** Used to compose bitmasks for cloning. */
  var CLONE_SYMBOLS_FLAG = 4;

  /**
   * Creates a shallow clone of `value`.
   *
   * **Note:** This method is loosely based on the
   * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
   * and supports cloning arrays, array buffers, booleans, date objects, maps,
   * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
   * arrays. The own enumerable properties of `arguments` objects are cloned
   * as plain objects. An empty object is returned for uncloneable values such
   * as error objects, functions, DOM nodes, and WeakMaps.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   * @see _.cloneDeep
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var shallow = _.clone(objects);
   * console.log(shallow[0] === objects[0]);
   * // => true
   */
  function clone(value) {
    return baseClone(value, CLONE_SYMBOLS_FLAG);
  }
  var clone_1 = clone;

  var _clone = /*@__PURE__*/getDefaultExportFromCjs(clone_1);

  var reduceFields = function reduceFields(fields, predicate) {
    var accumulator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var options = _objectSpread2({
      'group': true,
      'array': true,
      'two-columns': true,
      'three-columns': true,
      'columns': true
    }, opts);
    if (_isEmpty(fields) || !_isArray(fields)) {
      return accumulator;
    }
    var result = _clone(accumulator);
    fields.forEach(function (field) {
      if (!field) {
        return;
      }
      result = predicate(field, result);
      if (field.component === 'group' && options.group) {
        result = reduceFields(field.fields, predicate, result, opts);
      } else if (field.component === 'array' && options.array) {
        result = reduceFields(field.fields, predicate, result, opts);
      } else if (field.component === 'two-columns' && options['two-columns']) {
        result = reduceFields(field.leftFields, predicate, result, opts);
        result = reduceFields(field.rightFields, predicate, result, opts);
      } else if (field.component === 'three-columns' && options['three-columns']) {
        result = reduceFields(field.leftFields, predicate, result, opts);
        result = reduceFields(field.centerFields, predicate, result, opts);
        result = reduceFields(field.rightFields, predicate, result, opts);
      } else if ((field.component === 'tabs' || field.component === 'steps' || field.component === 'columns' && options['columns']) && _isObject(field.fields) && !_isArray(field.fields)) {
        var subkeys = Object.keys(field.fields);
        subkeys.forEach(function (subkey) {
          result = reduceFields(field.fields[subkey], predicate, result, opts);
        });
      }
    });
    return result;
  };

  var findField = function findField(fields, predicate) {
    if (_isEmpty(fields) || !_isArray(fields)) {
      return null;
    }
    var found = fields.find(predicate);
    fields.forEach(function (field) {
      if (!found) {
        if (field.component === 'group' || field.component === 'array') {
          found = findField(field.fields, predicate);
        } else if (field.component === 'two-columns') {
          found = findField(field.leftFields, predicate) || findField(field.rightFields, predicate);
        } else if (field.component === 'three-columns') {
          found = findField(field.leftFields, predicate) || findField(field.centerFields, predicate) || findField(field.rightFields, predicate);
        } else if ((field.component === 'tabs' || field.component === 'steps' || field.component === 'columns') && _isObject(field.fields) && !_isArray(field.fields)) {
          var subkeys = Object.keys(field.fields);
          subkeys.forEach(function (subkey) {
            if (!found) {
              var search = findField(field.fields[subkey], predicate);
              if (search) {
                found = search;
              }
            }
          });
        }
      }
    });
    return found;
  };
  var getFieldById = function getFieldById(fields, id) {
    return findField(fields, function (field) {
      return field.id === id;
    });
  };

  var testCondition = function testCondition(condition) {
    var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'checked' && !_isEmpty(condition === null || condition === void 0 ? void 0 : condition.field) && values[condition.field] === true) {
      return true;
    } else if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'unchecked' && !_isEmpty(condition === null || condition === void 0 ? void 0 : condition.field) && values[condition.field] === false) {
      return true;
    } else if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'eq' && !_isEmpty(condition === null || condition === void 0 ? void 0 : condition.field) && condition !== null && condition !== void 0 && condition.value &&
    // could be anything
    // eslint-disable-next-line eqeqeq
    values[condition.field] == condition.value) {
      return true;
    } else if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'neq' && !_isEmpty(condition === null || condition === void 0 ? void 0 : condition.field) && condition !== null && condition !== void 0 && condition.value &&
    // could be anything
    // eslint-disable-next-line eqeqeq
    values[condition.field] != condition.value) {
      return true;
    } else if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'not_empty' && !_isEmpty(condition === null || condition === void 0 ? void 0 : condition.field) &&
    // eslint-disable-next-line eqeqeq
    values[condition.field] != null && values[condition.field] !== '') {
      return true;
    } else if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'empty' && !_isEmpty(condition === null || condition === void 0 ? void 0 : condition.field) && (
    // eslint-disable-next-line eqeqeq
    values[condition.field] == null || values[condition.field] === '')) {
      return true;
    }
    return false;
  };
  var testConditions = function testConditions(conditions, values) {
    if (_isArray(conditions)) {
      if (!_isEmpty(conditions)) {
        return conditions.every(function (condition) {
          return testCondition(condition, values);
        });
      }
      return false;
    }
    return testCondition(conditions, values);
  };
  var PREDICATES = {
    enable: function enable(names) {
      return function (field) {
        if (names.indexOf(field.name) !== -1) {
          return _objectSpread2(_objectSpread2({}, field), {}, {
            disabled: false
          });
        }
        return field;
      };
    },
    disable: function disable(names) {
      return function (field) {
        if (names.indexOf(field.name) !== -1) {
          return _objectSpread2(_objectSpread2({}, field), {}, {
            disabled: true
          });
        }
        return field;
      };
    },
    show: function show(names) {
      return function (field) {
        if (names.indexOf(field.name) !== -1) {
          return _objectSpread2(_objectSpread2({}, field), {}, {
            hidden: false
          });
        }
        return field;
      };
    },
    hide: function hide(names) {
      return function (field) {
        if (names.indexOf(field.name) !== -1) {
          return _objectSpread2(_objectSpread2({}, field), {}, {
            hidden: true
          });
        }
        return field;
      };
    },
    setValue: function setValue(names, object, condition, values) {
      return function (field) {
        if (names.indexOf(field.name) !== -1 && _isObject(object) && !_isEmpty(object.key) && !_isEmpty(object.value)) {
          return _objectSpread2(_objectSpread2({}, field), {}, _defineProperty$1({}, object.key, evaluateValue(object.value, {
            values: values,
            condition: condition
          })));
        }
        return field;
      };
    }
  };

  // TODO implement more ${} tokens
  var evaluateValue = function evaluateValue(value, _ref) {
    var values = _ref.values,
      condition = _ref.condition;
    // eslint-disable-next-line no-template-curly-in-string
    if (value === '${VALUE}') {
      return values[condition.field];
      // eslint-disable-next-line no-template-curly-in-string
    } else if (value === '${EMPTY}') {
      return '';
      // eslint-disable-next-line no-template-curly-in-string
    } else if (value === '${NULL}') {
      return null;
      // eslint-disable-next-line no-template-curly-in-string
    } else if (value === '${UNDEFINED}') {
      return null;
    } else {
      return value;
    }
  };
  var applyFormRules = function applyFormRules(fields, rules, values) {
    if (!Array.isArray(rules) || rules.length === 0) {
      return fields;
    }
    var newFields = fields;
    rules.forEach(function (rule) {
      // if test condition passes and exists a predicate, then execute it
      if (testConditions(rule.condition, values)) {
        // if there's a verb for it, then apply it
        if (PREDICATES[rule.verb]) {
          newFields = mapFields(newFields, PREDICATES[rule.verb](rule.names, rule.object, rule.condition, values));
        }
      }
    });
    return newFields;
  };

  var DAYJS_VALID_TOKENS = ['YY', 'YYYY', 'M', 'MM', 'MMM', 'MMMM', 'D', 'DD', 'Do', 'd', 'dd', 'ddd', 'dddd', 'A', 'a', 'H', 'HH', 'h', 'hh', 'm', 'mm', 's', 'ss'];
  var isValidDayjsFormat = function isValidDayjsFormat(str) {
    if (_isString(str) && !_isEmpty(str)) {
      var tokens = str.match(/([A-Za-z0-9]{1,})/gm);
      var isValid = tokens.every(function (t) {
        return DAYJS_VALID_TOKENS.includes(t);
      });
      if (!isValid) {
        console.error(["MUI: The token \"".concat(str, "\" is not supported by the Date and Time Pickers."), 'Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported.'].join('\n'));
      }
      return isValid;
    }
    return false;
  };

  /**
   * filterFields
   * Filter field calling recursively fields in group, two-columns, three columns
   * @param {Array} fields
   * @param {Function} predicate Take a field as paramenter and return a field object
   * @returns
   */
  var filterFields = function filterFields(fields) {
    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (obj) {
      return obj;
    };
    if (!fields) {
      return fields;
    }
    // replace with predicated
    var newFields = fields.map(function (field) {
      if (!predicate(field)) {
        return null;
      }
      var newField = field;
      if (field.component === 'group') {
        var _newFields = filterFields(field.fields, predicate);
        if (_newFields !== field.fields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            fields: _newFields
          });
        }
      } else if (field.component === 'array') {
        var _newFields2 = filterFields(field.fields, predicate);
        if (_newFields2 !== field.fields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            fields: _newFields2
          });
        }
      } else if (field.component === 'two-columns') {
        var newLeftFields = filterFields(field.leftFields, predicate);
        if (newLeftFields !== field.leftFields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            leftFields: newLeftFields
          });
        }
        var newRightFields = filterFields(field.rightFields, predicate);
        if (newRightFields !== field.rightFields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            rightFields: newRightFields
          });
        }
      } else if (field.component === 'three-columns') {
        var _newLeftFields = filterFields(field.leftFields, predicate);
        if (_newLeftFields !== field.leftFields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            leftFields: _newLeftFields
          });
        }
        var newCenterFields = filterFields(field.centerFields, predicate);
        if (newCenterFields !== field.centerFields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            centerFields: newCenterFields
          });
        }
        var _newRightFields = filterFields(field.rightFields, predicate);
        if (_newRightFields !== field.rightFields) {
          newField = _objectSpread2(_objectSpread2({}, newField), {}, {
            rightFields: _newRightFields
          });
        }
      } else if ((field.component === 'tabs' || field.component === 'steps' || field.component === 'columns') && _isObject(field.fields) && !_isArray(field.fields)) {
        var subkeys = Object.keys(field.fields);
        // scan all keys of fields and reapply, if different instance, create a new instance
        // of new field
        subkeys.forEach(function (subkey) {
          var newFields = filterFields(field.fields[subkey], predicate);
          if (newFields !== field.fields[subkey]) {
            newField = _objectSpread2(_objectSpread2({}, newField), {}, {
              fields: _objectSpread2(_objectSpread2({}, newField.fields), {}, _defineProperty$1({}, subkey, newFields))
            });
          }
        });
      }
      return newField;
    }).filter(Boolean);

    // check if some element of the array is changed, keep instance consistency otherwise
    var hasChanges = fields.length !== newFields.length || fields.some(function (field, idx) {
      return field !== newFields[idx];
    });
    return hasChanges ? newFields : fields;
  };

  var LOCALES = {
    "primary-dialects": {
      "af": "af-ZA",
      "ar": "ar",
      "bg": "bg-BG",
      "ca": "ca-AD",
      "cs": "cs-CZ",
      "cy": "cy-GB",
      "da": "da-DK",
      "de": "de-DE",
      "el": "el-GR",
      "en": "en-US",
      "es": "es-ES",
      "et": "et-EE",
      "eu": "eu",
      "fa": "fa-IR",
      "fi": "fi-FI",
      "fr": "fr-FR",
      "he": "he-IL",
      "hi": "hi-IN",
      "hr": "hr-HR",
      "hu": "hu-HU",
      "id": "id-ID",
      "is": "is-IS",
      "it": "it-IT",
      "ja": "ja-JP",
      "km": "km-KH",
      "ko": "ko-KR",
      "la": "la",
      "lt": "lt-LT",
      "lv": "lv-LV",
      "mn": "mn-MN",
      "nb": "nb-NO",
      "nl": "nl-NL",
      "nn": "nn-NO",
      "pl": "pl-PL",
      "pt": "pt-PT",
      "ro": "ro-RO",
      "ru": "ru-RU",
      "sk": "sk-SK",
      "sl": "sl-SI",
      "sr": "sr-RS",
      "sv": "sv-SE",
      "th": "th-TH",
      "tr": "tr-TR",
      "uk": "uk-UA",
      "vi": "vi-VN",
      "zh": "zh-CN"
    },
    "language-names": {
      "af-ZA": ["Afrikaans", "Afrikaans"],
      "ar": ["العربية", "Arabic"],
      "bg-BG": ["Български", "Bulgarian"],
      "ca-AD": ["Català", "Catalan"],
      "cs-CZ": ["Čeština", "Czech"],
      "cy-GB": ["Cymraeg", "Welsh"],
      "da-DK": ["Dansk", "Danish"],
      "de-AT": ["Deutsch (Österreich)", "German (Austria)"],
      "de-CH": ["Deutsch (Schweiz)", "German (Switzerland)"],
      "de-DE": ["Deutsch (Deutschland)", "German (Germany)"],
      "el-GR": ["Ελληνικά", "Greek"],
      "en-GB": ["English (UK)", "English (UK)"],
      "en-US": ["English (US)", "English (US)"],
      "es-CL": ["Español (Chile)", "Spanish (Chile)"],
      "es-ES": ["Español (España)", "Spanish (Spain)"],
      "es-MX": ["Español (México)", "Spanish (Mexico)"],
      "et-EE": ["Eesti keel", "Estonian"],
      "eu": ["Euskara", "Basque"],
      "fa-IR": ["فارسی", "Persian"],
      "fi-FI": ["Suomi", "Finnish"],
      "fr-CA": ["Français (Canada)", "French (Canada)"],
      "fr-FR": ["Français (France)", "French (France)"],
      "he-IL": ["עברית", "Hebrew"],
      "hi-IN": ["हिंदी", "Hindi"],
      "hr-HR": ["Hrvatski", "Croatian"],
      "hu-HU": ["Magyar", "Hungarian"],
      "id-ID": ["Bahasa Indonesia", "Indonesian"],
      "is-IS": ["Íslenska", "Icelandic"],
      "it-IT": ["Italiano", "Italian"],
      "ja-JP": ["日本語", "Japanese"],
      "km-KH": ["ភាសាខ្មែរ", "Khmer"],
      "ko-KR": ["한국어", "Korean"],
      "la": ["Latina", "Latin"],
      "lt-LT": ["Lietuvių kalba", "Lithuanian"],
      "lv-LV": ["Latviešu", "Latvian"],
      "mn-MN": ["Монгол", "Mongolian"],
      "nb-NO": ["Norsk bokmål", "Norwegian (Bokmål)"],
      "nl-NL": ["Nederlands", "Dutch"],
      "nn-NO": ["Norsk nynorsk", "Norwegian (Nynorsk)"],
      "pl-PL": ["Polski", "Polish"],
      "pt-BR": ["Português (Brasil)", "Portuguese (Brazil)"],
      "pt-PT": ["Português (Portugal)", "Portuguese (Portugal)"],
      "ro-RO": ["Română", "Romanian"],
      "ru-RU": ["Русский", "Russian"],
      "sk-SK": ["Slovenčina", "Slovak"],
      "sl-SI": ["Slovenščina", "Slovenian"],
      "sr-RS": ["Српски / Srpski", "Serbian"],
      "sv-SE": ["Svenska", "Swedish"],
      "th-TH": ["ไทย", "Thai"],
      "tr-TR": ["Türkçe", "Turkish"],
      "uk-UA": ["Українська", "Ukrainian"],
      "vi-VN": ["Tiếng Việt", "Vietnamese"],
      "zh-CN": ["中文 (中国大陆)", "Chinese (PRC)"],
      "zh-TW": ["中文 (台灣)", "Chinese (Taiwan)"]
    }
  };

  var LANGUAGES_OPTIONS = Object.keys(LOCALES['language-names']).map(function (lang) {
    return {
      code: lang,
      name: LOCALES['language-names'][lang][1],
      label: "".concat(LOCALES['language-names'][lang][1])
    };
  });
  var getLocales = function getLocales() {
    return LANGUAGES_OPTIONS;
  };

  var i18n = function i18n(value, locale) {
    if (_isString(value)) {
      // if string, then return it
      return value;
    } else if (_isObject(value)) {
      var language = (locale || 'en-US').substr(0, 2);
      // if exact match of the locale
      if (locale && value[locale]) {
        return value[locale];
      }
      // if there's no dialect, then try with the first two letters
      if (locale && value[language]) {
        return value[language];
      }
      // then try with another dialect, i.e. there are translations for fr-FR and
      // the locale is fr-CA, try first with any fr-FR if present
      var firstDialect = Object.keys(value).find(function (locale) {
        return locale.startsWith(language);
      });
      if (firstDialect) {
        return value[firstDialect];
      }
      // if nothing found, defaults to english but with warning
      if (value['en'] || value['en-UK'] || value['en-US']) {
        if (!locale) {
          console.warn("[LetsForm] missing locale for translation, defaulting to English: ", value);
        } else {
          console.warn("[LetsForm] missing translation for ".concat(locale, ", defaulting to English: "), value);
        }
        return value['en'] || value['en-UK'] || value['en-US'];
      }
      console.warn("[LetsForm] missing translation for ".concat(locale, ": "), value);
      return '';
    }
    return value;
  };

  var EXCLUDED_LETSFORM_FIELDS = ['lfFramework', 'lfComponent', 'lfLocale', 'lfOnEnter', 'transformer', 'script'];

  /**
   * passRest
   * Help method to filter props passed with the rest props, removing lets-form specific properties
   * @param {*} props 
   * @param {*} additional 
   * @returns 
   */
  var passRest = function passRest(props) {
    var additional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return _omit(props, [].concat(EXCLUDED_LETSFORM_FIELDS, _toConsumableArray(_isArray(additional) ? additional : [additional])));
  };

  var filterOptions = function filterOptions(options, filterValue) {
    var filterKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
    if (_isArray(options) && !_isEmpty(filterKey) && !_isEmpty(filterValue)) {
      return options.filter(function (item) {
        return item[filterKey] === filterValue;
      });
    }
    return options;
  };

  var isEmptyForm = function isEmptyForm(form) {
    return !form || !Array.isArray(form.fields) || form.fields.length === 0;
  };

  var lfLog = function lfLog(s) {
    return console.log('%cLF%c ' + s, 'background: #3498ff; color: #ffffff; padding: 2px; border-radius: 3px', '');
  };
  var lfError = function lfError(s, e) {
    return console.log('%cLF%c Error: ' + s, 'background: #E44D2E; color: #ffffff; padding: 2px; border-radius: 3px', '', e !== null && e !== void 0 ? e : '');
  };
  var lfWarn = function lfWarn(s, e) {
    return console.log('%cLF%c Warning: ' + s, 'background: #FFBF00; color: #ffffff; padding: 2px; border-radius: 3px', '', '');
  };

  var toggle$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	checkedChildren: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	unCheckedChildren: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	tooltip: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	color: [
  		"react-material-ui",
  		"react-mantine"
  	],
  	labelPlacement: [
  		"react-material-ui"
  	],
  	disableRipple: [
  		"react-material-ui"
  	],
  	radius: [
  		"react-mantine"
  	],
  	labelPosition: [
  		"react-mantine"
  	],
  	offLabel: [
  		"react-mantine"
  	],
  	onLabel: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var select$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	placeholder: null,
  	options: null,
  	value: null,
  	image: null,
  	showImageOptions: null,
  	filterKey: null,
  	filterValue: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	fullWidth: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	width: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	placement: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	searchable: [
  		"react-rsuite5"
  	],
  	cleanable: [
  		"react-rsuite5"
  	],
  	tooltip: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	appearance: [
  		"react-rsuite5"
  	],
  	autoWidth: [
  		"react-material-ui"
  	],
  	floatingLabel: [
  		"react-material-ui",
  		"react-bootstrap"
  	],
  	variant: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	listHeight: [
  		"react-antd"
  	],
  	allowClear: [
  		"react-antd"
  	],
  	popupMatchSelectWidth: [
  		"react-antd"
  	],
  	showSearch: [
  		"react-antd"
  	],
  	virtual: [
  		"react-antd"
  	],
  	showArrow: [
  		"react-antd"
  	],
  	radius: [
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	leftSectionWidth: [
  		"react-mantine"
  	],
  	rightSectionWidth: [
  		"react-mantine"
  	],
  	withCheckIcon: [
  		"react-mantine"
  	],
  	checkIconPosition: [
  		"react-mantine"
  	],
  	allowDeselect: [
  		"react-mantine"
  	],
  	clearable: [
  		"react-mantine"
  	],
  	defaultDropdownOpened: [
  		"react-mantine"
  	],
  	withScrollArea: [
  		"react-mantine"
  	],
  	pointer: [
  		"react-mantine"
  	],
  	withErrorStyles: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var group$1 = {
  	name: null,
  	label: null,
  	hidden: null,
  	align: null,
  	collapsible: null,
  	open: null,
  	border: null
  };
  var columns$1 = {
  	name: null,
  	columns: null,
  	alignment: null,
  	size: null,
  	hidden: null
  };
  var array$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	align: null,
  	alignOffset: null,
  	arrayType: null,
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var slider$1 = {
  	name: null,
  	label: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	hint: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	tooltip: [
  		"react-rsuite5"
  	],
  	min: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	step: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	max: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	vertical: [
  		"react-rsuite5"
  	],
  	progress: [
  		"react-rsuite5"
  	],
  	showTooltip: [
  		"react-rsuite5"
  	],
  	graduated: [
  		"react-rsuite5"
  	],
  	marks: [
  		"react-rsuite5",
  		"react-antd",
  		"react-mantine"
  	],
  	value: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	size: [
  		"react-material-ui",
  		"react-mantine"
  	],
  	color: [
  		"react-material-ui",
  		"react-mantine"
  	],
  	fullWidth: [
  		"react-material-ui"
  	],
  	width: [
  		"react-material-ui"
  	],
  	valueLabelDisplay: [
  		"react-material-ui"
  	],
  	showMarks: [
  		"react-material-ui"
  	],
  	customMarks: [
  		"react-material-ui"
  	],
  	keyboard: [
  		"react-antd"
  	],
  	dots: [
  		"react-antd"
  	],
  	reverse: [
  		"react-antd"
  	],
  	tooltipOpen: [
  		"react-antd"
  	],
  	tooltipPlacement: [
  		"react-antd"
  	],
  	included: [
  		"react-antd"
  	],
  	radius: [
  		"react-mantine"
  	],
  	precision: [
  		"react-mantine"
  	],
  	inverted: [
  		"react-mantine"
  	],
  	labelAlwaysOn: [
  		"react-mantine"
  	],
  	showLabelOnHover: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var date$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	placeholder: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	format: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd"
  	],
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	appearance: [
  		"react-rsuite5"
  	],
  	placement: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	fullWidth: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	width: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	cleanable: [
  		"react-rsuite5"
  	],
  	editable: [
  		"react-rsuite5"
  	],
  	oneTap: [
  		"react-rsuite5"
  	],
  	showMeridian: [
  		"react-rsuite5"
  	],
  	showWeekNumbers: [
  		"react-rsuite5"
  	],
  	isoWeek: [
  		"react-rsuite5"
  	],
  	variant: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	color: [
  		"react-material-ui"
  	],
  	views: [
  		"react-material-ui"
  	],
  	closeOnSelect: [
  		"react-material-ui"
  	],
  	reduceAnimations: [
  		"react-material-ui"
  	],
  	showDaysOutsideCurrentMonth: [
  		"react-material-ui"
  	],
  	floatingLabel: [
  		"react-material-ui",
  		"react-bootstrap"
  	],
  	disableFuture: [
  		"react-material-ui"
  	],
  	disableHighlightToday: [
  		"react-material-ui"
  	],
  	disableOpenPicker: [
  		"react-material-ui"
  	],
  	disablePast: [
  		"react-material-ui"
  	],
  	displayWeekNumber: [
  		"react-material-ui"
  	],
  	loading: [
  		"react-material-ui"
  	],
  	fixedWeekNumber: [
  		"react-material-ui"
  	],
  	formatDensity: [
  		"react-material-ui"
  	],
  	monthsPerRow: [
  		"react-material-ui"
  	],
  	yearsPerRow: [
  		"react-material-ui"
  	],
  	minDate: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	maxDate: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	prefix: [
  		"react-bootstrap"
  	],
  	postfix: [
  		"react-bootstrap"
  	],
  	picker: [
  		"react-antd"
  	],
  	mode: [
  		"react-antd"
  	],
  	showTime: [
  		"react-antd"
  	],
  	showNow: [
  		"react-antd"
  	],
  	showToday: [
  		"react-antd"
  	],
  	preserveInvalidOnBlur: [
  		"react-antd"
  	],
  	inputReadOnly: [
  		"react-antd"
  	],
  	needConfirm: [
  		"react-antd"
  	],
  	allowClear: [
  		"react-antd"
  	],
  	tooltip: [
  		"react-antd"
  	],
  	radius: [
  		"react-mantine"
  	],
  	valueFormat: [
  		"react-mantine"
  	],
  	firstDayOfWeek: [
  		"react-mantine"
  	],
  	hideOutsideDates: [
  		"react-mantine"
  	],
  	labelSeparator: [
  		"react-mantine"
  	],
  	dateType: [
  		"react-mantine"
  	],
  	dropdownType: [
  		"react-mantine"
  	],
  	allowDeselect: [
  		"react-mantine"
  	],
  	clearable: [
  		"react-mantine"
  	],
  	hideWeekdays: [
  		"react-mantine"
  	],
  	defaultLevel: [
  		"react-mantine"
  	],
  	hasNextLevel: [
  		"react-mantine"
  	],
  	maxLevel: [
  		"react-mantine"
  	],
  	numberOfColumns: [
  		"react-mantine"
  	],
  	columnsToScroll: [
  		"react-mantine"
  	],
  	withCellSpacing: [
  		"react-mantine"
  	],
  	pointer: [
  		"react-mantine"
  	],
  	withErrorStyles: [
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	leftSectionWidth: [
  		"react-mantine"
  	],
  	rightSectionWidth: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var checkbox$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	color: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-mantine"
  	],
  	indeterminate: [
  		"react-rsuite5",
  		"react-mantine"
  	],
  	tooltip: [
  		"react-rsuite5"
  	],
  	size: [
  		"react-material-ui",
  		"react-mantine"
  	],
  	labelPlacement: [
  		"react-material-ui"
  	],
  	disableRipple: [
  		"react-material-ui"
  	],
  	radius: [
  		"react-mantine"
  	],
  	labelPosition: [
  		"react-mantine"
  	],
  	iconColor: [
  		"react-mantine"
  	],
  	autoContrast: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var textarea$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	placeholder: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	fullWidth: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	width: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	rows: [
  		"react",
  		"react-rsuite5",
  		"react-bootstrap"
  	],
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	tooltip: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	variant: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	color: [
  		"react-material-ui"
  	],
  	floatingLabel: [
  		"react-material-ui"
  	],
  	disableUnderline: [
  		"react-material-ui"
  	],
  	maxRows: [
  		"react-material-ui",
  		"react-mantine"
  	],
  	showCount: [
  		"react-antd"
  	],
  	autoSize: [
  		"react-antd"
  	],
  	maxLength: [
  		"react-antd"
  	],
  	allowClear: [
  		"react-antd"
  	],
  	radius: [
  		"react-mantine"
  	],
  	autosize: [
  		"react-mantine"
  	],
  	minRows: [
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	leftSectionWidth: [
  		"react-mantine"
  	],
  	rightSectionWidth: [
  		"react-mantine"
  	],
  	pointer: [
  		"react-mantine"
  	],
  	withErrorStyles: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var rate$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	allowHalf: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	cleanable: [
  		"react-rsuite5"
  	],
  	vertical: [
  		"react-rsuite5"
  	],
  	max: [
  		"react-rsuite5",
  		"react-material-ui"
  	],
  	color: [
  		"react-rsuite5",
  		"react-mantine"
  	],
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-mantine"
  	],
  	tooltip: [
  		"react-rsuite5",
  		"react-antd",
  		"react-antd"
  	],
  	precision: [
  		"react-material-ui"
  	],
  	count: [
  		"react-antd",
  		"react-mantine"
  	],
  	allowClear: [
  		"react-antd"
  	],
  	tooltips: [
  		"react-antd"
  	],
  	fractions: [
  		"react-mantine"
  	],
  	highlightSelectedOnly: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var placeholder$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	text: null,
  	hidden: null,
  	tooltip: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var multiselect$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	options: null,
  	value: null,
  	filterKey: null,
  	filterValue: null,
  	placeholder: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	placement: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	multiselectMode: [
  		"react-rsuite5"
  	],
  	block: [
  		"react-rsuite5"
  	],
  	searchable: [
  		"react-rsuite5",
  		"react-mantine"
  	],
  	cleanable: [
  		"react-rsuite5"
  	],
  	tooltip: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	preventOverflow: [
  		"react-rsuite5"
  	],
  	autoWidth: [
  		"react-material-ui"
  	],
  	fullWidth: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	width: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	floatingLabel: [
  		"react-material-ui"
  	],
  	variant: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	listHeight: [
  		"react-antd"
  	],
  	allowClear: [
  		"react-antd"
  	],
  	popupMatchSelectWidth: [
  		"react-antd"
  	],
  	showSearch: [
  		"react-antd"
  	],
  	virtual: [
  		"react-antd"
  	],
  	showArrow: [
  		"react-antd"
  	],
  	maxTagCount: [
  		"react-antd"
  	],
  	maxTagPlaceholder: [
  		"react-antd"
  	],
  	maxTagTextLength: [
  		"react-antd"
  	],
  	radius: [
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	leftSectionWidth: [
  		"react-mantine"
  	],
  	rightSectionWidth: [
  		"react-mantine"
  	],
  	limit: [
  		"react-mantine"
  	],
  	maxDropdownHeight: [
  		"react-mantine"
  	],
  	maxValues: [
  		"react-mantine"
  	],
  	nothingFoundMessage: [
  		"react-mantine"
  	],
  	clearable: [
  		"react-mantine"
  	],
  	defaultDropdownOpened: [
  		"react-mantine"
  	],
  	hidePickedOptions: [
  		"react-mantine"
  	],
  	pointer: [
  		"react-mantine"
  	],
  	selectFirstOptionOnChange: [
  		"react-mantine"
  	],
  	withCheckIcon: [
  		"react-mantine"
  	],
  	withErrorStyles: [
  		"react-mantine"
  	],
  	withScrollArea: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var button$1 = {
  	name: null,
  	buttonType: null,
  	labelOn: null,
  	iconOn: null,
  	labelOff: null,
  	iconOff: null,
  	initialValue: null,
  	labelLink: null,
  	iconLink: null,
  	href: null,
  	hint: null,
  	fullWidth: null,
  	width: null,
  	hidden: null,
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	appearance: [
  		"react-rsuite5"
  	],
  	tooltip: [
  		"react-rsuite5",
  		"react-mantine"
  	],
  	variant: [
  		"react-material-ui",
  		"react-bootstrap",
  		"react-mantine"
  	],
  	color: [
  		"react-material-ui",
  		"react-mantine"
  	],
  	type: [
  		"react-antd"
  	],
  	radius: [
  		"react-mantine"
  	]
  };
  var divider$1 = {
  	name: null,
  	size: null,
  	color: null,
  	hidden: null,
  	label: [
  		"react-mantine"
  	],
  	labelPosition: [
  		"react-mantine"
  	]
  };
  var datetime$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	placeholder: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	format: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd"
  	],
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	appearance: [
  		"react-rsuite5"
  	],
  	placement: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	fullWidth: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	width: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	cleanable: [
  		"react-rsuite5"
  	],
  	editable: [
  		"react-rsuite5"
  	],
  	oneTap: [
  		"react-rsuite5"
  	],
  	showMeridian: [
  		"react-rsuite5"
  	],
  	isoWeek: [
  		"react-rsuite5"
  	],
  	showWeekNumbers: [
  		"react-rsuite5"
  	],
  	variant: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	color: [
  		"react-material-ui"
  	],
  	views: [
  		"react-material-ui"
  	],
  	closeOnSelect: [
  		"react-material-ui"
  	],
  	reduceAnimations: [
  		"react-material-ui"
  	],
  	showDaysOutsideCurrentMonth: [
  		"react-material-ui"
  	],
  	floatingLabel: [
  		"react-material-ui",
  		"react-bootstrap"
  	],
  	disableFuture: [
  		"react-material-ui"
  	],
  	disableHighlightToday: [
  		"react-material-ui"
  	],
  	disableOpenPicker: [
  		"react-material-ui"
  	],
  	disablePast: [
  		"react-material-ui"
  	],
  	displayWeekNumber: [
  		"react-material-ui"
  	],
  	ampm: [
  		"react-material-ui"
  	],
  	ampmInClock: [
  		"react-material-ui"
  	],
  	forceMobile: [
  		"react-material-ui"
  	],
  	loading: [
  		"react-material-ui"
  	],
  	fixedWeekNumber: [
  		"react-material-ui"
  	],
  	formatDensity: [
  		"react-material-ui"
  	],
  	monthsPerRow: [
  		"react-material-ui"
  	],
  	yearsPerRow: [
  		"react-material-ui"
  	],
  	minDate: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	maxDate: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	minDateTime: [
  		"react-material-ui"
  	],
  	maxDateTime: [
  		"react-material-ui"
  	],
  	minutesStep: [
  		"react-material-ui"
  	],
  	timeStepsHours: [
  		"react-material-ui"
  	],
  	timeStepsMinutes: [
  		"react-material-ui"
  	],
  	timeStepsSeconds: [
  		"react-material-ui"
  	],
  	prefix: [
  		"react-bootstrap"
  	],
  	postfix: [
  		"react-bootstrap"
  	],
  	picker: [
  		"react-antd"
  	],
  	mode: [
  		"react-antd"
  	],
  	showTime: [
  		"react-antd"
  	],
  	showNow: [
  		"react-antd"
  	],
  	showToday: [
  		"react-antd"
  	],
  	preserveInvalidOnBlur: [
  		"react-antd"
  	],
  	inputReadOnly: [
  		"react-antd"
  	],
  	needConfirm: [
  		"react-antd"
  	],
  	allowClear: [
  		"react-antd"
  	],
  	tooltip: [
  		"react-antd"
  	],
  	radius: [
  		"react-mantine"
  	],
  	valueFormat: [
  		"react-mantine"
  	],
  	firstDayOfWeek: [
  		"react-mantine"
  	],
  	hideOutsideDates: [
  		"react-mantine"
  	],
  	labelSeparator: [
  		"react-mantine"
  	],
  	withSeconds: [
  		"react-mantine"
  	],
  	dropdownType: [
  		"react-mantine"
  	],
  	allowDeselect: [
  		"react-mantine"
  	],
  	clearable: [
  		"react-mantine"
  	],
  	hideWeekdays: [
  		"react-mantine"
  	],
  	defaultLevel: [
  		"react-mantine"
  	],
  	hasNextLevel: [
  		"react-mantine"
  	],
  	maxLevel: [
  		"react-mantine"
  	],
  	numberOfColumns: [
  		"react-mantine"
  	],
  	columnsToScroll: [
  		"react-mantine"
  	],
  	withCellSpacing: [
  		"react-mantine"
  	],
  	pointer: [
  		"react-mantine"
  	],
  	withErrorStyles: [
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	leftSectionWidth: [
  		"react-mantine"
  	],
  	rightSectionWidth: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var tabs$1 = {
  	name: null,
  	tabs: [
  		"react-mantine"
  	],
  	value: [
  		"react-mantine"
  	],
  	label: [
  		"react-mantine"
  	],
  	hidden: null,
  	appearance: [
  		"react-rsuite5"
  	],
  	reversed: [
  		"react-rsuite5"
  	],
  	justified: [
  		"react-rsuite5"
  	],
  	indicatorColor: [
  		"react-material-ui"
  	],
  	textColor: [
  		"react-material-ui"
  	],
  	centered: [
  		"react-material-ui",
  		"react-antd"
  	],
  	fullWidth: [
  		"react-material-ui"
  	],
  	variant: [
  		"react-bootstrap",
  		"react-mantine"
  	],
  	transition: [
  		"react-bootstrap"
  	],
  	fill: [
  		"react-bootstrap"
  	],
  	justify: [
  		"react-bootstrap",
  		"react-mantine"
  	],
  	size: [
  		"react-antd"
  	],
  	tabType: [
  		"react-antd"
  	],
  	animated: [
  		"react-antd"
  	],
  	color: [
  		"react-mantine",
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	disabled: [
  		"react-mantine"
  	],
  	radius: [
  		"react-mantine"
  	],
  	grow: [
  		"react-mantine"
  	],
  	orientation: [
  		"react-mantine"
  	],
  	placement: [
  		"react-mantine"
  	],
  	activateTabWithKeyboard: [
  		"react-mantine"
  	],
  	allowTabDeactivation: [
  		"react-mantine"
  	],
  	autoContrast: [
  		"react-mantine"
  	],
  	inverted: [
  		"react-mantine"
  	],
  	keepMounted: [
  		"react-mantine"
  	],
  	loop: [
  		"react-mantine"
  	]
  };
  var upload$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	disabled: null,
  	hidden: null,
  	accept: null,
  	acceptedFile: null,
  	uploadButtonLabel: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd"
  	],
  	multiple: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	listType: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	maxPreviewFileSize: [
  		"react-rsuite5"
  	],
  	tooltip: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	fileListVisible: [
  		"react-rsuite5"
  	],
  	disabledFileItem: [
  		"react-rsuite5"
  	],
  	removable: [
  		"react-rsuite5"
  	],
  	draggable: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	uploadButtonAppearance: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	uploadButtonSize: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd"
  	],
  	draggableText: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	draggableHeight: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	uploadButtonVariant: [
  		"react-material-ui"
  	],
  	color: [
  		"react-material-ui"
  	],
  	uploadButtonIcon: [
  		"react-material-ui"
  	],
  	maxCount: [
  		"react-antd"
  	],
  	showUploadList: [
  		"react-antd"
  	],
  	placeholder: [
  		"react-mantine"
  	],
  	size: [
  		"react-mantine"
  	],
  	radius: [
  		"react-mantine"
  	],
  	variant: [
  		"react-mantine"
  	],
  	fullWidth: [
  		"react-mantine"
  	],
  	width: [
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	leftSectionWidth: [
  		"react-mantine"
  	],
  	rightSectionWidth: [
  		"react-mantine"
  	],
  	clearable: [
  		"react-mantine"
  	],
  	pointer: [
  		"react-mantine"
  	],
  	withErrorStyles: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var steps$1 = {
  	name: null,
  	hidden: null,
  	labelNext: null,
  	labelPrevious: null,
  	align: null,
  	steps: [
  		"react-rsuite5",
  		"react-antd",
  		"react-mantine"
  	],
  	value: [
  		"react-rsuite5",
  		"react-antd",
  		"react-mantine"
  	],
  	label: [
  		"react-rsuite5",
  		"react-antd",
  		"react-mantine"
  	],
  	description: [
  		"react-rsuite5",
  		"react-antd",
  		"react-mantine"
  	],
  	icon: [
  		"react-rsuite5",
  		"react-antd",
  		"react-mantine"
  	],
  	small: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	status: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	subtitle: [
  		"react-antd"
  	],
  	stepsType: [
  		"react-antd"
  	],
  	percent: [
  		"react-antd"
  	],
  	clickable: [
  		"react-antd"
  	],
  	labelPlacement: [
  		"react-antd"
  	],
  	color: [
  		"react-mantine"
  	],
  	radius: [
  		"react-mantine"
  	],
  	size: [
  		"react-mantine"
  	],
  	iconPosition: [
  		"react-mantine"
  	],
  	iconSize: [
  		"react-mantine"
  	],
  	wrap: [
  		"react-mantine"
  	],
  	allowStepClick: [
  		"react-mantine"
  	],
  	allowStepSelect: [
  		"react-mantine"
  	],
  	autoContrast: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var time$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	placeholder: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	appearance: [
  		"react-rsuite5"
  	],
  	placement: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	fullWidth: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-mantine"
  	],
  	width: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-mantine"
  	],
  	cleanable: [
  		"react-rsuite5"
  	],
  	editable: [
  		"react-rsuite5"
  	],
  	oneTap: [
  		"react-rsuite5"
  	],
  	showMeridian: [
  		"react-rsuite5"
  	],
  	format: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-antd"
  	],
  	variant: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	color: [
  		"react-material-ui"
  	],
  	views: [
  		"react-material-ui"
  	],
  	floatingLabel: [
  		"react-material-ui"
  	],
  	ampm: [
  		"react-material-ui"
  	],
  	ampmInClock: [
  		"react-material-ui"
  	],
  	forceMobile: [
  		"react-material-ui"
  	],
  	closeOnSelect: [
  		"react-material-ui"
  	],
  	disableFuture: [
  		"react-material-ui"
  	],
  	disableOpenPicker: [
  		"react-material-ui"
  	],
  	disablePast: [
  		"react-material-ui"
  	],
  	minTime: [
  		"react-material-ui",
  		"react-mantine"
  	],
  	maxTime: [
  		"react-material-ui",
  		"react-mantine"
  	],
  	formatDensity: [
  		"react-material-ui"
  	],
  	minutesStep: [
  		"react-material-ui"
  	],
  	timeStepsHours: [
  		"react-material-ui"
  	],
  	timeStepsMinutes: [
  		"react-material-ui"
  	],
  	timeStepsSeconds: [
  		"react-material-ui"
  	],
  	hourStep: [
  		"react-antd"
  	],
  	minuteStep: [
  		"react-antd"
  	],
  	secondStep: [
  		"react-antd"
  	],
  	allowClear: [
  		"react-antd"
  	],
  	hideDisabledOptions: [
  		"react-antd"
  	],
  	inputReadOnly: [
  		"react-antd"
  	],
  	needConfirm: [
  		"react-antd"
  	],
  	showNow: [
  		"react-antd"
  	],
  	use12Hours: [
  		"react-antd"
  	],
  	tooltip: [
  		"react-antd"
  	],
  	radius: [
  		"react-mantine"
  	],
  	withSeconds: [
  		"react-mantine"
  	],
  	pointer: [
  		"react-mantine"
  	],
  	showBrowserPicker: [
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	leftSectionWidth: [
  		"react-mantine"
  	],
  	rightSectionWidth: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var hidden$1 = {
  	name: null,
  	info: null
  };
  var currency$1 = {
  	name: null,
  	label: null,
  	hint: null,
  	placeholder: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	currency: null,
  	fullWidth: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	width: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	prefix: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd"
  	],
  	inside: [
  		"react-rsuite5"
  	],
  	postfix: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd"
  	],
  	tooltip: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	variant: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	color: [
  		"react-material-ui"
  	],
  	floatingLabel: [
  		"react-material-ui",
  		"react-bootstrap"
  	],
  	disableUnderline: [
  		"react-material-ui"
  	],
  	showCount: [
  		"react-antd"
  	],
  	maxLength: [
  		"react-antd"
  	],
  	allowClear: [
  		"react-antd"
  	],
  	radius: [
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	leftSectionWidth: [
  		"react-mantine"
  	],
  	rightSectionWidth: [
  		"react-mantine"
  	],
  	pointer: [
  		"react-mantine"
  	],
  	withErrorStyles: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  };
  var FIELD_MAPPINGS = {
  	"input-text": {
  	name: null,
  	label: null,
  	hint: null,
  	placeholder: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	submitOnEnter: null,
  	fullWidth: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	width: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	prefix: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd"
  	],
  	inside: [
  		"react-rsuite5"
  	],
  	postfix: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd"
  	],
  	tooltip: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	variant: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	color: [
  		"react-material-ui"
  	],
  	floatingLabel: [
  		"react-material-ui",
  		"react-bootstrap"
  	],
  	disableUnderline: [
  		"react-material-ui"
  	],
  	showCount: [
  		"react-antd"
  	],
  	maxLength: [
  		"react-antd"
  	],
  	allowClear: [
  		"react-antd"
  	],
  	radius: [
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	leftSectionWidth: [
  		"react-mantine"
  	],
  	rightSectionWidth: [
  		"react-mantine"
  	],
  	pointer: [
  		"react-mantine"
  	],
  	withErrorStyles: [
  		"react-mantine"
  	],
  	inputMode: null,
  	autocomplete: null,
  	inputType: null,
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  },
  	toggle: toggle$1,
  	select: select$1,
  	group: group$1,
  	"two-columns": {
  	name: null,
  	layout: null,
  	leftAlignment: null,
  	rightAlignment: null,
  	hidden: null
  },
  	"three-columns": {
  	name: null,
  	layout: null,
  	leftAlignment: null,
  	centerAlignment: null,
  	rightAlignment: null,
  	hidden: null
  },
  	columns: columns$1,
  	array: array$1,
  	"input-number": {
  	name: null,
  	label: null,
  	hint: null,
  	placeholder: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	min: [
  		"react",
  		"react-rsuite5",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	step: [
  		"react",
  		"react-rsuite5",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	max: [
  		"react",
  		"react-rsuite5",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	fullWidth: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	width: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	size: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	allowClear: [
  		"react-rsuite5"
  	],
  	prefix: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd"
  	],
  	inside: [
  		"react-rsuite5"
  	],
  	postfix: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd"
  	],
  	tooltip: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	variant: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	color: [
  		"react-material-ui"
  	],
  	floatingLabel: [
  		"react-material-ui",
  		"react-bootstrap"
  	],
  	disableUnderline: [
  		"react-material-ui"
  	],
  	showControls: [
  		"react-antd"
  	],
  	stringMode: [
  		"react-antd"
  	],
  	radius: [
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	leftSectionWidth: [
  		"react-mantine"
  	],
  	rightSectionWidth: [
  		"react-mantine"
  	],
  	pointer: [
  		"react-mantine"
  	],
  	withErrorStyles: [
  		"react-mantine"
  	],
  	valueIsNumericString: [
  		"react-mantine"
  	],
  	hideControls: [
  		"react-mantine"
  	],
  	allowLeadingZeros: [
  		"react-mantine"
  	],
  	allowNegative: [
  		"react-mantine"
  	],
  	clampBehavior: [
  		"react-mantine"
  	],
  	startValue: [
  		"react-mantine"
  	],
  	allowDecimal: [
  		"react-mantine"
  	],
  	decimalSeparator: [
  		"react-mantine"
  	],
  	fixedDecimalScale: [
  		"react-mantine"
  	],
  	decimalScale: [
  		"react-mantine"
  	],
  	thousandsGroupStyle: [
  		"react-mantine"
  	],
  	thousandSeparator: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  },
  	slider: slider$1,
  	date: date$1,
  	checkbox: checkbox$1,
  	"checkbox-group": {
  	name: null,
  	label: [
  		"react-mantine"
  	],
  	hint: null,
  	options: [
  		"react-mantine"
  	],
  	value: [
  		"react-mantine"
  	],
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	color: [
  		"react-rsuite5",
  		"react-material-ui",
  		"react-mantine"
  	],
  	inline: [
  		"react-rsuite5",
  		"react-bootstrap"
  	],
  	tooltip: [
  		"react-rsuite5"
  	],
  	size: [
  		"react-material-ui",
  		"react-mantine"
  	],
  	labelPlacement: [
  		"react-material-ui"
  	],
  	reverse: [
  		"react-bootstrap"
  	],
  	description: [
  		"react-mantine"
  	],
  	radius: [
  		"react-mantine"
  	],
  	labelPosition: [
  		"react-mantine"
  	],
  	iconColor: [
  		"react-mantine"
  	],
  	autoContrast: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  },
  	"radio-group": {
  	name: null,
  	label: [
  		"react-mantine"
  	],
  	hint: null,
  	options: [
  		"react-mantine"
  	],
  	value: [
  		"react-mantine"
  	],
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	inline: [
  		"react-rsuite5",
  		"react-bootstrap",
  		"react-antd"
  	],
  	appearance: [
  		"react-rsuite5"
  	],
  	tooltip: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	size: [
  		"react-material-ui",
  		"react-antd",
  		"react-mantine"
  	],
  	color: [
  		"react-material-ui",
  		"react-mantine"
  	],
  	labelPlacement: [
  		"react-material-ui"
  	],
  	row: [
  		"react-material-ui"
  	],
  	reverse: [
  		"react-bootstrap"
  	],
  	optionType: [
  		"react-antd"
  	],
  	description: [
  		"react-mantine"
  	],
  	radius: [
  		"react-mantine"
  	],
  	labelPosition: [
  		"react-mantine"
  	],
  	iconColor: [
  		"react-mantine"
  	],
  	autoContrast: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  },
  	"input-tag": {
  	name: null,
  	label: [
  		"react-mantine"
  	],
  	hint: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	trigger: [
  		"react-rsuite5"
  	],
  	block: [
  		"react-rsuite5"
  	],
  	size: [
  		"react-rsuite5",
  		"react-mantine"
  	],
  	tooltip: [
  		"react-rsuite5"
  	],
  	radius: [
  		"react-mantine"
  	],
  	variant: [
  		"react-mantine"
  	],
  	data: [
  		"react-mantine"
  	],
  	value: [
  		"react-mantine"
  	],
  	leftSection: [
  		"react-mantine"
  	],
  	rightSection: [
  		"react-mantine"
  	],
  	leftSectionWidth: [
  		"react-mantine"
  	],
  	rightSectionWidth: [
  		"react-mantine"
  	],
  	maxTags: [
  		"react-mantine"
  	],
  	maxDropdownHeight: [
  		"react-mantine"
  	],
  	limit: [
  		"react-mantine"
  	],
  	allowDuplicates: [
  		"react-mantine"
  	],
  	clearable: [
  		"react-mantine"
  	],
  	defaultDropdownOpened: [
  		"react-mantine"
  	],
  	pointer: [
  		"react-mantine"
  	],
  	searchable: [
  		"react-mantine"
  	],
  	selectFirstOptionOnChange: [
  		"react-mantine"
  	],
  	withCheckIcon: [
  		"react-mantine"
  	],
  	withErrorStyles: [
  		"react-mantine"
  	],
  	withScrollArea: [
  		"react-mantine"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  },
  	"input-mask": {
  	name: null,
  	label: null,
  	hint: null,
  	placeholder: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	mask: [
  		"react-rsuite5"
  	],
  	guide: [
  		"react-rsuite5"
  	],
  	keepCharPositions: [
  		"react-rsuite5"
  	],
  	showMask: [
  		"react-rsuite5"
  	],
  	placeholderChar: [
  		"react-rsuite5"
  	],
  	fullWidth: [
  		"react-rsuite5"
  	],
  	width: [
  		"react-rsuite5"
  	],
  	size: [
  		"react-rsuite5"
  	],
  	tooltip: [
  		"react-rsuite5"
  	],
  	prefix: [
  		"react-rsuite5"
  	],
  	inside: [
  		"react-rsuite5"
  	],
  	postfix: [
  		"react-rsuite5"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  },
  	textarea: textarea$1,
  	rate: rate$1,
  	placeholder: placeholder$1,
  	multiselect: multiselect$1,
  	"input-text-i18n": {
  	name: null,
  	label: null,
  	hint: null,
  	placeholder: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	size: [
  		"react-rsuite5"
  	],
  	width: [
  		"react-rsuite5"
  	],
  	textarea: [
  		"react-rsuite5"
  	],
  	rows: [
  		"react-rsuite5"
  	],
  	tooltip: [
  		"react-rsuite5"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  },
  	"placeholder-image": {
  	name: null,
  	url: null,
  	align: null,
  	hidden: null,
  	maxWidth: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	maxHeight: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	marginTop: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	],
  	marginBottom: [
  		"react",
  		"react-rsuite5",
  		"react-material-ui",
  		"react-bootstrap",
  		"react-antd",
  		"react-mantine"
  	]
  },
  	button: button$1,
  	divider: divider$1,
  	datetime: datetime$1,
  	tabs: tabs$1,
  	"radio-tile": {
  	name: null,
  	label: null,
  	hint: null,
  	options: null,
  	value: null,
  	description: null,
  	icon: null,
  	initalOption: null,
  	disabled: null,
  	hidden: null,
  	inline: [
  		"react-rsuite5"
  	],
  	iconWidth: [
  		"react-rsuite5"
  	],
  	iconHeight: [
  		"react-rsuite5"
  	],
  	tooltip: [
  		"react-rsuite5"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  },
  	upload: upload$1,
  	"buttons-toggle-group": {
  	name: null,
  	label: null,
  	hint: null,
  	options: null,
  	value: null,
  	image: null,
  	showImageOptions: null,
  	multiple: null,
  	disabled: null,
  	readOnly: null,
  	hidden: null,
  	fullWidth: null,
  	justifyContent: null,
  	size: [
  		"react-rsuite5",
  		"react-antd"
  	],
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  },
  	steps: steps$1,
  	"esm-module": {
  	name: null,
  	label: null,
  	hint: null,
  	componentUrl: null,
  	defaultExport: null,
  	exportedKey: null,
  	count: null,
  	placeholder: null,
  	validationMinLength: "validation",
  	validationMin: "validation",
  	validationMaxLength: "validation",
  	validationMax: "validation",
  	validationPattern: "validation",
  	validationMessage: "validation",
  	required: null
  },
  	time: time$1,
  	hidden: hidden$1,
  	currency: currency$1
  };

  var translateValidationKey = function translateValidationKey(str) {
    if (str.startsWith('validation')) {
      str = str.replace(/^validation/, '');
      if (str.length !== 0) {
        str = str[0].toLowerCase() + str.slice(1);
      }
      return str;
    } else {
      return str;
    }
  };
  var ApiFactory = function ApiFactory(_ref2) {
    var formName = _ref2.formName,
      framework = _ref2.framework,
      formFields = _ref2.formFields,
      currentValues = _ref2.currentValues,
      formContext = _ref2.formContext,
      components = _ref2.components;
    var _fields = formFields;
    var rerenders = {}; // store re-render requests after field change
    var scheduledChanges = {};
    var fieldExists = function fieldExists(name) {
      if (findField(_fields, function (field) {
        return field.name === name;
      }) != null) {
        return true;
      } else {
        throw new Error("Field \"".concat(name, "\" doesn't exist in the form"));
      }
    };

    // define some helpers to unclutter logig below
    var isCustomComponent = function isCustomComponent(component) {
      return components[component] && components[component].custom === true;
    };
    var isCommonProperty = function isCommonProperty(component, key) {
      return FIELD_MAPPINGS[component] && FIELD_MAPPINGS[component][key] !== undefined;
    };
    var isValidationProperty = function isValidationProperty(component, key) {
      return FIELD_MAPPINGS[component] && FIELD_MAPPINGS[component][key] === 'validation';
    };
    var isFrameworkProperty = function isFrameworkProperty(component, key, framework) {
      return FIELD_MAPPINGS[component] && _isArray(FIELD_MAPPINGS[component][key]) && FIELD_MAPPINGS[component][key].includes(framework);
    };
    var isPropertyExisting = function isPropertyExisting(component, key, framework) {
      return isCommonProperty(component, key) || isFrameworkProperty(component, key, framework);
    };
    var methods = {
      fields: function fields() {
        return _fields;
      },
      context: function context(key) {
        return formContext ? formContext[key] : null;
      },
      setFieldValue: function setFieldValue(name, value) {
        // set the field to be re-rendered if it's uncontrolled
        rerenders[name] = rerenders[name] ? rerenders[name] + 1 : 1;
        // schedule a field change and differ it, otherwise setValue will trigger the re-design of the component
        // before the information or re-render reaches it
        scheduledChanges[name] = value;
      },
      getReRenders: function getReRenders() {
        return rerenders;
      },
      getScheduledChanges: function getScheduledChanges() {
        return scheduledChanges;
      },
      element: function element(name) {
        if (!fieldExists(name)) {
          return;
        }
        var form = document.querySelector("[data-lf-form-name=".concat(formName, "]"));
        if (form) {
          return form.querySelector("[data-lf-field-name=".concat(name, "]"));
        }
        return null;
      },
      style: function style(name, prop, value) {
        if (!fieldExists(name)) {
          return;
        }
        // find the form, then the element, then apply the style
        var form = document.querySelector("[data-lf-form-name=".concat(formName, "]"));
        if (form) {
          var element = form.querySelector("[data-lf-field-name=".concat(name, "]"));
          if (element) {
            if (_isString(prop)) {
              element.style[prop] = value;
            } else if (_isObject(prop)) {
              Object.keys(prop).forEach(function (key) {
                return element.style[key] = prop[key];
              });
            }
          }
        }
      },
      css: function css(className, obj) {
        // find the form
        var form = document.querySelector("[data-lf-form-name=".concat(formName, "]"));
        if (form) {
          var element = form.querySelector(className);
          if (element && _isObject(obj)) {
            Object.keys(obj).forEach(function (key) {
              return element.style[key] = obj[key];
            });
          }
        }
      },
      toggle: function toggle(name, key) {
        var field = findField(_fields, function (field) {
          return field.name === name;
        });
        if (!field) {
          return;
        }
        methods.setParam(name, key, !field[key]);
      },
      setParam: function setParam(name, key, value) {
        if (!fieldExists(name)) {
          return;
        }
        _fields = mapFields(_fields, function (field) {
          if (field.name === name) {
            // if components doesn't exist in manifest/mapping and is not a custom component
            if (!isPropertyExisting(field.component, key, framework) && !isCustomComponent(field.component)) {
              console.warn("[LetsForm] param \"".concat(key, "\" for component \"").concat(field.component, "\" in framework \"").concat(framework, "\" doesn't exist"));
            }
            if (isValidationProperty(field.component, key)) {
              var _field$validation;
              // handle special case of validation fields
              return _objectSpread2(_objectSpread2({}, field), {}, {
                validation: _objectSpread2(_objectSpread2({}, (_field$validation = field.validation) !== null && _field$validation !== void 0 ? _field$validation : {}), {}, _defineProperty$1({}, translateValidationKey(key), value))
              });
            } else if (isFrameworkProperty(field.component, key, framework)) {
              var _field$framework;
              // key property it's a framework specific key, belongs to one or more frameworks, so it must be
              // set in the specific subset, use the current framework so set it
              return _objectSpread2(_objectSpread2({}, field), {}, _defineProperty$1({}, framework, _objectSpread2(_objectSpread2({}, (_field$framework = field[framework]) !== null && _field$framework !== void 0 ? _field$framework : {}), {}, _defineProperty$1({}, key, value))));
            }
            // key property exists but it's just common property to all frameworks
            return _objectSpread2(_objectSpread2({}, field), {}, _defineProperty$1({}, key, value));
          }
          return field;
        });
      },
      setValue: function setValue(name, key, value) {
        lfWarn('LetsForm Script .setValue() is deprecated, use .setParam() instead');
        return methods.setParam(name, key, value);
      },
      enable: function enable(name) {
        if (!fieldExists(name)) {
          return;
        }
        _fields = mapFields(_fields, function (field) {
          if (field.name === name) {
            return _objectSpread2(_objectSpread2({}, field), {}, {
              disabled: false
            });
          }
          return field;
        });
      },
      disable: function disable(name) {
        if (!fieldExists(name)) {
          return;
        }
        _fields = mapFields(_fields, function (field) {
          if (field.name === name) {
            return _objectSpread2(_objectSpread2({}, field), {}, {
              disabled: true
            });
          }
          return field;
        });
      },
      show: function show(name) {
        if (!fieldExists(name)) {
          return;
        }
        _fields = mapFields(_fields, function (field) {
          if (field.name === name) {
            return _objectSpread2(_objectSpread2({}, field), {}, {
              hidden: false
            });
          }
          return field;
        });
      },
      hide: function hide(name) {
        if (!fieldExists(name)) {
          return;
        }
        _fields = mapFields(_fields, function (field) {
          if (field.name === name) {
            return _objectSpread2(_objectSpread2({}, field), {}, {
              hidden: true
            });
          }
          return field;
        });
      },
      arraySetValue: function arraySetValue(name, key, value) {
        lfWarn('LetsForm Script .arraySetValue() is deprecated, use .arraySetParam() instead');
        return methods.arraySetParam(name, key, value);
      },
      /**
       * Change field property inside and array
       * @param {*} arrayName
       * @param {*} arrayFieldName
       * @param {*} key
       * @param {*} value
       * @returns
       */
      arraySetParam: function arraySetParam(arrayName, arrayFieldName, key, value) {
        if (!fieldExists(arrayName)) {
          return;
        }
        _fields = mapFields(_fields, function (arrayField) {
          if (arrayField.component === 'array' && arrayField.name === arrayName) {
            var newFields = mapFields(arrayField.fields, function (field) {
              if (field.name === arrayFieldName) {
                return _objectSpread2(_objectSpread2({}, field), {}, _defineProperty$1({}, key, value));
              }
              return field;
            });
            return _objectSpread2(_objectSpread2({}, arrayField), {}, {
              fields: newFields
            });
          }
          return arrayField;
        });
      },
      values: Object.freeze(_objectSpread2({}, currentValues))
    };
    return methods;
  };

  /**
   * applyTransformers
   * Apply a list of transformers
   * @param {*} formName
   * @param {*} framework
   * @param {*} fields
   * @param {*} transformers
   * @param {*} values
   * @param {*} onJavascriptError
   * @param {*} formContext
   * @param {*} setValue
   */
  var applyTransformers = /*#__PURE__*/function () {
    var _ref = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(formName, framework, fields, transformers, values, onJavascriptError, formContext, components) {
      var newFields, txs, idx, api, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, f, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(_isArray(transformers) && !_isEmpty(transformers))) {
              _context.next = 52;
              break;
            }
            newFields = fields; // apply all transformers
            txs = transformers;
            /*.filter(transformer => _.isFunction(transformer))*/
            idx = 0;
          case 4:
            if (!(idx < txs.length)) {
              _context.next = 48;
              break;
            }
            api = new ApiFactory({
              formName: formName,
              framework: framework,
              formFields: newFields,
              currentValues: values,
              formContext: formContext,
              components: components
            });
            _context.prev = 6;
            _iteratorAbruptCompletion = false;
            _didIteratorError = false;
            _context.prev = 9;
            _iterator = _asyncIterator(txs[idx](api));
          case 11:
            _context.next = 13;
            return _awaitAsyncGenerator(_iterator.next());
          case 13:
            if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
              _context.next = 21;
              break;
            }
            f = _step.value;
            newFields = f;
            _context.next = 18;
            return {
              fields: f,
              rerenders: api.getReRenders(),
              changes: api.getScheduledChanges()
            };
          case 18:
            _iteratorAbruptCompletion = false;
            _context.next = 11;
            break;
          case 21:
            _context.next = 27;
            break;
          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](9);
            _didIteratorError = true;
            _iteratorError = _context.t0;
          case 27:
            _context.prev = 27;
            _context.prev = 28;
            if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
              _context.next = 32;
              break;
            }
            _context.next = 32;
            return _awaitAsyncGenerator(_iterator.return());
          case 32:
            _context.prev = 32;
            if (!_didIteratorError) {
              _context.next = 35;
              break;
            }
            throw _iteratorError;
          case 35:
            return _context.finish(32);
          case 36:
            return _context.finish(27);
          case 37:
            _context.next = 45;
            break;
          case 39:
            _context.prev = 39;
            _context.t1 = _context["catch"](6);
            console.error('[LetsForm] Error in script: ', _context.t1);
            error = new Error('Error executing script: ' + _context.t1.message, {
              cause: _context.t1
            });
            error.errorType = 'runtime';
            onJavascriptError(error);
          case 45:
            idx++;
            _context.next = 4;
            break;
          case 48:
            _context.next = 50;
            return {
              fields: newFields
            };
          case 50:
            _context.next = 54;
            break;
          case 52:
            _context.next = 54;
            return {
              fields: fields
            };
          case 54:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[6, 39], [9, 23, 27, 37], [28,, 32, 36]]);
    }));
    return function applyTransformers(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {
      return _ref.apply(this, arguments);
    };
  }();

  var isUrl = function isUrl(url) {
    return _isString(url) && url.match(/^http[s]{0,1}:\/\//);
  };

  var makeWidthStyle = function makeWidthStyle(fullWidth, width) {
    var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (fullWidth) {
      return _objectSpread2(_objectSpread2({}, style), {}, {
        width: '100%'
      });
    } else if (width) {
      return _objectSpread2(_objectSpread2({}, style), {}, {
        width: "".concat(parseInt(width, 10), "px")
      });
    }
    return _objectSpread2(_objectSpread2({}, style), {}, {
      width: 'auto'
    });
  };

  var collectNames = function collectNames(form) {
    if (form && _isArray(form.fields) && !_isEmpty(form.fields)) {
      return reduceFields(form.fields, function (field, accumulator) {
        if (!accumulator.includes(field.name)) {
          return [].concat(_toConsumableArray(accumulator), [field.name]);
        }
        return accumulator;
      }, []);
    }
    return [];
  };

  /**
   * isValidDate
   * _.date() is not enough, it could be a date object but an invalid date, in that
   * case toISOString will fail
   * @param {} d 
   * @returns 
   */
  var isValidDate = function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  };

  var toggle = {
  	label: "Toggle",
  	category: "general",
  	name: "toggle",
  	frameworks: [
  		"react-antd",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "checkedChildren",
  			type: "string | i18n"
  		},
  		{
  			name: "unCheckedChildren",
  			type: "string | i18n"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium",
  				"large"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "labelPlacement",
  			type: "string",
  			options: [
  				"top",
  				"start",
  				"bottom",
  				"end"
  			]
  		},
  		{
  			name: "disableRipple",
  			type: "boolean",
  			description: "Disable CSS ripple effect"
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"default",
  				"small"
  			]
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		},
  		{
  			name: "checkedChildren",
  			type: "string | i18n"
  		},
  		{
  			name: "unCheckedChildren",
  			type: "string | i18n"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "labelPosition",
  			type: "string",
  			options: [
  				"left",
  				"right"
  			]
  		},
  		{
  			name: "offLabel",
  			type: "string",
  			description: "\tInner label when the Switch is in unchecked state"
  		},
  		{
  			name: "onLabel",
  			type: "string",
  			description: "Inner label when the Switch is in checked state"
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		}
  	]
  };
  var select = {
  	label: "Select",
  	category: "general",
  	description: "Select / Combo box",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	name: "select",
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "placeholder",
  			type: "string | i18n",
  			description: "Placeholder text, visibile when the field is empty"
  		},
  		{
  			name: "options",
  			type: "array"
  		},
  		{
  			name: "showImageOptions",
  			type: "boolean",
  			description: "Show image field for Select options to be displayed in the drop-down"
  		},
  		{
  			name: "filterKey",
  			type: "string"
  		},
  		{
  			name: "filterValue",
  			type: "string"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	react: [
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "placement",
  			type: "string",
  			options: [
  				"topStart",
  				"topEnd",
  				"leftStart",
  				"rightStart",
  				"leftEnd",
  				"rightEnd",
  				"bottomStart",
  				"bottomEnd",
  				"auto",
  				"autoVerticalStart",
  				"autoVerticalEnd",
  				"autoHorizontalStart",
  				"autoHorizontalEnd"
  			]
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "searchable",
  			type: "boolean"
  		},
  		{
  			name: "cleanable",
  			type: "boolean"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		},
  		{
  			name: "appearance",
  			type: "string",
  			options: [
  				"default",
  				"subtle"
  			]
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium"
  			]
  		},
  		{
  			name: "autoWidth",
  			type: "boolean",
  			description: "If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input."
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Show floating label for the control"
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"filled",
  				"standard"
  			]
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"sm"
  			]
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"borderless",
  				"filled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "placement",
  			type: "string",
  			options: [
  				"bottomLeft",
  				"bottomRight",
  				"topLeft",
  				"topRight"
  			]
  		},
  		{
  			name: "listHeight",
  			type: "number",
  			description: "Config popup height"
  		},
  		{
  			name: "allowClear",
  			type: "boolean"
  		},
  		{
  			name: "popupMatchSelectWidth",
  			type: "boolean",
  			description: "Determine whether the popup menu and the select input are the same width"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		},
  		{
  			name: "showSearch",
  			type: "boolean",
  			description: "Whether select is searchable"
  		},
  		{
  			name: "virtual",
  			type: "boolean"
  		},
  		{
  			name: "showArrow",
  			type: "boolean"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"filled",
  				"unstyled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "leftSection",
  			type: "string"
  		},
  		{
  			name: "rightSection",
  			type: "string"
  		},
  		{
  			name: "leftSectionWidth",
  			type: "number"
  		},
  		{
  			name: "rightSectionWidth",
  			type: "number"
  		},
  		{
  			name: "withCheckIcon",
  			type: "boolean",
  			description: "Determines whether check icon should be displayed near the selected option label, true by default"
  		},
  		{
  			name: "checkIconPosition",
  			type: "string",
  			options: [
  				"left",
  				"right"
  			]
  		},
  		{
  			name: "allowDeselect",
  			type: "boolean",
  			description: "Determines whether it should be possible to deselect value by clicking on the selected option, true by default"
  		},
  		{
  			name: "clearable",
  			type: "boolean",
  			description: "Determines whether the clear button should be displayed in the right section when the component has value, false by default"
  		},
  		{
  			name: "defaultDropdownOpened",
  			type: "boolean",
  			description: "Uncontrolled dropdown initial opened state"
  		},
  		{
  			name: "withScrollArea",
  			type: "boolean",
  			description: "Determines whether the options should be wrapped with scroll bars, true by default"
  		},
  		{
  			name: "pointer",
  			type: "boolean",
  			description: "Determines whether the input should have cursor: pointer style, false by default"
  		},
  		{
  			name: "withErrorStyles",
  			type: "boolean",
  			description: "Determines whether the input should have red border and red text color when the error prop is set, true by default"
  		}
  	]
  };
  var group = {
  	label: "Group",
  	category: "layout",
  	name: "group",
  	description: "Visually Group a set of fields, can be collapsed",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		},
  		{
  			name: "align",
  			type: "string",
  			options: [
  				"left",
  				"center",
  				"right"
  			]
  		},
  		{
  			name: "collapsible",
  			type: "boolean"
  		},
  		{
  			name: "open",
  			type: "boolean"
  		},
  		{
  			name: "border",
  			type: "string",
  			options: [
  				"top",
  				"bottom",
  				"topBottom",
  				"boxed"
  			]
  		}
  	]
  };
  var columns = {
  	label: "Columns",
  	category: "layout",
  	name: "columns",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "columns",
  			type: "array"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	]
  };
  var array = {
  	label: "List Array",
  	category: "general",
  	name: "array",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	"react-mui": [
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		},
  		{
  			name: "align",
  			type: "string",
  			description: "Vertical alignment of add / remove buttons",
  			options: [
  				"top",
  				"center",
  				"bottom"
  			]
  		},
  		{
  			name: "alignOffset",
  			type: "number",
  			description: "Offset of the add / remove button from the top / bottom (depends on the alignment)"
  		},
  		{
  			name: "arrayType",
  			type: "string",
  			description: "Defines the result of the list component, \"arrayOfString\" and \"commaSeparated\" only applies if list field has only one field",
  			options: [
  				"arrayOfObject",
  				"arrayOfString",
  				"commaSeparated"
  			]
  		}
  	]
  };
  var slider = {
  	label: "Slider",
  	category: "general",
  	name: "slider",
  	frameworks: [
  		"react-antd",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		},
  		{
  			name: "min",
  			type: "number"
  		},
  		{
  			name: "step",
  			type: "number"
  		},
  		{
  			name: "max",
  			type: "number"
  		},
  		{
  			name: "vertical",
  			type: "boolean"
  		},
  		{
  			name: "progress",
  			type: "boolean",
  			description: "Show sliding progress bar"
  		},
  		{
  			name: "showTooltip",
  			type: "boolean",
  			description: "Whether to show Tooltip when sliding"
  		},
  		{
  			name: "graduated",
  			type: "boolean"
  		},
  		{
  			name: "marks",
  			type: "array",
  			description: "Customize labels on the render ruler"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "min",
  			type: "number"
  		},
  		{
  			name: "step",
  			type: "number"
  		},
  		{
  			name: "max",
  			type: "number"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "valueLabelDisplay",
  			type: "string",
  			description: "How to show the value of the label",
  			options: [
  				"auto",
  				"on",
  				"off"
  			]
  		},
  		{
  			name: "showMarks",
  			type: "boolean"
  		},
  		{
  			name: "customMarks",
  			type: "array",
  			description: "Customize labels on the render ruler"
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "min",
  			type: "number"
  		},
  		{
  			name: "step",
  			type: "number"
  		},
  		{
  			name: "max",
  			type: "number"
  		}
  	],
  	"react-antd": [
  		{
  			name: "keyboard",
  			type: "boolean",
  			description: "Support using keyboard to move handlers"
  		},
  		{
  			name: "dots",
  			type: "boolean",
  			description: "Whether the thumb can drag over tick only"
  		},
  		{
  			name: "reverse",
  			type: "boolean",
  			description: "Reverse the component"
  		},
  		{
  			name: "min",
  			type: "number"
  		},
  		{
  			name: "step",
  			type: "number"
  		},
  		{
  			name: "max",
  			type: "number"
  		},
  		{
  			name: "tooltipOpen",
  			type: "boolean",
  			description: "Tooltip behaviour, checked always open, unchecked always close"
  		},
  		{
  			name: "tooltipPlacement",
  			type: "string",
  			options: [
  				"top",
  				"left",
  				"right",
  				"bottom",
  				"topLeft",
  				"topRight",
  				"bottomLeft",
  				"bottomRight",
  				"topLeft",
  				"topRight",
  				"leftTop",
  				"leftBottom",
  				"rightTop",
  				"rightBottom"
  			]
  		},
  		{
  			name: "marks",
  			type: "array",
  			description: "Customize labels on the render ruler"
  		},
  		{
  			name: "included",
  			type: "boolean",
  			description: "Make effect when marks not null, true means containment and false means coordinative"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "min",
  			type: "number"
  		},
  		{
  			name: "step",
  			type: "number"
  		},
  		{
  			name: "max",
  			type: "number"
  		},
  		{
  			name: "marks",
  			type: "array",
  			description: "Customize labels on the render ruler"
  		},
  		{
  			name: "precision",
  			type: "number",
  			description: "Number of significant digits after the decimal point"
  		},
  		{
  			name: "inverted",
  			type: "boolean",
  			description: "Determines whether track value representation should be inverted, false by default"
  		},
  		{
  			name: "labelAlwaysOn",
  			type: "boolean",
  			description: "Determines whether the label should be visible when the slider is not being dragged or hovered, false by default"
  		},
  		{
  			name: "showLabelOnHover",
  			type: "boolean",
  			description: "Determines whether the label should be displayed when the slider is hovered, true by default"
  		}
  	]
  };
  var date = {
  	label: "Date",
  	category: "general",
  	description: "Date field, returns a string in ISO-8601 format (i.e., 1972-10-01)",
  	name: "date",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	dependencies: {
  		"react-material-ui": {
  			imports: {
  			},
  			js: [
  				"import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';",
  				"import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';",
  				null
  			],
  			packages: {
  				"@mui/x-date-pickers": "latest",
  				dayjs: "latest"
  			}
  		},
  		"react-mantine": {
  			js: [
  				null
  			],
  			css: [
  				null
  			],
  			imports: {
  			},
  			packages: {
  				"@mantine/dates": "^7.6.2",
  				dayjs: "^1.11.10"
  			}
  		},
  		"react-rsuite5": {
  			js: [
  				null
  			],
  			css: [
  			],
  			imports: {
  			},
  			packages: {
  			}
  		},
  		"react-antd": {
  			js: [
  				null,
  				null,
  				null
  			],
  			css: [
  			],
  			imports: {
  			},
  			packages: {
  				dayjs: "^1.11.10"
  			}
  		}
  	},
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "placeholder",
  			type: "string | i18n",
  			description: "Placeholder text, visibile when the field is empty"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "format",
  			type: "string",
  			description: "Check https://date-fns.org library for available formats"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "appearance",
  			type: "string",
  			options: [
  				"default",
  				"subtle"
  			]
  		},
  		{
  			name: "placement",
  			type: "string",
  			options: [
  				"topStart",
  				"topEnd",
  				"leftStart",
  				"rightStart",
  				"leftEnd",
  				"rightEnd",
  				"bottomStart",
  				"bottomEnd",
  				"auto",
  				"autoVerticalStart",
  				"autoVerticalEnd",
  				"autoHorizontalStart",
  				"autoHorizontalEnd"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "cleanable",
  			type: "boolean"
  		},
  		{
  			name: "editable",
  			type: "boolean",
  			description: "Rendered as an input, the date can be entered via the keyboard"
  		},
  		{
  			name: "oneTap",
  			type: "boolean",
  			description: "One click to complete the selection date"
  		},
  		{
  			name: "showMeridian",
  			type: "boolean",
  			description: "Display hours in 12 format"
  		},
  		{
  			name: "showWeekNumbers",
  			type: "boolean"
  		},
  		{
  			name: "isoWeek",
  			type: "boolean",
  			description: "ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"filled",
  				"standard"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "format",
  			type: "string",
  			description: "Check https://date-fns.org library for available formats"
  		},
  		{
  			name: "views",
  			type: "[string]",
  			description: "Available views",
  			options: [
  				"day",
  				"month",
  				"year"
  			]
  		},
  		{
  			name: "closeOnSelect",
  			type: "boolean",
  			description: "If true, the popover or modal will close after submitting the full date"
  		},
  		{
  			name: "reduceAnimations",
  			type: "boolean",
  			description: "If true, disable heavy animations"
  		},
  		{
  			name: "showDaysOutsideCurrentMonth",
  			type: "boolean",
  			description: "If true, days outside the current month are rendered:\n- if fixedWeekNumber is defined, renders days to have the weeks requested.\n- if fixedWeekNumber is not defined, renders day to fill the first and last week of the current month.\n- ignored if calendars equals more than 1 on range pickers"
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Show floating label for the control"
  		},
  		{
  			name: "disableFuture",
  			type: "boolean",
  			description: "If true, disable values after the current date for date components, time for time components and both for date time components"
  		},
  		{
  			name: "disableHighlightToday",
  			type: "boolean",
  			description: "If true, today's date is rendering without highlighting with circle"
  		},
  		{
  			name: "disableOpenPicker",
  			type: "boolean",
  			description: "If true, the open picker button will not be rendered (renders only the field)"
  		},
  		{
  			name: "disablePast",
  			type: "boolean",
  			description: "If true, disable values before the current date for date components, time for time components and both for date time components"
  		},
  		{
  			name: "displayWeekNumber",
  			type: "boolean",
  			description: "If true, the week number will be display in the calendar"
  		},
  		{
  			name: "loading",
  			type: "boolean",
  			description: "If true, calls renderLoading instead of rendering the day calendar. Can be used to preload information and show it in calendar"
  		},
  		{
  			name: "fixedWeekNumber",
  			type: "number",
  			description: "The day view will show as many weeks as needed after the end of the current month to match this value. Put it to 6 to have a fixed number of weeks in Gregorian calendars"
  		},
  		{
  			name: "formatDensity",
  			type: "string",
  			description: "Density of the format when rendered in the input. Setting formatDensity to \"spacious\" will add a space before and after each /, - and . character",
  			options: [
  				"dense",
  				"spacious"
  			]
  		},
  		{
  			name: "monthsPerRow",
  			type: "string",
  			description: "Months rendered per row",
  			options: [
  				3,
  				4
  			]
  		},
  		{
  			name: "yearsPerRow",
  			type: "string",
  			description: "Years rendered per row",
  			options: [
  				3,
  				4
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "minDate",
  			type: "date"
  		},
  		{
  			name: "maxDate",
  			type: "date"
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"sm"
  			]
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"borderless",
  				"filled"
  			]
  		},
  		{
  			name: "format",
  			type: "string",
  			description: "Dayjs format to display input value, \"MMMM D, YYYY\" by default. Check https://day.js.org/docs/en/display/format for reference"
  		},
  		{
  			name: "picker",
  			type: "string",
  			options: [
  				"date",
  				"week",
  				"month",
  				"quarter",
  				"year"
  			]
  		},
  		{
  			name: "placement",
  			type: "string",
  			options: [
  				"bottomLeft",
  				"bottomRight",
  				"topLeft",
  				"topRight"
  			]
  		},
  		{
  			name: "mode",
  			type: "string",
  			options: [
  				"time",
  				"date",
  				"month",
  				"year",
  				"decade"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "minDate",
  			type: "date"
  		},
  		{
  			name: "maxDate",
  			type: "date"
  		},
  		{
  			name: "showTime",
  			type: "boolean"
  		},
  		{
  			name: "showNow",
  			type: "boolean",
  			description: "Show now button"
  		},
  		{
  			name: "showToday",
  			type: "boolean",
  			description: "Show today button"
  		},
  		{
  			name: "preserveInvalidOnBlur",
  			type: "boolean",
  			description: "Not clean input on blur even when the typing is invalidate"
  		},
  		{
  			name: "inputReadOnly",
  			type: "boolean",
  			description: "Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)"
  		},
  		{
  			name: "needConfirm",
  			type: "boolean",
  			description: "Need click confirm button to trigger value change. Default false when multiple"
  		},
  		{
  			name: "allowClear",
  			type: "boolean"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"filled",
  				"unstyled"
  			]
  		},
  		{
  			name: "valueFormat",
  			type: "string",
  			description: "Dayjs format to display input value, \"MMMM D, YYYY\" by default. Check https://day.js.org/docs/en/display/format for reference"
  		},
  		{
  			name: "firstDayOfWeek",
  			type: "string",
  			description: "number 0-6, 0 - Sunday, 6 - Saturday, defaults to 1 - Monday",
  			options: [
  				0,
  				1,
  				2,
  				3,
  				4,
  				5,
  				6
  			]
  		},
  		{
  			name: "hideOutsideDates",
  			type: "boolean",
  			description: "Determines whether outside dates should be hidden, defaults to false"
  		},
  		{
  			name: "labelSeparator",
  			type: "string",
  			description: "Separator between range value"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "dateType",
  			type: "string",
  			options: [
  				"default",
  				"range",
  				"multiple"
  			]
  		},
  		{
  			name: "dropdownType",
  			type: "string",
  			description: "Type of dropdown, defaults to popover",
  			options: [
  				"modal",
  				"popover"
  			]
  		},
  		{
  			name: "allowDeselect",
  			type: "boolean",
  			description: "Determines whether user can deselect the date by clicking on selected item, applicable only when type=\"default\""
  		},
  		{
  			name: "clearable",
  			type: "boolean",
  			description: "Determines whether input value can be cleared, adds clear button to right section, false by default"
  		},
  		{
  			name: "hideWeekdays",
  			type: "boolean",
  			description: "Determines whether weekdays row should be hidden, defaults to false"
  		},
  		{
  			name: "defaultLevel",
  			type: "string",
  			options: [
  				"decade",
  				"month",
  				"year"
  			]
  		},
  		{
  			name: "hasNextLevel",
  			type: "boolean",
  			description: "Determines whether next level button should be enabled, defaults to true"
  		},
  		{
  			name: "maxLevel",
  			type: "string",
  			description: "Max level that user can go up to (decade, year, month), defaults to decade",
  			options: [
  				"decade",
  				"month",
  				"year"
  			]
  		},
  		{
  			name: "numberOfColumns",
  			type: "number",
  			description: "Number of columns to render next to each other"
  		},
  		{
  			name: "columnsToScroll",
  			type: "number",
  			description: "Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns"
  		},
  		{
  			name: "minDate",
  			type: "date"
  		},
  		{
  			name: "maxDate",
  			type: "date"
  		},
  		{
  			name: "withCellSpacing",
  			type: "boolean",
  			description: "Determines whether controls should be separated by spacing, true by default"
  		},
  		{
  			name: "pointer",
  			type: "boolean",
  			description: "Determines whether the input should have cursor: pointer style, false by default"
  		},
  		{
  			name: "withErrorStyles",
  			type: "boolean",
  			description: "Determines whether the input should have red border and red text color when the error prop is set, true by default"
  		},
  		{
  			name: "leftSection",
  			type: "string"
  		},
  		{
  			name: "rightSection",
  			type: "string"
  		},
  		{
  			name: "leftSectionWidth",
  			type: "number"
  		},
  		{
  			name: "rightSectionWidth",
  			type: "number"
  		}
  	]
  };
  var checkbox = {
  	label: "Checkbox",
  	category: "general",
  	name: "checkbox",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"red",
  				"orange",
  				"yellow",
  				"green",
  				"cyan",
  				"blue",
  				"violet"
  			]
  		},
  		{
  			name: "indeterminate",
  			type: "boolean",
  			description: "Status can be indeterminate (null), cycle values trough false, inderminate, true"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium",
  				"large"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "labelPlacement",
  			type: "string",
  			options: [
  				"top",
  				"start",
  				"bottom",
  				"end"
  			]
  		},
  		{
  			name: "disableRipple",
  			type: "boolean",
  			description: "Disable CSS ripple effect"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "labelPosition",
  			type: "string",
  			options: [
  				"left",
  				"right"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		},
  		{
  			name: "iconColor",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		},
  		{
  			name: "autoContrast",
  			type: "boolean",
  			description: "Determines whether icon color with filled variant should depend on background-color. If luminosity of the color prop is less than theme.luminosityThreshold, then theme.white will be used for text color, otherwise theme.black. Overrides theme.autoContrast."
  		},
  		{
  			name: "indeterminate",
  			type: "boolean"
  		}
  	]
  };
  var textarea = {
  	label: "Textarea",
  	category: "general",
  	name: "textarea",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "placeholder",
  			type: "string | i18n",
  			description: "Placeholder text, visibile when the field is empty"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	react: [
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "rows",
  			type: "number"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "rows",
  			type: "number"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"filled",
  				"standard"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Show floating label for the control"
  		},
  		{
  			name: "disableUnderline",
  			type: "boolean",
  			description: "Disable underline in \"filled\" and \"standard\" variant"
  		},
  		{
  			name: "maxRows",
  			type: "number"
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"sm"
  			]
  		},
  		{
  			name: "rows",
  			type: "number"
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"borderless",
  				"filled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "showCount",
  			type: "boolean"
  		},
  		{
  			name: "autoSize",
  			type: "boolean"
  		},
  		{
  			name: "maxLength",
  			type: "number"
  		},
  		{
  			name: "allowClear",
  			type: "boolean"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"filled",
  				"unstyled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "autosize",
  			type: "boolean"
  		},
  		{
  			name: "minRows",
  			type: "number"
  		},
  		{
  			name: "maxRows",
  			type: "number"
  		},
  		{
  			name: "leftSection",
  			type: "string"
  		},
  		{
  			name: "rightSection",
  			type: "string"
  		},
  		{
  			name: "leftSectionWidth",
  			type: "number"
  		},
  		{
  			name: "rightSectionWidth",
  			type: "number"
  		},
  		{
  			name: "pointer",
  			type: "boolean",
  			description: "Determines whether the input should have cursor: pointer style, false by default"
  		},
  		{
  			name: "withErrorStyles",
  			type: "boolean",
  			description: "Determines whether the input should have red border and red text color when the error prop is set, true by default"
  		}
  	]
  };
  var rate = {
  	label: "Rate",
  	category: "general",
  	name: "rate",
  	description: "Five stars rating field",
  	frameworks: [
  		"react-antd",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "allowHalf",
  			type: "boolean"
  		},
  		{
  			name: "cleanable",
  			type: "boolean"
  		},
  		{
  			name: "vertical",
  			type: "boolean",
  			description: "Vertical direction when half selected"
  		},
  		{
  			name: "max",
  			type: "number"
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"red",
  				"orange",
  				"yellow",
  				"green",
  				"cyan",
  				"blue",
  				"violet"
  			]
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium",
  				"large"
  			]
  		},
  		{
  			name: "precision",
  			type: "string",
  			description: "The minimum increment value change allowed",
  			options: [
  				0.1,
  				0.2,
  				0.5,
  				1
  			]
  		},
  		{
  			name: "max",
  			type: "number"
  		}
  	],
  	"react-antd": [
  		{
  			name: "count",
  			type: "number"
  		},
  		{
  			name: "allowHalf",
  			type: "boolean",
  			description: "Allow half votes"
  		},
  		{
  			name: "allowClear",
  			type: "boolean"
  		},
  		{
  			name: "tooltips",
  			type: "array",
  			description: "Customize tooltip for each value"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		},
  		{
  			name: "count",
  			type: "number",
  			description: "Number of controls, 5 by default"
  		},
  		{
  			name: "fractions",
  			type: "number",
  			description: "Number of fractions each item can be divided into, 1 by default"
  		},
  		{
  			name: "highlightSelectedOnly",
  			type: "boolean",
  			description: "If set, only the selected symbol changes to full symbol when selected, false by default"
  		}
  	]
  };
  var placeholder = {
  	label: "Placeholder",
  	category: "layout",
  	name: "placeholder",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	description: "Generic placeholder for an image inside the form, supports basic parameters like width, height and margin",
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "text",
  			type: "string | i18n",
  			description: "Supports markdown (i.e., **bold**, _italics_)"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-antd": [
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		}
  	]
  };
  var multiselect = {
  	label: "MultiSelect",
  	category: "general",
  	name: "multiselect",
  	frameworks: [
  		"react-antd",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "options",
  			type: "array"
  		},
  		{
  			name: "filterKey",
  			type: "string"
  		},
  		{
  			name: "filterValue",
  			type: "string"
  		},
  		{
  			name: "placeholder",
  			type: "string | i18n",
  			description: "Placeholder text, visibile when the field is empty"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "placement",
  			type: "string",
  			options: [
  				"topStart",
  				"topEnd",
  				"leftStart",
  				"rightStart",
  				"leftEnd",
  				"rightEnd",
  				"bottomStart",
  				"bottomEnd",
  				"auto",
  				"autoVerticalStart",
  				"autoVerticalEnd",
  				"autoHorizontalStart",
  				"autoHorizontalEnd"
  			]
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "multiselectMode",
  			type: "string",
  			description: "Show the selected values as tag element or plain string",
  			options: [
  				"tag",
  				"plain"
  			]
  		},
  		{
  			name: "block",
  			type: "boolean",
  			description: "Only in fluid layout"
  		},
  		{
  			name: "searchable",
  			type: "boolean"
  		},
  		{
  			name: "cleanable",
  			type: "boolean"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		},
  		{
  			name: "preventOverflow",
  			type: "boolean",
  			description: "Prevent floating element overflow"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium"
  			]
  		},
  		{
  			name: "autoWidth",
  			type: "boolean",
  			description: "If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input."
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Show floating label for the control"
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"filled",
  				"standard"
  			]
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"borderless",
  				"filled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "placement",
  			type: "string",
  			options: [
  				"bottomLeft",
  				"bottomRight",
  				"topLeft",
  				"topRight"
  			]
  		},
  		{
  			name: "listHeight",
  			type: "number",
  			description: "Config popup height"
  		},
  		{
  			name: "allowClear",
  			type: "boolean"
  		},
  		{
  			name: "popupMatchSelectWidth",
  			type: "boolean",
  			description: "Determine whether the popup menu and the select input are the same width"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		},
  		{
  			name: "showSearch",
  			type: "boolean",
  			description: "Whether select is searchable"
  		},
  		{
  			name: "virtual",
  			type: "boolean"
  		},
  		{
  			name: "showArrow",
  			type: "boolean"
  		},
  		{
  			name: "maxTagCount",
  			type: "number",
  			description: "Maximum number of selectable elements"
  		},
  		{
  			name: "maxTagPlaceholder",
  			type: "string",
  			description: "Placeholder to show when max number of element is reached"
  		},
  		{
  			name: "maxTagTextLength",
  			type: "number",
  			description: "Maximum length of text tags"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"filled",
  				"unstyled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "leftSection",
  			type: "string"
  		},
  		{
  			name: "rightSection",
  			type: "string"
  		},
  		{
  			name: "leftSectionWidth",
  			type: "number"
  		},
  		{
  			name: "rightSectionWidth",
  			type: "number"
  		},
  		{
  			name: "limit",
  			type: "number",
  			description: "Maximum number of options displayed at a time, Infinity by default"
  		},
  		{
  			name: "maxDropdownHeight",
  			type: "number",
  			description: "max-height of the dropdown, only applicable when withScrollArea prop is true, 250 by default"
  		},
  		{
  			name: "maxValues",
  			type: "number",
  			description: "Maximum number of values, Infinity by default"
  		},
  		{
  			name: "searchable",
  			type: "boolean",
  			description: "Determines whether the select should be searchable, false by default"
  		},
  		{
  			name: "nothingFoundMessage",
  			type: "string | i18n",
  			description: "Message displayed when no option matched current search query, only applicable when searchable prop is set"
  		},
  		{
  			name: "clearable",
  			type: "boolean",
  			description: "Determines whether the clear button should be displayed in the right section when the component has value, false by default"
  		},
  		{
  			name: "defaultDropdownOpened",
  			type: "boolean",
  			description: "Uncontrolled dropdown initial opened state"
  		},
  		{
  			name: "hidePickedOptions",
  			type: "boolean",
  			description: "Determines whether picked options should be removed from the options list, false by default"
  		},
  		{
  			name: "pointer",
  			type: "boolean",
  			description: "Determines whether the input should have cursor: pointer style, false by default"
  		},
  		{
  			name: "selectFirstOptionOnChange",
  			type: "boolean",
  			description: "Determines whether the first option should be selected when value changes, false by default"
  		},
  		{
  			name: "withCheckIcon",
  			type: "boolean",
  			description: "Determines whether check icon should be displayed near the selected option label, true by default"
  		},
  		{
  			name: "withErrorStyles",
  			type: "boolean",
  			description: "Determines whether the input should have red border and red text color when the error prop is set, true by default"
  		},
  		{
  			name: "withScrollArea",
  			type: "boolean",
  			description: "Determines whether the options should be wrapped with scroll bars, true by default"
  		}
  	]
  };
  var button = {
  	label: "Button",
  	category: "layout",
  	description: "Icon button, can be used as toggle button or just a link button",
  	name: "button",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "buttonType",
  			type: "string",
  			description: "Type of button: toggle 2-states button or link button",
  			options: [
  				"toggle",
  				"link"
  			]
  		},
  		{
  			name: "labelOn",
  			type: "string | i18n"
  		},
  		{
  			name: "iconOn",
  			type: "string"
  		},
  		{
  			name: "labelOff",
  			type: "string | i18n"
  		},
  		{
  			name: "iconOff",
  			type: "string"
  		},
  		{
  			name: "initialValue",
  			type: "boolean"
  		},
  		{
  			name: "labelLink",
  			type: "string | i18n"
  		},
  		{
  			name: "iconLink",
  			type: "string"
  		},
  		{
  			name: "href",
  			type: "string"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Show hint in a tooltip"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "appearance",
  			type: "string",
  			description: "Only available for link-type buttons",
  			options: [
  				"default",
  				"primary",
  				"subtle",
  				"link",
  				"ghost"
  			]
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"filled",
  				"standard"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"primary",
  				"secondary",
  				"success",
  				"warning",
  				"danger",
  				"info",
  				"light",
  				"dark",
  				"link"
  			]
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"sm"
  			]
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "type",
  			type: "string",
  			description: "Only available for link-type buttons",
  			options: [
  				"primary",
  				"default",
  				"dashed",
  				"text",
  				"link"
  			]
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"compact-xs",
  				"sm",
  				"compact-sm",
  				"md",
  				"compact-md",
  				"lg",
  				"compact-lg",
  				"xl",
  				"compact-xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			description: "Only available for link-type buttons",
  			options: [
  				"default",
  				"filled",
  				"light",
  				"outline",
  				"subtle",
  				"transparent",
  				"white"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	]
  };
  var divider = {
  	label: "Divider",
  	category: "layout",
  	description: "Layout divider, customizable with size and color",
  	name: "divider",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "size",
  			type: "number",
  			description: "Thickness of the divider"
  		},
  		{
  			name: "color",
  			type: "string"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "labelPosition",
  			type: "string",
  			options: [
  				"left",
  				"center",
  				"right"
  			]
  		}
  	]
  };
  var datetime = {
  	label: "Date Time",
  	category: "general",
  	name: "datetime",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	dependencies: {
  		"react-material-ui": {
  			imports: {
  			},
  			js: [
  				"import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';",
  				"import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';",
  				null
  			],
  			packages: {
  				"@mui/x-date-pickers": "latest",
  				dayjs: "latest"
  			}
  		},
  		"react-mantine": {
  			js: [
  				null
  			],
  			css: [
  				null
  			],
  			imports: {
  			},
  			packages: {
  				"@mantine/dates": "^7.6.2",
  				dayjs: "^1.11.10"
  			}
  		},
  		"react-rsuite5": {
  			js: [
  				null
  			],
  			css: [
  			],
  			imports: {
  			},
  			packages: {
  			}
  		},
  		"react-antd": {
  			js: [
  				null,
  				null,
  				null
  			],
  			css: [
  			],
  			imports: {
  			},
  			packages: {
  				dayjs: "^1.11.10"
  			}
  		}
  	},
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "placeholder",
  			type: "string | i18n",
  			description: "Placeholder text, visibile when the field is empty"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "format",
  			type: "string",
  			description: "Check https://date-fns.org library for available formats"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "appearance",
  			type: "string",
  			options: [
  				"default",
  				"subtle"
  			]
  		},
  		{
  			name: "placement",
  			type: "string",
  			options: [
  				"topStart",
  				"topEnd",
  				"leftStart",
  				"rightStart",
  				"leftEnd",
  				"rightEnd",
  				"bottomStart",
  				"bottomEnd",
  				"auto",
  				"autoVerticalStart",
  				"autoVerticalEnd",
  				"autoHorizontalStart",
  				"autoHorizontalEnd"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "cleanable",
  			type: "boolean"
  		},
  		{
  			name: "editable",
  			type: "boolean",
  			description: "Rendered as an input, the date can be entered via the keyboard"
  		},
  		{
  			name: "oneTap",
  			type: "boolean",
  			description: "One click to complete the selection date"
  		},
  		{
  			name: "showMeridian",
  			type: "boolean",
  			description: "Display hours in 12 format"
  		},
  		{
  			name: "isoWeek",
  			type: "boolean",
  			description: "ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day"
  		},
  		{
  			name: "showWeekNumbers",
  			type: "boolean"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"filled",
  				"standard"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "format",
  			type: "string",
  			description: "Check https://date-fns.org library for available formats"
  		},
  		{
  			name: "views",
  			type: "[string]",
  			options: [
  				"hours",
  				"minutes",
  				"seconds",
  				"day",
  				"month",
  				"year"
  			]
  		},
  		{
  			name: "closeOnSelect",
  			type: "boolean",
  			description: "If true, the popover or modal will close after submitting the full date"
  		},
  		{
  			name: "reduceAnimations",
  			type: "boolean",
  			description: "If true, disable heavy animations"
  		},
  		{
  			name: "showDaysOutsideCurrentMonth",
  			type: "boolean",
  			description: "If true, days outside the current month are rendered:\n- if fixedWeekNumber is defined, renders days to have the weeks requested.\n- if fixedWeekNumber is not defined, renders day to fill the first and last week of the current month.\n- ignored if calendars equals more than 1 on range pickers"
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Show floating label for the control"
  		},
  		{
  			name: "disableFuture",
  			type: "boolean",
  			description: "If true, disable values after the current date for date components, time for time components and both for date time components"
  		},
  		{
  			name: "disableHighlightToday",
  			type: "boolean",
  			description: "If true, today's date is rendering without highlighting with circle"
  		},
  		{
  			name: "disableOpenPicker",
  			type: "boolean",
  			description: "If true, the open picker button will not be rendered (renders only the field)"
  		},
  		{
  			name: "disablePast",
  			type: "boolean",
  			description: "If true, disable values before the current date for date components, time for time components and both for date time components"
  		},
  		{
  			name: "displayWeekNumber",
  			type: "boolean",
  			description: "If true, the week number will be display in the calendar"
  		},
  		{
  			name: "ampm",
  			type: "boolean",
  			description: "12h/24h view for hour selection clock"
  		},
  		{
  			name: "ampmInClock",
  			type: "boolean",
  			description: "Display ampm controls under the clock (instead of in the toolbar)"
  		},
  		{
  			name: "forceMobile",
  			type: "boolean",
  			description: "Force mobile component"
  		},
  		{
  			name: "loading",
  			type: "boolean",
  			description: "If true, calls renderLoading instead of rendering the day calendar. Can be used to preload information and show it in calendar"
  		},
  		{
  			name: "fixedWeekNumber",
  			type: "number",
  			description: "The day view will show as many weeks as needed after the end of the current month to match this value. Put it to 6 to have a fixed number of weeks in Gregorian calendars"
  		},
  		{
  			name: "formatDensity",
  			type: "string",
  			description: "Density of the format when rendered in the input. Setting formatDensity to \"spacious\" will add a space before and after each /, - and . character",
  			options: [
  				"dense",
  				"spacious"
  			]
  		},
  		{
  			name: "monthsPerRow",
  			type: "string",
  			description: "Months rendered per row",
  			options: [
  				3,
  				4
  			]
  		},
  		{
  			name: "yearsPerRow",
  			type: "string",
  			description: "Years rendered per row",
  			options: [
  				3,
  				4
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "minDate",
  			type: "date"
  		},
  		{
  			name: "maxDate",
  			type: "date"
  		},
  		{
  			name: "minDateTime",
  			type: "date"
  		},
  		{
  			name: "maxDateTime",
  			type: "date"
  		},
  		{
  			name: "minutesStep",
  			type: "number",
  			description: "Step over minutes"
  		},
  		{
  			name: "timeStepsHours",
  			type: "number",
  			description: "The time steps between two time unit options. For example, if timeStep.minutes = 8, then the available minute options will be [0, 8, 16, 24, 32, 40, 48, 56]"
  		},
  		{
  			name: "timeStepsMinutes",
  			type: "number"
  		},
  		{
  			name: "timeStepsSeconds",
  			type: "number"
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"sm"
  			]
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"borderless",
  				"filled"
  			]
  		},
  		{
  			name: "format",
  			type: "string",
  			description: "Dayjs format to display input value, \"MMMM D, YYYY\" by default. Check https://day.js.org/docs/en/display/format for reference"
  		},
  		{
  			name: "picker",
  			type: "string",
  			options: [
  				"date",
  				"week",
  				"month",
  				"quarter",
  				"year"
  			]
  		},
  		{
  			name: "placement",
  			type: "string",
  			options: [
  				"bottomLeft",
  				"bottomRight",
  				"topLeft",
  				"topRight"
  			]
  		},
  		{
  			name: "mode",
  			type: "string",
  			options: [
  				"time",
  				"date",
  				"month",
  				"year",
  				"decade"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "minDate",
  			type: "date"
  		},
  		{
  			name: "maxDate",
  			type: "date"
  		},
  		{
  			name: "showTime",
  			type: "boolean"
  		},
  		{
  			name: "showNow",
  			type: "boolean",
  			description: "Show now button"
  		},
  		{
  			name: "showToday",
  			type: "boolean",
  			description: "Show today button"
  		},
  		{
  			name: "preserveInvalidOnBlur",
  			type: "boolean",
  			description: "Not clean input on blur even when the typing is invalidate"
  		},
  		{
  			name: "inputReadOnly",
  			type: "boolean",
  			description: "Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)"
  		},
  		{
  			name: "needConfirm",
  			type: "boolean",
  			description: "Need click confirm button to trigger value change. Default false when multiple"
  		},
  		{
  			name: "allowClear",
  			type: "boolean"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"filled",
  				"unstyled"
  			]
  		},
  		{
  			name: "valueFormat",
  			type: "string",
  			description: "Dayjs format to display input value, \"DD/MM/YYYY HH:mm\" by default. Check https://day.js.org/docs/en/display/format for reference"
  		},
  		{
  			name: "firstDayOfWeek",
  			type: "string",
  			description: "number 0-6, 0 - Sunday, 6 - Saturday, defaults to 1 - Monday",
  			options: [
  				0,
  				1,
  				2,
  				3,
  				4,
  				5,
  				6
  			]
  		},
  		{
  			name: "hideOutsideDates",
  			type: "boolean",
  			description: "Determines whether outside dates should be hidden, defaults to false"
  		},
  		{
  			name: "labelSeparator",
  			type: "string",
  			description: "Separator between range value"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "withSeconds",
  			type: "boolean"
  		},
  		{
  			name: "dropdownType",
  			type: "string",
  			description: "Type of dropdown, defaults to popover",
  			options: [
  				"modal",
  				"popover"
  			]
  		},
  		{
  			name: "allowDeselect",
  			type: "boolean",
  			description: "Determines whether user can deselect the date by clicking on selected item, applicable only when type=\"default\""
  		},
  		{
  			name: "clearable",
  			type: "boolean",
  			description: "Determines whether input value can be cleared, adds clear button to right section, false by default"
  		},
  		{
  			name: "hideWeekdays",
  			type: "boolean",
  			description: "Determines whether weekdays row should be hidden, defaults to false"
  		},
  		{
  			name: "defaultLevel",
  			type: "string",
  			options: [
  				"decade",
  				"month",
  				"year"
  			]
  		},
  		{
  			name: "hasNextLevel",
  			type: "boolean",
  			description: "Determines whether next level button should be enabled, defaults to true"
  		},
  		{
  			name: "maxLevel",
  			type: "string",
  			description: "Max level that user can go up to (decade, year, month), defaults to decade",
  			options: [
  				"decade",
  				"month",
  				"year"
  			]
  		},
  		{
  			name: "numberOfColumns",
  			type: "number",
  			description: "Number of columns to render next to each other"
  		},
  		{
  			name: "columnsToScroll",
  			type: "number",
  			description: "Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns"
  		},
  		{
  			name: "minDate",
  			type: "date"
  		},
  		{
  			name: "maxDate",
  			type: "date"
  		},
  		{
  			name: "withCellSpacing",
  			type: "boolean",
  			description: "Determines whether controls should be separated by spacing, true by default"
  		},
  		{
  			name: "pointer",
  			type: "boolean",
  			description: "Determines whether the input should have cursor: pointer style, false by default"
  		},
  		{
  			name: "withErrorStyles",
  			type: "boolean",
  			description: "Determines whether the input should have red border and red text color when the error prop is set, true by default"
  		},
  		{
  			name: "leftSection",
  			type: "string"
  		},
  		{
  			name: "rightSection",
  			type: "string"
  		},
  		{
  			name: "leftSectionWidth",
  			type: "number"
  		},
  		{
  			name: "rightSectionWidth",
  			type: "number"
  		}
  	]
  };
  var tabs = {
  	label: "Tabs",
  	category: "layout",
  	description: "Layout component for tabs",
  	name: "tabs",
  	frameworks: [
  		"react-antd",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "tabs",
  			type: "array"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "appearance",
  			type: "string",
  			options: [
  				"default",
  				"tabs",
  				"subtle"
  			]
  		},
  		{
  			name: "reversed",
  			type: "boolean"
  		},
  		{
  			name: "justified",
  			type: "boolean"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "indicatorColor",
  			type: "string",
  			options: [
  				"primary",
  				"secondary"
  			]
  		},
  		{
  			name: "textColor",
  			type: "string",
  			options: [
  				"primary",
  				"secondary",
  				"inherit"
  			]
  		},
  		{
  			name: "centered",
  			type: "boolean",
  			description: "If true, the tabs are centered. This prop is intended for large views"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Will make the tabs grow to use all the available space"
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"tabs",
  				"pills",
  				"underline"
  			]
  		},
  		{
  			name: "transition",
  			type: "boolean",
  			description: "Sets a default animation strategy for all children"
  		},
  		{
  			name: "fill",
  			type: "boolean",
  			description: "Have all Tabss proportionately fill all available width"
  		},
  		{
  			name: "justify",
  			type: "boolean",
  			description: "Have all Tabs evenly fill all available width"
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"middle",
  				"large"
  			]
  		},
  		{
  			name: "tabType",
  			type: "string",
  			options: [
  				"line",
  				"card"
  			]
  		},
  		{
  			name: "animated",
  			type: "boolean"
  		},
  		{
  			name: "centered",
  			type: "boolean"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "tabs",
  			type: "array"
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"outline",
  				"pills"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "grow",
  			type: "boolean",
  			description: "Determines whether tabs should take all available space, false by default"
  		},
  		{
  			name: "justify",
  			type: "string",
  			options: [
  				"flex-start",
  				"center",
  				"flex-end",
  				"space-between"
  			]
  		},
  		{
  			name: "orientation",
  			type: "string",
  			options: [
  				"horizontal",
  				"vertical"
  			]
  		},
  		{
  			name: "placement",
  			type: "string",
  			options: [
  				"left",
  				"right"
  			]
  		},
  		{
  			name: "activateTabWithKeyboard",
  			type: "boolean",
  			description: "Determines whether tab should be activated with arrow key press, true by default"
  		},
  		{
  			name: "allowTabDeactivation",
  			type: "boolean",
  			description: "Determines whether tab can be deactivated, false by default"
  		},
  		{
  			name: "autoContrast",
  			type: "boolean",
  			description: "Determines whether icon color with filled variant should depend on background-color. If luminosity of the color prop is less than theme.luminosityThreshold, then theme.white will be used for text color, otherwise theme.black. Overrides theme.autoContrast."
  		},
  		{
  			name: "inverted",
  			type: "boolean",
  			description: "Determines whether tabs should have inverted styles, false by default"
  		},
  		{
  			name: "keepMounted",
  			type: "boolean",
  			description: "If set to false, Tabs.Panel content will be unmounted when the associated tab is not active, true by default"
  		},
  		{
  			name: "loop",
  			type: "boolean",
  			description: "Determines whether arrow key presses should loop though items (first to last and last to first), true by default"
  		}
  	]
  };
  var upload = {
  	label: "Upload",
  	category: "general",
  	name: "upload",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	description: "Upload file control, returns an array of json with file info and blob",
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		},
  		{
  			name: "accept",
  			type: "array",
  			description: "Accepted files, file extension or mime type: .doc, .pdf, video/*, image/png, etc. "
  		}
  	],
  	react: [
  		{
  			name: "uploadButtonLabel",
  			type: "string | i18n"
  		},
  		{
  			name: "multiple",
  			type: "boolean",
  			description: "Allow selecting multiple files"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "listType",
  			type: "string",
  			options: [
  				"text",
  				"picture-text",
  				"picture"
  			]
  		},
  		{
  			name: "maxPreviewFileSize",
  			type: "number",
  			description: "Set the maximum limit for preview files"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		},
  		{
  			name: "fileListVisible",
  			type: "boolean"
  		},
  		{
  			name: "disabledFileItem",
  			type: "boolean"
  		},
  		{
  			name: "multiple",
  			type: "boolean",
  			description: "Allow selecting multiple files"
  		},
  		{
  			name: "removable",
  			type: "boolean"
  		},
  		{
  			name: "draggable",
  			type: "boolean"
  		},
  		{
  			name: "uploadButtonLabel",
  			type: "string | i18n"
  		},
  		{
  			name: "uploadButtonAppearance",
  			type: "string",
  			options: [
  				"default",
  				"primary",
  				"subtle",
  				"link",
  				"ghost"
  			]
  		},
  		{
  			name: "uploadButtonSize",
  			type: "string",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "draggableText",
  			type: "string | i18n"
  		},
  		{
  			name: "draggableHeight",
  			type: "number"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "multiple",
  			type: "boolean",
  			description: "Allow selecting multiple files"
  		},
  		{
  			name: "uploadButtonLabel",
  			type: "string | i18n"
  		},
  		{
  			name: "uploadButtonVariant",
  			type: "string",
  			options: [
  				"contained",
  				"outlined",
  				"text"
  			]
  		},
  		{
  			name: "uploadButtonSize",
  			type: "string",
  			options: [
  				"small",
  				"medium",
  				"large"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "uploadButtonIcon",
  			type: "string"
  		}
  	],
  	"react-antd": [
  		{
  			name: "multiple",
  			type: "boolean",
  			description: "Allow selecting multiple files"
  		},
  		{
  			name: "listType",
  			type: "string",
  			description: "Built-in stylesheets, support for four types: text, picture, picture-card or picture-circle",
  			options: [
  				"text",
  				"picture",
  				"picture-card",
  				"picture-circle"
  			]
  		},
  		{
  			name: "maxCount",
  			type: "number"
  		},
  		{
  			name: "showUploadList",
  			type: "boolean"
  		},
  		{
  			name: "uploadButtonLabel",
  			type: "string | i18n"
  		},
  		{
  			name: "uploadButtonAppearance",
  			type: "string",
  			options: [
  				"primary",
  				"default",
  				"dashed",
  				"text",
  				"link"
  			]
  		},
  		{
  			name: "uploadButtonSize",
  			type: "string",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "draggable",
  			type: "boolean"
  		},
  		{
  			name: "draggableText",
  			type: "string | i18n"
  		},
  		{
  			name: "draggableHeight",
  			type: "number"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "placeholder",
  			type: "string | i18n",
  			description: "Placeholder text, visibile when the field is empty"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"filled",
  				"unstyled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "leftSection",
  			type: "string"
  		},
  		{
  			name: "rightSection",
  			type: "string"
  		},
  		{
  			name: "leftSectionWidth",
  			type: "number"
  		},
  		{
  			name: "rightSectionWidth",
  			type: "number"
  		},
  		{
  			name: "clearable",
  			type: "boolean"
  		},
  		{
  			name: "multiple",
  			type: "boolean",
  			description: "Determines whether user can pick more than one file, false by default"
  		},
  		{
  			name: "pointer",
  			type: "boolean",
  			description: "Determines whether the input should have cursor: pointer style, false by default"
  		},
  		{
  			name: "withErrorStyles",
  			type: "boolean",
  			description: "Determines whether the input should have red border and red text color when the error prop is set, true by default"
  		}
  	]
  };
  var steps = {
  	label: "Steps",
  	category: "layout",
  	description: "Layout component to split the form in multiple steps",
  	name: "steps",
  	frameworks: [
  		"react-antd",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		},
  		{
  			name: "labelNext",
  			type: "string | i18n"
  		},
  		{
  			name: "labelPrevious",
  			type: "string | i18n"
  		},
  		{
  			name: "align",
  			type: "string",
  			options: [
  				"left",
  				"center",
  				"right"
  			]
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "steps",
  			type: "array"
  		},
  		{
  			name: "small",
  			type: "boolean"
  		},
  		{
  			name: "status",
  			type: "string",
  			options: [
  				"finish",
  				"wait",
  				"process",
  				"error"
  			]
  		}
  	],
  	"react-antd": [
  		{
  			name: "steps",
  			type: "array"
  		},
  		{
  			name: "stepsType",
  			type: "string",
  			description: "Change the layout of the steps, some optoions not available for type \"inline\"",
  			options: [
  				"default",
  				"navigation",
  				"inline"
  			]
  		},
  		{
  			name: "status",
  			type: "string",
  			options: [
  				"finish",
  				"wait",
  				"process",
  				"error"
  			]
  		},
  		{
  			name: "percent",
  			type: "number",
  			description: "Completion percentage of current step"
  		},
  		{
  			name: "small",
  			type: "boolean"
  		},
  		{
  			name: "clickable",
  			type: "boolean",
  			description: "Make steps clickable"
  		},
  		{
  			name: "labelPlacement",
  			type: "string",
  			options: [
  				"horizontal",
  				"vertical"
  			]
  		}
  	],
  	"react-mantine": [
  		{
  			name: "steps",
  			type: "array"
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "iconPosition",
  			type: "string",
  			description: "Icon position relative to the step body, \"left\" by default",
  			options: [
  				"left",
  				"right"
  			]
  		},
  		{
  			name: "iconSize",
  			type: "number",
  			description: "Determines whether steps should wrap to the next line if no space is available, true by default"
  		},
  		{
  			name: "wrap",
  			type: "boolean",
  			description: "Determines whether steps should wrap to the next line if no space is available, true by default"
  		},
  		{
  			name: "allowStepClick",
  			type: "boolean",
  			description: "Set to false to disable clicks on step"
  		},
  		{
  			name: "allowStepSelect",
  			type: "boolean",
  			description: "Should step selection be allowed"
  		},
  		{
  			name: "autoContrast",
  			type: "boolean",
  			description: "Determines whether icon color with filled variant should depend on background-color. If luminosity of the color prop is less than theme.luminosityThreshold, then theme.white will be used for text color, otherwise theme.black. Overrides theme.autoContrast."
  		}
  	]
  };
  var time = {
  	label: "Time",
  	category: "general",
  	description: "Time input",
  	name: "time",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	dependencies: {
  		"react-material-ui": {
  			imports: {
  			},
  			js: [
  				"import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';",
  				"import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';",
  				null
  			],
  			packages: {
  				"@mui/x-date-pickers": "latest",
  				dayjs: "latest"
  			}
  		},
  		"react-mantine": {
  			js: [
  				null
  			],
  			css: [
  				null
  			],
  			imports: {
  			},
  			packages: {
  				"@mantine/dates": "^7.6.2",
  				dayjs: "^1.11.10"
  			}
  		},
  		"react-rsuite5": {
  			js: [
  				null
  			],
  			css: [
  			],
  			imports: {
  			},
  			packages: {
  			}
  		},
  		"react-antd": {
  			js: [
  				null,
  				null,
  				null
  			],
  			css: [
  			],
  			imports: {
  			},
  			packages: {
  				dayjs: "^1.11.10"
  			}
  		}
  	},
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "placeholder",
  			type: "string | i18n",
  			description: "Placeholder text, visibile when the field is empty"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "appearance",
  			type: "string",
  			options: [
  				"default",
  				"subtle"
  			]
  		},
  		{
  			name: "placement",
  			type: "string",
  			options: [
  				"topStart",
  				"topEnd",
  				"leftStart",
  				"rightStart",
  				"leftEnd",
  				"rightEnd",
  				"bottomStart",
  				"bottomEnd",
  				"auto",
  				"autoVerticalStart",
  				"autoVerticalEnd",
  				"autoHorizontalStart",
  				"autoHorizontalEnd"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "cleanable",
  			type: "boolean"
  		},
  		{
  			name: "editable",
  			type: "boolean",
  			description: "Rendered as an input, the date can be entered via the keyboard"
  		},
  		{
  			name: "oneTap",
  			type: "boolean",
  			description: "One click to complete the selection date"
  		},
  		{
  			name: "showMeridian",
  			type: "boolean",
  			description: "Display hours in 12 format"
  		},
  		{
  			name: "format",
  			type: "string",
  			options: [
  				"HH:mm",
  				"HH:mm:ss",
  				"hh:mm:ss aaa",
  				"hh:mm aaa"
  			]
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"filled",
  				"standard"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "format",
  			type: "string",
  			description: "Check https://date-fns.org library for available formats"
  		},
  		{
  			name: "views",
  			type: "[string]",
  			options: [
  				"hours",
  				"minutes",
  				"seconds"
  			]
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Show floating label for the control"
  		},
  		{
  			name: "ampm",
  			type: "boolean",
  			description: "12h/24h view for hour selection clock"
  		},
  		{
  			name: "ampmInClock",
  			type: "boolean",
  			description: "Display ampm controls under the clock (instead of in the toolbar)"
  		},
  		{
  			name: "forceMobile",
  			type: "boolean",
  			description: "Force mobile component"
  		},
  		{
  			name: "closeOnSelect",
  			type: "boolean",
  			description: "If true, the popover or modal will close after submitting the full date."
  		},
  		{
  			name: "disableFuture",
  			type: "boolean",
  			description: "If true, disable values after the current date for date components, time for time components and both for date time components."
  		},
  		{
  			name: "disableOpenPicker",
  			type: "boolean",
  			description: "If true, the open picker button will not be rendered (renders only the field)"
  		},
  		{
  			name: "disablePast",
  			type: "boolean",
  			description: "If true, disable values before the current date for date components, time for time components and both for date time components"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "minTime",
  			type: "string"
  		},
  		{
  			name: "maxTime",
  			type: "string"
  		},
  		{
  			name: "formatDensity",
  			type: "string",
  			description: "Density of the format when rendered in the input. Setting formatDensity to \"spacious\" will add a space before and after each /, - and . character",
  			options: [
  				"dense",
  				"spacious"
  			]
  		},
  		{
  			name: "minutesStep",
  			type: "number",
  			description: "Step over minutes"
  		},
  		{
  			name: "timeStepsHours",
  			type: "number",
  			description: "The time steps between two time unit options. For example, if timeStep.minutes = 8, then the available minute options will be [0, 8, 16, 24, 32, 40, 48, 56]"
  		},
  		{
  			name: "timeStepsMinutes",
  			type: "number"
  		},
  		{
  			name: "timeStepsSeconds",
  			type: "number"
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"borderless",
  				"filled"
  			]
  		},
  		{
  			name: "format",
  			type: "string",
  			description: "Dayjs format to display input value, \"HH:mm:ss\" by default. Check https://day.js.org/docs/en/display/format for reference"
  		},
  		{
  			name: "hourStep",
  			type: "number",
  			description: "Interval between hours in picker"
  		},
  		{
  			name: "minuteStep",
  			type: "number",
  			description: "Interval between minutes in picker"
  		},
  		{
  			name: "secondStep",
  			type: "number",
  			description: "Interval between seconds in picker"
  		},
  		{
  			name: "allowClear",
  			type: "boolean"
  		},
  		{
  			name: "hideDisabledOptions",
  			type: "boolean",
  			description: "Whether hide the options that can not be selected"
  		},
  		{
  			name: "inputReadOnly",
  			type: "boolean",
  			description: "Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)"
  		},
  		{
  			name: "needConfirm",
  			type: "boolean",
  			description: "Need click confirm button to trigger value change"
  		},
  		{
  			name: "showNow",
  			type: "boolean",
  			description: "Whether to show Now button on panel"
  		},
  		{
  			name: "use12Hours",
  			type: "boolean",
  			description: "Display as 12 hours format, with default format h:mm:ss a"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		},
  		{
  			name: "placement",
  			type: "string",
  			options: [
  				"bottomLeft",
  				"bottomRight",
  				"topLeft",
  				"topRight"
  			]
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"filled",
  				"unstyled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "minTime",
  			type: "string"
  		},
  		{
  			name: "maxTime",
  			type: "string"
  		},
  		{
  			name: "withSeconds",
  			type: "boolean",
  			description: "Determines whether seconds input should be rendered"
  		},
  		{
  			name: "pointer",
  			type: "boolean",
  			description: "Determines whether the input should have cursor: pointer style, false by default"
  		},
  		{
  			name: "showBrowserPicker",
  			type: "boolean",
  			description: "Show browser native picker (if supported)"
  		},
  		{
  			name: "leftSection",
  			type: "string"
  		},
  		{
  			name: "rightSection",
  			type: "string"
  		},
  		{
  			name: "leftSectionWidth",
  			type: "number"
  		},
  		{
  			name: "rightSectionWidth",
  			type: "number"
  		}
  	]
  };
  var hidden = {
  	label: "Hidden",
  	category: "general",
  	name: "hidden",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	description: "Hidden field, just a placeholder for data, component will not be visible in the form (only during design)",
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		}
  	]
  };
  var currency = {
  	label: "Currency",
  	category: "general",
  	name: "currency",
  	description: "Formatted currency input box",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "placeholder",
  			type: "string | i18n",
  			description: "Placeholder text, visibile when the field is empty"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		},
  		{
  			name: "currency",
  			type: "string",
  			options: [
  				"AFN",
  				"ALL",
  				"DZD",
  				"ARS",
  				"AMD",
  				"AUD",
  				"AZN",
  				"BHD",
  				"BDT",
  				"BYN",
  				"BZD",
  				"BOB",
  				"BAM",
  				"BWP",
  				"BRL",
  				"GBP",
  				"BND",
  				"BGN",
  				"BIF",
  				"XOF",
  				"XAF",
  				"KHR",
  				"CAD",
  				"CVE",
  				"CLP",
  				"CNY",
  				"COP",
  				"KMF",
  				"CDF",
  				"CRC",
  				"HRK",
  				"CZK",
  				"DKK",
  				"DJF",
  				"DOP",
  				"EGP",
  				"ERN",
  				"EEK",
  				"ETB",
  				"EUR",
  				"GEL",
  				"GHS",
  				"GTQ",
  				"GNF",
  				"HNL",
  				"HKD",
  				"HUF",
  				"ISK",
  				"INR",
  				"IDR",
  				"IRR",
  				"IQD",
  				"ILS",
  				"JMD",
  				"JPY",
  				"JOD",
  				"KZT",
  				"KES",
  				"KWD",
  				"LVL",
  				"LBP",
  				"LYD",
  				"LTL",
  				"MOP",
  				"MKD",
  				"MGA",
  				"MYR",
  				"MUR",
  				"MXN",
  				"MDL",
  				"MAD",
  				"MZN",
  				"MMK",
  				"NAD",
  				"NPR",
  				"TWD",
  				"NZD",
  				"NIO",
  				"NGN",
  				"NOK",
  				"OMR",
  				"PKR",
  				"PAB",
  				"PYG",
  				"PEN",
  				"PHP",
  				"PLN",
  				"QAR",
  				"RON",
  				"RUB",
  				"RWF",
  				"SAR",
  				"RSD",
  				"SGD",
  				"SOS",
  				"ZAR",
  				"KRW",
  				"LKR",
  				"SDG",
  				"SEK",
  				"CHF",
  				"SYP",
  				"TZS",
  				"THB",
  				"TOP",
  				"TTD",
  				"TND",
  				"TRY",
  				"USD",
  				"UGX",
  				"UAH",
  				"AED",
  				"UYU",
  				"UZS",
  				"VEF",
  				"VND",
  				"YER",
  				"ZMK",
  				"ZWL"
  			]
  		}
  	],
  	react: [
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "inside",
  			type: "boolean",
  			description: "Show prefix and postfix inside the input box"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"filled",
  				"standard"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Show floating label for the control"
  		},
  		{
  			name: "disableUnderline",
  			type: "boolean",
  			description: "Disable underline in \"filled\" and \"standard\" variant"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"sm"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"borderless",
  				"filled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		},
  		{
  			name: "showCount",
  			type: "boolean"
  		},
  		{
  			name: "maxLength",
  			type: "number"
  		},
  		{
  			name: "allowClear",
  			type: "boolean"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"filled",
  				"unstyled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "leftSection",
  			type: "string"
  		},
  		{
  			name: "rightSection",
  			type: "string"
  		},
  		{
  			name: "leftSectionWidth",
  			type: "number"
  		},
  		{
  			name: "rightSectionWidth",
  			type: "number"
  		},
  		{
  			name: "pointer",
  			type: "boolean",
  			description: "Determines whether the input should have cursor: pointer style, false by default"
  		},
  		{
  			name: "withErrorStyles",
  			type: "boolean",
  			description: "Determines whether the input should have red border and red text color when the error prop is set, true by default"
  		}
  	]
  };
  var Manifests = {
  	"input-text": {
  	label: "Input Text",
  	category: "general",
  	name: "input-text",
  	description: "Basic input text",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "placeholder",
  			type: "string | i18n",
  			description: "Placeholder text, visibile when the field is empty"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		},
  		{
  			name: "submitOnEnter",
  			type: "boolean",
  			description: "Trigger onSubmit / onError if the user hits Enter key"
  		},
  		{
  			name: "inputMode",
  			type: "string",
  			options: [
  				"none",
  				"text",
  				"decimal",
  				"numeric",
  				"tel",
  				"search",
  				"email",
  				"url"
  			]
  		},
  		{
  			name: "autocomplete",
  			type: "string",
  			options: [
  				"off",
  				"on",
  				"name",
  				"honorific-prefix",
  				"given-name",
  				"additional-name",
  				"family-name",
  				"honorific-suffix",
  				"nickname",
  				"email",
  				"username",
  				"new-password",
  				"current-password",
  				"one-time-code",
  				"organization-title",
  				"organization",
  				"street-address",
  				"address-line1",
  				"address-line2",
  				"address-line3",
  				"address-level4",
  				"address-level3",
  				"address-level2",
  				"address-level1",
  				"country",
  				"country-name",
  				"postal-code",
  				"cc-name",
  				"cc-given-name",
  				"cc-additional-name",
  				"cc-family-name",
  				"cc-number",
  				"cc-exp",
  				"cc-exp-month",
  				"cc-exp-year",
  				"cc-csc",
  				"cc-type",
  				"transaction-currency",
  				"transaction-amount",
  				"language",
  				"bday",
  				"bday-day",
  				"bday-month",
  				"bday-year",
  				"sex",
  				"tel",
  				"tel-country-code",
  				"tel-national",
  				"tel-area-code",
  				"tel-local",
  				"tel-extension",
  				"impp",
  				"url",
  				"photo"
  			]
  		},
  		{
  			name: "inputType",
  			type: "string",
  			description: "Set the HTML 5 input type, some framework may have specific components for some of these type",
  			options: [
  				"button",
  				"checkbox",
  				"color",
  				"date",
  				"datetime-local",
  				"email",
  				"file",
  				"hidden",
  				"image",
  				"month",
  				"number",
  				"password",
  				"radio",
  				"range",
  				"reset",
  				"search",
  				"submit",
  				"tel",
  				"text",
  				"time",
  				"url",
  				"week"
  			]
  		}
  	],
  	react: [
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "inside",
  			type: "boolean",
  			description: "Show prefix and postfix inside the input box"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"filled",
  				"standard"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Show floating label for the control"
  		},
  		{
  			name: "disableUnderline",
  			type: "boolean",
  			description: "Disable underline in \"filled\" and \"standard\" variant"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"sm"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"borderless",
  				"filled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		},
  		{
  			name: "showCount",
  			type: "boolean"
  		},
  		{
  			name: "maxLength",
  			type: "number"
  		},
  		{
  			name: "allowClear",
  			type: "boolean"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"filled",
  				"unstyled"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "leftSection",
  			type: "string"
  		},
  		{
  			name: "rightSection",
  			type: "string"
  		},
  		{
  			name: "leftSectionWidth",
  			type: "number"
  		},
  		{
  			name: "rightSectionWidth",
  			type: "number"
  		},
  		{
  			name: "pointer",
  			type: "boolean",
  			description: "Determines whether the input should have cursor: pointer style, false by default"
  		},
  		{
  			name: "withErrorStyles",
  			type: "boolean",
  			description: "Determines whether the input should have red border and red text color when the error prop is set, true by default"
  		}
  	]
  },
  	toggle: toggle,
  	select: select,
  	group: group,
  	"two-columns": {
  	label: "Two Columns",
  	category: "layout",
  	name: "two-columns",
  	hidden: true,
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "layout",
  			type: "string",
  			options: [
  				"layout-1-1",
  				"layout-1-2",
  				"layout-1-3",
  				"layout-1-4",
  				"layout-2-1",
  				"layout-3-1",
  				"layout-4-1",
  				"layout-2-3",
  				"layout-3-2",
  				"layout-0-1",
  				"layout-1-0"
  			]
  		},
  		{
  			name: "leftAlignment",
  			type: "string",
  			description: "Flex \"align-self\" attribute for the column",
  			options: [
  				"auto",
  				"baseline",
  				"center",
  				"end",
  				"flex-end",
  				"flex-start",
  				"inherit",
  				"initial",
  				"normal",
  				"revert",
  				"self-end",
  				"self-start",
  				"start",
  				"stretch",
  				"unset"
  			]
  		},
  		{
  			name: "rightAlignment",
  			type: "string",
  			description: "Flex \"align-self\" attribute for the column",
  			options: [
  				"auto",
  				"baseline",
  				"center",
  				"end",
  				"flex-end",
  				"flex-start",
  				"inherit",
  				"initial",
  				"normal",
  				"revert",
  				"self-end",
  				"self-start",
  				"start",
  				"stretch",
  				"unset"
  			]
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	]
  },
  	"three-columns": {
  	label: "Three Columns",
  	category: "layout",
  	name: "three-columns",
  	hidden: true,
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "layout",
  			type: "string",
  			options: [
  				"layout-0-1-0",
  				"layout-1-0-0",
  				"layout-1-1-1",
  				"layout-1-1-2",
  				"layout-1-2-1",
  				"layout-2-1-1",
  				"layout-1-1-3",
  				"layout-1-3-1",
  				"layout-3-1-1"
  			]
  		},
  		{
  			name: "leftAlignment",
  			type: "string",
  			description: "Flex \"align-self\" attribute for the column",
  			options: [
  				"auto",
  				"baseline",
  				"center",
  				"end",
  				"flex-end",
  				"flex-start",
  				"inherit",
  				"initial",
  				"normal",
  				"revert",
  				"self-end",
  				"self-start",
  				"start",
  				"stretch",
  				"unset"
  			]
  		},
  		{
  			name: "centerAlignment",
  			type: "string",
  			description: "Flex \"align-self\" attribute for the column",
  			options: [
  				"auto",
  				"baseline",
  				"center",
  				"end",
  				"flex-end",
  				"flex-start",
  				"inherit",
  				"initial",
  				"normal",
  				"revert",
  				"self-end",
  				"self-start",
  				"start",
  				"stretch",
  				"unset"
  			]
  		},
  		{
  			name: "rightAlignment",
  			type: "string",
  			description: "Flex \"align-self\" attribute for the column",
  			options: [
  				"auto",
  				"baseline",
  				"center",
  				"end",
  				"flex-end",
  				"flex-start",
  				"inherit",
  				"initial",
  				"normal",
  				"revert",
  				"self-end",
  				"self-start",
  				"start",
  				"stretch",
  				"unset"
  			]
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	]
  },
  	columns: columns,
  	array: array,
  	"input-number": {
  	label: "Input Number",
  	category: "general",
  	name: "input-number",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	description: "Basic input number field, returns a numeric value",
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "placeholder",
  			type: "string | i18n",
  			description: "Placeholder text, visibile when the field is empty"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	react: [
  		{
  			name: "min",
  			type: "number"
  		},
  		{
  			name: "step",
  			type: "number"
  		},
  		{
  			name: "max",
  			type: "number"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "allowClear",
  			type: "boolean"
  		},
  		{
  			name: "min",
  			type: "number"
  		},
  		{
  			name: "step",
  			type: "number"
  		},
  		{
  			name: "max",
  			type: "number"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "inside",
  			type: "boolean",
  			description: "Show prefix and postfix inside the input box"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"filled",
  				"standard"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Show floating label for the control"
  		},
  		{
  			name: "disableUnderline",
  			type: "boolean",
  			description: "Disable underline in \"filled\" and \"standard\" variant"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"sm"
  			]
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		},
  		{
  			name: "floatingLabel",
  			type: "boolean",
  			description: "Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"
  		},
  		{
  			name: "min",
  			type: "number"
  		},
  		{
  			name: "step",
  			type: "number"
  		},
  		{
  			name: "max",
  			type: "number"
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"outlined",
  				"borderless",
  				"filled"
  			]
  		},
  		{
  			name: "min",
  			type: "number"
  		},
  		{
  			name: "step",
  			type: "number"
  		},
  		{
  			name: "max",
  			type: "number"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "showControls",
  			type: "boolean",
  			description: "Whether to show +- controls, or set custom arrows icon"
  		},
  		{
  			name: "stringMode",
  			type: "boolean",
  			description: "Set value as string to support high precision decimals. Will return string value by onChange"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"filled",
  				"unstyled"
  			]
  		},
  		{
  			name: "min",
  			type: "number"
  		},
  		{
  			name: "step",
  			type: "number"
  		},
  		{
  			name: "max",
  			type: "number"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "leftSection",
  			type: "string"
  		},
  		{
  			name: "rightSection",
  			type: "string"
  		},
  		{
  			name: "leftSectionWidth",
  			type: "number"
  		},
  		{
  			name: "rightSectionWidth",
  			type: "number"
  		},
  		{
  			name: "pointer",
  			type: "boolean",
  			description: "Determines whether the input should have cursor: pointer style, false by default"
  		},
  		{
  			name: "withErrorStyles",
  			type: "boolean",
  			description: "Determines whether the input should have red border and red text color when the error prop is set, true by default"
  		},
  		{
  			name: "valueIsNumericString",
  			type: "boolean",
  			description: "If value is passed as string representation of numbers (unformatted) and number is used in any format props like in prefix or suffix in numeric format and format prop in pattern format then this should be passed as true. false by default"
  		},
  		{
  			name: "hideControls",
  			type: "boolean"
  		},
  		{
  			name: "allowLeadingZeros",
  			type: "boolean"
  		},
  		{
  			name: "allowNegative",
  			type: "boolean"
  		},
  		{
  			name: "clampBehavior",
  			type: "string",
  			description: "Controls how value is clamped, strict – user is not allowed to enter values that are not in [min, max] range, blur – user is allowed to enter any values, but the value is clamped when the input loses focus (default behavior), none – lifts all restrictions, [min, max] range is applied only for controls and up/down keys",
  			options: [
  				"none",
  				"blur",
  				"strict"
  			]
  		},
  		{
  			name: "startValue",
  			type: "number",
  			description: "Value set to the input when increment/decrement buttons are clicked or up/down arrows pressed if the input is empty, 0 by default"
  		},
  		{
  			name: "allowDecimal",
  			type: "boolean"
  		},
  		{
  			name: "decimalSeparator",
  			type: "string",
  			description: "Character used as a decimal separator, \".\" by default"
  		},
  		{
  			name: "fixedDecimalScale",
  			type: "boolean",
  			description: "If set, 0s are added after decimalSeparator to match given decimalScale. false by default"
  		},
  		{
  			name: "decimalScale",
  			type: "number",
  			description: "Limits the number of digits that can be entered after the decimal point"
  		},
  		{
  			name: "thousandsGroupStyle",
  			type: "string",
  			description: "Defines the thousand grouping style",
  			options: [
  				"none",
  				"thousand",
  				"lakh",
  				"wan"
  			]
  		},
  		{
  			name: "thousandSeparator",
  			type: "string",
  			description: "A character used to separate thousands"
  		}
  	]
  },
  	slider: slider,
  	date: date,
  	checkbox: checkbox,
  	"checkbox-group": {
  	label: "Checkbox Group",
  	category: "general",
  	name: "checkbox-group",
  	frameworks: [
  		"react-antd",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "options",
  			type: "array"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"red",
  				"orange",
  				"yellow",
  				"green",
  				"cyan",
  				"blue",
  				"violet"
  			]
  		},
  		{
  			name: "inline",
  			type: "boolean"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium",
  				"large"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "labelPlacement",
  			type: "string",
  			options: [
  				"top",
  				"start",
  				"bottom",
  				"end"
  			]
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "inline",
  			type: "boolean"
  		},
  		{
  			name: "reverse",
  			type: "boolean"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "options",
  			type: "array"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "labelPosition",
  			type: "string",
  			options: [
  				"left",
  				"right"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		},
  		{
  			name: "iconColor",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		},
  		{
  			name: "autoContrast",
  			type: "boolean",
  			description: "Determines whether icon color with filled variant should depend on background-color. If luminosity of the color prop is less than theme.luminosityThreshold, then theme.white will be used for text color, otherwise theme.black. Overrides theme.autoContrast."
  		}
  	]
  },
  	"radio-group": {
  	label: "Radio Group",
  	category: "general",
  	name: "radio-group",
  	frameworks: [
  		"react-antd",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "options",
  			type: "array"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "inline",
  			type: "boolean"
  		},
  		{
  			name: "appearance",
  			type: "string",
  			description: "Show as default radio control or stacked buttons",
  			options: [
  				"default",
  				"picker"
  			]
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"medium",
  				"large"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"error",
  				"info",
  				"primary",
  				"secondary",
  				"success",
  				"warning"
  			]
  		},
  		{
  			name: "labelPlacement",
  			type: "string",
  			options: [
  				"top",
  				"start",
  				"bottom",
  				"end"
  			]
  		},
  		{
  			name: "row",
  			type: "boolean"
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "inline",
  			type: "boolean"
  		},
  		{
  			name: "reverse",
  			type: "boolean"
  		}
  	],
  	"react-antd": [
  		{
  			name: "optionType",
  			type: "string",
  			options: [
  				"default",
  				"button"
  			]
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		},
  		{
  			name: "inline",
  			type: "boolean"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "options",
  			type: "array"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "labelPosition",
  			type: "string",
  			options: [
  				"left",
  				"right"
  			]
  		},
  		{
  			name: "color",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		},
  		{
  			name: "iconColor",
  			type: "string",
  			options: [
  				"grey",
  				"red",
  				"pink",
  				"grape",
  				"violet",
  				"indigo",
  				"blue",
  				"cyan",
  				"teal",
  				"green",
  				"lime",
  				"yellow",
  				"orange"
  			]
  		},
  		{
  			name: "autoContrast",
  			type: "boolean",
  			description: "Determines whether icon color with filled variant should depend on background-color. If luminosity of the color prop is less than theme.luminosityThreshold, then theme.white will be used for text color, otherwise theme.black. Overrides theme.autoContrast."
  		}
  	]
  },
  	"input-tag": {
  	label: "Tag Input",
  	category: "general",
  	name: "input-tag",
  	description: "Input tags, create tags, returns an array of string",
  	frameworks: [
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "trigger",
  			type: "[string]",
  			description: "Set the trigger for creating tags",
  			options: [
  				"Enter",
  				"Space",
  				"Comma"
  			]
  		},
  		{
  			name: "block",
  			type: "boolean",
  			description: "Only in fluid layout"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "radius",
  			type: "string",
  			options: [
  				"xs",
  				"sm",
  				"md",
  				"lg",
  				"xl"
  			]
  		},
  		{
  			name: "variant",
  			type: "string",
  			options: [
  				"default",
  				"filled",
  				"unstyled"
  			]
  		},
  		{
  			name: "data",
  			type: "array",
  			description: "Data displayed in the dropdown"
  		},
  		{
  			name: "leftSection",
  			type: "string"
  		},
  		{
  			name: "rightSection",
  			type: "string"
  		},
  		{
  			name: "leftSectionWidth",
  			type: "number"
  		},
  		{
  			name: "rightSectionWidth",
  			type: "number"
  		},
  		{
  			name: "maxTags",
  			type: "number",
  			description: "Maximum number of tags, Infinity by default"
  		},
  		{
  			name: "maxDropdownHeight",
  			type: "number",
  			description: "Max-height of the dropdown, only applicable when withScrollArea prop is true, 250 by default"
  		},
  		{
  			name: "limit",
  			type: "number",
  			description: "Maximum number of options displayed at a time, Infinity by default"
  		},
  		{
  			name: "allowDuplicates",
  			type: "boolean"
  		},
  		{
  			name: "clearable",
  			type: "boolean"
  		},
  		{
  			name: "defaultDropdownOpened",
  			type: "boolean"
  		},
  		{
  			name: "pointer",
  			type: "boolean",
  			description: "Determines whether the input should have cursor: pointer style, false by default"
  		},
  		{
  			name: "searchable",
  			type: "boolean",
  			description: "Determines whether the select should be searchable, false by default"
  		},
  		{
  			name: "selectFirstOptionOnChange",
  			type: "boolean",
  			description: "Determines whether the first option should be selected when value changes, false by default"
  		},
  		{
  			name: "withCheckIcon",
  			type: "boolean",
  			description: "Determines whether check icon should be displayed near the selected option label, true by default"
  		},
  		{
  			name: "withErrorStyles",
  			type: "boolean",
  			description: "Determines whether the input should have red border and red text color when the error prop is set, true by default"
  		},
  		{
  			name: "withScrollArea",
  			type: "boolean",
  			description: "Determines whether the options should be wrapped with scroll bars, true by default"
  		}
  	]
  },
  	"input-mask": {
  	label: "Input Mask",
  	category: "general",
  	name: "input-mask",
  	description: "Masked input text",
  	frameworks: [
  		"react-rsuite5"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "placeholder",
  			type: "string | i18n",
  			description: "Placeholder text, visibile when the field is empty"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "mask",
  			type: "string",
  			description: "Use ${d} - digits, ${D} - any non digits, ${a} - any non alpha chars, ${w} - any word chars "
  		},
  		{
  			name: "guide",
  			type: "boolean"
  		},
  		{
  			name: "keepCharPositions",
  			type: "boolean",
  			description: "When true, adding or deleting characters will not affect the position of existing characters"
  		},
  		{
  			name: "showMask",
  			type: "boolean",
  			description: "When the input value is empty, the mask is displayed as a placeholder instead of a regular placeholder"
  		},
  		{
  			name: "placeholderChar",
  			type: "string",
  			description: "The placeholder character represents the fillable spot in the mask"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the field to 100% of the enclosing container"
  		},
  		{
  			name: "width",
  			type: "number",
  			description: "Set the width (in pixel) of the field"
  		},
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		},
  		{
  			name: "prefix",
  			type: "string",
  			description: "Fixed heading text"
  		},
  		{
  			name: "inside",
  			type: "boolean",
  			description: "Show prefix and postfix inside the input box"
  		},
  		{
  			name: "postfix",
  			type: "string",
  			description: "Fixed trailing text"
  		}
  	]
  },
  	textarea: textarea,
  	rate: rate,
  	placeholder: placeholder,
  	multiselect: multiselect,
  	"placeholder-image": {
  	label: "Placeholder Image",
  	category: "layout",
  	name: "placeholder-image",
  	description: "Image placeholder",
  	frameworks: [
  		"react-antd",
  		"react",
  		"react-bootstrap",
  		"react-material-ui",
  		"react-rsuite5",
  		"react-mantine"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string"
  		},
  		{
  			name: "url",
  			type: "string"
  		},
  		{
  			name: "align",
  			type: "string",
  			options: [
  				"left",
  				"center",
  				"right"
  			]
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	react: [
  		{
  			name: "maxWidth",
  			type: "number"
  		},
  		{
  			name: "maxHeight",
  			type: "number"
  		},
  		{
  			name: "marginTop",
  			type: "number"
  		},
  		{
  			name: "marginBottom",
  			type: "number"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "maxWidth",
  			type: "number"
  		},
  		{
  			name: "maxHeight",
  			type: "number"
  		},
  		{
  			name: "marginTop",
  			type: "number"
  		},
  		{
  			name: "marginBottom",
  			type: "number"
  		}
  	],
  	"react-material-ui": [
  		{
  			name: "maxWidth",
  			type: "number"
  		},
  		{
  			name: "maxHeight",
  			type: "number"
  		},
  		{
  			name: "marginTop",
  			type: "number"
  		},
  		{
  			name: "marginBottom",
  			type: "number"
  		}
  	],
  	"react-bootstrap": [
  		{
  			name: "maxWidth",
  			type: "number"
  		},
  		{
  			name: "maxHeight",
  			type: "number"
  		},
  		{
  			name: "marginTop",
  			type: "number"
  		},
  		{
  			name: "marginBottom",
  			type: "number"
  		}
  	],
  	"react-antd": [
  		{
  			name: "maxWidth",
  			type: "number"
  		},
  		{
  			name: "maxHeight",
  			type: "number"
  		},
  		{
  			name: "marginTop",
  			type: "number"
  		},
  		{
  			name: "marginBottom",
  			type: "number"
  		}
  	],
  	"react-mantine": [
  		{
  			name: "maxWidth",
  			type: "number"
  		},
  		{
  			name: "maxHeight",
  			type: "number"
  		},
  		{
  			name: "marginTop",
  			type: "number"
  		},
  		{
  			name: "marginBottom",
  			type: "number"
  		}
  	]
  },
  	button: button,
  	divider: divider,
  	datetime: datetime,
  	tabs: tabs,
  	"radio-tile": {
  	label: "Radio Tile",
  	description: "Radio control with card, description and icon",
  	category: "general",
  	name: "radio-tile",
  	frameworks: [
  		"react-rsuite5"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "options",
  			type: "array"
  		},
  		{
  			name: "initalOption",
  			type: "string"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "inline",
  			type: "boolean",
  			description: "Use inline layout"
  		},
  		{
  			name: "iconWidth",
  			type: "number"
  		},
  		{
  			name: "iconHeight",
  			type: "number"
  		},
  		{
  			name: "tooltip",
  			type: "boolean",
  			description: "Show hint as tooltip next to label"
  		}
  	]
  },
  	upload: upload,
  	"buttons-toggle-group": {
  	label: "Toggle Buttons",
  	category: "layout",
  	description: "List of toggle buttons, works like a radio group, returns an array of string",
  	name: "buttons-toggle-group",
  	frameworks: [
  		"react-antd",
  		"react-rsuite5"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "options",
  			type: "array"
  		},
  		{
  			name: "showImageOptions",
  			type: "boolean",
  			description: "Show image field for Select options to be displayed in the drop-down"
  		},
  		{
  			name: "multiple",
  			type: "boolean",
  			description: "Allow to select multiple values"
  		},
  		{
  			name: "disabled",
  			type: "boolean",
  			description: "Disables and greys out the field"
  		},
  		{
  			name: "readOnly",
  			type: "boolean",
  			description: "Put the field in read only mode"
  		},
  		{
  			name: "hidden",
  			type: "boolean",
  			description: "Hides the field from the form"
  		},
  		{
  			name: "fullWidth",
  			type: "boolean",
  			description: "Set the width of the container field to 100%"
  		},
  		{
  			name: "justifyContent",
  			type: "string",
  			options: [
  				"center",
  				"flex-start",
  				"flex-end",
  				"space-between",
  				"space-around"
  			]
  		}
  	],
  	"react-rsuite5": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"lg",
  				"md",
  				"sm",
  				"xs"
  			]
  		}
  	],
  	"react-antd": [
  		{
  			name: "size",
  			type: "string",
  			description: "Size of the field",
  			options: [
  				"small",
  				"default",
  				"large"
  			]
  		}
  	]
  },
  	steps: steps,
  	"esm-module": {
  	label: "Module",
  	category: "general",
  	name: "esm-module",
  	description: "Generic ESM module",
  	hidden: true,
  	frameworks: [
  		"react-rsuite5"
  	],
  	common: [
  		{
  			name: "name",
  			type: "string",
  			description: "The name of the field and the key of the JSON"
  		},
  		{
  			name: "label",
  			type: "string | i18n",
  			description: "Label of the field"
  		},
  		{
  			name: "hint",
  			type: "string | i18n",
  			description: "Help text for the field (generally shown below the input box)"
  		},
  		{
  			name: "componentUrl",
  			type: "string"
  		},
  		{
  			name: "defaultExport",
  			type: "boolean"
  		},
  		{
  			name: "exportedKey",
  			type: "string",
  			description: "The exported key from the ESM module"
  		},
  		{
  			name: "count",
  			type: "number"
  		},
  		{
  			name: "placeholder",
  			type: "string",
  			description: "Placeholder text, visibile when the field is empty"
  		}
  	]
  },
  	time: time,
  	hidden: hidden,
  	currency: currency
  };

  var HttpCall = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var data, options, fetch, opts, headers, hash;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, options = _ref.options, fetch = _ref.fetch;
            opts = _objectSpread2({
              method: 'POST'
            }, options);
            headers = {
              'Content-Type': 'application/json'
            };
            if (opts.authorization === 'bearer') {
              headers.Authorization = "Bearer ".concat(opts.bearerToken);
            } else if (opts.authorization === 'basic') {
              hash = btoa(opts.username + ':' + opts.password);
              headers.Authorization = "Basic ".concat(hash);
            }
            _context.next = 6;
            return fetch(opts.url, {
              method: opts.method,
              headers: headers,
              redirect: 'follow',
              body: JSON.stringify(data)
            });
          case 6:
            return _context.abrupt("return", _context.sent);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function HttpCall(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var GetFormIo = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var data, _ref$options, options, fetch, opts, formData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, fetch = _ref.fetch;
            opts = _objectSpread2({
              url: null
            }, options);
            formData = new FormData();
            Object.keys(data).forEach(function (key) {
              return formData.append(key, typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key]));
            });
            _context.next = 6;
            return fetch(opts.url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: formData
            });
          case 6:
            return _context.abrupt("return", _context.sent);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function GetFormIo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var IFTT = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var data, options, opts;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, options = _ref.options;
            opts = Object.assign({
              key: null,
              eventName: null
            }, options);
            _context.next = 4;
            return fetch("https://maker.ifttt.com/trigger/".concat(opts.eventName, "/json/with/key/").concat(opts.key), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow',
              body: JSON.stringify(data),
              mode: 'no-cors'
            });
          case 4:
            return _context.abrupt("return", _context.sent);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function IFTT(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var LAYOUT_FIELDS$1 = ['group', 'two-columns', 'three-columns', 'columns', 'steps', 'tabs'];
  var defaultBlockProperty = function defaultBlockProperty(s) {
    return {
      rich_text: [{
        text: {
          content: s
        }
      }]
    };
  };
  var NotionMappings = {
    'input-number': 'number',
    'toggle': function toggle(b) {
      return {
        'checkbox': !!b
      };
    },
    'checkbox': function checkbox(b) {
      return {
        'checkbox': !!b
      };
    },
    'date': function date(d) {
      return {
        date: {
          start: d
        }
      };
    },
    'datetime': function datetime(d) {
      return {
        date: {
          start: d
        }
      };
    },
    'select': function select(s) {
      return {
        select: {
          name: s
        }
      };
    },
    'radio-group': function radioGroup(s) {
      return {
        select: {
          name: s
        }
      };
    },
    'multiselect': function multiselect(d) {
      return {
        'multi_select': (d !== null && d !== void 0 ? d : []).map(function (key) {
          return {
            name: key
          };
        })
      };
    }
  };
  var Notion = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var data, options, fetch, fields, opts, notionProperties;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, options = _ref.options, fetch = _ref.fetch, fields = _ref.fields;
            opts = Object.assign({
              secretKey: null,
              databaseId: null
            }, options); // translat properties according to this
            // DOC: https://developers.notion.com/reference/property-value-object
            // omit all layout fields
            notionProperties = Object.keys(data).filter(function (key) {
              return !LAYOUT_FIELDS$1.includes(key);
            }).reduce(function (acc, key) {
              var newValue;
              if (typeof NotionMappings[fields[key]] === 'function') {
                newValue = NotionMappings[fields[key]](data[key]);
              } else if (NotionMappings[fields[key]]) {
                newValue = _defineProperty$1({}, NotionMappings[fields[key]], data[key]);
              } else {
                newValue = defaultBlockProperty(data[key]);
              }
              return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, key, newValue));
            }, {});
            _context.next = 5;
            return fetch('https://api.notion.com/v1/pages', {
              method: 'POST',
              headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(opts.secretKey),
                'Notion-Version': '2022-06-28'
              }),
              body: JSON.stringify({
                parent: {
                  database_id: opts.databaseId
                },
                properties: notionProperties
              })
            });
          case 5:
            return _context.abrupt("return", _context.sent);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function Notion(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var Zapier = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var data, options, fetch, opts;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, options = _ref.options, fetch = _ref.fetch;
            opts = Object.assign({
              url: null
            }, options);
            _context.next = 4;
            return fetch(opts.url, {
              method: 'POST',
              headers: new Headers({
                'Content-Type': 'application/json'
              }),
              body: JSON.stringify(data)
              //mode: 'no-cors'
            });
          case 4:
            return _context.abrupt("return", _context.sent);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function Zapier(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var FormSparkIo = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var data, _ref$options, options, fetch, opts;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, fetch = _ref.fetch;
            opts = _objectSpread2({
              formId: null
            }, options);
            _context.next = 4;
            return fetch("https://submit-form.com/".concat(opts.formId), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(data)
            });
          case 4:
            return _context.abrupt("return", _context.sent);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function FormSparkIo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var AirTable = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var data, _ref$options, options, fetch, opts;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, fetch = _ref.fetch;
            opts = _objectSpread2({
              webhookUrl: null
            }, options);
            return _context.abrupt("return", fetch(opts.webhookUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function AirTable(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var FormCarry = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var data, options, fetch, opts;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, options = _ref.options, fetch = _ref.fetch;
            opts = _objectSpread2({
              url: null
            }, options);
            _context.next = 4;
            return fetch(opts.url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(data)
            });
          case 4:
            return _context.abrupt("return", _context.sent);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function FormCarry(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var Connectors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AirTable: AirTable,
    FormCarry: FormCarry,
    FormSparkIo: FormSparkIo,
    GetFormIo: GetFormIo,
    HttpCall: HttpCall,
    IFTT: IFTT,
    Notion: Notion,
    Zapier: Zapier
  });

  var CONNECTOR_NAMES = Object.keys(Connectors);
  var AVAILABLE_COMPONENTS = Object.keys(Manifests);
  var LAYOUT_FIELDS = ['group', 'two-columns', 'three-columns', 'steps', 'tabs', 'columns'];
  var validateJSONForm = function validateJSONForm(json) {
    if (!_isObject(json)) {
      return 'Not a valid JSON object';
    }
    if (!json.version || !_isNumber(json.version)) {
      return 'Not a valid LetsForm object, missing "version" value';
    }
    if (_isEmpty(json.fields)) {
      return 'Missing or empty "fields" value';
    }

    // check that all fields have component key
    var missingComponentFields = filterFields(json.fields, function (field) {
      return _isEmpty(field.component);
    });
    if (!_isEmpty(missingComponentFields)) {
      return 'All fields must includes a "component" key (' + missingComponentFields.length + ' incorrect json objects) ';
    }

    // check all non layouts fields have "name" key
    var missingNameFields = filterFields(json.fields, function (field) {
      return !LAYOUT_FIELDS.includes(field.component) && _isEmpty(field.name);
    });
    if (!_isEmpty(missingNameFields)) {
      return 'Fields (excepts layouts fields like "group") must have a "name" key, check these fields/components: ' + _uniq(missingNameFields.map(function (field) {
        return field.component;
      }));
    }

    // collect all component names and check they exists
    var usedComponets = _uniq(reduceFields(json.fields, function (field, acc) {
      return [].concat(_toConsumableArray(acc), [field.component]);
    }, []));
    var unknownCommponents = usedComponets.filter(function (component) {
      return !AVAILABLE_COMPONENTS.includes(component);
    });
    if (unknownCommponents.length !== 0) {
      return 'Form uses unknows component(s): ' + unknownCommponents.join(', ');
    }
    if (json.connectors) {
      if (!Array.isArray(json.connectors)) {
        return '"Connectors" key should be an array';
      }
      var invalidConnectors = json.connectors.filter(function (c) {
        return !isValidConnector(c);
      });
      if (invalidConnectors.length !== 0) {
        return 'Form uses unknown connector(s): ' + invalidConnectors.map(function (c) {
          var _c$name;
          return (_c$name = c.name) !== null && _c$name !== void 0 ? _c$name : 'unknown';
        }).join(',');
      }
    }
    return null;
  };
  var isValidConnector = function isValidConnector(c) {
    return _typeof(c) === 'object' && c.name && CONNECTOR_NAMES.includes(c.name);
  };
  var isValidForm = function isValidForm(form) {
    return validateJSONForm(form) == null;
  };
  var isValidField = function isValidField(obj) {
    return _typeof(obj) === 'object' && obj.component && obj.name && AVAILABLE_COMPONENTS.includes(obj.component);
  };
  var isValidArrayOfFields = function isValidArrayOfFields(obj) {
    return Array.isArray(obj) && obj.every(isValidField);
  };

  var formHelper = function formHelper(_form2) {
    var _form = _form2 ? _objectSpread2({}, _form2) : {};
    var _fields = _form2 !== null && _form2 !== void 0 && _form2.fields ? _toConsumableArray(_form2.fields) : [];
    var _skip = false;
    var makeHelper = function makeHelper(params) {
      return function (fieldName) {
        var fieldNames = Array.isArray(fieldName) ? fieldName : [fieldName];
        _fields = mapFields(_fields, function (field) {
          if (fieldNames.includes(field.name)) {
            return _objectSpread2(_objectSpread2({}, field), params);
          }
          return field;
        });
        return obj;
      };
    };
    var obj = {
      filter: function filter(predicate) {
        _fields = filterFields(_fields, predicate);
        return obj;
      },
      debug: function debug() {
        var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        lfLog("FormHelper: ".concat(s));
        return obj;
      },
      dump: function dump() {
        lfLog('FormHelper: current form');
        console.log(_objectSpread2(_objectSpread2({}, _form), {}, {
          fields: _fields
        }));
        return obj;
      },
      enable: makeHelper({
        disabled: false
      }),
      disable: makeHelper({
        disabled: true
      }),
      hide: makeHelper({
        hidden: true
      }),
      show: makeHelper({
        hidden: false
      }),
      set: function set(key, value) {
        _form[key] = value;
        return obj;
      },
      map: function map(predicate) {
        _fields = mapFields(_fields, predicate);
        return obj;
      },
      skip: function skip(_skip2) {
        _skip = _skip2;
        return obj;
      },
      append: function append(item) {
        // do nothing if null
        if (item) {
          if (isValidForm(item)) {
            _fields = [].concat(_toConsumableArray(_fields), _toConsumableArray(item.fields));
          } else if (isValidArrayOfFields(item)) {
            _fields = [].concat(_toConsumableArray(_fields), _toConsumableArray(item));
          } else if (isValidField(item)) {
            _fields = [].concat(_toConsumableArray(_fields), [item]);
          } else {
            lfError('FormHelper: invalid item to append');
            console.error(item);
          }
        }
        return obj;
      },
      setField: function setField(fieldName, key, value) {
        var toReplace = _isObject(key) ? key : _defineProperty$1({}, key, value);
        _fields = mapFields(_fields, function (field) {
          if (field.name === fieldName) {
            return _objectSpread2(_objectSpread2({}, field), toReplace);
          }
          return field;
        });
        return obj;
      },
      setValue: function setValue(key, value) {
        _form = _objectSpread2(_objectSpread2({}, _form), {}, _defineProperty$1({}, key, value));
        return obj;
      },
      form: function form() {
        // if skip, then just return the same form
        if (_skip) {
          return _form2;
        }
        return _objectSpread2(_objectSpread2({}, _form), {}, {
          fields: _fields
        });
      },
      fields: function fields() {
        return _fields;
      }
    };
    return obj;
  };

  var i18nOptions = function i18nOptions(value, i18n) {
    return (value !== null && value !== void 0 ? value : []).filter(function (value) {
      return value != null;
    }).map(function (value) {
      return _objectSpread2(_objectSpread2({}, value), {}, {
        label: i18n(value.label),
        description: i18n(value.description)
      });
    });
  };

  var collectIds = function collectIds(fields) {
    return reduceFields(fields || [], function (field, accumulator) {
      if (!accumulator.includes(field.id)) {
        return [].concat(_toConsumableArray(accumulator), [field.id]);
      }
      return accumulator;
    }, []);
  };

  /**
   * isChildrenOf
   * Returns true if the field (id: fieldId) is a child (nested field) of a field with id parentFieldId
   * @param {*} fieldId 
   * @param {*} parentFieldId 
   * @param {*} fields 
   * @returns 
   */
  var isChildrenOf = function isChildrenOf(fieldId, parentFieldId, fields) {
    if (_isEmpty(parentFieldId) || _isEmpty(fieldId)) {
      return false;
    }
    // for each fields, collect all subIds
    var obj = reduceFields(fields, function (field, accumulator) {
      if (field.fields || field.leftFields || field.rightFields || field.centerFields) {
        accumulator = _objectSpread2(_objectSpread2({}, accumulator), {}, _defineProperty$1({}, field.id, collectIds([field])));
      }
      return accumulator;
    }, {});
    // then check if parentFieldIs contains as subfield with this id
    if (obj && _isArray(obj[parentFieldId])) {
      return obj[parentFieldId].includes(fieldId);
    }
    return false;
  };

  var formHasComponents = function formHasComponents(form, component) {
    var components = Array.isArray(component) ? component : [component];
    var result = reduceFields(form.fields, function (field, accumulator) {
      return components.includes(field.component) ? accumulator + 1 : accumulator;
    }, 0);
    return result !== 0;
  };

  /**
   * isValidTime
   *
   * @param {} d Time string (i.e. 12:12:00)
   * @returns
   */
  var isValidTime = function isValidTime(d) {
    return typeof d === 'string' && d.match(/^[0-9]{1,2}:[0-9]{2,2}(:[0-9]{2,2}){0,1}$/) != null;
  };

  var omitFields = function omitFields(fields) {
    var fieldNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var toBeOmitted = Array.isArray(fieldNames) ? fieldNames : [fieldNames];
    return filterFields(fields, function (field) {
      return !toBeOmitted.includes(field.name);
    });
  };

  /**
   * someFields
   * Returns true if any of the fields of the form satisfy the predicate
   * @param {*} fields
   * @param {*} predicate
   * @returns {boolean}
   */
  var someFields = function someFields(fields, predicate) {
    var arr = reduceFields(fields, function (field, accumulator) {
      return [].concat(_toConsumableArray(accumulator), [!!predicate(field)]);
    }, []);
    return arr.some(function (item) {
      return item;
    });
  };

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') {
      return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$i = ".lf-validation-errors {\n  border: 1px solid #eebdd2;\n  background-color: #ffddd2;\n  padding: 15px;\n  color: #000000;\n}\n.lf-validation-errors.bottom {\n  margin-top: 15px;\n}\n.lf-validation-errors.top {\n  margin-bottom: 15px;\n}";
  styleInject(css_248z$i);

  var RawValidationErrors = function RawValidationErrors(_ref) {
    var _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? {} : _ref$errors,
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? '' : _ref$scope,
      locale = _ref.locale;
    var keys = Object.keys(errors);
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, keys.map(function (fieldName) {
      var errorObj = errors[fieldName];
      if (errorObj && _isArray(errorObj.errorMessages)) {
        return errorObj.errorMessages.map(function (errorMessage, idx) {
          if (errorMessage) {
            var label = i18n(errorObj.label, locale);
            return /*#__PURE__*/React$1.createElement(RawValidationErrors, {
              key: label || fieldName,
              errors: errorMessage,
              scope: "".concat(label || fieldName, "(").concat(idx + 1, ") - ")
            });
          }
        });
      } else if (errorObj && _isString(errorObj.errorMessage)) {
        var label = i18n(errorObj.label, locale);
        var errorMessage = errorObj.errorMessage ? i18n(errorObj.errorMessage, locale) : 'This is required';
        return /*#__PURE__*/React$1.createElement("div", {
          key: fieldName
        }, /*#__PURE__*/React$1.createElement("b", null, scope, label, ":"), "\xA0", errorMessage);
      }
    }));
  };
  var ValidationErrors = function ValidationErrors(_ref2) {
    var _ref2$errors = _ref2.errors,
      errors = _ref2$errors === void 0 ? {} : _ref2$errors,
      className = _ref2.className,
      _ref2$scope = _ref2.scope,
      scope = _ref2$scope === void 0 ? '' : _ref2$scope,
      locale = _ref2.locale;
    var keys = Object.keys(errors).filter(function (key) {
      return errors[key];
    });
    if (keys.length === 0) {
      return;
    }
    return /*#__PURE__*/React$1.createElement("div", {
      className: classNames('lf-validation-errors', className)
    }, /*#__PURE__*/React$1.createElement(RawValidationErrors, {
      scope: scope,
      errors: errors,
      locale: locale
    }));
  };

  var PlusCircle = function PlusCircle(_ref) {
    var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color;
    return /*#__PURE__*/React$1.createElement("svg", {
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none"
    }, /*#__PURE__*/React$1.createElement("path", {
      fill: color,
      fillRule: "evenodd",
      d: "M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm14 .069a1 1 0 01-1 1h-2.931V14a1 1 0 11-2 0v-2.931H6a1 1 0 110-2h3.069V6a1 1 0 112 0v3.069H14a1 1 0 011 1z"
    }));
  };

  var MinusCircle = function MinusCircle(_ref) {
    var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color;
    return /*#__PURE__*/React$1.createElement("svg", {
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React$1.createElement("path", {
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H7Z"
    }));
  };

  var ChevronDown = function ChevronDown(_ref) {
    var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color;
    return /*#__PURE__*/React$1.createElement("svg", {
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      fill: color,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React$1.createElement("path", {
      d: "M17,8H7a1,1,0,0,0-.768,1.641l5,6a1,1,0,0,0,1.536,0l5-6A1,1,0,0,0,17,8Zm-5,5.438L9.135,10h5.73Z"
    }));
  };

  var ChevronUp = function ChevronUp(_ref) {
    var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color;
    return /*#__PURE__*/React$1.createElement("svg", {
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React$1.createElement("path", {
      fill: color,
      d: "M12.768,8.359a1.035,1.035,0,0,0-1.536,0l-5,6A1,1,0,0,0,7,16H17a1,1,0,0,0,.768-1.641ZM9.135,14,12,10.563,14.865,14Z"
    }));
  };

  var Asterisk = function Asterisk(_ref) {
    var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      style = _ref.style;
    return /*#__PURE__*/React$1.createElement("svg", {
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      style: style,
      version: "1.1",
      id: "_x32_",
      className: "lf-icon-asterisk",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React$1.createElement("g", null, /*#__PURE__*/React$1.createElement("polygon", {
      style: {
        fill: color
      },
      className: "st0",
      points: "501.539,169.221 453.886,86.7 303.669,173.449 303.669,0 208.365,0 208.365,173.479 58.114,86.73\r 10.461,169.261 160.674,255.99 10.501,342.71 58.154,425.231 208.365,338.482 208.365,512 303.669,512 303.669,338.542\r 453.846,425.271 501.499,342.74 351.267,255.99 \t"
    })));
  };

  var Warning = function Warning(_ref) {
    var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color;
    return /*#__PURE__*/React$1.createElement("svg", {
      fill: color,
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      viewBox: "0 0 1920 1920",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React$1.createElement("path", {
      d: "M960 0c530.193 0 960 429.807 960 960s-429.807 960-960 960S0 1490.193 0 960 429.807 0 960 0Zm-9.838 1342.685c-84.47 0-153.19 68.721-153.19 153.19 0 84.47 68.72 153.192 153.19 153.192s153.19-68.721 153.19-153.191-68.72-153.19-153.19-153.19ZM1153.658 320H746.667l99.118 898.623h208.755L1153.658 320Z",
      fillRule: "evenodd"
    }));
  };

  var CrossCirle = function CrossCirle(_ref) {
    var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$yOffset = _ref.yOffset,
      yOffset = _ref$yOffset === void 0 ? 0 : _ref$yOffset;
    return /*#__PURE__*/React$1.createElement("svg", {
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      viewBox: "0 ".concat(yOffset, " 24 24"),
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React$1.createElement("path", {
      d: "M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
      stroke: color,
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  };

  var RequiredIcon = function RequiredIcon() {
    return /*#__PURE__*/React$1.createElement(Asterisk, {
      color: "#ff6633",
      width: 12,
      height: 12,
      style: {
        marginLeft: '3px'
      }
    });
  };

  var I18N = function I18N(Component) {
    var propNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var funcPropNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return function (props) {
      var lfLocale = props.lfLocale;
      var newProps = Object.keys(props).reduce(function (acc, propName) {
        // translate simpe field
        if (propNames.includes(propName)) {
          return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, propName, i18n(props[propName], lfLocale)));
        } else if (_isFunction(funcPropNames[propName])) {
          // pass the value trough the mapper
          var translated = funcPropNames[propName](props[propName], function (string) {
            return i18n(string, lfLocale);
          });
          return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, propName, translated));
        }
        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, propName, props[propName]));
      }, {});
      return /*#__PURE__*/React$1.createElement(Component, newProps);
    };
  };

  /**
   * ProxyFetch
   * Factory to create a wrapped version of the fetch function to work with predefined CORS proxy
   * @param {Object} params
   * @returns
   */
  var ProxyFetch = function ProxyFetch(params) {
    return /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, options) {
        var proxyUrl, proxyOptions, _proxyOptions$headers;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              proxyUrl = url;
              proxyOptions = _objectSpread2({}, options);
              if (params.proxy === 'cors-lol') {
                proxyUrl = 'https://api.cors.lol/?url=' + encodeURIComponent(url);
              } else if (params.proxy === 'just-cors') {
                proxyUrl = params.justCorsUrl + url;
              } else if (params.proxy === 'proxy-cors-sh') {
                proxyUrl = 'https://proxy.cors.sh/' + url;
                proxyOptions = _objectSpread2(_objectSpread2({}, proxyOptions), {}, {
                  headers: _objectSpread2(_objectSpread2({}, (_proxyOptions$headers = proxyOptions.headers) !== null && _proxyOptions$headers !== void 0 ? _proxyOptions$headers : {}), {}, {
                    'x-cors-api-key': params.corsShApiKey
                  })
                });
              } else if (params.proxy === 'cors-proxy-io') {
                proxyUrl = 'https://corsproxy.io/?' + url;
              }
              _context.prev = 3;
              _context.next = 6;
              return fetch(proxyUrl, proxyOptions);
            case 6:
              return _context.abrupt("return", _context.sent);
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](3);
              // capture url
              _context.t0.url = proxyUrl;
              throw _context.t0;
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 9]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  };

  var FormContext = /*#__PURE__*/React$1.createContext();

  var useFormContext = function useFormContext() {
    var context = React$1.useContext(FormContext);

    // put here some defaults

    return context;
  };
  var useStylesheet = function useStylesheet(id, css) {
    React$1.useEffect(function () {
      if (!_isEmpty(css)) {
        var head = document.head;
        var style = document.createElement("style");
        style.id = "letsform-sheet-".concat(id);
        style.innerHTML = css.replaceAll('.lf-current-form', ".lf-lets-form [data-lf-form-name=".concat(id, "]"));
        head.appendChild(style);
      }
      return function () {
        if (!_isEmpty(css)) {
          var _document$querySelect;
          (_document$querySelect = document.querySelector("#letsform-sheet-".concat(id))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
        }
      };
    }, [css, id]);
  };

  var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;

  /** `Object#toString` result references. */
  var dateTag = '[object Date]';

  /**
   * The base implementation of `_.isDate` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   */
  function baseIsDate$1(value) {
    return isObjectLike(value) && baseGetTag(value) == dateTag;
  }
  var _baseIsDate = baseIsDate$1;

  var baseIsDate = _baseIsDate,
    baseUnary = _baseUnary,
    nodeUtil = _nodeUtilExports;

  /* Node.js helper references. */
  var nodeIsDate = nodeUtil && nodeUtil.isDate;

  /**
   * Checks if `value` is classified as a `Date` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   * @example
   *
   * _.isDate(new Date);
   * // => true
   *
   * _.isDate('Mon April 23 2012');
   * // => false
   */
  var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
  var isDate_1 = isDate;

  var _isDate = /*@__PURE__*/getDefaultExportFromCjs(isDate_1);

  var ar$4 = "نعم";
  var eu$4 = "Bai";
  var la$4 = "Sic";
  var YesLabel = {
  	"en-US": "Yes",
  	"af-ZA": "Ja",
  	ar: ar$4,
  	"bg-BG": "Да",
  	"ca-AD": "Sí",
  	"cs-CZ": "Ano",
  	"cy-GB": "Ie",
  	"da-DK": "Ja",
  	"de-AT": "Ja",
  	"de-CH": "Ja",
  	"de-DE": "Ja",
  	"el-GR": "Ναί",
  	"en-GB": "Yes",
  	"es-CL": "Sí",
  	"es-ES": "Sí",
  	"es-MX": "Sí",
  	"et-EE": "Jah",
  	eu: eu$4,
  	"fa-IR": "آره",
  	"fi-FI": "Joo",
  	"fr-CA": "Oui",
  	"fr-FR": "Oui",
  	"he-IL": "כן",
  	"hi-IN": "हाँ",
  	"hr-HR": "Da",
  	"hu-HU": "Igen",
  	"id-ID": "Ya",
  	"is-IS": "Já",
  	"it-IT": "Si",
  	"ja-JP": "はい",
  	"km-KH": "បាត",
  	"ko-KR": "예",
  	la: la$4,
  	"lt-LT": "Taip",
  	"lv-LV": "Jā",
  	"mn-MN": "Мон",
  	"nb-NO": "Ja",
  	"nl-NL": "Ja",
  	"pl-PL": "Tak",
  	"pt-BR": "Sim",
  	"pt-PT": "Sim",
  	"ro-RO": "da",
  	"ru-RU": "Да",
  	"sk-SK": "Áno",
  	"sl-SI": "DA",
  	"sr-RS": "да",
  	"sv-SE": "Ja",
  	"th-TH": "ใช่",
  	"tr-TR": "Evet",
  	"uk-UA": "Так",
  	"vi-VN": "Đúng",
  	"zh-CN": "是的",
  	"zh-TW": "是的"
  };

  var ar$3 = "لا";
  var eu$3 = "Ez-";
  var la$3 = "Non";
  var NoLabel = {
  	"en-US": "No",
  	"af-ZA": "Geen",
  	ar: ar$3,
  	"bg-BG": "Не",
  	"ca-AD": "No",
  	"cs-CZ": "Ne",
  	"cy-GB": "Na",
  	"da-DK": "Ingen",
  	"de-AT": "NEIN",
  	"de-CH": "NEIN",
  	"de-DE": "NEIN",
  	"el-GR": "Οχι",
  	"en-GB": "No",
  	"es-CL": "No",
  	"es-ES": "No",
  	"es-MX": "No",
  	"et-EE": "Mitte",
  	eu: eu$3,
  	"fa-IR": "هیچ",
  	"fi-FI": "Ei",
  	"fr-CA": "Non",
  	"fr-FR": "Non",
  	"he-IL": "לא",
  	"hi-IN": "नहीं",
  	"hr-HR": "Ne",
  	"hu-HU": "Nem",
  	"id-ID": "TIDAK",
  	"is-IS": "Nei",
  	"it-IT": "No",
  	"ja-JP": "いいえ",
  	"km-KH": "ដេលក្ផាន",
  	"ko-KR": "아니요",
  	la: la$3,
  	"lt-LT": "Ne",
  	"lv-LV": "Nē",
  	"mn-MN": "-Гүй / -битгий",
  	"nb-NO": "Nei",
  	"nl-NL": "Nee",
  	"pl-PL": "NIE",
  	"pt-BR": "Não",
  	"pt-PT": "Não",
  	"ro-RO": "Nu",
  	"ru-RU": "Нет",
  	"sk-SK": "Nie",
  	"sl-SI": "Ne",
  	"sr-RS": "Не",
  	"sv-SE": "Nej",
  	"th-TH": "เลขที่",
  	"tr-TR": "HAYIR",
  	"uk-UA": "Немає",
  	"vi-VN": "KHÔNG",
  	"zh-CN": "不",
  	"zh-TW": "不"
  };

  var ar$2 = "عنصر";
  var eu$2 = "osagai";
  var la$2 = "elementum";
  var ElementLabel = {
  	"en-US": "element",
  	"af-ZA": "element",
  	ar: ar$2,
  	"bg-BG": "Елемент",
  	"ca-AD": "element",
  	"cs-CZ": "živel",
  	"cy-GB": "elfen",
  	"da-DK": "element",
  	"de-AT": "element",
  	"de-CH": "element",
  	"de-DE": "element",
  	"el-GR": "στοιχείο",
  	"en-GB": "element",
  	"es-CL": "elemento",
  	"es-ES": "elemento",
  	"es-MX": "elemento",
  	"et-EE": "element",
  	eu: eu$2,
  	"fa-IR": "عنصر",
  	"fi-FI": "elementti",
  	"fr-CA": "élément",
  	"fr-FR": "élément",
  	"he-IL": "אֵלֵמֶנט",
  	"hi-IN": "तत्व",
  	"hr-HR": "element",
  	"hu-HU": "elem",
  	"id-ID": "elemen",
  	"is-IS": "Element",
  	"it-IT": "elemento",
  	"ja-JP": "エレメント",
  	"km-KH": "ធាតុ",
  	"ko-KR": "요소",
  	la: la$2,
  	"lt-LT": "elementas",
  	"lv-LV": "elements",
  	"mn-MN": "бүрэлдэхүүн",
  	"nb-NO": "element",
  	"nl-NL": "element",
  	"pl-PL": "element",
  	"pt-BR": "elemento",
  	"pt-PT": "elemento",
  	"ro-RO": "element",
  	"ru-RU": "элемент",
  	"sk-SK": "element",
  	"sl-SI": "element",
  	"sr-RS": "елемент",
  	"sv-SE": "element",
  	"th-TH": "องค์ประกอบ",
  	"tr-TR": "eleman",
  	"uk-UA": "елемент",
  	"vi-VN": "yếu tố",
  	"zh-CN": "元素",
  	"zh-TW": "元素"
  };

  var ar$1 = "عناصر";
  var eu$1 = "elementuak";
  var la$1 = "elementa";
  var ElementsLabel = {
  	"en-US": "elements",
  	"af-ZA": "elemente",
  	ar: ar$1,
  	"bg-BG": "елементи",
  	"ca-AD": "elements",
  	"cs-CZ": "Prvky",
  	"cy-GB": "elfennau",
  	"da-DK": "elementer",
  	"de-AT": "elemente",
  	"de-CH": "elemente",
  	"de-DE": "elemente",
  	"el-GR": "στοιχεία",
  	"en-GB": "elements",
  	"es-CL": "elementos",
  	"es-ES": "elementos",
  	"es-MX": "elementos",
  	"et-EE": "elemendid",
  	eu: eu$1,
  	"fa-IR": "عناصر",
  	"fi-FI": "elementit",
  	"fr-CA": "éléments",
  	"fr-FR": "éléments",
  	"he-IL": "אלמנטים",
  	"hi-IN": "तत्वों",
  	"hr-HR": "elementi",
  	"hu-HU": "elemek",
  	"id-ID": "elemen",
  	"is-IS": "þættir",
  	"it-IT": "elementi",
  	"ja-JP": "要素",
  	"km-KH": "ធាតុ",
  	"ko-KR": "강요",
  	la: la$1,
  	"lt-LT": "elementai",
  	"lv-LV": "elementi",
  	"mn-MN": "Элэглэлт",
  	"nb-NO": "elementer",
  	"nl-NL": "elementen",
  	"pl-PL": "elementy",
  	"pt-BR": "elementos",
  	"pt-PT": "elementos",
  	"ro-RO": "elemente",
  	"ru-RU": "элементы",
  	"sk-SK": "prvky",
  	"sl-SI": "elementi",
  	"sr-RS": "елементи",
  	"sv-SE": "element",
  	"th-TH": "องค์ประกอบ",
  	"tr-TR": "elementler",
  	"uk-UA": "елементи",
  	"vi-VN": "các yếu tố",
  	"zh-CN": "元素",
  	"zh-TW": "元素"
  };

  var ar = "لا عناصر";
  var eu = "Elementurik ez";
  var la = "Nulla elementa";
  var NoElementsLabel = {
  	"en-US": "No elements",
  	"af-ZA": "Geen elemente nie",
  	ar: ar,
  	"bg-BG": "Без елементи",
  	"ca-AD": "Sense elements",
  	"cs-CZ": "Žádné prvky",
  	"cy-GB": "Dim Elfennau",
  	"da-DK": "Ingen elementer",
  	"de-AT": "Keine Elemente",
  	"de-CH": "Keine Elemente",
  	"de-DE": "Keine Elemente",
  	"el-GR": "Χωρίς στοιχεία",
  	"en-GB": "No elements",
  	"es-CL": "Sin elementos",
  	"es-ES": "Sin elementos",
  	"es-MX": "Sin elementos",
  	"et-EE": "Elemente pole",
  	eu: eu,
  	"fa-IR": "بدون عنصر",
  	"fi-FI": "Ei elementtejä",
  	"fr-CA": "Pas d'éléments",
  	"fr-FR": "Pas d'éléments",
  	"he-IL": "אין אלמנטים",
  	"hi-IN": "कोई तत्व नहीं",
  	"hr-HR": "Nema elemenata",
  	"hu-HU": "Nincs elem",
  	"id-ID": "tidak ada elemen",
  	"is-IS": "Engir þættir",
  	"it-IT": "Nessun elemento",
  	"ja-JP": "要素はありません",
  	"km-KH": "គ្មានធាតុ",
  	"ko-KR": "요소가 없습니다",
  	la: la,
  	"lt-LT": "Jokių elementų",
  	"lv-LV": "Nav elementu",
  	"mn-MN": "элемент байхгүй",
  	"nb-NO": "Ingen elementer",
  	"nl-NL": "Geen elementen",
  	"pl-PL": "bez elementów",
  	"pt-BR": "Sem elementos",
  	"pt-PT": "Sem elementos",
  	"ro-RO": "Fără elemente",
  	"ru-RU": "Нет элементов",
  	"sk-SK": "Žiadne prvky",
  	"sl-SI": "Brez elementov",
  	"sr-RS": "Нема елемената",
  	"sv-SE": "Inga element",
  	"th-TH": "ไม่มีองค์ประกอบ",
  	"tr-TR": "Element Yok",
  	"uk-UA": "немає елементів",
  	"vi-VN": "Không có yếu tố",
  	"zh-CN": "没有元素",
  	"zh-TW": "没有元素"
  };

  var Plaintext = function Plaintext(_ref) {
    var value = _ref.value,
      component = _ref.component,
      options = _ref.options,
      locale = _ref.locale;
    var d;
    switch (component) {
      case 'input-number':
      case 'rate':
      case 'slider':
        return /*#__PURE__*/React$1.createElement("div", {
          className: "plaintext-value"
        }, value);
      case 'input-text':
      case 'time':
        return /*#__PURE__*/React$1.createElement("div", {
          className: "plaintext-value"
        }, value);
      case 'date':
        if (_isDate(value)) {
          d = value;
        } else if (_isString(value) && isValidDate(new Date(value))) {
          d = new Date(value);
        }
        return /*#__PURE__*/React$1.createElement("div", {
          className: "plaintext-value"
        }, d ? d.toLocaleDateString() : '');
      case 'datetime':
        if (_isDate(value)) {
          d = value;
        } else if (_isString(value) && isValidDate(new Date(value))) {
          d = new Date(value);
        }
        return /*#__PURE__*/React$1.createElement("div", {
          className: "plaintext-value"
        }, d ? d.toLocaleDateString() + ' ' + d.toLocaleTimeString() : '');
      case 'toggle':
      case 'checkbox':
        if (value === true || value === 1) {
          return /*#__PURE__*/React$1.createElement("div", {
            className: "plaintext-value"
          }, i18n(YesLabel, locale));
        } else if (value === false || value === 0) {
          return /*#__PURE__*/React$1.createElement("div", {
            className: "plaintext-value"
          }, i18n(NoLabel, locale));
        }
        return /*#__PURE__*/React$1.createElement("div", {
          className: "plaintext-value"
        });
      case 'radio-group':
      case 'radio-tile':
      case 'select':
        var found = (options !== null && options !== void 0 ? options : []).find(function (option) {
          return option.value === value;
        });
        var label = '';
        if (found) {
          if (isI18n(found.label)) {
            label = i18n(found.label, locale);
          } else {
            label = found.label;
          }
        }
        return /*#__PURE__*/React$1.createElement("div", {
          className: "plaintext-value"
        }, label);
      case 'checkbox-group':
      case 'multiselect':
        var selectedOptions = (options !== null && options !== void 0 ? options : []).filter(function (option) {
          return (value !== null && value !== void 0 ? value : []).includes(option.value);
        });
        var founds = selectedOptions.map(function (option) {
          return isI18n(option.label) ? i18n(option.label, locale) : option.label;
        });
        return /*#__PURE__*/React$1.createElement("div", null, founds.join(', '));
      case 'array':
        return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, _isArray(value) && value.every(function (item) {
          return _keys(item).length === 1;
        }) && /*#__PURE__*/React$1.createElement("div", {
          className: "plaintext-value"
        }, value.map(function (item) {
          return item[_keys(item)[0]];
        }).join(', ')), _isArray(value) && !value.every(function (item) {
          return _keys(item).length === 1;
        }) && /*#__PURE__*/React$1.createElement("div", {
          className: "plaintext-value"
        }, /*#__PURE__*/React$1.createElement("span", {
          className: "count"
        }, value.length), ' ', value.length > 1 ? i18n(ElementsLabel, locale) : i18n(ElementLabel, locale)), !_isArray(value) && /*#__PURE__*/React$1.createElement("div", {
          className: "plaintext-value"
        }, i18n(NoElementsLabel, locale)));
      case 'textarea':
        return /*#__PURE__*/React$1.createElement("div", {
          className: "plaintext-value",
          dangerouslySetInnerHTML: {
            __html: (value || '').replaceAll('\n', '<br/>')
          }
        });
      case 'placeholder':
      case 'placeholder-image':
        return /*#__PURE__*/React$1.createElement(React$1.Fragment, null);
      default:
        return /*#__PURE__*/React$1.createElement("div", {
          className: "plaintext-value"
        }, _typeof(value) !== 'object' ? value : '');
    }
  };

  /* eslint-disable no-loop-func */
  var microdown = function () {
    var _this = this;
    /*
     * tag helper
     */
    var tag = function tag(_tag, text, values) {
        return "<".concat(_tag + (values ? ' ' + Object.keys(values).map(function (k) {
          return values[k] ? "".concat(k, "=\"").concat(encode(values[k]) || '', "\"") : '';
        }).join(' ') : ''), ">").concat(text, "</").concat(_tag, ">");
      },
      /**
       * outdent all rows by first as reference
       */
      outdent = function outdent(text) {
        return text.replace(new RegExp('^' + (text.match(/^\s+/) || '')[0], 'gm'), '');
      },
      /**
       * encode double quotes and HTML tags to entities
       */
      encode = function encode(text) {
        return text ? text.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
      },
      /**
       * recursive list parser
       */
      listR = /(?:(^|\n)([+-]|\d+\.) +(.*(\n[ \t]+.*)*))+/g,
      list = function list(text, temp) {
        temp = text.match(/^[+-]/m) ? 'ul' : 'ol';
        return text ? "<".concat(temp, ">").concat(text.replace(/(?:[+-]|\d+\.) +(.*)\n?(([ \t].*\n?)*)/g, function (match, a, b) {
          return "<li>".concat(inlineBlock("".concat(a, "\n").concat(outdent(b || '').replace(listR, list))), "</li>");
        }), "</").concat(temp, ">") : '';
      },
      /**
       * function chain of replacements
       */
      chain = function chain(t, regex, replacement, parser) {
        return function (match, a) {
          match = match.replace(regex, replacement);
          return tag(t, parser ? parser(match) : match);
        };
      },
      block = function block(text, options) {
        return p(text, [
        // BLOCK STUFF ===============================

        // comments
        /<!--((.|\n)*?)-->/g, '<!--$1-->',
        // pre format block
        /^("""|```)(.*)\n((.*\n)*?)\1/gm, function (match, wrapper, c, text) {
          return wrapper === '"""' ? tag('div', parse(text, options), {
            class: c
          }) : options && options.preCode ? tag('pre', tag('code', encode(text), {
            class: c
          })) : tag('pre', encode(text), {
            class: c
          });
        },
        // blockquotes
        /(^>.*\n?)+/gm, chain('blockquote', /^> ?(.*)$/gm, '$1', inline),
        // tables
        /((^|\n)\|.+)+/g, chain('table', /^.*(\n\|---.*?)?$/gm, function (match, subline) {
          return chain('tr', /\|(-?)([^|]*)\1(\|$)?/gm, function (match, type, text) {
            return tag(type || subline ? 'th' : 'td', inlineBlock(text));
          })(match.slice(0, match.length - (subline || '').length));
        }),
        // lists
        listR, list,
        //anchor
        /#\[([^\]]+?)]/g, '<a name="$1"></a>',
        // headlines
        /^(#+) +(.*)(?:$)/gm, function (match, h, text) {
          return tag('h' + h.length, inlineBlock(text));
        },
        // horizontal rule
        /^(===+|---+)(?=\s*$)/gm, '<hr>'], parse, options);
      },
      inlineBlock = function inlineBlock(text, dontInline) {
        var temp = [],
          injectInlineBlock = function injectInlineBlock(text) {
            return text.replace(/\\(\d+)/g, function (match, code) {
              return injectInlineBlock(temp[Number.parseInt(code) - 1]);
            });
          };
        text = (text || '').trim()
        // inline code block
        .replace(/`([^`]*)`/g, function (match, text) {
          return '\\' + temp.push(tag('code', encode(text)));
        })
        // inline media (a / img / iframe)
        .replace(/[!&]?\[([!&]?\[.*?\)|[^\]]*?)]\((.*?)( .*?)?\)|(\w+:\/\/[$\-.+!*'()/,\w]+)/g, function (match, text, href, title, link) {
          if (link) {
            return dontInline ? match : '\\' + temp.push(tag('a', link, {
              target: '_blank'
            }));
          }
          if (match[0] === '&') {
            text = text.match(/^(.+),(.+),([^ \]]+)( ?.+?)?$/);
            return '\\' + temp.push(tag('iframe', '', {
              width: text[1],
              height: text[2],
              frameborder: text[3],
              class: text[4],
              src: href,
              title: title
            }));
          }
          return '\\' + temp.push(match[0] === '!' ? tag('img', '', {
            src: href,
            alt: text,
            title: title
          }) : tag('a', inlineBlock(text, 1), {
            href: href,
            title: title,
            target: '_blank'
          }));
        });
        text = injectInlineBlock(dontInline ? text : inline(text));
        return text;
      },
      inline = function inline(text) {
        return p(text, [
        // bold, italic, bold & italic
        /([*_]{1,3})((.|\n)+?)\1/g, function (match, k, text) {
          k = k.length;
          text = inline(text);
          if (k > 1) text = tag('strong', text);
          if (k % 2) text = tag('em', text);
          return text;
        },
        // strike through
        /(~{1,3})((.|\n)+?)\1/g,
        // eslint-disable-next-line no-sparse-arrays
        function (match, k, text) {
          return tag([, 'u', 's', 'del'][k.length], inline(text));
        },
        // replace remaining newlines with a <br>
        // eslint-disable-next-line no-regex-spaces
        /  \n|\n  /g, '<br>'], inline);
      },
      p = function p(text, rules, parse, options) {
        var i = 0,
          f;
        while (i < rules.length) {
          // eslint-disable-next-line no-cond-assign
          if (f = rules[i++].exec(text)) {
            return parse(text.slice(0, f.index), options) + (typeof rules[i] === 'string' ? rules[i].replace(/\$(\d)/g, function (m, d) {
              return f[d];
            }) : rules[i].apply(_this, f)) + parse(text.slice(f.index + f[0].length), options);
          }
          i++;
        }
        return text;
      },
      parse = function parse(text, options) {
        // clean input
        text = text.replace(/[\r\v\b\f]/g, '').replace(/\\./g, function (match) {
          return "&#".concat(match.charCodeAt(1), ";");
        });
        var temp = block(text, options);
        if (temp === text && !temp.match(/^[\s\n]*$/i)) {
          temp = inlineBlock(temp)
          // handle paragraphs
          .replace(/((.|\n)+?)(\n\n+|$)/g, function (match, text) {
            return tag('p', text);
          });
        }
        return temp.replace(/&#(\d+);/g, function (match, code) {
          return String.fromCharCode(parseInt(code));
        });
      };
    return {
      parse: parse,
      block: block,
      inline: inline,
      inlineBlock: inlineBlock
    };
  }();

  var makeClassName = function makeClassName() {
    var _Array$from = Array.from(arguments),
      _Array$from2 = _toArray(_Array$from),
      component = _Array$from2[0],
      name = _Array$from2[1],
      rest = _Array$from2.slice(2);
    return {
      className: classNames.apply(void 0, ["lf-control-".concat(component), "lf-field-".concat(name)].concat(_toConsumableArray(rest !== null && rest !== void 0 ? rest : []))),
      'data-lf-field-name': name
    };
  };

  var css_248z$h = ".lf-control-placeholder ol, .lf-control-placeholder ul {\n  padding-left: 1rem;\n}\n\n.lf-form .lf-control-placeholder:not(:first-child) {\n  margin-top: var(--lf-field-margin-top);\n}";
  styleInject(css_248z$h);

  var Placeholder = function Placeholder(_ref) {
    var text = _ref.text,
      name = _ref.name,
      className = _ref.className;
    if (!_isEmpty(text)) {
      return /*#__PURE__*/React$1.createElement("div", _extends({}, makeClassName('placeholder', name, className), {
        dangerouslySetInnerHTML: {
          __html: microdown.parse(text)
        }
      }));
    } else {
      return /*#__PURE__*/React$1.createElement("div", null);
    }
  };

  var css_248z$g = ".lf-control-three-columns {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch;\n  min-height: 20px;\n  /*.left, .right, .center {\n    .rs-form-control-wrapper {\n      > .rs-input, > .rs-input-number {\n        //width: auto;\n      }\n    }\n  }*/\n}\n.lf-control-three-columns .left {\n  flex: 1 0;\n  align-self: auto;\n  margin-right: var(--lf-field-column-margin);\n}\n.lf-control-three-columns .center {\n  margin-right: var(--lf-field-column-margin);\n  flex: 1 0;\n  align-self: auto;\n}\n.lf-control-three-columns .right {\n  flex: 1 0;\n  align-self: auto;\n}\n.lf-control-three-columns .left:empty {\n  display: none;\n}\n.lf-control-three-columns.layout-0-1-0 .left {\n  flex: 0 0;\n}\n.lf-control-three-columns.layout-0-1-0 .center {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-0-1-0 .right {\n  flex: 0 0;\n}\n.lf-control-three-columns.layout-1-0-0 .left {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-1-0-0 .center {\n  flex: 0 0;\n}\n.lf-control-three-columns.layout-1-0-0 .right {\n  flex: 0 0;\n}\n.lf-control-three-columns.layout-1-1-1 .left {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-1-1-1 .center {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-1-1-1 .right {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-1-1-2 .left {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-1-1-2 .center {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-1-1-2 .right {\n  flex: 2 0;\n}\n.lf-control-three-columns.layout-1-2-1 .left {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-1-2-1 .center {\n  flex: 2 0;\n}\n.lf-control-three-columns.layout-1-2-1 .right {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-2-1-1 .left {\n  flex: 2 0;\n}\n.lf-control-three-columns.layout-2-1-1 .center {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-2-1-1 .right {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-1-1-3 .left {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-1-1-3 .center {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-1-1-3 .right {\n  flex: 3 0;\n}\n.lf-control-three-columns.layout-1-3-1 .left {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-1-3-1 .center {\n  flex: 3 0;\n}\n.lf-control-three-columns.layout-1-3-1 .right {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-3-1-1 .left {\n  flex: 3 0;\n}\n.lf-control-three-columns.layout-3-1-1 .center {\n  flex: 1 0;\n}\n.lf-control-three-columns.layout-3-1-1 .right {\n  flex: 1 0;\n}";
  styleInject(css_248z$g);

  var ThreeColumns = function ThreeColumns(_ref) {
    var name = _ref.name,
      layout = _ref.layout,
      children = _ref.children,
      leftAlignment = _ref.leftAlignment,
      centerAlignment = _ref.centerAlignment,
      rightAlignment = _ref.rightAlignment;
    return /*#__PURE__*/React$1.createElement("div", {
      "data-lf-field-name": name,
      className: classNames('lf-control-three-columns', layout)
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "left",
      style: {
        alignSelf: leftAlignment ? leftAlignment : undefined
      }
    }, _isFunction(children) && children('left')), /*#__PURE__*/React$1.createElement("div", {
      className: "center",
      style: {
        alignSelf: centerAlignment ? centerAlignment : undefined
      }
    }, _isFunction(children) && children('center')), /*#__PURE__*/React$1.createElement("div", {
      className: "right",
      style: {
        alignSelf: rightAlignment ? rightAlignment : undefined
      }
    }, _isFunction(children) && children('right')));
  };

  var css_248z$f = ".lf-control-two-columns {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch;\n  min-height: 20px;\n}\n.lf-control-two-columns .left {\n  flex: 1 0;\n  align-self: auto;\n  margin-right: var(--lf-field-column-margin);\n}\n.lf-control-two-columns .right {\n  flex: 1 0;\n  align-self: auto;\n}\n.lf-control-two-columns.layout-1-2 .left {\n  flex: 1 0;\n}\n.lf-control-two-columns.layout-1-2 .right {\n  flex: 2 0;\n}\n.lf-control-two-columns.layout-1-3 .left {\n  flex: 1 0;\n}\n.lf-control-two-columns.layout-1-3 .right {\n  flex: 3 0;\n}\n.lf-control-two-columns.layout-1-4 .left {\n  flex: 1 0;\n}\n.lf-control-two-columns.layout-1-4 .right {\n  flex: 4 0;\n}\n.lf-control-two-columns.layout-1-5 .left {\n  flex: 1 0;\n}\n.lf-control-two-columns.layout-1-5 .right {\n  flex: 4 0;\n}\n.lf-control-two-columns.layout-2-1 .left {\n  flex: 2 0;\n}\n.lf-control-two-columns.layout-2-1 .right {\n  flex: 1 0;\n}\n.lf-control-two-columns.layout-3-1 .left {\n  flex: 3 0;\n}\n.lf-control-two-columns.layout-3-1 .right {\n  flex: 1 0;\n}\n.lf-control-two-columns.layout-4-1 .left {\n  flex: 4 0;\n}\n.lf-control-two-columns.layout-4-1 .right {\n  flex: 1 0;\n}\n.lf-control-two-columns.layout-5-1 .left {\n  flex: 4 0;\n}\n.lf-control-two-columns.layout-5-1 .right {\n  flex: 1 0;\n}\n.lf-control-two-columns.layout-3-2 .left {\n  flex: 3 0;\n}\n.lf-control-two-columns.layout-3-2 .right {\n  flex: 2 0;\n}\n.lf-control-two-columns.layout-2-3 .left {\n  flex: 2 0;\n}\n.lf-control-two-columns.layout-2-3 .right {\n  flex: 3 0;\n}\n.lf-control-two-columns.layout-0-1 .left {\n  flex: 0 0 auto;\n}\n.lf-control-two-columns.layout-0-1 .right {\n  flex: 1 0;\n}\n.lf-control-two-columns.layout-1-0 .left {\n  flex: 1 0;\n}\n.lf-control-two-columns.layout-1-0 .right {\n  flex: 0 0 auto;\n}\n\n.lf-form-react-rsuite5 .lf-two-columns {\n  margin-bottom: var(--lf-field-margin);\n}";
  styleInject(css_248z$f);

  var TwoColumns = function TwoColumns(_ref) {
    var name = _ref.name,
      children = _ref.children,
      layout = _ref.layout,
      leftAlignment = _ref.leftAlignment,
      rightAlignment = _ref.rightAlignment;
    return /*#__PURE__*/React$1.createElement("div", {
      className: classNames('lf-control-two-columns', layout),
      "data-lf-field-name": name
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "left",
      style: {
        alignSelf: leftAlignment ? leftAlignment : undefined
      }
    }, _isFunction(children) && children('left')), /*#__PURE__*/React$1.createElement("div", {
      className: "right",
      style: {
        alignSelf: rightAlignment ? rightAlignment : undefined
      }
    }, _isFunction(children) && children('right')));
  };

  var css_248z$e = ".lf-form .lf-control-group:not(:first-child) {\n  margin-top: calc(var(--lf-group-header) + var(--lf-field-margin));\n}\n\n.lf-control-group .header svg {\n  display: inline-block;\n}\n.lf-control-group.lf-border-boxed {\n  border-bottom: 1px solid var(--lf-border-color);\n  border-left: 1px solid var(--lf-border-color);\n  border-right: 1px solid var(--lf-border-color);\n}\n.lf-control-group.lf-border-boxed .header:before {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-group.lf-border-boxed .header:after {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-group.lf-border-boxed .lf-group-content {\n  padding-left: var(--lf-group-padding);\n  padding-right: var(--lf-group-padding);\n  padding-bottom: var(--lf-group-padding);\n}\n.lf-control-group.lf-border-topBottom {\n  border-bottom: 1px solid var(--lf-border-color);\n}\n.lf-control-group.lf-border-topBottom .header:before {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-group.lf-border-topBottom .header:after {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-group.lf-border-topBottom .lf-group-content {\n  padding-bottom: var(--lf-group-padding);\n}\n.lf-control-group.lf-border-top .header:before {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-group.lf-border-top .header:after {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-group.lf-border-bottom {\n  border-bottom: 1px solid var(--lf-border-color);\n}\n.lf-control-group .header {\n  align-items: center;\n  background: transparent;\n  display: flex;\n  height: 1px;\n  flex-direction: row;\n  margin: var(--lf-group-header) 0px;\n}\n.lf-control-group .header .inner-text {\n  flex: 0 0 auto;\n  padding: 0 12px;\n  display: inline-block;\n}\n.lf-control-group .header.left:before {\n  flex: 0 0 10px;\n}\n.lf-control-group .header.right:after {\n  flex: 0 0 10px;\n}";
  styleInject(css_248z$e);

  var Group = I18N(function (_ref) {
    var name = _ref.name,
      className = _ref.className,
      label = _ref.label,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? true : _ref$open,
      _ref$collapsible = _ref.collapsible,
      collapsible = _ref$collapsible === void 0 ? true : _ref$collapsible,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? 'top' : _ref$border,
      align = _ref.align,
      children = _ref.children;
    var _useState = React$1.useState(open),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];
    var handleClick = React$1.useCallback(function (event) {
      event.preventDefault();
      setIsOpen(!isOpen);
    }, [isOpen]);
    // if open changes, then change status
    React$1.useEffect(function () {
      setIsOpen(open);
    }, [open]);
    return /*#__PURE__*/React$1.createElement("div", makeClassName('group', name, className, "lf-border-".concat(border), {
      'open': isOpen,
      'close': !isOpen
    }), /*#__PURE__*/React$1.createElement("div", {
      role: "separator",
      className: classNames('header', align)
    }, /*#__PURE__*/React$1.createElement("span", {
      className: "inner-text"
    }, label, collapsible && /*#__PURE__*/React$1.createElement("a", {
      href: "#",
      className: "lf-btn-collapse",
      disabled: disabled,
      appearance: "link",
      onClick: handleClick
    }, isOpen ? /*#__PURE__*/React$1.createElement(ChevronUp, {
      color: "#3498ff"
    }) : /*#__PURE__*/React$1.createElement(ChevronDown, {
      color: "#3498ff"
    })))), (isOpen || !collapsible) && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-group-content"
    }, children));
  }, ['label']);

  var css_248z$d = ".lf-control-placeholder-image {\n  min-height: 20px;\n}";
  styleInject(css_248z$d);

  var PlaceholderImage = function PlaceholderImage(_ref) {
    var url = _ref.url,
      label = _ref.label,
      name = _ref.name,
      maxWidth = _ref.maxWidth,
      maxHeight = _ref.maxHeight,
      marginTop = _ref.marginTop,
      marginBottom = _ref.marginBottom,
      className = _ref.className,
      align = _ref.align;
    return /*#__PURE__*/React$1.createElement("div", _extends({}, makeClassName('placeholder-image', name, className), {
      style: {
        textAlign: align ? align : undefined
      }
    }), url && /*#__PURE__*/React$1.createElement("img", {
      src: url,
      alt: label || name,
      style: {
        marginTop: marginTop ? marginTop : undefined,
        marginBottom: marginBottom ? marginBottom : undefined,
        maxWidth: maxWidth ? maxWidth : '100%',
        maxHeight: maxHeight ? maxHeight : '100%',
        textAlign: align ? align : undefined
      }
    }));
  };

  var css_248z$c = ".lf-control-divider {\n  min-height: 15px;\n  font-size: 1px;\n  display: flex;\n}\n.lf-control-divider .bar {\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}";
  styleInject(css_248z$c);

  var Divider = function Divider(_ref) {
    var name = _ref.name,
      size = _ref.size,
      className = _ref.className,
      color = _ref.color;
    return /*#__PURE__*/React$1.createElement("div", makeClassName('divider', name, className), /*#__PURE__*/React$1.createElement("div", {
      className: "bar",
      style: {
        height: "".concat(size, "px"),
        backgroundColor: color
      }
    }, "&npsb;"));
  };
  lfLog('Loaded Common.Divider');

  var index$l = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Divider
  });

  var _excluded$i = ["name", "view", "className"];
  var ReactView = function ReactView(_ref) {
    var name = _ref.name,
      view = _ref.view,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$i);
    var View = view;
    return /*#__PURE__*/React$1.createElement("div", makeClassName('react-view', name, className), View && /*#__PURE__*/React$1.createElement(View, _extends({
      name: name
    }, rest)));
  };

  var isEmptyItem = function isEmptyItem(obj) {
    return Object.keys(obj).filter(function (key) {
      return key !== 'id';
    }).every(function (key) {
      return obj[key] === null || obj[key] === undefined || obj[key] === '';
    });
  };

  var baseSlice = _baseSlice;

  /**
   * Casts `array` to a slice if it's needed.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {number} start The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the cast slice.
   */
  function castSlice$2(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
  }
  var _castSlice = castSlice$2;

  /** Used to compose unicode character classes. */

  var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  var rsZWJ$1 = '\\u200d';

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + ']');

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode$2(string) {
    return reHasUnicode.test(string);
  }
  var _hasUnicode = hasUnicode$2;

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */

  function asciiToArray$1(string) {
    return string.split('');
  }
  var _asciiToArray = asciiToArray$1;

  /** Used to compose unicode character classes. */

  var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray$1(string) {
    return string.match(reUnicode) || [];
  }
  var _unicodeToArray = unicodeToArray$1;

  var asciiToArray = _asciiToArray,
    hasUnicode$1 = _hasUnicode,
    unicodeToArray = _unicodeToArray;

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray$2(string) {
    return hasUnicode$1(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  var _stringToArray = stringToArray$2;

  var castSlice$1 = _castSlice,
    hasUnicode = _hasUnicode,
    stringToArray$1 = _stringToArray,
    toString$2 = toString_1;

  /**
   * Creates a function like `_.lowerFirst`.
   *
   * @private
   * @param {string} methodName The name of the `String` case method to use.
   * @returns {Function} Returns the new case function.
   */
  function createCaseFirst$1(methodName) {
    return function (string) {
      string = toString$2(string);
      var strSymbols = hasUnicode(string) ? stringToArray$1(string) : undefined;
      var chr = strSymbols ? strSymbols[0] : string.charAt(0);
      var trailing = strSymbols ? castSlice$1(strSymbols, 1).join('') : string.slice(1);
      return chr[methodName]() + trailing;
    };
  }
  var _createCaseFirst = createCaseFirst$1;

  var createCaseFirst = _createCaseFirst;

  /**
   * Converts the first character of `string` to upper case.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.upperFirst('fred');
   * // => 'Fred'
   *
   * _.upperFirst('FRED');
   * // => 'FRED'
   */
  var upperFirst$1 = createCaseFirst('toUpperCase');
  var upperFirst_1 = upperFirst$1;

  var toString$1 = toString_1,
    upperFirst = upperFirst_1;

  /**
   * Converts the first character of `string` to upper case and the remaining
   * to lower case.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to capitalize.
   * @returns {string} Returns the capitalized string.
   * @example
   *
   * _.capitalize('FRED');
   * // => 'Fred'
   */
  function capitalize(string) {
    return upperFirst(toString$1(string).toLowerCase());
  }
  var capitalize_1 = capitalize;

  var _capitalize = /*@__PURE__*/getDefaultExportFromCjs(capitalize_1);

  var IconButton = function IconButton(_ref) {
    var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      Icon = _ref.icon,
      onClick = _ref.onClick;
    var handleClick = React$1.useCallback(function (e) {
      e.preventDefault();
      if (!disabled) {
        onClick();
      }
    }, [disabled, onClick]);
    return /*#__PURE__*/React$1.createElement("a", {
      href: "#",
      className: classNames('lf-icon-button', className, {
        disabled: disabled
      }),
      onClick: handleClick
    }, Icon);
  };
  var ArrayItem = function ArrayItem(_ref2) {
    var children = _ref2.children,
      item = _ref2.item,
      disabled = _ref2.disabled,
      readOnly = _ref2.readOnly,
      _ref2$onAdd = _ref2.onAdd,
      onAdd = _ref2$onAdd === void 0 ? function () {} : _ref2$onAdd,
      _ref2$onRemove = _ref2.onRemove,
      onRemove = _ref2$onRemove === void 0 ? function () {} : _ref2$onRemove,
      _ref2$disableAdd = _ref2.disableAdd,
      disableAdd = _ref2$disableAdd === void 0 ? false : _ref2$disableAdd,
      _ref2$showAdd = _ref2.showAdd,
      showAdd = _ref2$showAdd === void 0 ? false : _ref2$showAdd,
      align = _ref2.align,
      alignOffset = _ref2.alignOffset;
    var handleRemove = React$1.useCallback(function () {
      return onRemove(item);
    }, [item, onRemove]);
    var style;
    if ((align === 'top' || align === 'bottom') && _isNumber(alignOffset) && alignOffset > 0) {
      style = _defineProperty$1({}, "margin".concat(_capitalize(align)), "".concat(alignOffset, "px"));
    }
    return /*#__PURE__*/React$1.createElement("div", {
      className: "lf-control-common-array-item"
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "inner-form"
    }, children), /*#__PURE__*/React$1.createElement("div", {
      className: "buttons",
      style: style
    }, showAdd && /*#__PURE__*/React$1.createElement(IconButton, {
      disabled: disableAdd || disabled || readOnly,
      className: "arrow",
      appearance: "link",
      icon: /*#__PURE__*/React$1.createElement(PlusCircle, {
        height: 16,
        width: 16,
        color: "#3498ff"
      }),
      size: "sm",
      onClick: onAdd
    }), !showAdd && /*#__PURE__*/React$1.createElement(IconButton, {
      className: "arrow",
      disabled: disabled || readOnly,
      appearance: "link",
      icon: /*#__PURE__*/React$1.createElement(MinusCircle, {
        height: 16,
        width: 16,
        color: "#3498ff"
      }),
      size: "sm",
      onClick: handleRemove
    })));
  };

  var css_248z$b = ".lf-control-common-array {\n  margin-top: 0px !important;\n}\n.lf-control-common-array.lf-center .lf-control-common-array-item .buttons {\n  align-self: center;\n}\n.lf-control-common-array.lf-top .lf-control-common-array-item .buttons {\n  align-self: flex-start;\n}\n.lf-control-common-array.lf-bottom .lf-control-common-array-item .buttons {\n  align-self: flex-end;\n}\n.lf-control-common-array .lf-control-common-array-item {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch;\n  position: relative;\n  border-left: 5px solid #dddddd;\n  padding-left: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-top: 5px !important;\n  /*.rs-form-group {\n    margin-bottom: 5px !important;\n  }*/\n}\n.lf-control-common-array .lf-control-common-array-item > .inner-form {\n  order: 0;\n  flex: 1 0;\n  align-self: auto;\n  --lf-field-margin: 4px;\n  --lf-field-column-margin: 10px;\n}\n.lf-control-common-array .lf-control-common-array-item > .buttons {\n  flex: 0 0 auto;\n  align-self: center;\n  margin-left: 6px;\n}\n\n.lf-icon-button {\n  display: inline-block;\n  min-height: 16px;\n  min-width: 16px;\n  padding: 4px;\n  border-radius: 3px;\n}\n.lf-icon-button.disabled {\n  opacity: 0.6;\n}\n.lf-icon-button:not(.disabled):hover {\n  background-color: #eeeeee;\n}";
  styleInject(css_248z$b);

  var NOOP$1 = function NOOP() {};
  var randomId = function randomId() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
    return Math.random().toString(36).substring(2, length + 2);
  };

  /**
   * Check if object is empty or all the keys are empty
   * @param {*} obj
   * @returns
   */
  var isEmptyObject = function isEmptyObject(obj) {
    return _isEmpty(obj) || Object.keys(obj).every(function (key) {
      return _isEmpty(obj[key]);
    });
  };

  /**
   * flatArrayOfString
   * If an array of object can be flattned (one keuy), then return a flat array, otherwise raise expection
   * @param {*} a
   * @returns
   */
  var flatArrayOfString = function flatArrayOfString(a) {
    var canBeFlat = a.every(function (obj) {
      return Object.keys(obj).length === 1;
    });
    if (!canBeFlat) {
      throw new Error("Cannot be flattened");
    }
    return a.map(function (obj) {
      return obj[Object.keys(obj)[0]];
    });
  };
  var formatArray = function formatArray(a) {
    var arrayType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'arrayOfObject';
    var cleaned = a.map(function (i) {
      return _omit(i, 'id');
    }).filter(function (i) {
      return !isEmptyObject(i);
    });
    try {
      var flattened = flatArrayOfString(cleaned);
      if (arrayType === 'arrayOfString') {
        return flattened;
      } else if (arrayType === 'commaSeparated') {
        return flattened.join(',');
      }
    } catch (e) {
      // do nothing, return as is
    }
    return cleaned;
  };
  var makeDefaultValue = function makeDefaultValue(defaultValue, arrayType, form) {
    if (arrayType === 'arrayOfString') {
      var isArrayOfString = _isArray(defaultValue) && defaultValue.every(function (s) {
        return _isString(s);
      });
      var names = collectNames(form);
      // if it's an array of string
      if (isArrayOfString && names.length === 1) {
        return defaultValue.map(function (s) {
          return _defineProperty$1({
            id: randomId()
          }, names[0], s);
        });
      }
      return [{
        id: randomId()
      }];
    } else if (arrayType === 'commaSeparated') {
      var _names = collectNames(form);
      if (_names.length === 1 && _isString(defaultValue) && !_isEmpty(defaultValue)) {
        return defaultValue.split(',').map(function (s) {
          return _defineProperty$1({
            id: randomId()
          }, _names[0], s);
        });
      }
      return [{
        id: randomId()
      }];
    } else {
      return _isArray(defaultValue) && !_isEmpty(defaultValue) ? fillIds(defaultValue) : [{
        id: randomId()
      }];
    }
  };
  var ListArray = function ListArray(_ref3) {
    var LetsFormComponent = _ref3.LetsFormComponent,
      value = _ref3.value,
      name = _ref3.name,
      className = _ref3.className,
      _ref3$onChange = _ref3.onChange,
      onChange = _ref3$onChange === void 0 ? NOOP$1 : _ref3$onChange,
      _ref3$disabled = _ref3.disabled,
      disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
      _ref3$readOnly = _ref3.readOnly,
      readOnly = _ref3$readOnly === void 0 ? false : _ref3$readOnly,
      fields = _ref3.fields,
      _ref3$layout = _ref3.layout,
      layout = _ref3$layout === void 0 ? 'vertical' : _ref3$layout,
      maxHeight = _ref3.maxHeight,
      lfLocale = _ref3.lfLocale,
      _ref3$leftMargin = _ref3.leftMargin,
      leftMargin = _ref3$leftMargin === void 0 ? 0 : _ref3$leftMargin,
      children = _ref3.children,
      _ref3$arrayType = _ref3.arrayType,
      arrayType = _ref3$arrayType === void 0 ? 'arrayOfObject' : _ref3$arrayType,
      _ref3$align = _ref3.align,
      align = _ref3$align === void 0 ? 'top' : _ref3$align,
      _ref3$alignOffset = _ref3.alignOffset,
      alignOffset = _ref3$alignOffset === void 0 ? 0 : _ref3$alignOffset,
      error = _ref3.error,
      formShowErrors = _ref3.formShowErrors;
    var _useFormContext = useFormContext(),
      locales = _useFormContext.locales;
    var form = React$1.useMemo(function () {
      return {
        layout: layout,
        fluid: true,
        locales: locales,
        // copy the locales from the main form
        fields: fields,
        name: 'Array form ' + name,
        showErrors: formShowErrors
      };
    }, [layout, locales, fields, name, formShowErrors]);
    var _useState = React$1.useState(makeDefaultValue(value, arrayType, form)),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];
    var style = {};
    if (maxHeight) {
      //style.maxHeigth = _.isNumber(maxHeigth) ? `${maxHeigth}px` : maxHeigth;
      style = {
        maxHeight: "".concat(maxHeight, "px"),
        overflowY: 'scroll'
      };
    }
    if (leftMargin != null) {
      style.marginLeft = _isNumber(leftMargin) ? "".concat(leftMargin, "px") : leftMargin;
    }
    var handleAdd = React$1.useCallback(function () {
      setItems(function (items) {
        return [].concat(_toConsumableArray(items), [{
          id: randomId()
        }]);
      });
    }, []);
    var handleChange = React$1.useCallback(function (value) {
      setItems(function (items) {
        var newItems = items.map(function (i) {
          return i.id === value.id ? value : i;
        });
        onChange(formatArray(newItems, arrayType));
        return newItems;
      });
    }, [onChange, arrayType]);
    var handleRemove = React$1.useCallback(function (item) {
      setItems(function (items) {
        var newItems = items.filter(function (i) {
          return i.id !== item.id;
        });
        onChange(formatArray(newItems, arrayType));
        return newItems;
      });
    }, [onChange, arrayType]);
    if (children) {
      return /*#__PURE__*/React$1.createElement("div", {
        style: {
          padding: '0px 10px 1px 10px'
        }
      }, children);
    }
    return /*#__PURE__*/React$1.createElement("div", {
      className: classNames('lf-control-common-array', className, align ? "lf-".concat(align) : undefined),
      style: style
    }, (_isArray(items) ? items : []).map(function (item, idx) {
      var canAdd = idx === items.length - 1 && !isEmptyItem(item);
      var showAdd = idx === items.length - 1 || items.length === 1;
      return /*#__PURE__*/React$1.createElement(ArrayItem, {
        key: item.id,
        item: item,
        disabled: disabled,
        readOnly: readOnly,
        disableAdd: !canAdd,
        showAdd: showAdd,
        onAdd: handleAdd,
        onRemove: handleRemove,
        align: align,
        alignOffset: alignOffset
      }, /*#__PURE__*/React$1.createElement(LetsFormComponent, {
        form: form,
        locale: lfLocale,
        disabled: disabled,
        readOnly: readOnly,
        defaultValues: item,
        onlyFields: true,
        onChange: handleChange,
        errors: error != null && error.errorMessages != null && error.errorMessages.length > idx ? error.errorMessages[idx] : undefined
      }));
    }));
  };

  var css_248z$a = ".lf-common-icon img {\n  max-width: 32px;\n  max-height: 32px;\n}\n.lf-common-icon.small img {\n  max-width: 24px;\n  max-height: 24px;\n}\n.lf-common-icon.large img {\n  max-width: 40px;\n  max-height: 40px;\n}";
  styleInject(css_248z$a);

  var _excluded$h = ["ButtonComponent", "OnStateProps", "OffStateProps", "LinkProps", "name", "labelOn", "labelOff", "labelLink", "iconOn", "iconOff", "iconLink", "size", "href", "appearance", "fullWidth", "width", "onChange", "onBlur", "value", "buttonType", "hint", "initialValue", "className"];
  var GenericButton = function GenericButton(_ref) {
    var ButtonComponent = _ref.ButtonComponent,
      OnStateProps = _ref.OnStateProps,
      OffStateProps = _ref.OffStateProps,
      _ref$LinkProps = _ref.LinkProps,
      LinkProps = _ref$LinkProps === void 0 ? {} : _ref$LinkProps,
      name = _ref.name,
      labelOn = _ref.labelOn,
      labelOff = _ref.labelOff,
      labelLink = _ref.labelLink,
      iconOn = _ref.iconOn,
      iconOff = _ref.iconOff,
      iconLink = _ref.iconLink,
      size = _ref.size,
      href = _ref.href,
      appearance = _ref.appearance,
      fullWidth = _ref.fullWidth,
      width = _ref.width,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      value = _ref.value,
      buttonType = _ref.buttonType,
      hint = _ref.hint,
      initialValue = _ref.initialValue,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$h);
    var _useState = React$1.useState(value || initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];
    var handleClick = React$1.useCallback(function () {
      var newValue = !checked;
      setChecked(!checked);
      onChange(newValue, name);
    }, [onChange, checked, name]);
    var inner;
    if (buttonType === 'toggle') {
      inner = /*#__PURE__*/React$1.createElement(ButtonComponent, _extends({
        size: size,
        onClick: handleClick,
        onBlur: onBlur,
        icon: checked ? iconOn : iconOff,
        label: checked ? labelOn : labelOff,
        hint: hint,
        style: makeWidthStyle(fullWidth, width)
      }, passRest(_omit(rest, 'label')), checked ? OnStateProps : OffStateProps));
    } else if (buttonType === 'link') {
      inner = /*#__PURE__*/React$1.createElement(ButtonComponent, _extends({
        size: size,
        onBlur: onBlur,
        appearance: appearance,
        hint: hint,
        label: labelLink,
        icon: iconLink,
        href: href,
        target: "_blank",
        style: makeWidthStyle(fullWidth, width)
      }, passRest(_omit(rest, 'label')), LinkProps));
    }
    return /*#__PURE__*/React$1.createElement("div", makeClassName('button', name, className, _defineProperty$1({}, "lf-control-button-".concat(size !== null && size !== void 0 ? size : ''), true)), inner);
  };
  var MakeButton = function MakeButton(ButtonComponent, OnStateProps, OffStateProps, LinkProps) {
    return function (props) {
      return /*#__PURE__*/React$1.createElement(GenericButton, _extends({
        ButtonComponent: ButtonComponent,
        OnStateProps: _isFunction(OnStateProps) ? OnStateProps(props) : OnStateProps,
        OffStateProps: _isFunction(OffStateProps) ? OffStateProps(props) : OffStateProps,
        LinkProps: _isFunction(LinkProps) ? LinkProps(props) : LinkProps
      }, props));
    };
  };

  var css_248z$9 = ".lf-control-button-toggle-group .lf-control-button {\n  display: inline-block;\n  margin-top: 0px !important;\n}\n.lf-control-button-toggle-group .lf-control-button:not(:first-child) {\n  margin-left: var(--lf-field-button-margin);\n}\n.lf-control-button-toggle-group .lf-control-button.lf-full-width {\n  flex: 1 0;\n}\n.lf-control-button-toggle-group .lf-control-button.lf-full-width > * {\n  width: 100% !important;\n}";
  styleInject(css_248z$9);

  var css_248z$8 = ".lf-control-columns {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch;\n}\n.lf-control-columns .lf-column {\n  flex: 1 0;\n  align-self: auto;\n  margin-right: var(--lf-field-column-margin);\n}\n.lf-control-columns .lf-column:last-child {\n  margin-right: 0px;\n}";
  styleInject(css_248z$8);

  var Columns = function Columns(_ref) {
    var name = _ref.name,
      className = _ref.className,
      children = _ref.children,
      columns = _ref.columns;
    return /*#__PURE__*/React$1.createElement("div", makeClassName('columns', name, className), (columns || []).filter(function (column) {
      return column.hidden !== true;
    }).map(function (column) {
      return /*#__PURE__*/React$1.createElement("div", {
        key: column.name,
        className: classNames('lf-column', "lf-column-".concat(column.name), column.className, column.layout && "layout-".concat(column.layout)),
        style: {
          alignSelf: column.alignment ? column.alignment : undefined,
          flexGrow: column.size != null ? column.size : undefined
        }
      }, _isFunction(children) && children(column.name));
    }));
  };

  var css_248z$7 = ".lf-form-plaintext {\n  font-size: var(--lf-font-size);\n}\n.lf-form-plaintext .lf-plaintext-field-label {\n  font-weight: 600;\n  color: #333333;\n}\n.lf-form-plaintext .plaintext-value:empty::before {\n  content: \"-\";\n}";
  styleInject(css_248z$7);

  var PlaintextLabel = function PlaintextLabel(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React$1.createElement("div", {
      className: "lf-plaintext-field-label"
    }, children);
  };
  var renderFields$1 = function renderFields(fields, locale, framework) {
    var currentValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return (fields || []).map(function (field) {
      if (field.component === 'group') {
        var _field$name;
        return /*#__PURE__*/React$1.createElement(Group, _extends({
          key: (_field$name = field.name) !== null && _field$name !== void 0 ? _field$name : _uniqueId('lf_group'),
          collapsible: false,
          label: field.label
        }, _pick(field, ['bottomBorder', 'align'])), renderFields(field.fields, locale, framework, currentValues));
      } else if (field.component === 'columns') {
        var _field$name2;
        return /*#__PURE__*/React$1.createElement(Columns, _extends({
          key: (_field$name2 = field.name) !== null && _field$name2 !== void 0 ? _field$name2 : _uniqueId('lf_columns')
        }, _omit(field, ['fields', 'name'])), function (column) {
          return renderFields(field.fields[column], locale, framework, currentValues);
        });
      } else if (field.component === 'two-columns') {
        return /*#__PURE__*/React$1.createElement(TwoColumns, _extends({
          key: field.name
        }, _pick(field, ['layout', 'leftAlignment', 'rightAlignment'])), function (column) {
          if (column === 'left') {
            return renderFields(field.leftFields, locale, framework, currentValues);
          } else if (column === 'right') {
            return renderFields(field.rightFields, locale, framework, currentValues);
          }
        });
      } else if (field.component === 'three-columns') {
        return /*#__PURE__*/React$1.createElement(ThreeColumns, _extends({
          key: field.name
        }, _pick(field, ['layout', 'leftAlignment', 'centerAlignment', 'rightAlignment'])), function (column) {
          if (column === 'left') {
            return renderFields(field.leftFields, locale, framework, currentValues);
          } else if (column === 'center') {
            return renderFields(field.centerFields, locale, framework, currentValues);
          } else if (column === 'right') {
            return renderFields(field.rightFields, locale, framework, currentValues);
          }
        });
      } else if (field.component === 'tabs' || field.component === 'steps') {
        var subkeys = Object.keys(field.fields);
        var _fields = subkeys.map(function (subkey) {
          return renderFields(field.fields[subkey], locale, framework, currentValues);
        });
        return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, _fields);
      }
      return /*#__PURE__*/React$1.createElement("div", {
        key: field.name,
        className: "lf-plaintext-field lf-control-".concat(field.component)
      }, /*#__PURE__*/React$1.createElement(PlaintextLabel, null, isI18n(field.label) ? i18n(field.label, locale) : field.label), /*#__PURE__*/React$1.createElement(Plaintext, {
        component: field.component,
        locale: locale,
        value: currentValues[field.name],
        options: field.options
      }));
    });
  };
  var PlaintextForm = function PlaintextForm(_ref2) {
    var fields = _ref2.fields,
      locale = _ref2.locale,
      framework = _ref2.framework,
      currentValues = _ref2.currentValues;
    if (_isEmpty(fields)) {
      return /*#__PURE__*/React$1.createElement("span", null);
    }
    return /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form lf-form-plaintext"
    }, renderFields$1(fields, locale, framework, currentValues));
  };

  /**
   * Merge additional components to the main library
   * @param {*} main
   * @param {*} additional
   * @returns
   */
  var mergeComponents = function mergeComponents(main, additional) {
    // if not empty, then merge, overwriting is ok
    if (!_isEmpty(additional) && Object.keys(additional).length !== 0) {
      Object.keys(additional).forEach(function (componentName) {
        if (main[componentName] == null) {
          main[componentName] = _objectSpread2(_objectSpread2({}, additional[componentName]), {}, {
            custom: true
          });
        } else {
          main[componentName] = _objectSpread2(_objectSpread2(_objectSpread2({}, main[componentName]), additional[componentName]), {}, {
            custom: true
          });
        }
      });
    }
    return main;
  };

  /** Used to match a single whitespace character. */

  var reWhitespace = /\s/;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex$1(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }
  var _trimmedEndIndex = trimmedEndIndex$1;

  var trimmedEndIndex = _trimmedEndIndex;

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim$1(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
  }
  var _baseTrim = baseTrim$1;

  var baseIndexOf$1 = _baseIndexOf;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex$1(strSymbols, chrSymbols) {
    var index = strSymbols.length;
    while (index-- && baseIndexOf$1(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }
  var _charsEndIndex = charsEndIndex$1;

  var baseIndexOf = _baseIndexOf;

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex$1(strSymbols, chrSymbols) {
    var index = -1,
      length = strSymbols.length;
    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }
  var _charsStartIndex = charsStartIndex$1;

  var baseToString = _baseToString,
    baseTrim = _baseTrim,
    castSlice = _castSlice,
    charsEndIndex = _charsEndIndex,
    charsStartIndex = _charsStartIndex,
    stringToArray = _stringToArray,
    toString = toString_1;

  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */
  function trim(string, chars, guard) {
    string = toString(string);
    if (string && (guard || chars === undefined)) {
      return baseTrim(string);
    }
    if (!string || !(chars = baseToString(chars))) {
      return string;
    }
    var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;
    return castSlice(strSymbols, start, end).join('');
  }
  var trim_1 = trim;

  var _trim = /*@__PURE__*/getDefaultExportFromCjs(trim_1);

  var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }))).constructor;
  var FIELDS_NOT_TO_VALIDATE = ['group', 'placeholder', 'placeholder-image', 'steps', 'tabs', 'columns'];
  var DEFAULT_ERROR_MESSAGE = 'Field is required';
  var isEmpty = function isEmpty(value) {
    return value === null || value === undefined || value === '';
  };
  var isString = function isString(value) {
    return typeof value === 'string';
  };
  var isNumber = function isNumber(value) {
    return typeof value === 'number';
  };
  var isValidRegEx = function isValidRegEx(str) {
    try {
      var re = new RegExp(str);
      return true;
    } catch (e) {
      return false;
    }
  };
  var isArray = function isArray(arr) {
    return _typeof(arr) === 'object' && arr.length != null;
  };
  var isEmptyArray = function isEmptyArray(arr) {
    return !isArray(arr) || arr.length === 0;
  }; // null considered an empty array

  var needsValidation = function needsValidation(field) {
    // doesn't required validation if it's a layout component or has neither required or validation params
    if (FIELDS_NOT_TO_VALIDATE.includes(field.component) || !field.required && !field.validation) {
      return false;
    }
    return true;
  };
  var makeValidateJs = function makeValidateJs(validation, locale, onJavascriptError) {
    try {
      var validator = new AsyncFunction('value', 'formValues', validation.validate);

      // wrap the validator function, if returns strictly false then re-use
      // the provided message, if it's a string return the string, but it will not i18n
      var validateJS = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(value, formValues) {
          var v, error, _i18n;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return validator(value, formValues);
              case 3:
                v = _context2.sent;
                _context2.next = 13;
                break;
              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.error("[LetsForm] Error executing validate function: ", _context2.t0);
                error = new Error('Error compiling validate function: ' + _context2.t0.message, {
                  cause: _context2.t0
                });
                error.sourceCode = validation.validate;
                error.errorType = 'runtime';
                onJavascriptError(error);
              case 13:
                if (!(v === true)) {
                  _context2.next = 17;
                  break;
                }
                return _context2.abrupt("return", null);
              case 17:
                if (!(v === false)) {
                  _context2.next = 21;
                  break;
                }
                return _context2.abrupt("return", (_i18n = i18n(validation.message, locale)) !== null && _i18n !== void 0 ? _i18n : DEFAULT_ERROR_MESSAGE);
              case 21:
                if (!_isString(v)) {
                  _context2.next = 25;
                  break;
                }
                return _context2.abrupt("return", v);
              case 25:
                if (!isI18n(v)) {
                  _context2.next = 27;
                  break;
                }
                return _context2.abrupt("return", i18n(v, locale));
              case 27:
                return _context2.abrupt("return", null);
              case 28:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 6]]);
        }));
        return function validateJS(_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }();
      return validateJS;
    } catch (e) {
      console.error("[LetsForm] Invalid validate function: ", e);
      var error = new Error('Error compiling validate function: ' + e.message, {
        cause: e
      });
      error.sourceCode = validation.validate;
      error.errorType = 'compile';
      onJavascriptError(error);
    }
  };

  /**
   * makeFieldValidationFn
   * Make a validation function for a field, checks min, max, minLength, maxLength, pattern
   * @param {*} field
   * @param {*} locale
   * @param {*} onJavascriptError
   * @returns
   */
  var makeFieldValidationFn = function makeFieldValidationFn(field, locale, onJavascriptError) {
    var _field$validation;
    // create validation function from script
    var validateJS;
    if (!_isEmpty(_trim((_field$validation = field.validation) === null || _field$validation === void 0 ? void 0 : _field$validation.validate))) {
      validateJS = makeValidateJs(field.validation, locale, onJavascriptError);
    }
    return /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(value, formValues) {
        var _field$validation2, _field$validation3, _field$validation4, _field$validation5, _field$validation6, regexp, errorMessage;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (isEmpty(value)) {
                _context3.next = 30;
                break;
              }
              if (!(isString(value) && (_field$validation2 = field.validation) !== null && _field$validation2 !== void 0 && _field$validation2.minLength && value.length < field.validation.minLength)) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return", makeErrorMessage(field, locale));
            case 4:
              if (!(isString(value) && (_field$validation3 = field.validation) !== null && _field$validation3 !== void 0 && _field$validation3.maxLength && value.length > field.validation.maxLength)) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", makeErrorMessage(field, locale));
            case 7:
              if (!(isNumber(value) && (_field$validation4 = field.validation) !== null && _field$validation4 !== void 0 && _field$validation4.min && value < field.validation.min)) {
                _context3.next = 10;
                break;
              }
              return _context3.abrupt("return", makeErrorMessage(field, locale));
            case 10:
              if (!(isNumber(value) && (_field$validation5 = field.validation) !== null && _field$validation5 !== void 0 && _field$validation5.max && value > field.validation.max)) {
                _context3.next = 13;
                break;
              }
              return _context3.abrupt("return", makeErrorMessage(field, locale));
            case 13:
              if (!(isString(value) && (_field$validation6 = field.validation) !== null && _field$validation6 !== void 0 && _field$validation6.pattern)) {
                _context3.next = 22;
                break;
              }
              if (!isValidRegEx(field.validation.pattern)) {
                _context3.next = 21;
                break;
              }
              regexp = new RegExp(field.validation.pattern);
              if (regexp.test(value)) {
                _context3.next = 19;
                break;
              }
              return _context3.abrupt("return", makeErrorMessage(field, locale));
            case 19:
              _context3.next = 22;
              break;
            case 21:
              return _context3.abrupt("return", _objectSpread2(_objectSpread2({}, makeErrorMessage(field, locale)), {}, {
                errorMessage: 'Invalid RegExp for field "' + field.name + '"'
              }));
            case 22:
              if (!_isFunction(validateJS)) {
                _context3.next = 28;
                break;
              }
              _context3.next = 25;
              return validateJS(value, formValues);
            case 25:
              errorMessage = _context3.sent;
              if (!errorMessage) {
                _context3.next = 28;
                break;
              }
              return _context3.abrupt("return", _objectSpread2(_objectSpread2({}, makeErrorMessage(field, locale)), {}, {
                errorMessage: errorMessage
              }));
            case 28:
              _context3.next = 32;
              break;
            case 30:
              if (!(isEmpty(value) && field.required)) {
                _context3.next = 32;
                break;
              }
              return _context3.abrupt("return", makeErrorMessage(field, locale));
            case 32:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }();
  };
  var makeErrorMessage = function makeErrorMessage(field, locale) {
    var _field$validation7, _field$validation8;
    // prepare error message
    var errorMessage;
    if (_isString((_field$validation7 = field.validation) === null || _field$validation7 === void 0 ? void 0 : _field$validation7.message)) {
      errorMessage = field.validation.message;
    } else if (isI18n((_field$validation8 = field.validation) === null || _field$validation8 === void 0 ? void 0 : _field$validation8.message)) {
      var _i18n2;
      errorMessage = (_i18n2 = i18n(field.validation.message, locale)) !== null && _i18n2 !== void 0 ? _i18n2 : DEFAULT_ERROR_MESSAGE;
    } else {
      errorMessage = DEFAULT_ERROR_MESSAGE;
    }
    return {
      name: field.name,
      label: field.label || field.placeholder || field.name,
      errorMessage: errorMessage
    };
  };

  /**
   * makeArrayValidationFn
   * Make the validation function for an array. It checks minLength and maxLength, if no errors
   * run the same validation in the sub-objects of every single array item
   */
  var makeArrayValidationFn = function makeArrayValidationFn(field, locale, onJavascriptError) {
    var _field$validation9;
    var validateSubFields = makeValidation(field.fields, locale);
    // create validation function from script
    var validateJS;
    if (!_isEmpty(_trim((_field$validation9 = field.validation) === null || _field$validation9 === void 0 ? void 0 : _field$validation9.validate))) {
      validateJS = makeValidateJs(field.validation, locale, onJavascriptError);
    }
    return /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(value, formValues) {
        var _field$validation10, _field$validation11, errorMessage, i, validationMessages;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (isEmptyArray(value)) {
                _context4.next = 24;
                break;
              }
              if (!(isArray(value) && (_field$validation10 = field.validation) !== null && _field$validation10 !== void 0 && _field$validation10.minLength && value.length < field.validation.minLength)) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return", makeErrorMessage(field, locale));
            case 3:
              if (!(isArray(value) && (_field$validation11 = field.validation) !== null && _field$validation11 !== void 0 && _field$validation11.maxLength && value.length > field.validation.maxLength)) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return", makeErrorMessage(field, locale));
            case 5:
              if (!_isFunction(validateJS)) {
                _context4.next = 11;
                break;
              }
              _context4.next = 8;
              return validateJS(value, formValues);
            case 8:
              errorMessage = _context4.sent;
              if (!errorMessage) {
                _context4.next = 11;
                break;
              }
              return _context4.abrupt("return", _objectSpread2(_objectSpread2({}, makeErrorMessage(field, locale)), {}, {
                errorMessage: errorMessage
              }));
            case 11:
              validationMessages = [];
              i = 0;
            case 13:
              if (!(i < value.length)) {
                _context4.next = 20;
                break;
              }
              _context4.next = 16;
              return validateSubFields(value[i]);
            case 16:
              validationMessages[i] = _context4.sent;
            case 17:
              i++;
              _context4.next = 13;
              break;
            case 20:
              if (!validationMessages.some(function (o) {
                return o != null;
              })) {
                _context4.next = 22;
                break;
              }
              return _context4.abrupt("return", _objectSpread2(_objectSpread2({}, makeErrorMessage(field, locale)), {}, {
                errorMessage: undefined,
                errorMessages: validationMessages
              }));
            case 22:
              _context4.next = 26;
              break;
            case 24:
              if (!(isEmptyArray(value) && field.required)) {
                _context4.next = 26;
                break;
              }
              return _context4.abrupt("return", makeErrorMessage(field, locale));
            case 26:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }();
  };

  /**
   * makeValidation
   * Take an array of fields and return a validation function, which takes as argument the values of the form
   * Returns null or undefined if no validation errors, otherwise an object, keys are the invalid fields, value for
   * each key is { fieldName, label, errorMessage }
   * @param {*} fields
   * @param {*} locale
   * @returns {function}
   */
  var makeValidation = function makeValidation(fields, locale, onJavascriptError) {
    // collect all validatre functions per field
    var validateFns = reduceFields(fields, function (field, accumulator) {
      // skip if not required
      if (!needsValidation(field)) {
        return accumulator;
      }
      // special validation for array, otherwise field
      if (field.component === 'array') {
        return _objectSpread2(_objectSpread2({}, accumulator), {}, _defineProperty$1({}, field.name, makeArrayValidationFn(field, locale, onJavascriptError)));
      } else {
        return _objectSpread2(_objectSpread2({}, accumulator), {}, _defineProperty$1({}, field.name, makeFieldValidationFn(field, locale, onJavascriptError)));
      }
    }, {}, {
      array: false // don't collect here fields inside arrays
    });

    // check all validators
    return /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
        var validationErrors, i, fieldsToValidate, currentFieldName, validationResult;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              validationErrors = {}; // iterate all validators async
              fieldsToValidate = Object.keys(validateFns);
              i = 0;
            case 3:
              if (!(i < fieldsToValidate.length)) {
                _context5.next = 12;
                break;
              }
              currentFieldName = fieldsToValidate[i]; // pass the single value to check but also the all values
              _context5.next = 7;
              return validateFns[currentFieldName](data[currentFieldName], data);
            case 7:
              validationResult = _context5.sent;
              if (validationResult) {
                validationErrors[currentFieldName] = validationResult;
              }
            case 9:
              i++;
              _context5.next = 3;
              break;
            case 12:
              return _context5.abrupt("return", Object.keys(validationErrors).length !== 0 ? validationErrors : undefined);
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x7) {
        return _ref5.apply(this, arguments);
      };
    }();
  };

  /**
   * useValidation
   * Handle the validation of the form, given the fields creates a validation form and store it
   * in the state.
   * Calling validate() executes the validation, returns the validation object and store itin state
   * See ADR-20
   * @param {onError} callback
   * @param {array} fields The form fields
   * @param {string} locale
   */
  var useFormValidation = function useFormValidation(_ref6) {
    var onError = _ref6.onError,
      fields = _ref6.fields,
      locale = _ref6.locale,
      onJavascriptError = _ref6.onJavascriptError;
    var _useState = React$1.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      validationErrors = _useState2[0],
      setValidationErrors = _useState2[1];
    var _useState3 = React$1.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      validateFn = _useState4[0];
      _useState4[1];
    var mutableState = React$1.useRef();

    /**
     * clearValidation
     * Clear validation errors for a field or completely
     * @param {string} field
     */
    var clearValidation = React$1.useCallback(function (field) {
      if (!_isEmpty(field)) {
        setValidationErrors(function (errors) {
          return errors && errors[field] ? _objectSpread2(_objectSpread2({}, errors), {}, _defineProperty$1({}, field, undefined)) : errors;
        });
      } else {
        setValidationErrors(undefined);
      }
    }, []);
    React$1.useEffect(function () {
      // store in a useRef to avoid re-render
      mutableState.current = makeValidation(fields, locale, onJavascriptError);
    }, [fields, locale]);

    /**
     * validate
     * Trigger a form validation, also changes the status (validationErrors)
     * @returns
     */
    var validate = React$1.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var data,
        validationErrors,
        _args6 = arguments;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            data = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
            _context6.next = 3;
            return mutableState.current(data, locale);
          case 3:
            validationErrors = _context6.sent;
            // set status
            setValidationErrors(validationErrors);
            // callback errors
            onError(validationErrors);
            return _context6.abrupt("return", validationErrors);
          case 7:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    })), [validateFn]);
    return {
      validationErrors: validationErrors,
      setValidationErrors: setValidationErrors,
      validate: validate,
      isValid: _isEmpty(validationErrors),
      clearValidation: clearValidation
    };
  };

  var upgradeFields = function upgradeFields(fields, version) {
    if (version === 1) {
      var upgradedFields = mapFields(fields, function (field) {
        if (field.component === 'two-columns') {
          var _match2;
          lfWarn("Component 'two-columns' is deprecated, use 'columns' instead");
          var _ref = (_match2 = (field.layout || '').match(/layout-([0-9])-([0-9])/)) !== null && _match2 !== void 0 ? _match2 : [],
            _ref2 = _slicedToArray(_ref, 3);
            _ref2[0];
            var oneSize = _ref2[1],
            twoSize = _ref2[2];
          return {
            component: 'columns',
            name: field.name,
            columns: [{
              name: 'one',
              alignment: field.leftAlignment,
              size: oneSize != null ? parseInt(oneSize, 10) : 1
            }, {
              name: 'two',
              alignment: field.rightAlignment,
              size: twoSize != null ? parseInt(twoSize, 10) : 1
            }],
            fields: {
              one: field.leftFields,
              two: field.rightFields
            }
          };
        } else if (field.component === 'three-columns') {
          var _match4;
          lfWarn("Component 'three-columns' is deprecated, use 'columns' instead");
          var _ref3 = (_match4 = (field.layout || '').match(/layout-([0-9])-([0-9])-([0-9])/)) !== null && _match4 !== void 0 ? _match4 : [],
            _ref4 = _slicedToArray(_ref3, 4);
            _ref4[0];
            var _oneSize = _ref4[1],
            _twoSize = _ref4[2],
            threeSize = _ref4[3];
          return {
            component: 'columns',
            name: field.name,
            columns: [{
              name: 'one',
              alignment: field.leftAlignment,
              size: _oneSize != null ? parseInt(_oneSize, 10) : 1
            }, {
              name: 'two',
              alignment: field.centerAligment,
              size: _twoSize != null ? parseInt(_twoSize, 10) : 1
            }, {
              name: 'three',
              alignment: field.rightAlignment,
              size: threeSize != null ? parseInt(threeSize, 10) : 1
            }],
            fields: {
              one: field.leftFields,
              two: field.centerFields,
              three: field.rightFields
            }
          };
        }
        return field;
      });
      return upgradedFields;
    }
    return fields;
  };

  var CLASH_FIELD_NAMES = ['setValue', 'enable', 'disable', 'values', 'show', 'hide', 'css', 'element', 'style', 'arraySetValue', 'context', 'toggle', 'setFieldValue'];

  // Use eval to get the contructor since RCA polyfill this and returns a normal function constructor
  // eslint-disable-next-line no-eval
  var AsyncGeneratorFunction = eval('(() => async function* () {}.constructor)()');
  var makeTransformer = function makeTransformer(str, fieldList) {
    if (_isEmpty(str)) {
      return null;
    }
    // yielding is manual
    var yieldedStr = str.replaceAll("yield();", 'yield Promise.resolve(api.fields());\n');
    try {
      var spreadVars = '';
      if (!_isEmpty(fieldList)) {
        // spread field names, remove all field names same as reserved words, still accessible through "values"
        spreadVars = 'const { ' + fieldList.filter(function (f) {
          return !CLASH_FIELD_NAMES.includes(f);
        }).join(', ') + ' } = values;\n';
      }
      var tx = new AsyncGeneratorFunction('api', "const { setValue, setParam, enable, disable, values, show, hide, css, element, style, arraySetValue, arraySetParam, context, toggle, setFieldValue } = api;\n" + spreadVars + yieldedStr + '\nyield Promise.resolve(api.fields());' // leave /n or a comment can void anything
      );

      return tx;
    } catch (e) {
      console.error("[LetsForm] Invalid JavaScript code for rules", e);
      console.error("[LetsForm] Script: ", yieldedStr);
      throw e;
    }
  };

  var collectTransformers = function collectTransformers(fields, formScript, onJavascriptError) {
    var transformers = {};

    // collect all fieldlist needed to compile the transformer
    var fieldList = reduceFields(fields, function (field, accumulator) {
      if (field.component !== 'group' && field.component !== 'two-columns' && field.component !== 'three-columns' && field.component !== 'columns') {
        return [].concat(_toConsumableArray(accumulator), [field.name]);
      }
      return accumulator;
    }, [], {
      array: false
    } // don't include array
    );

    // compile transformer of the form
    try {
      if (formScript) {
        transformers.onRender = [makeTransformer(formScript, fieldList)];
      }
    } catch (e) {
      var error = new Error('Error compiling main form script: ' + e.message, {
        cause: e
      });
      error.sourceCode = formScript;
      error.errorType = 'compile';
      onJavascriptError(error);
    }

    // collect transformers for each field and put it onChange
    transformers = reduceFields(fields, function (field, acc) {
      if (field.script || field.transformer) {
        var transformer;
        try {
          transformer = makeTransformer(field.script || field.transformer, fieldList);
        } catch (e) {
          var _error = new Error('Error compiling script. ' + e.message, {
            cause: e
          });
          _error.sourceCode = field.script || field.transformer;
          _error.errorType = 'compile';
          onJavascriptError(_error);
        }
        // push into the onChange list of txs
        if (transformer != null) {
          if (acc.onChange == null) {
            acc.onChange = {};
          }
          acc.onChange[field.name] = [transformer];
        }
      }
      return acc;
    }, transformers, {
      array: false
    } // don't include array
    );

    return transformers;
  };

  var VALIDATION_PROPS = ['validationMaxLength', 'validationMinLength', 'validationMin', 'validationMax', 'validationPattern', 'validate', 'errorMessage'];

  // create blank elements for the DSL
  var LfField = function LfField() {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  var LfGroup = function LfGroup() {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  var LfColumns = function LfColumns() {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  var LfColumn = function LfColumn() {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  var LfArray = function LfArray() {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  var LfTabs = function LfTabs() {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  var LfTab = function LfTab() {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  var LfSteps = function LfSteps() {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  var LfStep = function LfStep() {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  var elementToString = function elementToString(el) {
    return "type: ".concat(typeToString(el.type)).concat(cleanupProperties(el.props));
  };
  var typeToString = function typeToString(type) {
    if (type === LfField) {
      return '<LfField>';
    } else if (type === LfGroup) {
      return '<LfGroup>';
    } else if (type === LfColumns) {
      return '<LfColumns>';
    } else if (type === LfColumn) {
      return '<LfColumn>';
    } else if (type === LfArray) {
      return '<LfArray>';
    } else if (type === LfTabs) {
      return '<LfTabs>';
    } else if (type === LfTab) {
      return '<LfTab>';
    } else if (type === LfSteps) {
      return '<LfSteps>';
    } else if (type === LfStep) {
      return '<LfStep>';
    } else {
      return 'unknown';
    }
  };
  var typesToString = function typesToString(types) {
    return types.map(typeToString).join(', ');
  };
  var cleanupProperties = function cleanupProperties(props) {
    var cleaned = Object.keys(props).reduce(function (acc, key) {
      if (typeof props[key] === 'string' || typeof props[key] === 'number') {
        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, key, props[key]));
      }
      return acc;
    }, {});
    if (Object.keys(cleaned).length !== 0) {
      return ' - ' + JSON.stringify(cleaned);
    }
    return '';
  };

  /**
   * elementOf
   * Check if element is one of the type
   * @param {obj} element
   * @param {ReactElement,[ReactElement]} types
   */
  var elementOf = function elementOf(element, types) {
    var checkTypes = Array.isArray(types) ? types : [types];
    return checkTypes.some(function (type) {
      return element.type === type;
    });
  };
  var assertElementsOf = function assertElementsOf(elements, types) {
    var quiet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var checkTypes = Array.isArray(types) ? types : [types];
    var checkElements = Array.isArray(elements) ? elements : [elements];
    return checkElements.every(function (element) {
      if (!elementOf(element, checkTypes)) {
        if (!quiet) {
          throw new Error('LetsForm DSL error, element ' + elementToString(element) + ' should be one of these components: ' + typesToString(checkTypes));
        }
        return false;
      }
      return true;
    });
  };
  var assertValidSteps = function assertValidSteps(elements) {
    var checkElements = Array.isArray(elements) ? elements : [elements];
    return checkElements.every(function (element) {
      if (_.isEmpty(element.props.value)) {
        throw new Error('LetsForm DSL error, LfStep ' + elementToString(element) + ' must have a "value" property (the internal name of the step)');
      }
      if (_.isEmpty(element.props.label)) {
        throw new Error('LetsForm DSL error, LfStep ' + elementToString(element) + ' must have a "label" property');
      }
      return true;
    });
  };
  var assertValidTabs = function assertValidTabs(elements) {
    var checkElements = Array.isArray(elements) ? elements : [elements];
    return checkElements.every(function (element) {
      if (_.isEmpty(element.props.value)) {
        throw new Error('LetsForm DSL error, LfTab ' + elementToString(element) + ' must have a "value" property (the internal name of the tab)');
      }
      if (_.isEmpty(element.props.label)) {
        throw new Error('LetsForm DSL error, LfStep ' + elementToString(element) + ' must have a "label" property');
      }
      return true;
    });
  };
  var assertElementsOfElements = function assertElementsOfElements(elements, types) {
    var checkTypes = Array.isArray(types) ? types : [types];
    var checkElements = Array.isArray(elements) ? elements : [elements];
    return checkElements.every(function (element) {
      if (!assertElementsOf(element.props.children, checkTypes, true)) {
        throw new Error('LetsForm DSL error, element ' + elementToString(element) + ' should only have childrenbe of these components: ' + typesToString(checkTypes));
      }
      return true;
    });
  };

  /**
   * assertElementName
   * Assert element has name property or raise error
   */
  var assertElementName = function assertElementName(element) {
    if (_.isEmpty(element.props.name)) {
      throw new Error('LetsForm DSL error, element ' + elementToString(element) + ' missing "name" property ');
    }
    return true;
  };

  /**
   * assertElementComponent
   * Assert element has component prop, or raise error
   */
  var assertElementComponent = function assertElementComponent(element) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      components = _ref.components,
      framework = _ref.framework;
    if (_.isEmpty(element.props.component)) {
      throw new Error('LetsForm DSL error, element ' + elementToString(element) + ' missing "component" property ');
    }
    if (components && framework) {
      if (!components[element.props.component] || !components[element.props.component][framework]) {
        throw new Error('LetsForm DSL error, element ' + elementToString(element) + " invalid component property \"".concat(element.props.component, "\" for framework \"").concat(framework, "\""));
      }
    }
    return true;
  };
  var spreadValidationFields = function spreadValidationFields(props) {
    var newProps = _.omit(props, VALIDATION_PROPS);

    // if any validation prop
    if (VALIDATION_PROPS.some(function (prop) {
      return props[prop] != null;
    })) {
      var validation = VALIDATION_PROPS.reduce(function (acc, prop) {
        if (props[prop] != null) {
          if (prop.startsWith('validation')) {
            return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, prop.replace('validation', ''), props[prop]));
          } else if (prop === 'errorMessage') {
            return _objectSpread2(_objectSpread2({}, acc), {}, {
              message: props[prop]
            });
          } else {
            return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, prop, props[prop]));
          }
        }
        return acc;
      }, {});
      newProps.validation = validation;
    }
    return newProps;
  };
  var traverseChildren = function traverseChildren(children) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      components = _ref2.components,
      framework = _ref2.framework;
    var elements = [];
    if (children) {
      elements = Array.isArray(children) ? children : [children];
    }
    return elements.map(function (element) {
      if (elementOf(element, LfField) && assertElementName(element) && assertElementComponent(element, {
        components: components,
        framework: framework
      })) {
        return _objectSpread2({}, spreadValidationFields(element.props));
      } else if (elementOf(element, LfGroup)) {
        return _objectSpread2(_objectSpread2({}, _.omit(element.props, 'children')), {}, {
          component: 'group',
          fields: traverseChildren(element.props.children, {
            components: components,
            framework: framework
          })
        });
      } else if (elementOf(element, LfColumns) && Array.isArray(element.props.children) && assertElementsOf(element.props.children, LfColumn)) {
        var columns = element.props.children.map(function (el) {
          return _objectSpread2({
            name: _.uniqueId('lf_column_name_')
          }, _.omit(el.props, 'children'));
        });
        return _objectSpread2(_objectSpread2({
          name: _.uniqueId('lf_field_name_'),
          component: 'columns',
          columns: columns
        }, _.omit(element.props, 'children')), {}, {
          fields: columns.reduce(function (acc, column, idx) {
            return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, column.name, traverseChildren(element.props.children[idx].props.children, {
              components: components,
              framework: framework
            })));
          }, {})
        });
      } else if (element.type === LfArray && assertElementsOf(element.props.children, [LfField, LfGroup, LfColumns])) {
        return _objectSpread2(_objectSpread2({}, _.omit(element.props, 'children')), {}, {
          component: 'array',
          fields: traverseChildren(element.props.children, {
            components: components,
            framework: framework
          })
        });
      } else if (element.type === LfTabs && assertElementsOf(element.props.children, [LfTab]) && assertElementsOfElements(element.props.children, [LfField, LfGroup, LfColumns, LfArray]) && assertValidTabs(element.props.children)) {
        var tabs = element.props.children.map(function (el) {
          return _objectSpread2({
            name: _.uniqueId('lf_tab_name_')
          }, _.omit(el.props, 'children'));
        });
        return _objectSpread2(_objectSpread2({
          name: _.uniqueId('lf_field_name_'),
          component: 'tabs'
        }, _.omit(element.props, 'children')), {}, {
          tabs: tabs,
          fields: tabs.reduce(function (acc, column, idx) {
            return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, column.value, traverseChildren(element.props.children[idx].props.children, {
              components: components,
              framework: framework
            })));
          }, {})
        });
      } else if (element.type === LfSteps && assertElementsOf(element.props.children, [LfStep]) && assertElementsOfElements(element.props.children, [LfField, LfGroup, LfColumns, LfArray]) && assertValidSteps(element.props.children)) {
        var steps = element.props.children.map(function (el) {
          return _objectSpread2({
            name: _.uniqueId('lf_step_name_')
          }, _.omit(el.props, 'children'));
        });
        return _objectSpread2(_objectSpread2({
          name: _.uniqueId('lf_field_name_'),
          component: 'steps'
        }, _.omit(element.props, 'children')), {}, {
          steps: steps,
          fields: steps.reduce(function (acc, column, idx) {
            return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, column.value, traverseChildren(element.props.children[idx].props.children, {
              components: components,
              framework: framework
            })));
          }, {})
        });
      } else {
        // othwerwise wrap in react-view component
        return {
          name: _.uniqueId('lf_field_name_'),
          component: 'react-view',
          view: function view() {
            return /*#__PURE__*/React.createElement(React.Fragment, null, element);
          }
        };
      }
    }).filter(Boolean);
  };

  /**
   * mergeReRenders
   * Merge re-renders schedule
   * @param {*} currentReRenders
   * @param {*} newReRenders
   */
  var mergeReRenders = function mergeReRenders(currentReRenders, newReRenders) {
    if (newReRenders) {
      Object.keys(newReRenders).forEach(function (key) {
        return currentReRenders[key] = currentReRenders[key] ? currentReRenders[key] + newReRenders[key] : newReRenders[key];
      });
    }
  };

  /**
   * collectFields
   * it's the combination of the fields from the form schema and those specified
   * with the DSL, from now on every func should reference this (not form.fields)
   * also upgrade fields if older version of the form
   * @param {*} param0
   * @returns
   */
  var collectFields = function collectFields(_ref) {
    var form = _ref.form,
      children = _ref.children,
      framework = _ref.framework,
      components = _ref.components;
    var fields = form.fields;
    var traversedFields = traverseChildren(children, {
      components: components,
      framework: framework
    });
    var combinedFields = !_isEmpty(traversedFields) ? [].concat(_toConsumableArray(fields !== null && fields !== void 0 ? fields : []), _toConsumableArray(traverseChildren(children, {
      components: components,
      framework: framework
    }))) : fields;
    return upgradeFields(combinedFields, form.version);
  };

  /**
   * useFormFields
   * Handle the concern of the current fields of the form. Fields may come from json or the DSL, also some
   * props may be changed by a Form Script.
   * This makes "formFields" referentially stable
   *
   * @param {*} param0
   * @returns
   */
  var useFormFields = function useFormFields(_ref2) {
    var _form$name, _mutableState$current3;
    var components = _ref2.components,
      framework = _ref2.framework,
      form = _ref2.form,
      children = _ref2.children,
      onJavascriptError = _ref2.onJavascriptError,
      defaultValues = _ref2.defaultValues,
      formContext = _ref2.formContext,
      locale = _ref2.locale,
      setValue = _ref2.setValue;
    // state form fields
    var _useState = React$1.useState(collectFields({
        form: form,
        children: children,
        framework: framework,
        components: components
      })),
      _useState2 = _slicedToArray(_useState, 2),
      formFields = _useState2[0],
      setFormFields = _useState2[1];
    // store transformers
    var _useState3 = React$1.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      transformers = _useState4[0],
      setTransformers = _useState4[1];
    // keep track of components to be re-rendered, update it without re-render the component
    var rerenders = React$1.useRef({});
    var mutableState = React$1.useRef({
      currentFormContext: _objectSpread2({
        locales: form.locales,
        locale: locale,
        formName: (_form$name = form.name) !== null && _form$name !== void 0 ? _form$name : _uniqueId('form_')
      }, formContext)
    });
    React$1.useEffect(function () {
      var f = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _mutableState$current;
          var newFields, formName, newTransformers, transformersToRun, idx, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;
          return _regeneratorRuntime().wrap(function _callee$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                // update the mutable state, will be used inside transformers
                mutableState.current.currentFormContext = _objectSpread2(_objectSpread2({}, mutableState.current.currentFormContext), formContext);

                // collect fields from json and dsl
                newFields = collectFields({
                  form: form,
                  children: children,
                  framework: framework
                });
                formName = (_mutableState$current = mutableState.current.currentFormContext) === null || _mutableState$current === void 0 ? void 0 : _mutableState$current.formName;
                newTransformers = collectTransformers(newFields, form.transformer || form.script, onJavascriptError); // collect all transformers to be executed
                transformersToRun = Object.keys(newTransformers.onChange || {}).filter(function (fieldName) {
                  return !_isEmpty(newTransformers.onChange[fieldName]);
                }).reduce(function (acc, fieldName) {
                  return [].concat(_toConsumableArray(acc), [newTransformers.onChange[fieldName]]);
                }, !_isEmpty(newTransformers.onRender) ? [newTransformers.onRender] : []); // execute all onChange transformers at the bootstrap of the form
                idx = 0;
              case 6:
                if (!(idx < transformersToRun.length)) {
                  _context2.next = 38;
                  break;
                }
                _iteratorAbruptCompletion = false;
                _didIteratorError = false;
                _context2.prev = 9;
                _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                  var transformResult, newFormFields, newReRenders, changes;
                  return _regeneratorRuntime().wrap(function _loop$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        transformResult = _step.value;
                        newFormFields = transformResult.fields, newReRenders = transformResult.rerenders, changes = transformResult.changes;
                        mergeReRenders(rerenders.current, newReRenders);
                        if (newFormFields !== newFields) {
                          newFields = newFormFields;
                          setFormFields(newFormFields);
                        }
                        if (changes) {
                          Object.keys(changes).forEach(function (key) {
                            return setValue(key, changes[key]);
                          });
                        }
                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }, _loop);
                });
                _iterator = _asyncIterator(applyTransformers(formName, framework, newFields, transformersToRun[idx], defaultValues, onJavascriptError, mutableState.current.currentFormContext, components));
              case 12:
                _context2.next = 14;
                return _iterator.next();
              case 14:
                if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
                  _context2.next = 19;
                  break;
                }
                return _context2.delegateYield(_loop(), "t0", 16);
              case 16:
                _iteratorAbruptCompletion = false;
                _context2.next = 12;
                break;
              case 19:
                _context2.next = 25;
                break;
              case 21:
                _context2.prev = 21;
                _context2.t1 = _context2["catch"](9);
                _didIteratorError = true;
                _iteratorError = _context2.t1;
              case 25:
                _context2.prev = 25;
                _context2.prev = 26;
                if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                  _context2.next = 30;
                  break;
                }
                _context2.next = 30;
                return _iterator.return();
              case 30:
                _context2.prev = 30;
                if (!_didIteratorError) {
                  _context2.next = 33;
                  break;
                }
                throw _iteratorError;
              case 33:
                return _context2.finish(30);
              case 34:
                return _context2.finish(25);
              case 35:
                idx++;
                _context2.next = 6;
                break;
              case 38:
                // set new form name

                mutableState.current.currentFormContext.formName = formName !== null && formName !== void 0 ? formName : _uniqueId('form_');
                setTransformers(newTransformers);

                // if transformed fields different than current one, then save
                if (newFields !== formFields) {
                  setFormFields(newFields);
                }
              case 41:
              case "end":
                return _context2.stop();
            }
          }, _callee, null, [[9, 21, 25, 35], [26,, 30, 34]]);
        }));
        return function f() {
          return _ref3.apply(this, arguments);
        };
      }();
      f();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form, framework, children, formContext] // don't put defaultValues here
    );

    var hasTransformer = React$1.useCallback(function (fieldName) {
      return transformers && transformers.onChange != null && !_isEmpty(transformers.onChange[fieldName]);
    }, [transformers]);
    var executeTransformer = React$1.useCallback( /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(transformer, values) {
        var _mutableState$current2;
        var _ref5,
          _ref5$followTransform,
          followTransformers,
          newFields,
          formName,
          currentFormContext,
          _iteratorAbruptCompletion2,
          _didIteratorError2,
          _iteratorError2,
          _iterator2,
          _step2,
          transformResult,
          newFormFields,
          newReRenders,
          changes,
          idx,
          changedFields,
          fieldToChange,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _ref5 = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {}, _ref5$followTransform = _ref5.followTransformers, followTransformers = _ref5$followTransform === void 0 ? true : _ref5$followTransform;
              // store current instance of fields
              newFields = formFields;
              formName = (_mutableState$current2 = mutableState.current.currentFormContext) === null || _mutableState$current2 === void 0 ? void 0 : _mutableState$current2.formName;
              currentFormContext = mutableState.current.currentFormContext; // execute the async generator transformer
              _iteratorAbruptCompletion2 = false;
              _didIteratorError2 = false;
              _context3.prev = 6;
              _iterator2 = _asyncIterator(applyTransformers(formName, framework, newFields, transformer, values, onJavascriptError, currentFormContext, components));
            case 8:
              _context3.next = 10;
              return _iterator2.next();
            case 10:
              if (!(_iteratorAbruptCompletion2 = !(_step2 = _context3.sent).done)) {
                _context3.next = 30;
                break;
              }
              transformResult = _step2.value;
              newFormFields = transformResult.fields, newReRenders = transformResult.rerenders, changes = transformResult.changes; // merge re-renders request to the current ones, in a useRef, must per persisted like a state
              // but doesnt' have to trigger a new render
              mergeReRenders(rerenders.current, newReRenders);

              // if there are form value changes, apply it, this will cause the specific field to be refreshed
              // and un-mounted / re-mounted if the component is statefull and needs to be reset completely
              // at this point the re-renders request are already collected
              if (!changes) {
                _context3.next = 26;
                break;
              }
              idx = void 0, changedFields = Object.keys(changes);
              idx = 0;
            case 17:
              if (!(idx < changedFields.length)) {
                _context3.next = 26;
                break;
              }
              fieldToChange = changedFields[idx];
              setValue(changedFields[idx], changes[changedFields[idx]]);
              // if the changed field has a transformer, then execute it
              // don't go beyond second level to avoid infinte loops
              if (!(hasTransformer(fieldToChange) && followTransformers)) {
                _context3.next = 23;
                break;
              }
              _context3.next = 23;
              return executeTransformer(transformers.onChange[fieldToChange], _objectSpread2(_objectSpread2({}, values), changes));
            case 23:
              idx++;
              _context3.next = 17;
              break;
            case 26:
              // if different instances, then fields descriptions are changed, set it, this will cause a
              // form re-render
              if (newFormFields !== newFields) {
                newFields = newFormFields;
                setFormFields(newFormFields);
              }
            case 27:
              _iteratorAbruptCompletion2 = false;
              _context3.next = 8;
              break;
            case 30:
              _context3.next = 36;
              break;
            case 32:
              _context3.prev = 32;
              _context3.t0 = _context3["catch"](6);
              _didIteratorError2 = true;
              _iteratorError2 = _context3.t0;
            case 36:
              _context3.prev = 36;
              _context3.prev = 37;
              if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {
                _context3.next = 41;
                break;
              }
              _context3.next = 41;
              return _iterator2.return();
            case 41:
              _context3.prev = 41;
              if (!_didIteratorError2) {
                _context3.next = 44;
                break;
              }
              throw _iteratorError2;
            case 44:
              return _context3.finish(41);
            case 45:
              return _context3.finish(36);
            case 46:
            case "end":
              return _context3.stop();
          }
        }, _callee2, null, [[6, 32, 36, 46], [37,, 41, 45]]);
      }));
      return function (_x, _x2) {
        return _ref4.apply(this, arguments);
      };
    }(), [transformers, formFields]);
    return {
      formFields: formFields,
      transformers: transformers,
      setFormFields: setFormFields,
      currentFormContext: mutableState.current.currentFormContext,
      formName: (_mutableState$current3 = mutableState.current.currentFormContext) === null || _mutableState$current3 === void 0 ? void 0 : _mutableState$current3.formName,
      hasTransformer: hasTransformer,
      executeTransformer: executeTransformer,
      rerenders: rerenders
    };
  };

  var MissingComponent = function MissingComponent(_ref) {
    var lfComponent = _ref.lfComponent,
      label = _ref.label,
      lfFramework = _ref.lfFramework;
    return /*#__PURE__*/React$1.createElement("div", {
      className: "lf-missing-component"
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React$1.createElement(Warning, {
      color: "#ff6633",
      height: 16
    })), /*#__PURE__*/React$1.createElement("div", {
      className: "message"
    }, "The component ", /*#__PURE__*/React$1.createElement("span", {
      className: "tag-component"
    }, lfComponent), " (", /*#__PURE__*/React$1.createElement("em", null, "\"", _isString(label) ? label : 'unknown', "\""), ") is not available for this framework (", /*#__PURE__*/React$1.createElement("b", null, lfFramework), ")"));
  };

  var renderFields = function renderFields(_ref) {
    var fields = _ref.fields,
      control = _ref.control,
      framework = _ref.framework,
      onChange = _ref.onChange,
      onEnter = _ref.onEnter,
      getValues = _ref.getValues,
      setValue = _ref.setValue,
      Wrapper = _ref.Wrapper,
      GroupWrapper = _ref.GroupWrapper,
      BottomView = _ref.BottomView,
      PlaceholderWrapper = _ref.PlaceholderWrapper,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      plaintext = _ref.plaintext,
      errors = _ref.errors,
      showErrors = _ref.showErrors,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? 1 : _ref$level,
      locale = _ref.locale,
      onJavascriptError = _ref.onJavascriptError,
      Components = _ref.Components,
      prependView = _ref.prependView,
      rerenders = _ref.rerenders,
      formName = _ref.formName;
    var isEditMode = Wrapper != null;
    var renderedFields = (fields || []).filter(function (field) {
      return isEditMode || field.component !== 'hidden';
    }) // skip hidden type field (not in design mode)
    .filter(function (field) {
      return isEditMode || field.hidden !== true;
    }) // skip fields with "hidden" attribute (not in design mode)
    .map(function (field, index) {
      var Component;
      if (Components[field.component] && Components[field.component][framework]) {
        Component = Components[field.component][framework];
      } else if (Components[field.component] && Components[field.component]['*']) {
        Component = Components[field.component]['*'];
      } else {
        Component = MissingComponent;
      }
      // remove mandatory fields and platform specific fields
      var additionalFields = _omit(field, ['id', 'name', 'label', 'disabled', 'readOnly', 'plaintext', 'component'].concat(_toConsumableArray(FRAMEWORKS)));
      var renderFieldsParams = {
        Wrapper: Wrapper,
        GroupWrapper: GroupWrapper,
        PlaceholderWrapper: PlaceholderWrapper,
        BottomView: BottomView,
        onChange: onChange,
        onEnter: onEnter,
        control: control,
        framework: framework,
        getValues: getValues,
        setValue: setValue,
        readOnly: readOnly,
        plaintext: plaintext,
        errors: errors,
        showErrors: showErrors,
        level: level + 1,
        locale: locale,
        onJavascriptError: onJavascriptError,
        Components: Components,
        rerenders: rerenders,
        formName: formName
      };

      // special case of group
      if (field.component === 'group') {
        var component = /*#__PURE__*/React$1.createElement(Component, _extends({
          key: field.name,
          lfComponent: field.component,
          lfFramework: framework,
          lfLocale: locale,
          name: field.name,
          label: field.label,
          hint: field.hint,
          disabled: field.disabled
        }, additionalFields), /*#__PURE__*/React$1.createElement(React$1.Fragment, null, renderFields(_objectSpread2(_objectSpread2({}, renderFieldsParams), {}, {
          fields: field.fields,
          disabled: field.disabled ? true : disabled,
          // pass disabled status to inner components
          prependView: PlaceholderWrapper && /*#__PURE__*/React$1.createElement(PlaceholderWrapper, {
            key: "wrapper_top_field",
            parentField: field,
            parentFieldTarget: "fields",
            nextField: field.fields && field.fields.length ? field.fields[0] : null
          })
        })), BottomView && /*#__PURE__*/React$1.createElement(BottomView, {
          context: "group",
          key: "bottom_view_".concat(field.name),
          field: field,
          target: "fields"
        })));
        return GroupWrapper ? /*#__PURE__*/React$1.createElement(GroupWrapper, {
          key: "wrapper_".concat(field.name),
          field: field,
          level: level,
          index: index,
          className: "group"
        }, component) : component;
      } else if (field.component === 'columns') {
        var _component = /*#__PURE__*/React$1.createElement(Component, _extends({
          key: field.name,
          lfComponent: field.component,
          lfFramework: framework,
          lfLocale: locale,
          name: field.name,
          label: field.label,
          hint: field.hint,
          disabled: field.disabled
        }, additionalFields, {
          // in edit mode, columns should be visible, grayed out
          columns: !isEditMode ? field.columns : field.columns.map(function (column) {
            return _objectSpread2(_objectSpread2({}, column), {}, {
              hidden: false,
              className: column.hidden ? 'lf-column-hidden' : undefined
            });
          })
        }), function (column) {
          return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, renderFields(_objectSpread2(_objectSpread2({}, renderFieldsParams), {}, {
            fields: field.fields && _isArray(field.fields[column]) ? field.fields[column] : [],
            disabled: field.disabled ? true : disabled,
            // pass disabled status to inner components
            prependView: PlaceholderWrapper && /*#__PURE__*/React$1.createElement(PlaceholderWrapper, {
              key: "wrapper_top_field",
              parentField: field,
              parentFieldTarget: "fields",
              parentFieldSubTarget: column,
              nextField: field.fields && field.fields.length ? field.fields[0] : null
            })
          })), BottomView && /*#__PURE__*/React$1.createElement(BottomView, {
            context: "columns",
            key: "bottom_view_".concat(field.name),
            field: field,
            target: "fields",
            subtarget: column
          }));
        });
        return GroupWrapper ? /*#__PURE__*/React$1.createElement(GroupWrapper, {
          key: "wrapper_".concat(field.name),
          field: field,
          level: level,
          index: index,
          className: "columns"
        }, _component) : _component;
      } else if (field.component === 'tabs') {
        return /*#__PURE__*/React$1.createElement(Controller, {
          key: "field_".concat(field.name),
          name: field.name,
          control: control,
          render: function render(_ref2) {
            var _values$field$name;
            _ref2.field;
            var values = getValues();
            var component = /*#__PURE__*/React$1.createElement(Component, _extends({
              key: field.name,
              lfComponent: field.component,
              lfFramework: framework,
              lfLocale: locale,
              name: field.name,
              label: field.label,
              hint: field.hint,
              disabled: field.disabled,
              value: (_values$field$name = values[field.name]) !== null && _values$field$name !== void 0 ? _values$field$name : undefined,
              onChange: onChange
            }, additionalFields, field[framework]), function (tab) {
              return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, renderFields(_objectSpread2(_objectSpread2({}, renderFieldsParams), {}, {
                fields: field.fields && _isArray(field.fields[tab]) ? field.fields[tab] : [],
                disabled: field.disabled ? true : disabled,
                // pass disabled status to inner components
                prependView: PlaceholderWrapper && /*#__PURE__*/React$1.createElement(PlaceholderWrapper, {
                  key: "wrapper_top_field",
                  parentField: field,
                  parentFieldTarget: "fields",
                  parentFieldSubTarget: tab,
                  nextField: field.fields && field.fields.length ? field.fields[0] : null
                })
              })), BottomView && /*#__PURE__*/React$1.createElement(BottomView, {
                context: "tabs",
                key: "bottom_view_".concat(field.name),
                field: field,
                target: "fields",
                subtarget: tab
              }));
            });
            return GroupWrapper ? /*#__PURE__*/React$1.createElement(GroupWrapper, {
              key: "wrapper_".concat(field.name),
              field: field,
              level: level,
              index: index,
              className: "tabs"
            }, component) : component;
          }
        });
      } else if (field.component === 'steps') {
        return /*#__PURE__*/React$1.createElement(Controller, {
          key: "field_".concat(field.name),
          name: field.name,
          control: control,
          render: function render(_ref3) {
            var _values$field$name2;
            _ref3.field;
            var values = getValues();
            var component = /*#__PURE__*/React$1.createElement(Component, _extends({
              key: field.name,
              lfComponent: field.component,
              lfFramework: framework,
              lfLocale: locale,
              name: field.name,
              label: field.label,
              hint: field.hint,
              disabled: field.disabled,
              value: (_values$field$name2 = values[field.name]) !== null && _values$field$name2 !== void 0 ? _values$field$name2 : undefined,
              onChange: onChange
            }, additionalFields, field[framework]), function (step) {
              return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, renderFields(_objectSpread2(_objectSpread2({}, renderFieldsParams), {}, {
                fields: field.fields && _isArray(field.fields[step]) ? field.fields[step] : [],
                disabled: field.disabled ? true : disabled,
                // pass disabled status to inner components
                prependView: PlaceholderWrapper && /*#__PURE__*/React$1.createElement(PlaceholderWrapper, {
                  key: "wrapper_top_field",
                  parentField: field,
                  parentFieldTarget: "fields",
                  parentFieldSubTarget: step,
                  nextField: field.fields && field.fields.length ? field.fields[0] : null
                })
              })), BottomView && /*#__PURE__*/React$1.createElement(BottomView, {
                context: "tabs",
                key: "bottom_view_".concat(field.name),
                field: field,
                target: "fields",
                subtarget: step
              }));
            });
            return GroupWrapper ? /*#__PURE__*/React$1.createElement(GroupWrapper, {
              key: "wrapper_".concat(field.name),
              field: field,
              level: level,
              index: index,
              className: "tabs"
            }, component) : component;
          }
        });
      } else if (field.component === 'array' && GroupWrapper) {
        // this only used in designer
        var _component2 = /*#__PURE__*/React$1.createElement(Component, _extends({
          key: field.name,
          lfComponent: field.component,
          lfFramework: framework,
          lfLocale: locale,
          name: field.name,
          label: field.label,
          hint: field.hint,
          disabled: field.disabled,
          errors: errors ? errors[field.name] : null
        }, additionalFields), /*#__PURE__*/React$1.createElement(React$1.Fragment, null, renderFields(_objectSpread2(_objectSpread2({}, renderFieldsParams), {}, {
          fields: field.fields,
          disabled: field.disabled ? true : disabled,
          // pass disabled status to inner components
          prependView: PlaceholderWrapper && /*#__PURE__*/React$1.createElement(PlaceholderWrapper, {
            key: "wrapper_top_field",
            parentField: field,
            parentFieldTarget: "fields",
            nextField: field.fields && field.fields.length ? field.fields[0] : null
          })
        })), BottomView && /*#__PURE__*/React$1.createElement(BottomView, {
          context: "array",
          key: "bottom_view_".concat(field.name),
          field: field,
          target: "fields"
        })));
        return /*#__PURE__*/React$1.createElement(GroupWrapper, {
          key: "wrapper_".concat(field.name),
          field: field,
          level: level,
          index: index,
          className: "array"
        }, _component2);
      }
      var error;
      if (field.component === 'array') {
        // pass errors down the the array component only if it's "inline"
        error = errors != null && showErrors === 'inline' ? errors[field.name] : null;
      } else if (errors && errors[field.name] && errors[field.name].errorMessage) {
        // if it's inline pass the error messgae, otherwise just a true in order to
        // highlight the component
        error = showErrors === 'inline' ? errors[field.name].errorMessage : true;
      }
      var perComponentAdditionalFields = _objectSpread2({}, additionalFields);
      if (field.component === 'array') {
        perComponentAdditionalFields.formShowErrors = showErrors;
      }
      return /*#__PURE__*/React$1.createElement(Controller, {
        key: "field_".concat(field.name),
        name: field.name,
        control: control,
        render: function render(_ref4) {
          var fieldInfo = _ref4.field;
          var component = /*#__PURE__*/React$1.createElement(Component
          // not sure about this, not passing the ref
          , _extends({
            name: fieldInfo.name,
            value: fieldInfo.value,
            onBlur: fieldInfo.onBlur,
            key: "field_".concat(field.name).concat(rerenders[field.name] ? '_' + rerenders[field.name] : ''),
            lfComponent: field.component,
            lfFramework: framework,
            lfLocale: locale,
            lfOnEnter: onEnter,
            label: field.label,
            disabled: disabled || field.disabled,
            readOnly: readOnly || field.readOnly,
            plaintext: plaintext,
            required: field.required,
            error: error
          }, perComponentAdditionalFields, field[framework], {
            onChange: onChange
          }));
          return Wrapper ? /*#__PURE__*/React$1.createElement(Wrapper, {
            key: "wrapper_".concat(field.name),
            field: field,
            level: level,
            index: index
          }, component) : component;
        }
      });
    });
    return prependView ? [prependView].concat(_toConsumableArray(renderedFields)) : renderedFields;
  };

  var css_248z$6 = ".lf-lets-form .label-test-buttons {\n  float: right;\n  background-color: #cccccc;\n  color: #555555;\n  font-size: 10px;\n  padding: 1px 3px;\n  margin-top: -16px;\n  border-top-left-radius: 3px;\n  text-transform: uppercase;\n}\n.lf-lets-form.lf-lets-form-edit-mode .lf-buttons {\n  padding: 10px;\n  background-image: linear-gradient(45deg, #eeeeee 25%, #ffffff 25%, #ffffff 50%, #eeeeee 50%, #eeeeee 75%, #ffffff 75%, #ffffff 100%);\n  background-size: 56.57px 56.57px;\n}\n\n.lf-form {\n  --lf-field-margin: 16px;\n  --lf-field-column-margin: 16px;\n  --lf-font-size: 15px;\n  --lf-field-button-margin: 10px;\n  --lf-highligh-color: #ff6633;\n  --lf-hover-color: #FF9F85;\n  --lf-drop-highlight-color: #3498ff;\n  --lf-field-margin-top: 5px;\n  --lf-border-color: #e5e5ea;\n  --lf-group-padding: 15px;\n  --lf-group-header: 15px;\n  --lf-buttons-margin: 32px;\n}\n.lf-form.lf-form-buttons-align-center .lf-buttons {\n  justify-content: center;\n}\n.lf-form.lf-form-buttons-align-left .lf-buttons {\n  justify-content: flex-start;\n}\n.lf-form.lf-form-buttons-align-right .lf-buttons {\n  justify-content: flex-end;\n}\n.lf-form .lf-buttons {\n  margin-top: var(--lf-buttons-margin);\n}\n.lf-form [class*=lf-control]:not(:first-child) {\n  margin-top: var(--lf-field-margin);\n  margin-bottom: 0px !important;\n}\n.lf-form .lf-control-common-array .lf-control-common-array-item {\n  --lf-field-margin: 15px;\n}\n.lf-form .lf-control-common-array .lf-control-common-array-item [class^=lf-control] {\n  margin-bottom: 0px;\n}\n.lf-form .lf-control-common-array .lf-control-common-array-item [class^=lf-control]:not(:first-child) {\n  margin-top: 10px;\n}\n\n.lf-icon-asterisk {\n  margin-top: -3px;\n  display: inline-block;\n}\n\n.lf-missing-component {\n  border: 1px solid #bbbbbb;\n  background-color: #f6f6f6;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: flex-start;\n}\n.lf-missing-component .icon {\n  order: 0;\n  flex: 0 0;\n  align-self: auto;\n  margin-top: 2px;\n}\n.lf-missing-component .tag-component {\n  background-color: #673ab7;\n  color: #ffffff;\n  font-size: 12px;\n  padding: 1px 4px 2px 4px;\n  border-radius: 3px;\n  line-height: 17px;\n}\n.lf-missing-component .message {\n  display: inline-block;\n  margin-left: 10px;\n  order: 0;\n  flex: 1 0;\n  align-self: auto;\n}";
  styleInject(css_248z$6);

  var _excluded$g = ["framework", "form", "onChange", "onSubmit", "onSubmitSuccess", "onSubmitError", "onReset", "onError", "onEnter", "onBlur", "onJavascriptError", "locale", "wrapper", "groupWrapper", "placeholderWrapper", "bottomView", "defaultValues", "onlyFields", "debug", "disabled", "readOnly", "plaintext", "hideToolbar", "loader", "prealoadComponents", "custom", "children", "components", "className", "hideCancel", "labelCancel", "labelSubmit", "hideSubmit", "demo", "footer", "disableButtons", "disableOnSubmit", "resetAfterSubmit", "context", "errors"];
  var DEFAULT_FORM = {
    version: 2,
    fields: []
  };
  var NOOP = function NOOP() {};
  var EMPTY_OBJ = {};
  var GenerateGenerator = function GenerateGenerator(_ref) {
    var Forms = _ref.Forms,
      Fields = _ref.Fields;
    var BaseFormGeneratorWithRef = function BaseFormGeneratorWithRef(_ref2, ref) {
      var _form$labelSubmit, _form$labelCancel;
      var framework = _ref2.framework,
        _ref2$form = _ref2.form,
        form = _ref2$form === void 0 ? DEFAULT_FORM : _ref2$form,
        _ref2$onChange = _ref2.onChange,
        onChange = _ref2$onChange === void 0 ? NOOP : _ref2$onChange,
        _ref2$onSubmit = _ref2.onSubmit,
        onSubmit = _ref2$onSubmit === void 0 ? NOOP : _ref2$onSubmit,
        _ref2$onSubmitSuccess = _ref2.onSubmitSuccess,
        onSubmitSuccess = _ref2$onSubmitSuccess === void 0 ? NOOP : _ref2$onSubmitSuccess,
        _ref2$onSubmitError = _ref2.onSubmitError,
        onSubmitError = _ref2$onSubmitError === void 0 ? NOOP : _ref2$onSubmitError,
        _ref2$onReset = _ref2.onReset,
        onReset = _ref2$onReset === void 0 ? NOOP : _ref2$onReset,
        _ref2$onError = _ref2.onError,
        onError = _ref2$onError === void 0 ? NOOP : _ref2$onError,
        _ref2$onEnter = _ref2.onEnter,
        onEnter = _ref2$onEnter === void 0 ? NOOP : _ref2$onEnter,
        _ref2$onBlur = _ref2.onBlur,
        onBlur = _ref2$onBlur === void 0 ? NOOP : _ref2$onBlur,
        onJavascriptError = _ref2.onJavascriptError,
        localeProp = _ref2.locale,
        wrapper = _ref2.wrapper,
        groupWrapper = _ref2.groupWrapper,
        placeholderWrapper = _ref2.placeholderWrapper,
        bottomView = _ref2.bottomView,
        _ref2$defaultValues = _ref2.defaultValues,
        defaultValues = _ref2$defaultValues === void 0 ? EMPTY_OBJ : _ref2$defaultValues,
        _ref2$onlyFields = _ref2.onlyFields,
        onlyFields = _ref2$onlyFields === void 0 ? false : _ref2$onlyFields,
        _ref2$debug = _ref2.debug,
        debug = _ref2$debug === void 0 ? false : _ref2$debug,
        _ref2$disabled = _ref2.disabled,
        disabledProp = _ref2$disabled === void 0 ? false : _ref2$disabled,
        _ref2$readOnly = _ref2.readOnly,
        readOnly = _ref2$readOnly === void 0 ? false : _ref2$readOnly,
        _ref2$plaintext = _ref2.plaintext,
        plaintext = _ref2$plaintext === void 0 ? false : _ref2$plaintext,
        _ref2$hideToolbar = _ref2.hideToolbar,
        hideToolbar = _ref2$hideToolbar === void 0 ? false : _ref2$hideToolbar,
        Loader = _ref2.loader,
        _ref2$prealoadCompone = _ref2.prealoadComponents,
        prealoadComponents = _ref2$prealoadCompone === void 0 ? true : _ref2$prealoadCompone,
        custom = _ref2.custom,
        children = _ref2.children,
        components = _ref2.components,
        className = _ref2.className,
        hideCancel = _ref2.hideCancel,
        labelCancel = _ref2.labelCancel,
        labelSubmit = _ref2.labelSubmit,
        hideSubmit = _ref2.hideSubmit,
        _ref2$demo = _ref2.demo,
        demo = _ref2$demo === void 0 ? false : _ref2$demo,
        footer = _ref2.footer,
        _ref2$disableButtons = _ref2.disableButtons,
        disableButtons = _ref2$disableButtons === void 0 ? false : _ref2$disableButtons,
        _ref2$disableOnSubmit = _ref2.disableOnSubmit,
        disableOnSubmit = _ref2$disableOnSubmit === void 0 ? true : _ref2$disableOnSubmit,
        _ref2$resetAfterSubmi = _ref2.resetAfterSubmit,
        resetAfterSubmit = _ref2$resetAfterSubmi === void 0 ? true : _ref2$resetAfterSubmi,
        formContext = _ref2.context,
        errors = _ref2.errors,
        rest = _objectWithoutProperties(_ref2, _excluded$g);
      var showErrors = form.showErrors,
        connectors = form.connectors;
      var _useState = React$1.useState(prealoadComponents),
        _useState2 = _slicedToArray(_useState, 2),
        preloading = _useState2[0],
        setPreloading = _useState2[1];
      var _useState3 = React$1.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        stateDisabled = _useState4[0],
        setDisabled = _useState4[1];
      // force re-render of the form
      var _useState5 = React$1.useState(1),
        _useState6 = _slicedToArray(_useState5, 2),
        version = _useState6[0],
        setVersion = _useState6[1];
      var locale = !localeProp || localeProp === 'auto' ? navigator.language : localeProp;
      var _useForm = useForm({
          defaultValues: defaultValues,
          mode: form.validationMode
        }),
        handleSubmit = _useForm.handleSubmit,
        reset = _useForm.reset,
        control = _useForm.control,
        getValues = _useForm.getValues,
        setValue = _useForm.setValue,
        register = _useForm.register;
      React$1.useImperativeHandle(ref, function () {
        return {
          validate: function () {
            var _validate2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", _validate(getValues()));
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            function validate() {
              return _validate2.apply(this, arguments);
            }
            return validate;
          }()
        };
      });
      var MergedComponents = mergeComponents(Fields, components);
      var _useFormFields = useFormFields({
          components: MergedComponents,
          framework: framework,
          form: form,
          children: children,
          onJavascriptError: onJavascriptError,
          defaultValues: defaultValues,
          formContext: formContext,
          locale: locale,
          // TODO refactor this
          //rerenders,
          setValue: setValue
        }),
        formFields = _useFormFields.formFields,
        transformers = _useFormFields.transformers,
        formName = _useFormFields.formName,
        currentFormContext = _useFormFields.currentFormContext,
        hasTransformer = _useFormFields.hasTransformer,
        executeTransformer = _useFormFields.executeTransformer,
        rerenders = _useFormFields.rerenders;
      useStylesheet(formName, form.css);
      var disabled = stateDisabled || disabledProp;
      var _useFormValidation = useFormValidation({
          onError: onError,
          fields: formFields,
          locale: locale,
          onJavascriptError: onJavascriptError
        }),
        _validate = _useFormValidation.validate,
        validationErrors = _useFormValidation.validationErrors,
        setValidationErrors = _useFormValidation.setValidationErrors,
        isValid = _useFormValidation.isValid,
        clearValidation = _useFormValidation.clearValidation;
      if (!framework) {
        lfError('missing "framework" prop');
        return;
      }

      // preload components of the form
      React$1.useEffect(function () {
        if (prealoadComponents) {
          var _components = _uniq(reduceFields(
          //actualFields,
          formFields, function (field, acc) {
            return [].concat(_toConsumableArray(acc), [field.component]);
          }, []));
          lfLog('Preloading components: ' + _components.join(', '));
          var loaders = _components.map(function (component) {
            if (MergedComponents[component] && MergedComponents[component][framework] && _isFunction(MergedComponents[component][framework].preload)) {
              return MergedComponents[component][framework].preload();
            }
          }).filter(Boolean);
          // if preloader exist, also add form
          if (_isFunction(Forms[framework].preload)) {
            loaders.push(Forms[framework].preload());
          }
          // when everything is loaded (including the form)
          Promise.all(loaders).then(function () {
            return setPreloading(false);
          }).catch(function (e) {
            lfError('loading component', e);
            throw e;
          });
        }
      }, []);
      var onHandleSubmit = React$1.useCallback( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
          var validationResult, idx, responses, connector, proxyFetch, response;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _validate(data);
              case 2:
                validationResult = _context2.sent;
                if (!validationResult) {
                  _context2.next = 5;
                  break;
                }
                return _context2.abrupt("return");
              case 5:
                if (!(Array.isArray(connectors) && connectors.length !== 0)) {
                  _context2.next = 37;
                  break;
                }
                // call onSubmit immediately
                onSubmit(data);
                // disable if needed
                if (disableOnSubmit) {
                  setDisabled(true);
                }
                // loop over connectors
                responses = [];
                idx = 0;
              case 10:
                if (!(idx < connectors.length)) {
                  _context2.next = 32;
                  break;
                }
                connector = connectors[idx];
                proxyFetch = ProxyFetch(connector.options); // wrap fetch
                _context2.prev = 13;
                _context2.next = 16;
                return Connectors[connector.name]({
                  data: data,
                  options: connector.options,
                  fetch: proxyFetch,
                  fields: reduceFields(formFields, function (field, acc) {
                    return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, field.name, field.component));
                  }, {})
                });
              case 16:
                response = _context2.sent;
                if (!(response.status >= 400)) {
                  _context2.next = 21;
                  break;
                }
                if (disableOnSubmit) {
                  setDisabled(false);
                }
                onSubmitError(response);
                return _context2.abrupt("return");
              case 21:
                responses.push(response);
                _context2.next = 29;
                break;
              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](13);
                // if failed call, return the erro, stop the chain and re-enable the form
                if (disableOnSubmit) {
                  setDisabled(false);
                }
                onSubmitError(_context2.t0);
                return _context2.abrupt("return");
              case 29:
                idx++;
                _context2.next = 10;
                break;
              case 32:
                // re-enable and reset if needed
                if (disableOnSubmit) {
                  setDisabled(false);
                }
                if (resetAfterSubmit) {
                  reset(defaultValues);
                  setVersion(function (version) {
                    return version + 1;
                  });
                }
                // finally the callback
                onSubmitSuccess(responses.length === 1 ? responses[0] : responses);
                _context2.next = 39;
                break;
              case 37:
                setValidationErrors(null);
                onSubmit(data);
              case 39:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[13, 24]]);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }(), [onSubmit, onSubmitSuccess, formFields]);
      var handleReset = React$1.useCallback(function () {
        setValidationErrors(null);
        reset(defaultValues);
        // not proud of this
        setVersion(function (version) {
          return version + 1;
        });
        onReset();
      }, [defaultValues, reset, onReset]);
      var handleBlur = React$1.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _validationErrors;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(form.validationMode === 'onBlur' || form.validationMode === 'all')) {
                _context3.next = 5;
                break;
              }
              _context3.next = 3;
              return _validate(getValues());
            case 3:
              _validationErrors = _context3.sent;
              onError(_validationErrors);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      })), [onBlur]);
      var handleChange = React$1.useCallback( /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(value, fieldName) {
          var _validationErrors2;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                // set the value in internal state
                setValue(fieldName, value);

                // reset the validation error for that field
                if (!_isEmpty(fieldName)) {
                  clearValidation(fieldName);
                }
                // if validation on change, then trigger it
                if (!(form.validationMode === 'onChange' || form.validationMode === 'all')) {
                  _context4.next = 7;
                  break;
                }
                _context4.next = 5;
                return _validate(getValues());
              case 5:
                _validationErrors2 = _context4.sent;
                onError(_validationErrors2);
              case 7:
                if (_isEmpty(transformers === null || transformers === void 0 ? void 0 : transformers.onRender)) {
                  _context4.next = 10;
                  break;
                }
                _context4.next = 10;
                return executeTransformer(transformers.onRender, getValues());
              case 10:
                if (!hasTransformer(fieldName)) {
                  _context4.next = 13;
                  break;
                }
                _context4.next = 13;
                return executeTransformer(transformers.onChange[fieldName], getValues());
              case 13:
                // propagate onChange values
                onChange(getValues());
              case 14:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x2, _x3) {
          return _ref5.apply(this, arguments);
        };
      }(), [onChange, formFields, transformers]);
      var handleEnter = React$1.useCallback(function () {
        handleSubmit(onHandleSubmit)();
        onEnter();
      }, [handleSubmit, onEnter, onHandleSubmit]);
      if (debug) {
        console.log('[LetsForm] Validation', errors);
      }
      var Form = Forms[framework];
      var Wrapper = wrapper;
      var GroupWrapper = groupWrapper;
      var BottomView = bottomView;
      var PlaceholderWrapper = placeholderWrapper;
      if (preloading) {
        return Loader ? /*#__PURE__*/React$1.createElement(Loader, null) : /*#__PURE__*/React$1.createElement("div", null, "Loading...");
      }
      if (plaintext) {
        return /*#__PURE__*/React$1.createElement(PlaintextForm, {
          fields: formFields,
          locale: locale,
          framework: framework,
          currentValues: getValues()
        });
      }
      // get errors from state or from props (precedence)
      var formErrors = !_isEmpty(errors) ? errors : validationErrors;
      if (debug) {
        console.log("[LetsForm] Render form (".concat(form.name, ")"));
      }
      return /*#__PURE__*/React$1.createElement(FormContext.Provider, {
        value: currentFormContext
      }, /*#__PURE__*/React$1.createElement("div", {
        className: classNames('lf-lets-form', {
          'lf-lets-form-edit-mode': demo
        }, className)
      }, formErrors && showErrors === 'groupedTop' && /*#__PURE__*/React$1.createElement(ValidationErrors, {
        className: "top",
        locale: locale,
        errors: formErrors
      }), /*#__PURE__*/React$1.createElement(React$1.Suspense, {
        fallback: Loader ? /*#__PURE__*/React$1.createElement(Loader, null) : /*#__PURE__*/React$1.createElement("div", null, "Loading...")
      }, /*#__PURE__*/React$1.createElement(Form, _extends({
        key: "lf_".concat(version),
        onSubmit: handleSubmit(onHandleSubmit),
        onBlur: handleBlur,
        name: formName,
        defaultValues: defaultValues,
        onlyFields: onlyFields,
        hideToolbar: hideToolbar,
        onReset: handleReset,
        disabled: disabled || disableButtons,
        disabledSubmit: form.disableSubmitOnError && !isValid,
        readOnly: readOnly,
        plaintext: plaintext,
        locale: locale
      }, _omit(form, 'id', 'fields', 'version'), {
        labelSubmit: i18n((_form$labelSubmit = form.labelSubmit) !== null && _form$labelSubmit !== void 0 ? _form$labelSubmit : labelSubmit, locale) || 'Submit',
        labelCancel: i18n((_form$labelCancel = form.labelCancel) !== null && _form$labelCancel !== void 0 ? _form$labelCancel : labelCancel, locale) || 'Reset',
        hideCancel: hideCancel,
        hideSubmit: hideSubmit,
        custom: custom
      }, rest), renderFields({
        Wrapper: Wrapper,
        GroupWrapper: GroupWrapper,
        PlaceholderWrapper: PlaceholderWrapper,
        BottomView: BottomView,
        onChange: handleChange,
        onEnter: handleEnter,
        fields: formFields,
        // take from state
        control: control,
        framework: framework,
        getValues: getValues,
        setValue: setValue,
        register: register,
        debug: debug,
        errors: formErrors,
        disabled: disabled || form.disabled,
        readOnly: readOnly || form.readOnly,
        plaintext: plaintext || form.plaintext,
        showErrors: showErrors,
        locale: locale,
        onJavascriptError: onJavascriptError,
        Components: MergedComponents,
        rerenders: rerenders.current,
        prependView: PlaceholderWrapper && /*#__PURE__*/React$1.createElement(PlaceholderWrapper, {
          key: "wrapper_top_form_field",
          nextField: formFields && formFields.length ? formFields[0] : null
        }),
        formName: formName
      }), footer, formErrors && (showErrors === 'groupedBottom' || _isEmpty(showErrors)) && /*#__PURE__*/React$1.createElement(ValidationErrors, {
        className: "bottom",
        locale: locale,
        errors: formErrors
      }))), demo && /*#__PURE__*/React$1.createElement("div", {
        className: "label-test-buttons"
      }, "Test buttons")));
    };
    var BaseFormGenerator = /*#__PURE__*/React$1.forwardRef(BaseFormGeneratorWithRef);
    var FormGenerator = /*#__PURE__*/React$1.memo(BaseFormGenerator, function (prevProps, nextProps) {
      {
        var _nextProps$form, _nextProps$form2;
        console.log("[LetsForm] Form generator ".concat((_nextProps$form = nextProps.form) !== null && _nextProps$form !== void 0 && _nextProps$form.name ? '(' + ((_nextProps$form2 = nextProps.form) === null || _nextProps$form2 === void 0 ? void 0 : _nextProps$form2.name) + ")" : '', " re-render: ") + ' framework=' + (prevProps.framework === nextProps.framework) + ' onChange=' + (prevProps.onChange === nextProps.onChange) + ' wrapper=' + (prevProps.wrapper === nextProps.wrapper) + ' form=' + (prevProps.form === nextProps.form) + ' locale=' + (prevProps.locale === nextProps.locale) + ' plaintext=' + (prevProps.plaintext === nextProps.plaintext) + ' disabled=' + (prevProps.disabled === nextProps.disabled) + ' children=' + (prevProps.children === nextProps.children) + ' custom=' + (prevProps.custom === nextProps.custom) + ' context=' + (prevProps.context === nextProps.context) + ' disableButtons=' + (prevProps.disableButtons === nextProps.disableButtons));
      }
      var isEqual = prevProps.framework === nextProps.framework && prevProps.onChange === nextProps.onChange && prevProps.wrapper === nextProps.wrapper && prevProps.form === nextProps.form && prevProps.locale === nextProps.locale && prevProps.plaintext === nextProps.plaintext && prevProps.disabled === nextProps.disabled && prevProps.children === nextProps.children && prevProps.custom === nextProps.custom && prevProps.context === nextProps.context && prevProps.disableButtons === nextProps.disableButtons;
      console.log("Is re-rendering? ".concat(!isEqual));
      return isEqual;
    });
    FormGenerator.displayName = 'LetsForm';
    return FormGenerator;
  };

  var _excluded$f = ["onChange"];

  /**
   * wrapOnChange
   * Wrap the component into HOC which normalize the onChange method, first argument the value,
   * second argument the field name. This makes the onChange function of the the form generator
   * referential stable
   */
  var wrapOnChange = function wrapOnChange(Component) {
    return function (_ref) {
      var onChange = _ref.onChange,
        rest = _objectWithoutProperties(_ref, _excluded$f);
      var handleChange = React$1.useCallback(function (value) {
        return onChange(value, rest.name);
      }, [onChange]);
      return /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
        onChange: handleChange
      }));
    };
  };
  function lazyPreload(factory) {
    var ReactLazyComponent = /*#__PURE__*/React$1.lazy(factory);
    var PreloadedComponent;
    var factoryPromise;
    var Component = /*#__PURE__*/React$1.forwardRef(function LazyWithPreload(props, ref) {
      var _PreloadedComponent;
      // Once one of these is chosen, we must ensure that it continues to be
      // used for all subsequent renders, otherwise it can cause the
      // underlying component to be unmounted and remounted.
      var ComponentToRender = React$1.useRef((_PreloadedComponent = PreloadedComponent) !== null && _PreloadedComponent !== void 0 ? _PreloadedComponent : wrapOnChange(ReactLazyComponent));
      return /*#__PURE__*/React$1.createElement(ComponentToRender.current, Object.assign(ref ? {
        ref: ref
      } : {}, props));
    });
    var LazyWithPreload = Component;
    LazyWithPreload.preload = function () {
      if (!factoryPromise) {
        factoryPromise = factory().then(function (module) {
          PreloadedComponent = wrapOnChange(module.default);
          return PreloadedComponent;
        }, function (e) {
          console.log('Error preloading', e);
        });
      }
      return factoryPromise;
    };
    return LazyWithPreload;
  }

  var _excluded$e = ["framework", "children"];
  var Fields = {
    'input-text': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$k; });
      })
    },
    'input-number': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$j; });
      })
    },
    'checkbox': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$i; });
      })
    },
    'textarea': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$h; });
      })
    },
    'three-columns': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$g; });
      })
    },
    'columns': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$f; });
      })
    },
    'two-columns': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$e; });
      })
    },
    'group': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$d; });
      })
    },
    'divider': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$l; });
      })
    },
    'react-view': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$c; });
      })
    },
    'placeholder': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$b; });
      })
    },
    'select': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$a; });
      })
    },
    'date': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$9; });
      })
    },
    'datetime': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$8; });
      })
    },
    'time': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$7; });
      })
    },
    'array': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$6; });
      })
    },
    'placeholder-image': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$5; });
      })
    },
    'button': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$4; });
      })
    },
    'upload': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$3; });
      })
    },
    'hidden': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$2; });
      })
    },
    'currency': {
      'react': lazyPreload(function () {
        return Promise.resolve().then(function () { return index$1; });
      })
    }
    // Removed, doesn't work
    /*'toggle': {
      'react': Toggle
    }*/
  };

  var Forms = {
    'react': lazyPreload(function () {
      return Promise.resolve().then(function () { return index; });
    })
  };
  var FormGenerator = GenerateGenerator({
    Fields: Fields,
    Forms: Forms
  });
  var LetsForm = /*#__PURE__*/React$1.forwardRef(function (_ref, ref) {
    _ref.framework;
      var children = _ref.children,
      rest = _objectWithoutProperties(_ref, _excluded$e);
    var refForm = React$1.useRef();
    React$1.useImperativeHandle(ref, function () {
      return {
        validate: function validate() {
          return refForm.current.validate();
        }
      };
    });
    return /*#__PURE__*/React$1.createElement(FormGenerator, _extends({
      ref: refForm,
      framework: "react"
    }, rest), children);
  });

  var _excluded$d = ["name", "label", "lfLocale", "hint", "value", "onChange", "onBlur", "error", "className", "disabled", "readOnly", "required", "submitOnEnter", "size", "width", "fullWidth", "placeholder", "autocomplete", "inputType", "inputMode", "component", "lfOnEnter"];
  var ReactGenericInput = function ReactGenericInput(_ref) {
    var name = _ref.name,
      label = _ref.label,
      lfLocale = _ref.lfLocale,
      hint = _ref.hint,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      error = _ref.error,
      className = _ref.className,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      required = _ref.required,
      _ref$submitOnEnter = _ref.submitOnEnter,
      submitOnEnter = _ref$submitOnEnter === void 0 ? false : _ref$submitOnEnter;
      _ref.size;
      var width = _ref.width,
      fullWidth = _ref.fullWidth,
      placeholder = _ref.placeholder,
      autocomplete = _ref.autocomplete,
      inputType = _ref.inputType,
      inputMode = _ref.inputMode,
      component = _ref.component,
      _ref$lfOnEnter = _ref.lfOnEnter,
      lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
      rest = _objectWithoutProperties(_ref, _excluded$d);
    var hasError = error && _isString(error);
    var handleKeyUp = React$1.useCallback(function (e) {
      return e.keyCode === 13 && lfOnEnter();
    }, [lfOnEnter]);
    return /*#__PURE__*/React$1.createElement("div", makeClassName(component, name, 'lf-form-react-control-group', className), /*#__PURE__*/React$1.createElement("label", {
      for: name
    }, label, required && label && /*#__PURE__*/React$1.createElement(RequiredIcon, null)), /*#__PURE__*/React$1.createElement("input", _extends({
      type: inputType,
      lang: lfLocale,
      id: name,
      defaultValue: value,
      onChange: onChange,
      onBlur: onBlur,
      onKeyUp: submitOnEnter ? handleKeyUp : undefined,
      placeholder: placeholder,
      style: makeWidthStyle(fullWidth, width),
      autoComplete: autocomplete,
      inputMode: inputMode,
      disabled: disabled,
      readOnly: readOnly
    }, passRest(rest))), hint && !hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-message"
    }, hint), hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-error-message"
    }, error));
  };

  var css_248z$5 = ".lf-form-react .lf-control-input-text input[type=color] {\n  min-width: 60px;\n}";
  styleInject(css_248z$5);

  var _excluded$c = ["onChange"];
  var TextInput = I18N(function (_ref) {
    var onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, _excluded$c);
    var handleChange = React$1.useCallback(function (e) {
      return onChange(e.target.value);
    }, [onChange]);
    return /*#__PURE__*/React$1.createElement(ReactGenericInput, _extends({
      component: "input-text",
      onChange: handleChange
    }, rest));
  }, ['label', 'hint', 'placeholder']);
  lfLog('Loaded React.InputText');

  var index$k = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TextInput
  });

  var _excluded$b = ["onChange", "min", "max", "step"];
  var hasDecimals = function hasDecimals(f) {
    return _isString(f) && (f.includes(',') || f.includes('.'));
  };
  var InputNumber = I18N(function (_ref) {
    var onChange = _ref.onChange,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      rest = _objectWithoutProperties(_ref, _excluded$b);
    var handleChange = React$1.useCallback(function (e) {
      var value = e.target.value;
      var parsed;
      if (_isString(value)) {
        if (value === '') {
          // void if the user deleted all chars
          parsed = null;
        } else if (hasDecimals(value)) {
          parsed = parseFloat(value);
        } else {
          parsed = parseInt(value, 10);
        }
        if (!isNaN(parsed)) {
          onChange(parsed);
        }
      }
    }, [onChange]);
    return /*#__PURE__*/React$1.createElement(ReactGenericInput, _extends({
      inputType: "number",
      component: "input-number",
      min: min,
      max: max,
      step: step,
      onChange: handleChange
    }, rest));
  }, ['label', 'hint', 'placeholder']);
  lfLog('Loaded React.InputNumber');

  var index$j = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: InputNumber
  });

  var _excluded$a = ["name", "label", "lfLocale", "className", "inputType", "hint", "value", "defaultValue", "onChange", "onBlur", "error", "disabled", "readOnly", "required"];
  var ReactGenericCheckbox = function ReactGenericCheckbox(_ref) {
    var name = _ref.name,
      label = _ref.label;
      _ref.lfLocale;
      var className = _ref.className,
      inputType = _ref.inputType,
      hint = _ref.hint,
      value = _ref.value;
      _ref.defaultValue;
      var onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      error = _ref.error,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      required = _ref.required,
      rest = _objectWithoutProperties(_ref, _excluded$a);
    var hasError = error && _isString(error);
    return /*#__PURE__*/React$1.createElement("div", makeClassName('checkbox', name, 'lf-form-react-control-group', className), /*#__PURE__*/React$1.createElement("label", {
      for: name,
      className: "lf-form-react-checkbox"
    }, /*#__PURE__*/React$1.createElement("input", _extends({
      type: inputType,
      id: name,
      onChange: onChange,
      onBlur: onBlur,
      required: error != null,
      disabled: disabled,
      readOnly: readOnly,
      defaultChecked: value
    }, passRest(rest))), " ", label, " ", required && /*#__PURE__*/React$1.createElement(RequiredIcon, null)), hint && !hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-form-message"
    }, hint), hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-error-message"
    }, error));
  };

  var _excluded$9 = ["onChange"];
  var Checkbox = I18N(function (_ref) {
    var onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, _excluded$9);
    var handleChange = React$1.useCallback(function (e) {
      onChange(e.target.checked);
    }, [onChange]);
    return /*#__PURE__*/React$1.createElement(ReactGenericCheckbox, _extends({
      inputType: "checkbox",
      onChange: handleChange
    }, rest));
  }, ['hint', 'label']);
  lfLog('Loaded React.Checkbox');

  var index$i = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Checkbox
  });

  var _excluded$8 = ["name", "label", "hint", "value", "onChange", "onBlur", "error", "disabled", "readOnly", "required", "size", "rows", "width", "fullWidth", "className"];
  var Textarea = I18N(function (_ref) {
    var name = _ref.name,
      label = _ref.label,
      hint = _ref.hint,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      error = _ref.error,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      required = _ref.required,
      size = _ref.size,
      rows = _ref.rows,
      width = _ref.width,
      fullWidth = _ref.fullWidth,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$8);
    var hasError = error && _isString(error);
    var handleChange = React$1.useCallback(function (e) {
      return onChange(e.target.value);
    }, [onChange]);
    return /*#__PURE__*/React$1.createElement("div", makeClassName('textarea', name, 'lf-form-react-control-group', className), /*#__PURE__*/React$1.createElement("label", {
      for: name
    }, label, required && /*#__PURE__*/React$1.createElement(RequiredIcon, null)), /*#__PURE__*/React$1.createElement("textarea", _extends({
      type: "text",
      id: name,
      rows: rows,
      onChange: handleChange,
      onBlur: onBlur,
      className: size && "lf-form-react-input-".concat(size),
      style: makeWidthStyle(fullWidth, width),
      required: error != null,
      disabled: disabled,
      readOnly: readOnly
    }, passRest(rest)), value), hint && !hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-message"
    }, hint), hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-error-message"
    }, error));
  }, ['label', 'hint', 'placeholder']);
  lfLog('Loaded React.Textarea');

  var index$h = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Textarea
  });

  lfLog('Loaded React.ThreeColumns');

  var index$g = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ThreeColumns
  });

  lfLog('Loaded RSuite5.Columns');

  var index$f = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Columns
  });

  lfLog('Loaded React.TwoColumns');

  var index$e = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TwoColumns
  });

  lfLog('Loaded React.Group');

  var index$d = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Group
  });

  lfLog('Loaded React.ReactView');

  var index$c = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ReactView
  });

  var PlaceholderReact = I18N(function (_ref) {
    var name = _ref.name,
      label = _ref.label,
      hint = _ref.hint,
      text = _ref.text,
      className = _ref.className;
    return /*#__PURE__*/React$1.createElement("div", makeClassName('placeholder', name, 'lf-form-react-control-group', className), label && /*#__PURE__*/React$1.createElement("label", {
      for: name
    }, label), /*#__PURE__*/React$1.createElement(Placeholder, {
      text: text
    }), hint && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-message"
    }, hint));
  }, ['label', 'hint', 'text']);
  lfLog('Loaded React.Placeholder');

  var index$b = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: PlaceholderReact
  });

  var _excluded$7 = ["name", "lfLocale", "label", "hint", "value", "onChange", "onBlur", "error", "disabled", "placeholder", "readOnly", "required", "size", "width", "fullWidth", "options", "filterValue", "filterKey", "className"];
  var Select = I18N(function (_ref) {
    var _filterOptions;
    var name = _ref.name;
      _ref.lfLocale;
      var label = _ref.label,
      hint = _ref.hint,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      error = _ref.error,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      required = _ref.required;
      _ref.size;
      var width = _ref.width,
      fullWidth = _ref.fullWidth,
      options = _ref.options,
      filterValue = _ref.filterValue,
      filterKey = _ref.filterKey,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$7);
    var hasError = error && _isString(error);
    var handleChange = React$1.useCallback(function (e) {
      return onChange(e.target.value === '' ? null : e.target.value);
    }, [onChange]);
    var opts = (_filterOptions = filterOptions(options, filterValue, filterKey)) !== null && _filterOptions !== void 0 ? _filterOptions : [];
    if (placeholder) {
      opts = [{
        value: '',
        label: placeholder
      }].concat(_toConsumableArray(opts));
    }
    return /*#__PURE__*/React$1.createElement("div", makeClassName('select', name, 'lf-form-react-control-group', className), /*#__PURE__*/React$1.createElement("label", {
      for: name
    }, label, required && /*#__PURE__*/React$1.createElement(RequiredIcon, null)), /*#__PURE__*/React$1.createElement("select", _extends({
      id: name,
      value: value,
      onChange: handleChange,
      onBlur: onBlur,
      placeholder: placeholder,
      style: makeWidthStyle(fullWidth, width),
      disabled: disabled,
      readOnly: readOnly
    }, passRest(rest)), opts.map(function (option) {
      return /*#__PURE__*/React$1.createElement("option", {
        key: option.value,
        value: option.value
      }, option.label);
    })), hint && !hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-message"
    }, hint), hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-error-message"
    }, error));
  }, ['label', 'hint', 'placeholder'], {
    options: i18nOptions
  });
  lfLog('Loaded React.Select');

  var index$a = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Select
  });

  var _excluded$6 = ["onChange", "value"];
  var DateInput = I18N(function (_ref) {
    var onChange = _ref.onChange,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, _excluded$6);
    var handleChange = React$1.useCallback(function (e) {
      return onChange(e.target.value);
    }, [onChange]);
    var currentDate = value;
    if (isValidDate(value)) {
      // only take 2023-11-12
      currentDate = value.toISOString().split('T')[0];
    }
    return /*#__PURE__*/React$1.createElement(ReactGenericInput, _extends({
      inputType: "date",
      component: "date",
      value: currentDate,
      onChange: handleChange
    }, rest));
  }, ['label', 'hint', 'placeholder']);
  lfLog('Loaded React.Date');

  var index$9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: DateInput
  });

  var _excluded$5 = ["onChange", "value"];
  var DateTime = I18N(function (_ref) {
    var onChange = _ref.onChange,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, _excluded$5);
    var handleChange = React$1.useCallback(function (e) {
      onChange(e.target.value);
    }, [onChange]);
    var currentDate = value;
    if (isValidDate(value)) {
      // only keep iso up to the minutes digits
      var match = value.toISOString().match(/(.*?T[0-9]{1,2}:[0-9]{1,2})/gm);
      if (match != null) {
        currentDate = match[0];
      }
    }
    return /*#__PURE__*/React$1.createElement(ReactGenericInput, _extends({
      inputType: "datetime-local",
      component: "datetime",
      value: currentDate,
      onChange: handleChange
    }, rest));
  }, ['label', 'hint', 'placeholder']);
  lfLog('Loaded React.DateTime');

  var index$8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: DateTime
  });

  var _excluded$4 = ["onChange", "value"];
  var Time = I18N(function (_ref) {
    var onChange = _ref.onChange,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, _excluded$4);
    var handleChange = React$1.useCallback(function (e) {
      onChange(e.target.value);
    }, [onChange]);
    var currentDate = value;
    if (isValidDate(value)) {
      // only keep iso up to the minutes digits
      var match = value.toISOString().match(/(.*?T[0-9]{1,2}:[0-9]{1,2})/gm);
      if (match != null) {
        currentDate = match[0];
      }
    }
    return /*#__PURE__*/React$1.createElement(ReactGenericInput, _extends({
      inputType: "time",
      value: currentDate,
      onChange: handleChange
    }, rest));
  }, ['label', 'hint', 'placeholder']);
  lfLog('Loaded React.Time');

  var index$7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Time
  });

  var css_248z$4 = ".lf-form-react .lf-control-common-array-item {\n  padding-bottom: 5px;\n}\n.lf-form-react .lf-control-common-array-item .lf-control-two-columns:last-child {\n  margin-bottom: 0px;\n}\n.lf-form-react .lf-control-common-array-item .lf-control-three-columns:last-child {\n  margin-bottom: 0px;\n}";
  styleInject(css_248z$4);

  var _excluded$3 = ["hint", "required", "tooltip", "name", "label", "className"];
  var ListArrayReact = I18N(function (_ref) {
    var _rest$error, _rest$error2, _rest$error3;
    var hint = _ref.hint,
      required = _ref.required;
      _ref.tooltip;
      var name = _ref.name,
      label = _ref.label,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$3);
    var hasError = rest.error && _isString((_rest$error = rest.error) === null || _rest$error === void 0 ? void 0 : _rest$error.errorMessage) && ((_rest$error2 = rest.error) === null || _rest$error2 === void 0 ? void 0 : _rest$error2.errorMessage);
    return /*#__PURE__*/React$1.createElement("div", makeClassName('array', name, 'lf-form-react-control-group', className), /*#__PURE__*/React$1.createElement("label", {
      for: name
    }, label, required && /*#__PURE__*/React$1.createElement(RequiredIcon, null)), /*#__PURE__*/React$1.createElement(ListArray, _extends({
      LetsFormComponent: LetsForm
    }, rest)), hint && !hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-message"
    }, hint), hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-error-message"
    }, (_rest$error3 = rest.error) === null || _rest$error3 === void 0 ? void 0 : _rest$error3.errorMessage));
  }, ['label', 'hint']);
  lfLog('Loaded React.Array');

  var index$6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ListArrayReact
  });

  lfLog('Loaded React.PlaceholderImage');

  var index$5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: PlaceholderImage
  });

  var css_248z$3 = ".lf-form-react .lf-control-button {\n  min-height: 20px;\n}\n.lf-form-react .lf-control-button .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n  margin-top: -2px;\n  margin-right: 5px;\n}\n.lf-form-react .lf-control-button .btn-lg .lf-icon {\n  max-width: 24px;\n  max-height: 24px;\n}\n.lf-form-react .lf-control-button .btn-sm .lf-icon {\n  max-width: 16px;\n  max-height: 16px;\n}";
  styleInject(css_248z$3);

  var _excluded$2 = ["label", "icon", "hint"];
  var ReactButton = function ReactButton(_ref) {
    var label = _ref.label,
      icon = _ref.icon,
      hint = _ref.hint,
      rest = _objectWithoutProperties(_ref, _excluded$2);
    var inner;
    if (!_isEmpty(label) && !_isEmpty(icon)) {
      inner = /*#__PURE__*/React$1.createElement("button", rest, /*#__PURE__*/React$1.createElement("img", {
        className: "lf-icon",
        src: icon
      }), label);
    } else if (!_isEmpty(label) && _isEmpty(icon)) {
      inner = /*#__PURE__*/React$1.createElement("button", rest, label);
    } else if (_isEmpty(label) && !_isEmpty(icon)) {
      inner = /*#__PURE__*/React$1.createElement("button", rest, /*#__PURE__*/React$1.createElement("img", {
        className: "lf-icon",
        src: icon
      }));
    } else {
      inner = /*#__PURE__*/React$1.createElement(React$1.Fragment, null);
    }
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, inner, hint && /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("span", {
      className: "lf-form-react-message"
    }, hint)));
  };
  var BiStateButton = I18N(MakeButton(ReactButton, function (props) {
    return {
      className: 'lf-form-react-primary-button'
    };
  }, function (props) {
    return {
      className: 'lf-form-react-secondary-button'
    };
  }, function (props) {
    return {
      className: 'lf-form-react-primary-button',
      onClick: function onClick() {
        return window.location = props.href;
      }
    };
  }), ['labelOn', 'labelOff', 'labelLink', 'hint']);
  lfLog('Loaded React.Button');
  var Button = BiStateButton;

  var index$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Button
  });

  function formatBytes(bytes) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    if (!+bytes) return '0 Bytes';
    var k = 1024;
    var dm = decimals < 0 ? 0 : decimals;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return "".concat(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), " ").concat(sizes[i]);
  }

  var css_248z$2 = ".lf-left-dots-with-fixed-right {\n  display: flex;\n  width: inherit;\n  overflow: hidden;\n}\n.lf-left-dots-with-fixed-right .lf-left-dots {\n  flex: 1 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n.lf-left-dots-with-fixed-right .lf-right-fixed {\n  flex: 0 0;\n  white-space: nowrap;\n}";
  styleInject(css_248z$2);

  /**
   * LetfDotsWithFixedRight
   * Layout component to have a fixed view on the right and a expandable view on the left
   * which takes all remaining space and show ellipsis if the text overflows
   * @param {*} param0
   * @returns
   */
  var LetfDotsWithFixedRight = function LetfDotsWithFixedRight(_ref) {
    var left = _ref.left,
      right = _ref.right;
    return /*#__PURE__*/React$1.createElement("div", {
      className: "lf-left-dots-with-fixed-right"
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "lf-left-dots"
    }, left), /*#__PURE__*/React$1.createElement("div", {
      className: "lf-right-fixed"
    }, right));
  };

  var css_248z$1 = ".lf-control-upload .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n}\n.lf-control-upload .MuiButton-sizeLarge .lf-icon {\n  max-width: 22px;\n  max-height: 22px;\n}\n.lf-control-upload .MuiButton-sizeSmall .lf-icon {\n  max-width: 18px;\n  max-height: 18px;\n}\n.lf-control-upload .lf-upload-button-layout {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n.lf-control-upload .lf-upload-button-layout .lf-upload-button-left {\n  order: 0;\n  flex: 0 0 auto;\n  align-self: auto;\n}\n.lf-control-upload .lf-upload-button-layout .lf-upload-button-right {\n  order: 0;\n  flex: 1 0;\n  overflow: hidden;\n  align-self: auto;\n  margin-left: var(--lf-field-margin);\n}\n.lf-control-upload .lf-upload-file-list {\n  margin-top: 10px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n}\n.lf-control-upload .lf-upload-file-list .lf-upload-file-item {\n  padding: 4px 0px;\n}\n.lf-control-upload .lf-upload-file-list .lf-upload-file-item:hover {\n  background-color: #eeeeee;\n}\n.lf-control-upload .lf-upload-file-item {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n.lf-control-upload .lf-upload-file-item .lf-attachment-icon {\n  flex: 0 0;\n  align-self: auto;\n  margin-right: 5px;\n}\n.lf-control-upload .lf-upload-file-item .lf-clear-button {\n  flex: 0 0;\n  align-self: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-size: 1px;\n}\n.lf-control-upload .lf-upload-file-item .lf-name {\n  flex: 1 0;\n  align-self: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lf-control-upload .lf-upload-file-item .lf-size {\n  flex: 0 0 auto;\n  align-self: auto;\n  margin-left: 5px;\n  color: #888888;\n}\n.lf-control-upload .lf-size {\n  color: #888888;\n}";
  styleInject(css_248z$1);

  var IconAttachment = function IconAttachment(_ref) {
    var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color;
    return /*#__PURE__*/React$1.createElement("svg", {
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      viewBox: "-8 0 32 32",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React$1.createElement("g", {
      id: "Page-1",
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React$1.createElement("g", {
      id: "Icon-Set",
      transform: "translate(-212.000000, -151.000000)",
      fill: color
    }, /*#__PURE__*/React$1.createElement("path", {
      d: "M226,155 L226,175 C226,178.313 223.313,181 220,181 C216.687,181 214,178.313 214,175 L214,157 C214,154.791 215.791,153 218,153 C220.209,153 222,154.791 222,157 L222,175 C222,176.104 221.104,177 220,177 C218.896,177 218,176.104 218,175 L218,159 L216,159 L216,175 C216,177.209 217.791,179 220,179 C222.209,179 224,177.209 224,175 L224,157 C224,153.687 221.313,151 218,151 C214.687,151 212,153.687 212,157 L212,176 C212.493,179.945 215.921,183 220,183 C224.079,183 227.507,179.945 228,176 L228,155 L226,155",
      id: "attachment"
    }))));
  };

  var FileItem = function FileItem(_ref) {
    var file = _ref.file,
      _ref$onRemove = _ref.onRemove,
      onRemove = _ref$onRemove === void 0 ? function () {} : _ref$onRemove;
    var handleClick = React$1.useCallback(function (e) {
      e.preventDefault();
      onRemove(file);
    }, [onRemove, file]);
    return /*#__PURE__*/React$1.createElement("div", {
      className: "lf-upload-file-item"
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "lf-attachment-icon"
    }, /*#__PURE__*/React$1.createElement(IconAttachment, {
      width: 16,
      height: 16,
      color: "#666666"
    })), /*#__PURE__*/React$1.createElement("div", {
      className: "lf-name"
    }, file.name), /*#__PURE__*/React$1.createElement("div", {
      className: "lf-size"
    }, formatBytes(file.size)), /*#__PURE__*/React$1.createElement("a", {
      className: "lf-clear-button",
      href: "#",
      onClick: handleClick
    }, /*#__PURE__*/React$1.createElement(CrossCirle, {
      color: "#666666",
      width: 16,
      height: 16
    })));
  };

  var Upload = I18N(function (_ref) {
    var label = _ref.label,
      uploadButtonLabel = _ref.uploadButtonLabel,
      name = _ref.name,
      accept = _ref.accept,
      hint = _ref.hint,
      error = _ref.error,
      onChange = _ref.onChange,
      multiple = _ref.multiple,
      value = _ref.value,
      required = _ref.required,
      className = _ref.className;
    var uploadButtonId = React$1.useId();
    var _useState = React$1.useState(multiple && _isArray(value) || !multiple && _isObject(value) ? value : undefined),
      _useState2 = _slicedToArray(_useState, 2),
      currentFile = _useState2[0],
      setCurrentFile = _useState2[1];
    var hasError = error && _isString(error);
    var handleClear = React$1.useCallback(function (e) {
      e.preventDefault();
      setCurrentFile(null);
      onChange(null);
    }, [onChange]);
    var handleRemove = React$1.useCallback(function (fileToRemove) {
      var newCurrentFile = currentFile.filter(function (file) {
        return file !== fileToRemove;
      });
      setCurrentFile(newCurrentFile);
      onChange(newCurrentFile);
    }, [currentFile, onChange]);
    var handleChange = React$1.useCallback(function (e) {
      if (e.target.files && e.target.files.length > 0) {
        if (multiple) {
          var newCurrentFile = currentFile ? _toConsumableArray(currentFile) : [];
          var idx;
          for (idx = 0; idx < e.target.files.length; idx++) {
            newCurrentFile.push(e.target.files[idx]);
          }
          setCurrentFile(newCurrentFile);
          onChange(newCurrentFile);
        } else {
          setCurrentFile(e.target.files[0]);
          onChange(e.target.files[0]);
        }
      } else {
        onChange(null);
      }
    }, [onChange, multiple, currentFile]);
    return /*#__PURE__*/React$1.createElement("div", makeClassName('upload', name, 'lf-form-react-control-group', className), label && /*#__PURE__*/React$1.createElement("label", {
      for: name
    }, label, required && /*#__PURE__*/React$1.createElement(RequiredIcon, null)), /*#__PURE__*/React$1.createElement("div", {
      className: "lf-upload-button-layout"
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "lf-upload-button-left"
    }, /*#__PURE__*/React$1.createElement("label", {
      className: "lf-form-react-primary-button",
      for: uploadButtonId
    }, uploadButtonLabel || 'Upload'), /*#__PURE__*/React$1.createElement("input", {
      id: uploadButtonId,
      type: "file",
      accept: accept,
      onChange: handleChange,
      multiple: multiple,
      style: {
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1
      }
    })), /*#__PURE__*/React$1.createElement("div", {
      className: "lf-upload-button-right"
    }, !multiple && currentFile && /*#__PURE__*/React$1.createElement(LetfDotsWithFixedRight, {
      left: /*#__PURE__*/React$1.createElement("span", {
        className: "lf-upload-file-name"
      }, currentFile.name),
      right: /*#__PURE__*/React$1.createElement(React$1.Fragment, null, "\xA0", /*#__PURE__*/React$1.createElement("span", {
        className: "lf-size"
      }, formatBytes(currentFile.size)), "\xA0", /*#__PURE__*/React$1.createElement("a", {
        href: "#",
        onClick: handleClear
      }, /*#__PURE__*/React$1.createElement(CrossCirle, {
        color: "#666666",
        yOffset: 2,
        width: 16,
        height: 16
      })))
    }))), hint && !hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-message"
    }, hint), hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-error-message"
    }, error), multiple && currentFile && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-upload-file-list"
    }, currentFile.map(function (file) {
      return /*#__PURE__*/React$1.createElement(FileItem, {
        file: file,
        key: file.name,
        onRemove: handleRemove
      });
    })));
  }, ['label', 'uploadButtonLabel', 'hint']);
  lfLog('Loaded React.Upload');
  var Upload$1 = Upload;

  var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Upload$1
  });

  var Hidden = function Hidden(_ref) {
    var name = _ref.name;
    return /*#__PURE__*/React$1.createElement("div", _extends({}, makeClassName('hidden', name), {
      style: {
        padding: '10px'
      }
    }), "Hidden field: ", /*#__PURE__*/React$1.createElement("em", null, name));
  };
  lfLog('Loaded RSuite5.Hidden');

  var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Hidden
  });

  var formatCurrency = function formatCurrency(value, locale, currency) {
    if (value === null || value === undefined || value === '') {
      return '';
    }
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(value);
  };
  function getDecimalSeparator(locale) {
    var numberWithDecimalSeparator = 1.1;
    return Intl.NumberFormat(locale).formatToParts(numberWithDecimalSeparator).find(function (part) {
      return part.type === 'decimal';
    }).value;
  }
  var parseCurrency = function parseCurrency(str, locale) {
    if (!str) {
      return null;
    }
    var thousandsMarker = getThousandsSeparator(locale);
    var decimalMarker = getDecimalSeparator(locale);
    var toLocalDecimal = str.replace(/[^0-9.,]/g, '') // remove everything but numbers, decimal and comma
    .replaceAll(thousandsMarker, '') // replace thousand marker with void
    .replaceAll(decimalMarker, '.'); // replace decimal marker with .

    var parsed = parseFloat(toLocalDecimal);
    return !isNaN(parsed) ? parsed : null;
  };
  function setCaretPosition(elem, caretPos) {
    if (elem != null) {
      if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.move('character', caretPos);
        range.select();
      } else {
        if (elem.selectionStart) {
          elem.focus();
          elem.setSelectionRange(caretPos, caretPos);
        } else elem.focus();
      }
    }
  }
  var extraCharsUpToCaret = function extraCharsUpToCaret(str, position) {
    return str.slice(0, position).replaceAll(/[0-9]/g, '').length;
  };
  var getThousandsSeparator = function getThousandsSeparator(locale) {
    var _Intl$NumberFormat$fo, _Intl$NumberFormat$fo2;
    return (_Intl$NumberFormat$fo = (_Intl$NumberFormat$fo2 = new Intl.NumberFormat(locale).formatToParts(1000).find(function (part) {
      return part.type === 'group';
    })) === null || _Intl$NumberFormat$fo2 === void 0 ? void 0 : _Intl$NumberFormat$fo2.value) !== null && _Intl$NumberFormat$fo !== void 0 ? _Intl$NumberFormat$fo : '';
  };
  var getExtraLeadingChars = function getExtraLeadingChars(locale, currency) {
    var formatted = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(1);
    if (formatted.includes('1.00')) {
      return formatted.indexOf('1.00');
    } else if (formatted.includes('1,00')) {
      return formatted.indexOf('1,00');
    }
    return 0;
  };

  var _excluded$1 = ["defaultValue", "control", "onChange", "locale", "currency", "fullWidth", "width", "align"];
  var isEvent = function isEvent(obj) {
    return obj === null || obj === void 0 ? void 0 : obj.target;
  };
  var ALLOWED_CHARS = '01234567890,.';
  var CommonCurrency = function CommonCurrency(_ref) {
    var defaultValue = _ref.defaultValue,
      Control = _ref.control,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      locale = _ref.locale,
      currency = _ref.currency,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
      width = _ref.width,
      align = _ref.align,
      rest = _objectWithoutProperties(_ref, _excluded$1);
    var ref = React$1.useRef();
    var refCaret = React$1.useRef();
    var _useState = React$1.useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
    var _useState3 = React$1.useState(formatCurrency(defaultValue, locale, currency)),
      _useState4 = _slicedToArray(_useState3, 2),
      visibileValue = _useState4[0],
      setVisibleValue = _useState4[1];
    var _useState5 = React$1.useState(1),
      _useState6 = _slicedToArray(_useState5, 2),
      generation = _useState6[0],
      setGeneration = _useState6[1];
    React$1.useEffect(function () {
      var _ref$current, _ref$current$querySel;
      var caret = refCaret.current;
      var element = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : (_ref$current$querySel = _ref$current.querySelectorAll('input')) === null || _ref$current$querySel === void 0 ? void 0 : _ref$current$querySel[0];
      if (caret && element) {
        setCaretPosition(element, caret);
        // void the caret update position, otherwise any refresh of the
        // form will steal the focus in favour of the currency box
        refCaret.current = null;
      }
    });
    var handleChange = React$1.useCallback(function () {
      var _e$target$selectionSt;
      // pick right value and events, differs for different frameworks
      var e, value;
      if (isEvent(arguments[0])) {
        e = arguments[0];
        value = e.target.value;
      } else if (arguments.length >= 2 && isEvent(arguments[1])) {
        e = arguments[1];
        value = arguments[0];
      }
      var caretPosition = (_e$target$selectionSt = e.target.selectionStart) !== null && _e$target$selectionSt !== void 0 ? _e$target$selectionSt : 0;
      var currentValue = parseCurrency(value, locale);
      var newVisibleValue = formatCurrency(currentValue, locale, currency);

      // if the formatted value has already a decimal separator and the user hits
      // the decimal separator, then move the cursor after it
      if (visibileValue && (e.nativeEvent.data === ',' || e.nativeEvent.data === '.') && (visibileValue.indexOf('.') || visibileValue.indexOf(','))) {
        // set position of caret after the decimal separator
        var decimalMarker = getDecimalSeparator(locale);
        refCaret.current = visibileValue.indexOf(decimalMarker) + 1;
        // trigger manual refresh of the component
        setGeneration(function (generation) {
          return generation + 1;
        });
        return;
      }

      // calculate the additional chars (like currency symbol, thousands separator) in the
      // formatted value up to the caret position in both previuos and new formatted value
      // (consider the previous value the caret position is one characted before)
      // also if user hit backspace, the new caret position is one less
      var extraCharsBefore = extraCharsUpToCaret(visibileValue, caretPosition - 1);
      var extraCharsAfter = extraCharsUpToCaret(newVisibleValue, caretPosition + (e.nativeEvent.inputType === 'deleteContentBackward' ? -1 : 0) + (visibileValue === '' ? getExtraLeadingChars(locale, currency) : 0));

      // the difference between the two values, is the number of position the caret should be
      // displaced to keep consistency with what the user is typing, for example starting
      // with a blank value, if the user types "1" if it becomes "$ 1.00", the new caret is not
      // 1 but 1 + 2 (the dollar and the space)
      refCaret.current = caretPosition + extraCharsAfter - extraCharsBefore;

      //console.log('Extra chars for currency', (visibileValue === '' ? getExtraLeadingChars(locale, currency) : 0))
      //console.log(`Extra chars up to caret before (${caretPosition})`, extraCharsBefore)
      //console.log(`Extra chars up to caret after (${caretPosition})`, extraCharsAfter);
      //console.log('New caret position ', refCaret.current);

      // set states, onKeyPress already handles invalid chars, so this alwayas updates
      setValue(currentValue);
      setVisibleValue(newVisibleValue);

      // propagate changed value
      onChange(currentValue);
    }, [visibileValue, currency, locale]);
    var handleKeyPress = React$1.useCallback(function (e) {
      // stop propagation for all chars not valid for any currency, just digits , and .
      if (!ALLOWED_CHARS.includes(String.fromCharCode(e.charCode))) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }, []);

    // redesign formatted value if changes currency and locale
    React$1.useEffect(function () {
      var newVisibleValue = formatCurrency(value, locale, currency);
      setVisibleValue(newVisibleValue);
    }, [currency, locale]);
    return /*#__PURE__*/React$1.createElement("div", {
      ref: ref
    }, /*#__PURE__*/React$1.createElement(Control, _extends({
      value: visibileValue,
      key: "generation_".concat(generation),
      onChange: handleChange,
      style: makeWidthStyle(fullWidth, width, _defineProperty$1({}, align ? 'text-align' : undefined, align)),
      onKeyPress: handleKeyPress
    }, rest)));
  };

  var _excluded = ["name", "label", "lfLocale", "hint", "value", "error", "className", "required"];
  var ReactInput = function ReactInput(props) {
    return /*#__PURE__*/React$1.createElement("input", _extends({
      type: "text"
    }, props));
  };
  var Currency = function Currency(_ref) {
    var name = _ref.name,
      label = _ref.label,
      lfLocale = _ref.lfLocale,
      hint = _ref.hint,
      value = _ref.value,
      error = _ref.error,
      className = _ref.className,
      required = _ref.required,
      rest = _objectWithoutProperties(_ref, _excluded);
    var hasError = error && _isString(error);
    return /*#__PURE__*/React$1.createElement("div", makeClassName('currency', name, 'lf-form-react-control-group', className), /*#__PURE__*/React$1.createElement("label", {
      for: name
    }, label, required && label && /*#__PURE__*/React$1.createElement(RequiredIcon, null)), /*#__PURE__*/React$1.createElement(CommonCurrency, _extends({
      defaultValue: value,
      control: ReactInput,
      locale: lfLocale
    }, passRest(rest))), hint && !hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-message"
    }, hint), hasError && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-form-react-error-message"
    }, error));
  };

  var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Currency
  });

  var css_248z = ".lf-form-react input[type=text],\n.lf-form-react input[type=password],\n.lf-form-react input[type=email],\n.lf-form-react input[type=url],\n.lf-form-react input[type=date],\n.lf-form-react input[type=month],\n.lf-form-react input[type=time],\n.lf-form-react input[type=datetime],\n.lf-form-react input[type=datetime-local],\n.lf-form-react input[type=week],\n.lf-form-react input[type=number],\n.lf-form-react input[type=search],\n.lf-form-react input[type=tel],\n.lf-form-react input[type=color],\n.lf-form-react select,\n.lf-form-react textarea {\n  padding: 0.5em 0.6em;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  vertical-align: middle;\n  box-sizing: border-box;\n  height: 36px;\n}\n\n/*\nNeed to separate out the :not() selector from the rest of the CSS 2.1 selectors\nsince IE8 won't execute CSS that contains a CSS3 selector.\n*/\n.lf-form-react input:not([type]) {\n  padding: 0.5em 0.6em;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n/* Chrome (as of v.32/34 on OS X) needs additional room for color to display. */\n/* May be able to remove this tweak as color inputs become more standardized across browsers. */\n.lf-form-react input[type=color] {\n  padding: 0.2em 0.5em;\n}\n\n.lf-form-react input[type=text]:focus,\n.lf-form-react input[type=password]:focus,\n.lf-form-react input[type=email]:focus,\n.lf-form-react input[type=url]:focus,\n.lf-form-react input[type=date]:focus,\n.lf-form-react input[type=month]:focus,\n.lf-form-react input[type=time]:focus,\n.lf-form-react input[type=datetime]:focus,\n.lf-form-react input[type=datetime-local]:focus,\n.lf-form-react input[type=week]:focus,\n.lf-form-react input[type=number]:focus,\n.lf-form-react input[type=search]:focus,\n.lf-form-react input[type=tel]:focus,\n.lf-form-react input[type=color]:focus,\n.lf-form-react select:focus,\n.lf-form-react textarea:focus {\n  outline: 0;\n  border-color: #129FEA;\n}\n\n/*\nNeed to separate out the :not() selector from the rest of the CSS 2.1 selectors\nsince IE8 won't execute CSS that contains a CSS3 selector.\n*/\n.lf-form-react input:not([type]):focus {\n  outline: 0;\n  border-color: #129FEA;\n}\n\n.lf-form-react input[type=file]:focus,\n.lf-form-react input[type=radio]:focus,\n.lf-form-react input[type=checkbox]:focus {\n  outline: thin solid #129FEA;\n  outline: 1px auto #129FEA;\n}\n\n.lf-form-react .lf-form-react-checkbox,\n.lf-form-react .lf-form-react-radio {\n  display: block;\n}\n\n.lf-form-react input[type=text][disabled],\n.lf-form-react input[type=password][disabled],\n.lf-form-react input[type=email][disabled],\n.lf-form-react input[type=url][disabled],\n.lf-form-react input[type=date][disabled],\n.lf-form-react input[type=month][disabled],\n.lf-form-react input[type=time][disabled],\n.lf-form-react input[type=datetime][disabled],\n.lf-form-react input[type=datetime-local][disabled],\n.lf-form-react input[type=week][disabled],\n.lf-form-react input[type=number][disabled],\n.lf-form-react input[type=search][disabled],\n.lf-form-react input[type=tel][disabled],\n.lf-form-react input[type=color][disabled],\n.lf-form-react select[disabled],\n.lf-form-react textarea[disabled] {\n  cursor: not-allowed;\n  background-color: #eaeded;\n  color: #cad2d3;\n}\n\n.lf-form-react input[readonly],\n.lf-form-react select[readonly],\n.lf-form-react textarea[readonly] {\n  background-color: #eee; /* menu hover bg color */\n  color: #777; /* menu text color */\n  border-color: #ccc;\n}\n\n.lf-form-react input:focus:invalid,\n.lf-form-react textarea:focus:invalid,\n.lf-form-react select:focus:invalid {\n  color: #b94a48;\n  border-color: #e9322d;\n}\n\n.lf-form-react input[type=file]:focus:invalid:focus,\n.lf-form-react input[type=radio]:focus:invalid:focus,\n.lf-form-react input[type=checkbox]:focus:invalid:focus {\n  outline-color: #e9322d;\n}\n\n.lf-form-react select {\n  /* Normalizes the height; padding is not sufficient. */\n  height: 2.25em;\n  border: 1px solid #ccc;\n  background-color: white;\n}\n\n.lf-form-react select[multiple] {\n  height: auto;\n}\n\n.lf-form-react label {\n  margin: 3px 0px;\n}\n\n.lf-form-react fieldset {\n  margin: 0;\n  padding: 0.35em 0 0.75em;\n  border: 0;\n}\n\n.lf-form-react legend {\n  display: block;\n  width: 100%;\n  padding: 0.3em 0;\n  color: #333;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.lf-form-react-stacked input[type=text],\n.lf-form-react-stacked input[type=password],\n.lf-form-react-stacked input[type=email],\n.lf-form-react-stacked input[type=url],\n.lf-form-react-stacked input[type=date],\n.lf-form-react-stacked input[type=month],\n.lf-form-react-stacked input[type=time],\n.lf-form-react-stacked input[type=datetime],\n.lf-form-react-stacked input[type=datetime-local],\n.lf-form-react-stacked input[type=week],\n.lf-form-react-stacked input[type=number],\n.lf-form-react-stacked input[type=search],\n.lf-form-react-stacked input[type=tel],\n.lf-form-react-stacked input[type=color],\n.lf-form-react-stacked input[type=file],\n.lf-form-react-stacked select,\n.lf-form-react-stacked label,\n.lf-form-react-stacked textarea {\n  display: block;\n}\n\n.pure-form-aligned input,\n.pure-form-aligned textarea,\n.pure-form-aligned select,\n.pure-form-message-inline {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.pure-form-aligned textarea {\n  vertical-align: top;\n}\n\n/* Aligned Forms */\n.pure-form-aligned .pure-control-group {\n  margin-bottom: 0.5em;\n}\n\n.pure-form-aligned .pure-control-group label {\n  text-align: right;\n  display: inline-block;\n  vertical-align: middle;\n  width: 10em;\n  margin: 0 1em 0 0;\n}\n\n.pure-form-aligned .pure-controls {\n  margin: 1.5em 0 0 11em;\n}\n\n.lf-form-react .lf-form-react-input-1 {\n  width: 100%;\n}\n\n.lf-form-react .lf-form-react-input-3-4 {\n  width: 75%;\n}\n\n.lf-form-react .lf-form-react-input-2-3 {\n  width: 66%;\n}\n\n.lf-form-react .lf-form-react-input-1-2 {\n  width: 50%;\n}\n\n.lf-form-react .lf-form-react-input-1-3 {\n  width: 33%;\n}\n\n.lf-form-react .lf-form-react-input-1-4 {\n  width: 25%;\n}\n\n.lf-form-react-message {\n  display: block;\n  color: #666;\n  font-size: 0.875em;\n}\n\n.lf-form-react-error-message {\n  color: #FF3300;\n  display: block;\n  font-size: 0.875em;\n}\n\n.lf-form-react-primary-button {\n  appearance: button;\n  background-color: #1652F0;\n  border: 1px solid #1652F0;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1.15;\n  overflow: visible;\n  padding: 8px 16px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transition: all 80ms ease-in-out;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: fit-content;\n}\n.lf-form-react-primary-button:focus {\n  outline: 0;\n}\n.lf-form-react-primary-button:hover {\n  background-color: #0A46E4;\n  border-color: #0A46E4;\n}\n.lf-form-react-primary-button:active {\n  background-color: #0039D7;\n  border-color: #0039D7;\n}\n\n.lf-form-react-secondary-button {\n  appearance: button;\n  background-color: #999999;\n  border: 1px solid #999999;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1.15;\n  overflow: visible;\n  padding: 8px 16px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transition: all 80ms ease-in-out;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: fit-content;\n}\n.lf-form-react-secondary-button:focus {\n  outline: 0;\n}\n.lf-form-react-secondary-button:hover {\n  background-color: #888888;\n  border-color: #888888;\n}\n.lf-form-react-secondary-button:active {\n  background-color: #888888;\n  border-color: #888888;\n}\n\n.lf-form-react .lf-buttons {\n  display: flex;\n}\n.lf-form-react .lf-buttons button:not(:first-child) {\n  margin-left: 10px;\n}";
  styleInject(css_248z);

  var FormReact = function FormReact(_ref) {
    var id = _ref.id,
      name = _ref.name,
      children = _ref.children,
      buttonsAlign = _ref.buttonsAlign,
      _ref$hideToolbar = _ref.hideToolbar,
      hideToolbar = _ref$hideToolbar === void 0 ? false : _ref$hideToolbar,
      _ref$onlyFields = _ref.onlyFields,
      onlyFields = _ref$onlyFields === void 0 ? false : _ref$onlyFields,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$disabledSubmit = _ref.disabledSubmit,
      disabledSubmit = _ref$disabledSubmit === void 0 ? false : _ref$disabledSubmit,
      plaintext = _ref.plaintext,
      _ref$labelSubmit = _ref.labelSubmit,
      labelSubmit = _ref$labelSubmit === void 0 ? 'Submit' : _ref$labelSubmit,
      _ref$labelCancel = _ref.labelCancel,
      labelCancel = _ref$labelCancel === void 0 ? 'Cancel' : _ref$labelCancel,
      _ref$onSubmit = _ref.onSubmit,
      onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit,
      _ref$onReset = _ref.onReset,
      onReset = _ref$onReset === void 0 ? function () {} : _ref$onReset,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
      custom = _ref.custom;
    return /*#__PURE__*/React$1.createElement("form", {
      id: id,
      onSubmit: onSubmit,
      className: classNames('lf-form lf-form-react lf-form-react-stacked', _defineProperty$1({}, buttonsAlign ? "lf-form-buttons-align-".concat(buttonsAlign) : undefined, true)),
      "data-lf-form-name": name,
      onBlur: onBlur
    }, children, !hideToolbar && !onlyFields && !plaintext && /*#__PURE__*/React$1.createElement("div", {
      className: "lf-buttons"
    }, /*#__PURE__*/React$1.createElement("button", {
      type: "submit",
      onClick: onSubmit,
      disabled: disabled || disabledSubmit,
      className: "lf-form-react-primary-button"
    }, labelSubmit), /*#__PURE__*/React$1.createElement("button", {
      type: "button",
      disabled: disabled,
      className: "lf-form-react-secondary-button",
      onClick: onReset
    }, labelCancel), custom));
  };
  lfLog('Loaded React.Form');

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: FormReact
  });

  exports.Connectors = Connectors;
  exports.FIELDS_KEY = FIELDS_KEY;
  exports.FRAMEWORKS = FRAMEWORKS;
  exports.FRAMEWORKS_LABELS = FRAMEWORKS_LABELS;
  exports.Fields = Fields;
  exports.Forms = Forms;
  exports.LfArray = LfArray;
  exports.LfColumn = LfColumn;
  exports.LfColumns = LfColumns;
  exports.LfField = LfField;
  exports.LfGroup = LfGroup;
  exports.LfStep = LfStep;
  exports.LfSteps = LfSteps;
  exports.LfTab = LfTab;
  exports.LfTabs = LfTabs;
  exports.applyFormRules = applyFormRules;
  exports.applyTransformers = applyTransformers;
  exports.cleanUp = cleanUp;
  exports.collectIds = collectIds;
  exports.collectNames = collectNames;
  exports.default = LetsForm;
  exports.fillIds = fillIds;
  exports.filterFields = filterFields;
  exports.filterOptions = filterOptions;
  exports.findField = findField;
  exports.formHasComponents = formHasComponents;
  exports.formHelper = formHelper;
  exports.getFieldById = getFieldById;
  exports.getLocales = getLocales;
  exports.i18n = i18n;
  exports.i18nOptions = i18nOptions;
  exports.isChildrenOf = isChildrenOf;
  exports.isEmptyForm = isEmptyForm;
  exports.isI18n = isI18n;
  exports.isUrl = isUrl;
  exports.isValidArrayOfFields = isValidArrayOfFields;
  exports.isValidConnector = isValidConnector;
  exports.isValidDate = isValidDate;
  exports.isValidDayjsFormat = isValidDayjsFormat;
  exports.isValidField = isValidField;
  exports.isValidForm = isValidForm;
  exports.isValidTime = isValidTime;
  exports.makeWidthStyle = makeWidthStyle;
  exports.mapFields = mapFields;
  exports.omitFields = omitFields;
  exports.passRest = passRest;
  exports.reduceFields = reduceFields;
  exports.replaceField = replaceField;
  exports.someFields = someFields;
  exports.traverseChildren = traverseChildren;
  exports.validateJSONForm = validateJSONForm;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
