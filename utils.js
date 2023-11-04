/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(1469);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),

/***/ 6384:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(7040),
    listCacheDelete = __webpack_require__(4125),
    listCacheGet = __webpack_require__(2117),
    listCacheHas = __webpack_require__(7518),
    listCacheSet = __webpack_require__(4705);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 2705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(5639);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 6874:
/***/ ((module) => {

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
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 7412:
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 7443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(2118);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 1196:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 9932:
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 2488:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 4865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(9465),
    eq = __webpack_require__(7813);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 8470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(7813);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 4037:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(8363),
    keys = __webpack_require__(3674);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 3886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(8363),
    keysIn = __webpack_require__(1704);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 9465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(8777);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 5990:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(6384),
    arrayEach = __webpack_require__(7412),
    assignValue = __webpack_require__(4865),
    baseAssign = __webpack_require__(4037),
    baseAssignIn = __webpack_require__(3886),
    cloneBuffer = __webpack_require__(4626),
    copyArray = __webpack_require__(278),
    copySymbols = __webpack_require__(8805),
    copySymbolsIn = __webpack_require__(1911),
    getAllKeys = __webpack_require__(8234),
    getAllKeysIn = __webpack_require__(6904),
    getTag = __webpack_require__(4160),
    initCloneArray = __webpack_require__(3824),
    initCloneByTag = __webpack_require__(9148),
    initCloneObject = __webpack_require__(8517),
    isArray = __webpack_require__(1469),
    isBuffer = __webpack_require__(4144),
    isMap = __webpack_require__(6688),
    isObject = __webpack_require__(3218),
    isSet = __webpack_require__(2928),
    keys = __webpack_require__(3674),
    keysIn = __webpack_require__(1704);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
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
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

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
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 3118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(3218);

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
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 1078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(2488),
    isFlattenable = __webpack_require__(7285);

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
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 7786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(1811),
    toKey = __webpack_require__(327);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 4239:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 13:
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 2118:
/***/ ((module) => {

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
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 280:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5569);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 5970:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePickBy = __webpack_require__(3012),
    hasIn = __webpack_require__(9095);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ 3012:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(7786),
    baseSet = __webpack_require__(611),
    castPath = __webpack_require__(1811);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ 611:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(4865),
    castPath = __webpack_require__(1811),
    isIndex = __webpack_require__(5776),
    isObject = __webpack_require__(3218),
    toKey = __webpack_require__(327);

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
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ 4259:
/***/ ((module) => {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 531:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2705),
    arrayMap = __webpack_require__(9932),
    isArray = __webpack_require__(1469),
    isSymbol = __webpack_require__(3448);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 5652:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(8668),
    arrayIncludes = __webpack_require__(7443),
    arrayIncludesWith = __webpack_require__(1196),
    cacheHas = __webpack_require__(4757),
    createSet = __webpack_require__(3593),
    setToArray = __webpack_require__(1814);

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
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
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
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 7406:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(1811),
    last = __webpack_require__(928),
    parent = __webpack_require__(292),
    toKey = __webpack_require__(327);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 4757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(2118);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 1811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(1469),
    isKey = __webpack_require__(5403),
    stringToPath = __webpack_require__(5514),
    toString = __webpack_require__(9833);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 4626:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(5639);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

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


/***/ }),

/***/ 278:
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 8363:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(4865),
    baseAssignValue = __webpack_require__(9465);

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
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 8805:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(8363),
    getSymbols = __webpack_require__(9551);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 1911:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(8363),
    getSymbolsIn = __webpack_require__(1442);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 3593:
/***/ ((module) => {

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
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPlainObject = __webpack_require__(8630);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 8777:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(852);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 9021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var flatten = __webpack_require__(5564),
    overRest = __webpack_require__(5357),
    setToString = __webpack_require__(61);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 1957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 8234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5569);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 6904:
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 852:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 5924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5569);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 9551:
/***/ ((module) => {

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
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 1442:
/***/ ((module) => {

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
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 4160:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 222:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(1811),
    isArguments = __webpack_require__(5694),
    isArray = __webpack_require__(1469),
    isIndex = __webpack_require__(5776),
    isLength = __webpack_require__(1780),
    toKey = __webpack_require__(327);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
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
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 3824:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 9148:
/***/ ((module) => {

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
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 8517:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(3118),
    getPrototype = __webpack_require__(5924),
    isPrototype = __webpack_require__(5726);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 7285:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2705),
    isArguments = __webpack_require__(5694),
    isArray = __webpack_require__(1469);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 5776:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

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
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 5403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(1469),
    isSymbol = __webpack_require__(3448);

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
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 5726:
/***/ ((module) => {

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

module.exports = stubFalse;


/***/ }),

/***/ 7040:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 4125:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(8470);

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
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

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

module.exports = listCacheDelete;


/***/ }),

/***/ 2117:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(8470);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 7518:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(8470);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 4705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(8470);

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
function listCacheSet(key, value) {
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

module.exports = listCacheSet;


/***/ }),

/***/ 4523:
/***/ ((module) => {

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
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 5569:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 5357:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(6874);

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
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
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

module.exports = overRest;


/***/ }),

/***/ 292:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(7786),
    baseSlice = __webpack_require__(4259);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 5639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(1957);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 1814:
/***/ ((module) => {

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
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 61:
/***/ ((module) => {

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
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 5514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(4523);

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
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(3448);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 6678:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(5990);

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

module.exports = clone;


/***/ }),

/***/ 7813:
/***/ ((module) => {

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
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 5564:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(1078);

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
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 9095:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(13),
    hasPath = __webpack_require__(222);

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
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 5694:
/***/ ((module) => {

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

module.exports = stubFalse;


/***/ }),

/***/ 1469:
/***/ ((module) => {

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
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 8612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3560),
    isLength = __webpack_require__(1780);

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
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 1584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObjectLike = __webpack_require__(7005);

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
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

module.exports = isBoolean;


/***/ }),

/***/ 4144:
/***/ ((module) => {

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

module.exports = stubFalse;


/***/ }),

/***/ 1609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseKeys = __webpack_require__(280),
    getTag = __webpack_require__(4160),
    isArguments = __webpack_require__(5694),
    isArray = __webpack_require__(1469),
    isArrayLike = __webpack_require__(8612),
    isBuffer = __webpack_require__(4144),
    isPrototype = __webpack_require__(5726),
    isTypedArray = __webpack_require__(6719);

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
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
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

module.exports = isEmpty;


/***/ }),

/***/ 3560:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObject = __webpack_require__(3218);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
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
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 1780:
/***/ ((module) => {

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
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 6688:
/***/ ((module) => {

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

module.exports = stubFalse;


/***/ }),

/***/ 1763:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObjectLike = __webpack_require__(7005);

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
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ 3218:
/***/ ((module) => {

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
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 7005:
/***/ ((module) => {

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
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 8630:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    getPrototype = __webpack_require__(5924),
    isObjectLike = __webpack_require__(7005);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 2928:
/***/ ((module) => {

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

module.exports = stubFalse;


/***/ }),

/***/ 3448:
/***/ ((module) => {

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

module.exports = stubFalse;


/***/ }),

/***/ 6719:
/***/ ((module) => {

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

module.exports = stubFalse;


/***/ }),

/***/ 3674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5569);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 1704:
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 928:
/***/ ((module) => {

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
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 7557:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(9932),
    baseClone = __webpack_require__(5990),
    baseUnset = __webpack_require__(7406),
    castPath = __webpack_require__(1811),
    copyObject = __webpack_require__(8363),
    customOmitClone = __webpack_require__(696),
    flatRest = __webpack_require__(9021),
    getAllKeysIn = __webpack_require__(6904);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

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
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ 8718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePick = __webpack_require__(5970),
    flatRest = __webpack_require__(9021);

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
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ 9833:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(531);

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
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 4908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(5652);

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
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ 3955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__(9833);

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
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addField": () => (/* reexport */ addField),
  "cleanUp": () => (/* reexport */ cleanUp),
  "createEmptyField": () => (/* reexport */ createEmptyField),
  "deleteField": () => (/* reexport */ deleteField),
  "fillIds": () => (/* reexport */ fillIds),
  "filterFields": () => (/* reexport */ filterFields),
  "findField": () => (/* reexport */ findField),
  "formHelper": () => (/* reexport */ formHelper),
  "getFieldById": () => (/* reexport */ getFieldById),
  "mapFields": () => (/* reexport */ mapFields),
  "reduceFields": () => (/* reexport */ reduceFields),
  "replaceField": () => (/* reexport */ replaceField),
  "validateJSONForm": () => (/* reexport */ validateJSONForm)
});

// EXTERNAL MODULE: ./node_modules/lodash/flatten.js
var flatten = __webpack_require__(5564);
var flatten_default = /*#__PURE__*/__webpack_require__.n(flatten);
// EXTERNAL MODULE: ./node_modules/lodash/isArray.js
var isArray = __webpack_require__(1469);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);
// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(3218);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);
;// CONCATENATED MODULE: ./helpers/map-fields.js



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      newField = _objectSpread(_objectSpread({}, newField), {}, {
        fields: _objectSpread(_objectSpread({}, newField.fields), {}, _defineProperty({}, subkey, newFields))
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
  var newFields = fields.map(function (field) {
    var newField = predicate(field);
    // if returns an array, means the mapping is replacing with two fields
    // and it will need to be flattened later
    if (Array.isArray(newField)) {
      needsFlatten = true;
    }
    if (field.component === 'group') {
      var _newFields = mapFields(field.fields, predicate);
      if (_newFields !== field.fields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          fields: _newFields
        });
      }
    } else if (field.component === 'array') {
      var _newFields2 = mapFields(field.fields, predicate);
      if (_newFields2 !== field.fields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          fields: _newFields2
        });
      }
    } else if (field.component === 'two-columns') {
      var newLeftFields = mapFields(field.leftFields, predicate);
      if (newLeftFields !== field.leftFields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          leftFields: newLeftFields
        });
      }
      var newRightFields = mapFields(field.rightFields, predicate);
      if (newRightFields !== field.rightFields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          rightFields: newRightFields
        });
      }
    } else if (field.component === 'three-columns') {
      var _newLeftFields = mapFields(field.leftFields, predicate);
      if (_newLeftFields !== field.leftFields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          leftFields: _newLeftFields
        });
      }
      var newCenterFields = mapFields(field.centerFields, predicate);
      if (newCenterFields !== field.centerFields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          centerFields: newCenterFields
        });
      }
      var _newRightFields = mapFields(field.rightFields, predicate);
      if (_newRightFields !== field.rightFields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          rightFields: _newRightFields
        });
      }
    } else if (field.component === 'tabs' && isObject_default()(field.fields) && !isArray_default()(field.fields)) {
      // Problem here: the new field can be an array because the map field, can return an array with 
      // additional field to be put somewhere in the mapping, of those only the one of type "tab" need to be
      // mapped, the other one must be left untouched since they where added by the helper method
      if (isArray_default()(newField)) {
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
    newFields = flatten_default()(newFields);
    hasChanges = true;
  } else {
    // check if some element of the array is changed, keep instance consistency otherwise
    hasChanges = fields.some(function (field, idx) {
      return field !== newFields[idx];
    });
  }
  return hasChanges ? newFields : fields;
};

;// CONCATENATED MODULE: ./helpers/replace-field.js
function replace_field_typeof(obj) { "@babel/helpers - typeof"; return replace_field_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, replace_field_typeof(obj); }
function replace_field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function replace_field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? replace_field_ownKeys(Object(source), !0).forEach(function (key) { replace_field_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : replace_field_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function replace_field_defineProperty(obj, key, value) { key = replace_field_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function replace_field_toPropertyKey(arg) { var key = replace_field_toPrimitive(arg, "string"); return replace_field_typeof(key) === "symbol" ? key : String(key); }
function replace_field_toPrimitive(input, hint) { if (replace_field_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (replace_field_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var replaceField = function replaceField(form, field) {
  return replace_field_objectSpread(replace_field_objectSpread({}, form), {}, {
    fields: mapFields(form.fields, function (currentField) {
      if (currentField.id === field.id) {
        return field;
      }
      return currentField;
    })
  });
};

;// CONCATENATED MODULE: ./helpers/filter-fields.js


function filter_fields_typeof(obj) { "@babel/helpers - typeof"; return filter_fields_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, filter_fields_typeof(obj); }
function filter_fields_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function filter_fields_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? filter_fields_ownKeys(Object(source), !0).forEach(function (key) { filter_fields_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : filter_fields_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function filter_fields_defineProperty(obj, key, value) { key = filter_fields_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function filter_fields_toPropertyKey(arg) { var key = filter_fields_toPrimitive(arg, "string"); return filter_fields_typeof(key) === "symbol" ? key : String(key); }
function filter_fields_toPrimitive(input, hint) { if (filter_fields_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (filter_fields_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          fields: _newFields
        });
      }
    } else if (field.component === 'array') {
      var _newFields2 = filterFields(field.fields, predicate);
      if (_newFields2 !== field.fields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          fields: _newFields2
        });
      }
    } else if (field.component === 'two-columns') {
      var newLeftFields = filterFields(field.leftFields, predicate);
      if (newLeftFields !== field.leftFields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          leftFields: newLeftFields
        });
      }
      var newRightFields = filterFields(field.rightFields, predicate);
      if (newRightFields !== field.rightFields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          rightFields: newRightFields
        });
      }
    } else if (field.component === 'three-columns') {
      var _newLeftFields = filterFields(field.leftFields, predicate);
      if (_newLeftFields !== field.leftFields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          leftFields: _newLeftFields
        });
      }
      var newCenterFields = filterFields(field.centerFields, predicate);
      if (newCenterFields !== field.centerFields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          centerFields: newCenterFields
        });
      }
      var _newRightFields = filterFields(field.rightFields, predicate);
      if (_newRightFields !== field.rightFields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          rightFields: _newRightFields
        });
      }
    } else if (field.component === 'tabs' && isObject_default()(field.fields) && !isArray_default()(field.fields)) {
      var subkeys = Object.keys(field.fields);
      // scan all keys of fields and reapply, if different instance, create a new instance
      // of new field
      subkeys.forEach(function (subkey) {
        var newFields = filterFields(field.fields[subkey], predicate);
        if (newFields !== field.fields[subkey]) {
          newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
            fields: filter_fields_objectSpread(filter_fields_objectSpread({}, newField.fields), {}, filter_fields_defineProperty({}, subkey, newFields))
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

;// CONCATENATED MODULE: ./helpers/delete-field.js
function delete_field_typeof(obj) { "@babel/helpers - typeof"; return delete_field_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, delete_field_typeof(obj); }
function delete_field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function delete_field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? delete_field_ownKeys(Object(source), !0).forEach(function (key) { delete_field_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : delete_field_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function delete_field_defineProperty(obj, key, value) { key = delete_field_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function delete_field_toPropertyKey(arg) { var key = delete_field_toPrimitive(arg, "string"); return delete_field_typeof(key) === "symbol" ? key : String(key); }
function delete_field_toPrimitive(input, hint) { if (delete_field_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (delete_field_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var deleteField = function deleteField(form, field) {
  return delete_field_objectSpread(delete_field_objectSpread({}, form), {}, {
    fields: filterFields(form.fields, function (currentField) {
      return currentField.id !== field.id;
    })
  });
};

// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(3955);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);
;// CONCATENATED MODULE: ./helpers/fill-ids.js

function fill_ids_typeof(obj) { "@babel/helpers - typeof"; return fill_ids_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, fill_ids_typeof(obj); }
function fill_ids_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function fill_ids_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? fill_ids_ownKeys(Object(source), !0).forEach(function (key) { fill_ids_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : fill_ids_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function fill_ids_defineProperty(obj, key, value) { key = fill_ids_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function fill_ids_toPropertyKey(arg) { var key = fill_ids_toPrimitive(arg, "string"); return fill_ids_typeof(key) === "symbol" ? key : String(key); }
function fill_ids_toPrimitive(input, hint) { if (fill_ids_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (fill_ids_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var fillIds = function fillIds(fields) {
  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return mapFields(fields, function (field) {
    // if not id, then create it
    if (!field.id) {
      return fill_ids_objectSpread({
        id: uniqueId_default()(namespace)
      }, field);
    }
    // special case of array
    //if (field.component === 'array') {
    //  field.fields = fillIds(field.fields);
    //}
    return field;
  });
};

// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(8718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(7557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var isNumber = __webpack_require__(1763);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);
// EXTERNAL MODULE: ./node_modules/lodash/isBoolean.js
var isBoolean = __webpack_require__(1584);
var isBoolean_default = /*#__PURE__*/__webpack_require__.n(isBoolean);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(1609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/keys.js
var keys = __webpack_require__(3674);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);
;// CONCATENATED MODULE: ./costants.js
var FRAMEWORKS = ['react', 'react-rsuite5', 'react-material-ui', 'react-bootstrap', 'react-antd'];
var FRAMEWORKS_LABELS = (/* unused pure expression or super */ null && (['React', 'React + RSuite5', 'React + MaterialUI', 'React + Bootstrap', 'React + Ant Design']));
var FIELDS_KEY = (/* unused pure expression or super */ null && (['fields', 'leftFields', 'rightField', 'centerFields']));
;// CONCATENATED MODULE: ./helpers/is-i18n.js

var isI18n = function isI18n(obj) {
  return isObject_default()(obj) && Object.keys(obj).every(function (key) {
    return key.length === 2 || key.length === 5 && key[2] === '-';
  });
};
;// CONCATENATED MODULE: ./helpers/cleanup.js







function cleanup_typeof(obj) { "@babel/helpers - typeof"; return cleanup_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, cleanup_typeof(obj); }
function cleanup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function cleanup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? cleanup_ownKeys(Object(source), !0).forEach(function (key) { cleanup_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : cleanup_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function cleanup_defineProperty(obj, key, value) { key = cleanup_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function cleanup_toPropertyKey(arg) { var key = cleanup_toPrimitive(arg, "string"); return cleanup_typeof(key) === "symbol" ? key : String(key); }
function cleanup_toPrimitive(input, hint) { if (cleanup_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (cleanup_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var collectEmptyKeys = function collectEmptyKeys(obj) {
  return keys_default()(obj).filter(function (key) {
    return isEmpty_default()(obj[key]) && !(isBoolean_default()(obj[key]) || isNumber_default()(obj[key]));
  });
};
var removeEmptyKeys = function removeEmptyKeys(obj) {
  // collect all empty keys
  var emptyKeys = collectEmptyKeys(obj);
  // clone and remove id and empty keys
  return omit_default()(obj, emptyKeys);
};
var removeUnusedLocalesFromI18n = function removeUnusedLocalesFromI18n(obj, locales) {
  if (isArray_default()(locales) && !isEmpty_default()(locales)) {
    var keysToRemove = Object.keys(obj).filter(function (key) {
      return !locales.includes(key);
    });
    var cleaned = !isEmpty_default()(keysToRemove) ? omit_default()(obj, keysToRemove) : obj;
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
  var cloned = cleanup_objectSpread({}, obj);
  Object.keys(obj || {}).forEach(function (key) {
    if (isArray_default()(cloned[key])) {
      cloned[key] = cloned[key].map(function (item) {
        return removeUnusedLocalesFromObj(item, locales);
      });
    } else if (isI18n(cloned[key])) {
      cloned[key] = removeUnusedLocalesFromI18n(cloned[key], locales);
    } else if (key === 'validation' && isI18n(cloned.validation.message)) {
      cloned.validation = cleanup_objectSpread(cleanup_objectSpread({}, cloned.validation), {}, {
        message: removeUnusedLocalesFromI18n(cloned.validation.message, locales)
      });
    }
  });
  return cloned;
};
var removeUnusedTabs = function removeUnusedTabs(obj) {
  if (obj.component === 'tabs') {
    return cleanup_objectSpread(cleanup_objectSpread({}, obj), {}, {
      fields: pick_default()(obj.fields, (obj.tabs || []).map(function (tab) {
        return tab.value;
      }))
    });
  }
  return obj;
};

/**
 * cleanUp
 * Remove id from json file and all empty keys
 * @param {*} json
 * @returns
 */
var cleanUp = function cleanUp(json, framework) {
  var cloned = cleanup_objectSpread({}, json);

  // remove unused locales
  if (cloned.labelSubmit && isI18n(cloned.labelSubmit)) {
    cloned.labelSubmit = removeUnusedLocalesFromI18n(cloned.labelSubmit, json.locales);
  }
  if (cloned.labelCancel && isI18n(cloned.labelCancel)) {
    cloned.labelCancel = removeUnusedLocalesFromI18n(cloned.labelCancel, json.locales);
  }
  var emptyKeys = keys_default()(cloned).filter(function (key) {
    return isEmpty_default()(cloned[key]) && !(isBoolean_default()(cloned[key]) || isNumber_default()(cloned[key]));
  });
  var cleanedUp = omit_default()(cloned, emptyKeys);
  var newForm = cleanup_objectSpread(cleanup_objectSpread({}, cleanedUp), {}, {
    fields: mapFields(json.fields, function (field) {
      // clone and remove id
      var cloned = omit_default()(field, 'id');
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

;// CONCATENATED MODULE: ./helpers/add-field.js

function add_field_typeof(obj) { "@babel/helpers - typeof"; return add_field_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, add_field_typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function add_field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function add_field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? add_field_ownKeys(Object(source), !0).forEach(function (key) { add_field_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : add_field_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function add_field_defineProperty(obj, key, value) { key = add_field_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function add_field_toPropertyKey(arg) { var key = add_field_toPrimitive(arg, "string"); return add_field_typeof(key) === "symbol" ? key : String(key); }
function add_field_toPrimitive(input, hint) { if (add_field_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (add_field_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * addField
 * @param {*} form The form to add the field to 
 * @param {*} newField The new field { component: '', ... } or array of fields
 * @param {*} id Id of the component to add the field to
 * @param {*} target the fields key of the components: "fields", "tabs", "leftFields", "rightFields", ...
 * @param {*} subtarget the index of the target in case it's an array
 * @returns 
 */
var addField = function addField(form, newField, id) {
  var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'fields';
  var subtarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // can add multiple fields at once
  var toAdd = isArray_default()(newField) ? newField : [newField];
  if (id != null) {
    return add_field_objectSpread(add_field_objectSpread({}, form), {}, {
      fields: mapFields(form.fields,
      // if right field id, append to fields
      function (field) {
        if (field.id === id) {
          if (subtarget != null) {
            return add_field_objectSpread(add_field_objectSpread({}, field), {}, add_field_defineProperty({}, target, add_field_objectSpread(add_field_objectSpread({}, field[target] || []), {}, add_field_defineProperty({}, subtarget, [].concat(_toConsumableArray(field[target] && field[target][subtarget] ? field[target][subtarget] : []), _toConsumableArray(toAdd))))));
          } else {
            // old way
            return add_field_objectSpread(add_field_objectSpread({}, field), {}, add_field_defineProperty({}, target, [].concat(_toConsumableArray(field[target] || []), _toConsumableArray(toAdd))));
          }
        }
        return field;
      })
    });
  } else {
    return add_field_objectSpread(add_field_objectSpread({}, form), {}, {
      fields: [].concat(_toConsumableArray(form.fields), _toConsumableArray(toAdd))
    });
  }
};

// EXTERNAL MODULE: ./node_modules/lodash/clone.js
var clone = __webpack_require__(6678);
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);
;// CONCATENATED MODULE: ./helpers/reduce-fields.js




function reduce_fields_typeof(obj) { "@babel/helpers - typeof"; return reduce_fields_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, reduce_fields_typeof(obj); }
function reduce_fields_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function reduce_fields_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? reduce_fields_ownKeys(Object(source), !0).forEach(function (key) { reduce_fields_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : reduce_fields_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function reduce_fields_defineProperty(obj, key, value) { key = reduce_fields_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function reduce_fields_toPropertyKey(arg) { var key = reduce_fields_toPrimitive(arg, "string"); return reduce_fields_typeof(key) === "symbol" ? key : String(key); }
function reduce_fields_toPrimitive(input, hint) { if (reduce_fields_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (reduce_fields_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var reduceFields = function reduceFields(fields, predicate) {
  var accumulator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = reduce_fields_objectSpread({
    'group': true,
    'array': true,
    'two-columns': true,
    'three-columns': true
  }, opts);
  if (isEmpty_default()(fields) || !isArray_default()(fields)) {
    return accumulator;
  }
  var result = clone_default()(accumulator);
  fields.forEach(function (field) {
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
    } else if (field.component === 'tabs' && isObject_default()(field.fields) && !isArray_default()(field.fields)) {
      var subkeys = Object.keys(field.fields);
      subkeys.forEach(function (subkey) {
        result = reduceFields(field.fields[subkey], predicate, result, opts);
      });
    }
  });
  return result;
};

;// CONCATENATED MODULE: ./helpers/find-field.js




function find_field_typeof(obj) { "@babel/helpers - typeof"; return find_field_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, find_field_typeof(obj); }
function find_field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function find_field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? find_field_ownKeys(Object(source), !0).forEach(function (key) { find_field_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : find_field_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function find_field_defineProperty(obj, key, value) { key = find_field_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function find_field_toPropertyKey(arg) { var key = find_field_toPrimitive(arg, "string"); return find_field_typeof(key) === "symbol" ? key : String(key); }
function find_field_toPrimitive(input, hint) { if (find_field_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (find_field_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var createEmptyField = function createEmptyField(Manifests, fields, component, framework) {
  var countFields = reduceFields(fields, function (field, accumulator) {
    return accumulator + 1;
  }, 0);
  var newId = uniqueId_default()("field_".concat(countFields + 1, "_"));
  var newName = "field_".concat(countFields + 1);
  var retries = 0;
  var exists = fieldExists(fields, function (field) {
    return field.name === newName || field.id === newId;
  });
  while (exists && retries < 100) {
    newId = newId + '_1';
    newName = newName + '_1';
    // eslint-disable-next-line no-loop-func
    exists = fieldExists(fields, function (field) {
      return field.name === newName || field.id === newId;
    });
    ++retries;
  }
  var newField = {
    component: component,
    label: "Field ".concat(countFields + 1),
    name: newName,
    id: newId
  };

  // if component has default values
  if (Manifests[component] && Manifests[component].defaultValues) {
    // apply all defaults for all platforms
    Object.keys(Manifests[component].defaultValues).forEach(function (framework) {
      newField = find_field_objectSpread(find_field_objectSpread({}, newField), Manifests[component].defaultValues[framework]);
    });
    // be sure to apply the current framework as last one (in case it includes non framework specific values)
    if (Manifests[component].defaultValues[framework]) {
      newField = find_field_objectSpread(find_field_objectSpread({}, newField), Manifests[component].defaultValues[framework]);
    }
  }
  return newField;
};
var findField = function findField(fields, predicate) {
  if (isEmpty_default()(fields) || !isArray_default()(fields)) {
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
      } else if (field.component === 'tabs' && isObject_default()(field.fields) && !isArray_default()(field.fields)) {
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
var fieldExists = function fieldExists(fields, predicate) {
  return findField(fields, predicate) != null;
};

;// CONCATENATED MODULE: ./helpers/form-helper.js

function form_helper_typeof(obj) { "@babel/helpers - typeof"; return form_helper_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, form_helper_typeof(obj); }
function form_helper_toConsumableArray(arr) { return form_helper_arrayWithoutHoles(arr) || form_helper_iterableToArray(arr) || form_helper_unsupportedIterableToArray(arr) || form_helper_nonIterableSpread(); }
function form_helper_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function form_helper_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return form_helper_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return form_helper_arrayLikeToArray(o, minLen); }
function form_helper_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function form_helper_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return form_helper_arrayLikeToArray(arr); }
function form_helper_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function form_helper_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function form_helper_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? form_helper_ownKeys(Object(source), !0).forEach(function (key) { form_helper_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : form_helper_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function form_helper_defineProperty(obj, key, value) { key = form_helper_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function form_helper_toPropertyKey(arg) { var key = form_helper_toPrimitive(arg, "string"); return form_helper_typeof(key) === "symbol" ? key : String(key); }
function form_helper_toPrimitive(input, hint) { if (form_helper_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (form_helper_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var formHelper = function formHelper(_form2) {
  var _form = form_helper_objectSpread({}, _form2);
  var _fields = form_helper_toConsumableArray(_form2.fields);
  var _skip = false;
  var makeHelper = function makeHelper(params) {
    return function (fieldName) {
      var fieldNames = Array.isArray(fieldName) ? fieldName : [fieldName];
      _fields = mapFields(_fields, function (field) {
        if (fieldNames.includes(field.name)) {
          return form_helper_objectSpread(form_helper_objectSpread({}, field), params);
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
    setField: function setField(fieldName, key, value) {
      var toReplace = isObject_default()(key) ? key : form_helper_defineProperty({}, key, value);
      _fields = mapFields(_fields, function (field) {
        if (field.name === fieldName) {
          return form_helper_objectSpread(form_helper_objectSpread({}, field), toReplace);
        }
        return field;
      });
      return obj;
    },
    form: function form() {
      // if skip, then just return the same form
      if (_skip) {
        return _form2;
      }
      return form_helper_objectSpread(form_helper_objectSpread({}, _form), {}, {
        fields: _fields
      });
    }
  };
  return obj;
};

// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(4908);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
;// CONCATENATED MODULE: ./manifest.json
const manifest_namespaceObject = JSON.parse('{"input-text":{"label":"Input Text","category":"general","name":"input-text","description":"Basic input text","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"},{"name":"inputMode","type":"string","options":["none","text","decimal","numeric","tel","search","email","url"]},{"name":"autocomplete","type":"string","options":["off","on","name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","email","username","new-password","current-password","one-time-code","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-extension","impp","url","photo"]},{"name":"inputType","type":"string","description":"Set the HTML 5 input type, some framework may have specific components for some of these type","options":["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]}],"react":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"}],"react-rsuite5":[{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"inside","type":"boolean","description":"Show prefix and postfix inside the input box"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"variant","type":"string","options":["outlined","filled","standard"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"floatingLabel","type":"boolean","description":"Show floating label for the control"},{"name":"disableUnderline","type":"boolean","description":"Disable underline in \\"filled\\" and \\"standard\\" variant"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"}],"react-bootstrap":[{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"floatingLabel","type":"boolean","description":"Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"showCount","type":"boolean"},{"name":"maxLength","type":"number"},{"name":"allowClear","type":"boolean"},{"name":"tooltip","type":"boolean"},{"name":"bordered","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"toggle":{"label":"Toggle","category":"general","name":"toggle","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"checkedChildren","type":"string | i18n"},{"name":"unCheckedChildren","type":"string | i18n"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"labelPlacement","type":"string","options":["top","start","bottom","end"]},{"name":"disableRipple","type":"boolean","description":"Disable CSS ripple effect"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["default","small"]},{"name":"tooltip","type":"boolean"},{"name":"checkedChildren","type":"string | i18n"},{"name":"unCheckedChildren","type":"string | i18n"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"select":{"label":"Select","category":"general","description":"Select / Combo box","name":"select","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"options","type":"array"},{"name":"showImageOptions","type":"boolean","description":"Show image field for Select options to be displayed in the drop-down"},{"name":"filterKey","type":"string"},{"name":"filterValue","type":"string"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"}],"react-rsuite5":[{"name":"placement","type":"string","options":["topStart","topEnd","leftStart","rightStart","leftEnd","rightEnd","bottomStart","bottomEnd","auto","autoVerticalStart","autoVerticalEnd","autoHorizontalStart","autoHorizontalEnd"]},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"block","type":"boolean","description":"Only in fluid layout"},{"name":"searchable","type":"boolean"},{"name":"cleanable","type":"boolean"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"},{"name":"appearance","type":"string","options":["default","subtle"]}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"autoWidth","type":"boolean","description":"If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input."},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"floatingLabel","type":"boolean","description":"Show floating label for the control"},{"name":"variant","type":"string","options":["outlined","filled","standard"]}],"react-bootstrap":[{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"floatingLabel","type":"boolean","description":"Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"popupMatchSelectWidth","type":"boolean","description":"Determine whether the popup menu and the select input are the same width"},{"name":"listHeight","type":"number","description":"Config popup height"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"allowClear","type":"boolean"},{"name":"bordered","type":"boolean"},{"name":"placement","type":"string","options":["bottomLeft","bottomRight","topLeft","topRight"]},{"name":"showSearch","type":"boolean","description":"Whether select is searchable"},{"name":"showArrow","type":"boolean","description":"Whether to show the drop-down arrow"},{"name":"virtual","type":"boolean"},{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"group":{"label":"Group","category":"layout","name":"group","description":"Visually Group a set of fields, can be collapsed","common":[{"name":"name","type":"string"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"},{"name":"align","type":"string","options":["left","center","right"]},{"name":"collapsible","type":"boolean"},{"name":"open","type":"boolean"},{"name":"bottomBorder","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"two-columns":{"label":"Two Columns","category":"layout","name":"two-columns","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"layout","type":"string","options":["layout-1-1","layout-1-2","layout-1-3","layout-1-4","layout-2-1","layout-3-1","layout-4-1","layout-2-3","layout-3-2","layout-0-1","layout-1-0"]},{"name":"leftAlignment","type":"string","description":"Flex \\"align-self\\" attribute for the column","options":["auto","baseline","center","end","flex-end","flex-start","inherit","initial","normal","revert","self-end","self-start","start","stretch","unset"]},{"name":"rightAlignment","type":"string","description":"Flex \\"align-self\\" attribute for the column","options":["auto","baseline","center","end","flex-end","flex-start","inherit","initial","normal","revert","self-end","self-start","start","stretch","unset"]},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"three-columns":{"label":"Three Columns","category":"layout","name":"three-columns","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"layout","type":"string","options":["layout-0-1-0","layout-1-0-0","layout-1-1-1","layout-1-1-2","layout-1-2-1","layout-2-1-1","layout-1-1-3","layout-1-3-1","layout-3-1-1"]},{"name":"leftAlignment","type":"string","description":"Flex \\"align-self\\" attribute for the column","options":["auto","baseline","center","end","flex-end","flex-start","inherit","initial","normal","revert","self-end","self-start","start","stretch","unset"]},{"name":"centerAlignment","type":"string","description":"Flex \\"align-self\\" attribute for the column","options":["auto","baseline","center","end","flex-end","flex-start","inherit","initial","normal","revert","self-end","self-start","start","stretch","unset"]},{"name":"rightAlignment","type":"string","description":"Flex \\"align-self\\" attribute for the column","options":["auto","baseline","center","end","flex-end","flex-start","inherit","initial","normal","revert","self-end","self-start","start","stretch","unset"]},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"array":{"label":"List Array","category":"general","name":"array","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"},{"name":"layout","type":"string","options":["vertical","horizontal","inline"]},{"name":"arrayType","type":"string","description":"Defines the result of the list component, \\"arrayOfString\\" and \\"commaSeparated\\" only applies if list field has only one field","options":["arrayOfObject","arrayOfString","commaSeparated"]}],"react-rsuite5":[{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"input-number":{"label":"Input number","category":"general","name":"input-number","description":"Basic input number field, returns a numeric value","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"allowClear","type":"boolean"},{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"inside","type":"boolean","description":"Show prefix and postfix inside the input box"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"variant","type":"string","options":["outlined","filled","standard"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"floatingLabel","type":"boolean","description":"Show floating label for the control"},{"name":"disableUnderline","type":"boolean","description":"Disable underline in \\"filled\\" and \\"standard\\" variant"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"}],"react-bootstrap":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"floatingLabel","type":"boolean","description":"Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"},{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"}],"react-antd":[{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"},{"name":"showControls","type":"boolean","description":"Whether to show +- controls, or set custom arrows icon"},{"name":"stringMode","type":"boolean","description":"Set value as string to support high precision decimals. Will return string value by onChange"},{"name":"bordered","type":"boolean"},{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"tooltip","type":"boolean"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"slider":{"label":"Slider","category":"general","name":"slider","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"},{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"},{"name":"vertical","type":"boolean"},{"name":"progress","type":"boolean","description":"Show sliding progress bar"},{"name":"showTooltip","type":"boolean","description":"Whether to show Tooltip when sliding"},{"name":"graduated","type":"boolean"},{"name":"marks","type":"array","description":"Customize labels on the render ruler"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"valueLabelDisplay","type":"string","description":"How to show the value of the label","options":["auto","on","off"]},{"name":"showMarks","type":"boolean"},{"name":"customMarks","type":"array","description":"Customize labels on the render ruler"}],"react-bootstrap":[{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"}],"react-antd":[{"name":"keyboard","type":"boolean","description":"Support using keyboard to move handlers"},{"name":"dots","type":"boolean","description":"Whether the thumb can drag over tick only"},{"name":"reverse","type":"boolean","description":"Reverse the component"},{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"},{"name":"tooltipOpen","type":"boolean","description":"Tooltip behaviour, checked always open, unchecked always close"},{"name":"tooltipPlacement","type":"string","options":["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","topLeft","topRight","leftTop","leftBottom","rightTop","rightBottom"]},{"name":"marks","type":"array","description":"Customize labels on the render ruler"},{"name":"included","type":"boolean","description":"Make effect when marks not null, true means containment and false means coordinative"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"date":{"label":"Date","category":"general","description":"Date field, returns a string in ISO-8601 format (i.e., 1972-10-01)","name":"date","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"format","type":"string","description":"Check https://date-fns.org library for available formats"},{"name":"block","type":"boolean","description":"Only in fluid layout"},{"name":"cleanable","type":"boolean"},{"name":"editable","type":"boolean","description":"Rendered as an input, the date can be entered via the keyboard"},{"name":"oneTap","type":"boolean","description":"One click to complete the selection date"},{"name":"showMeridian","type":"boolean","description":"Display hours in 12 format"},{"name":"showWeekNumbers","type":"boolean"},{"name":"isoWeek","type":"boolean","description":"ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day"},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"appearance","type":"string","options":["default","subtle"]},{"name":"placement","type":"string","options":["topStart","topEnd","leftStart","rightStart","leftEnd","rightEnd","bottomStart","bottomEnd","auto","autoVerticalStart","autoVerticalEnd","autoHorizontalStart","autoHorizontalEnd"]}],"react-material-ui":[{"name":"format","type":"string","description":"Date format, i.e. DD/MM/YYYY"},{"name":"fullWidth","type":"boolean","description":"Set the width of the container field to 100%"},{"name":"disableFuture","type":"boolean"},{"name":"disableHighlightToday","type":"boolean"},{"name":"disableOpenPicker","type":"boolean"},{"name":"disablePast","type":"boolean"},{"name":"displayWeekNumber","type":"boolean"},{"name":"reduceAnimations","type":"boolean"},{"name":"showDaysOutsideCurrentMonth","type":"boolean"},{"name":"maxDate","type":"date"},{"name":"minDate","type":"date"},{"name":"views","type":"[string]","options":["day","month","year"]}],"react-bootstrap":[{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"floatingLabel","type":"boolean","description":"Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"bordered","type":"boolean"},{"name":"allowClear","type":"boolean"},{"name":"tooltip","type":"boolean"},{"name":"showTime","type":"boolean"},{"name":"showNow","type":"boolean","description":"Show now button"},{"name":"showToday","type":"boolean","description":"Show today button"},{"name":"placement","type":"string","options":["bottomLeft","bottomRight","topLeft","topRight"]},{"name":"format","type":"string","description":"Date format, i.e. DD/MM/YYYY"},{"name":"picker","type":"string","options":["date","week","month","quarter","year"]},{"name":"mode","type":"string","options":["time","date","month","year","decade"]}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"checkbox":{"label":"Checkbox","category":"general","name":"checkbox","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"indeterminate","type":"boolean","description":"Status can be indeterminate (null), cycle values trough false, inderminate, true"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"labelPlacement","type":"string","options":["top","start","bottom","end"]},{"name":"disableRipple","type":"boolean","description":"Disable CSS ripple effect"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"checkbox-group":{"label":"Checkbox Group","category":"general","name":"checkbox-group","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"options","type":"array"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"inline","type":"boolean"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"labelPlacement","type":"string","options":["top","start","bottom","end"]}],"react-bootstrap":[{"name":"inline","type":"boolean"},{"name":"reverse","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"radio-group":{"label":"Radio Group","category":"general","name":"radio-group","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"options","type":"array"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"inline","type":"boolean"},{"name":"appearance","type":"string","description":"Show as default radio control or stacked buttons","options":["default","picker"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"labelPlacement","type":"string","options":["top","start","bottom","end"]},{"name":"row","type":"boolean"}],"react-bootstrap":[{"name":"inline","type":"boolean"},{"name":"reverse","type":"boolean"}],"react-antd":[{"name":"optionType","type":"string","options":["default","button"]},{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"inline","type":"boolean"},{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"input-tag":{"label":"Tag Input","category":"general","name":"input-tag","description":"Input tags, create tags, returns an array of string","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"trigger","type":"[string]","description":"Set the trigger for creating tags","options":["Enter","Space","Comma"]},{"name":"block","type":"boolean","description":"Only in fluid layout"},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"frameworks":["react-rsuite5"]},"input-mask":{"label":"Input Mask","category":"general","name":"input-mask","description":"Masked input text","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"mask","type":"string","description":"Use ${d} - digits, ${D} - any non digits, ${a} - any non alpha chars, ${w} - any word chars "},{"name":"guide","type":"boolean"},{"name":"keepCharPositions","type":"boolean","description":"When true, adding or deleting characters will not affect the position of existing characters"},{"name":"showMask","type":"boolean","description":"When the input value is empty, the mask is displayed as a placeholder instead of a regular placeholder"},{"name":"placeholderChar","type":"string","description":"The placeholder character represents the fillable spot in the mask"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"inside","type":"boolean","description":"Show prefix and postfix inside the input box"},{"name":"postfix","type":"string","description":"Fixed trailing text"}],"frameworks":["react-rsuite5"]},"textarea":{"label":"Textarea","category":"general","name":"textarea","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"rows","type":"number"}],"react-rsuite5":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"rows","type":"number"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"variant","type":"string","options":["outlined","filled","standard"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"floatingLabel","type":"boolean","description":"Show floating label for the control"},{"name":"disableUnderline","type":"boolean","description":"Disable underline in \\"filled\\" and \\"standard\\" variant"},{"name":"maxRows","type":"number"}],"react-bootstrap":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"rows","type":"number"}],"react-antd":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"showCount","type":"boolean"},{"name":"maxLength","type":"number"},{"name":"allowClear","type":"boolean"},{"name":"autoSize","type":"boolean"},{"name":"bordered","type":"boolean"},{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"rate":{"label":"Rate","category":"general","name":"rate","description":"Five stars rating field","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"allowHalf","type":"boolean"},{"name":"cleanable","type":"boolean"},{"name":"vertical","type":"boolean","description":"Vertical direction when half selected"},{"name":"max","type":"number"},{"name":"color","type":"string","options":["red","orange","yellow","green","cyan","blue","violet"]},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"precision","type":"string","description":"The minimum increment value change allowed","options":[0.1,0.2,0.5,1]},{"name":"max","type":"number"}],"react-antd":[{"name":"count","type":"number"},{"name":"allowHalf","type":"boolean","description":"Allow half votes"},{"name":"allowClear","type":"boolean"},{"name":"tooltips","type":"array","description":"Customize tooltip for each value"},{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react-antd"]},"placeholder":{"label":"Placeholder","category":"layout","name":"placeholder","description":"Generic placeholder for an image inside the form, supports basic parameters like width, height and margin","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"text","type":"string | i18n","description":"Supports markdown (i.e., **bold**, _italics_)"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-antd":[{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"multiselect":{"label":"MultiSelect","category":"general","name":"multiselect","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"options","type":"array"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"placement","type":"string","options":["topStart","topEnd","leftStart","rightStart","leftEnd","rightEnd","bottomStart","bottomEnd","auto","autoVerticalStart","autoVerticalEnd","autoHorizontalStart","autoHorizontalEnd"]},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"multiselectMode","type":"string","description":"Show the selected values as tag element or plain string","options":["tag","plain"]},{"name":"block","type":"boolean","description":"Only in fluid layout"},{"name":"searchable","type":"boolean"},{"name":"cleanable","type":"boolean"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"},{"name":"preventOverflow","type":"boolean","description":"Prevent floating element overflow"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"autoWidth","type":"boolean","description":"If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input."},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"floatingLabel","type":"boolean","description":"Show floating label for the control"},{"name":"variant","type":"string","options":["outlined","filled","standard"]}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"width","type":"number"},{"name":"listHeight","type":"number","description":"Config popup height"},{"name":"allowClear","type":"boolean"},{"name":"bordered","type":"boolean"},{"name":"showSearch","type":"boolean","description":"Whether select is searchable"},{"name":"showArrow","type":"boolean","description":"Whether to show the drop-down arrow"},{"name":"virtual","type":"boolean"},{"name":"tooltip","type":"boolean"},{"name":"placement","type":"string","options":["bottomLeft","bottomRight","topLeft","topRight"]},{"name":"maxTagCount","type":"number","description":"Maximum number of selectable elements"},{"name":"maxTagPlaceholder","type":"string","description":"Placeholder to show when max number of element is reached"},{"name":"maxTagTextLength","type":"number","description":"Maximum length of text tags"}],"frameworks":["react-rsuite5","react-material-ui","react-antd"]},"multiselect-language":{"label":"Locales","category":"advanced","description":"Select one or more locales, returns an array (i.e. it-IT, en-GB, ...)","name":"multiselect-language","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"placement","type":"string","options":["topStart","topEnd","leftStart","rightStart","leftEnd","rightEnd","bottomStart","bottomEnd","auto","autoVerticalStart","autoVerticalEnd","autoHorizontalStart","autoHorizontalEnd"]},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"frameworks":["react-rsuite5"]},"placeholder-image":{"label":"Placeholder Image","category":"layout","name":"placeholder-image","description":"Image placeholder","common":[{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"align","type":"string","options":["left","center","right"]},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react":[{"name":"maxWidth","type":"number"},{"name":"maxHeight","type":"number"},{"name":"marginTop","type":"number"},{"name":"marginBottom","type":"number"}],"react-rsuite5":[{"name":"maxWidth","type":"number"},{"name":"maxHeight","type":"number"},{"name":"marginTop","type":"number"},{"name":"marginBottom","type":"number"}],"react-material-ui":[{"name":"maxWidth","type":"number"},{"name":"maxHeight","type":"number"},{"name":"marginTop","type":"number"},{"name":"marginBottom","type":"number"}],"react-bootstrap":[{"name":"maxWidth","type":"number"},{"name":"maxHeight","type":"number"},{"name":"marginTop","type":"number"},{"name":"marginBottom","type":"number"}],"react-antd":[{"name":"maxWidth","type":"number"},{"name":"maxHeight","type":"number"},{"name":"marginTop","type":"number"},{"name":"marginBottom","type":"number"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"button":{"label":"Button","category":"layout","description":"Icon button, can be used as toggle button or just a link button","name":"button","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"buttonType","type":"string","description":"Type of button: toggle 2-states button or link button","options":["toggle","link"]},{"name":"labelOn","type":"string | i18n"},{"name":"iconOn","type":"string"},{"name":"labelOff","type":"string | i18n"},{"name":"iconOff","type":"string"},{"name":"initialValue","type":"boolean"},{"name":"labelLink","type":"string | i18n"},{"name":"iconLink","type":"string"},{"name":"href","type":"string"},{"name":"hint","type":"string | i18n","description":"Show hint in a tooltip"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"appearance","type":"string","description":"Only available for link-type buttons","options":["default","primary","subtle","link","ghost"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"variant","type":"string","options":["outlined","filled","standard"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]}],"react-bootstrap":[{"name":"variant","type":"string","options":["primary","secondary","success","warning","danger","info","light","dark","link"]},{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"type","type":"string","description":"Only available for link-type buttons","options":["primary","default","dashed","text","link"]}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"divider":{"label":"Divider","category":"layout","description":"Layout divider, customizable with size and color","name":"divider","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"size","type":"number","description":"Thickness of the divider"},{"name":"color","type":"string"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"datetime":{"label":"Date Time","category":"general","name":"datetime","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"format","type":"string","description":"Check https://date-fns.org library for available formats"},{"name":"block","type":"boolean","description":"Only in fluid layout"},{"name":"cleanable","type":"boolean"},{"name":"editable","type":"boolean","description":"Rendered as an input, the date can be entered via the keyboard"},{"name":"oneTap","type":"boolean","description":"One click to complete the selection date"},{"name":"showMeridian","type":"boolean","description":"Display hours in 12 format"},{"name":"showWeekNumbers","type":"boolean"},{"name":"isoWeek","type":"boolean","description":"ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day"},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"appearance","type":"string","options":["default","subtle"]},{"name":"placement","type":"string","options":["topStart","topEnd","leftStart","rightStart","leftEnd","rightEnd","bottomStart","bottomEnd","auto","autoVerticalStart","autoVerticalEnd","autoHorizontalStart","autoHorizontalEnd"]}],"react-material-ui":[{"name":"format","type":"string","description":"Date format, i.e. DD/MM/YYYY"},{"name":"fullWidth","type":"boolean","description":"Set the width of the container field to 100%"},{"name":"disableFuture","type":"boolean"},{"name":"disableHighlightToday","type":"boolean"},{"name":"disableOpenPicker","type":"boolean"},{"name":"disablePast","type":"boolean"},{"name":"displayWeekNumber","type":"boolean"},{"name":"reduceAnimations","type":"boolean"},{"name":"showDaysOutsideCurrentMonth","type":"boolean"},{"name":"maxDate","type":"date"},{"name":"minDate","type":"date"},{"name":"views","type":"[string]","options":["hours","minutes","seconds","day","month","year"]}],"react-bootstrap":[{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"floatingLabel","type":"boolean","description":"Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"bordered","type":"boolean"},{"name":"allowClear","type":"boolean"},{"name":"tooltip","type":"boolean"},{"name":"showNow","type":"boolean","description":"Show now button"},{"name":"showToday","type":"boolean","description":"Show today button"},{"name":"placement","type":"string","options":["bottomLeft","bottomRight","topLeft","topRight"]},{"name":"format","type":"string","description":"Date format, i.e. DD/MM/YYYY"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"tabs":{"label":"Tabs","category":"layout","description":"Layout component for tabs","name":"tabs","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"tabs","type":"array"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"appearance","type":"string","options":["default","tabs","subtle"]},{"name":"reversed","type":"boolean"},{"name":"justified","type":"boolean"}],"react-material-ui":[{"name":"indicatorColor","type":"string","options":["primary","secondary"]},{"name":"textColor","type":"string","options":["primary","secondary","inherit"]},{"name":"centered","type":"boolean","description":"If true, the tabs are centered. This prop is intended for large views"},{"name":"fullWidth","type":"boolean","description":"Will make the tabs grow to use all the available space"}],"react-bootstrap":[{"name":"variant","type":"string","options":["tabs","pills","underline"]},{"name":"transition","type":"boolean","description":"Sets a default animation strategy for all children"},{"name":"fill","type":"boolean","description":"Have all Tabss proportionately fill all available width"},{"name":"justify","type":"boolean","description":"Have all Tabs evenly fill all available width"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","middle","large"]},{"name":"tabType","type":"string","options":["line","card"]},{"name":"animated","type":"boolean"},{"name":"centered","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"radio-tile":{"label":"Radio Tile","description":"Radio control with card, description and icon","category":"general","name":"radio-tile","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"options","type":"array"},{"name":"initalOption","type":"string"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"inline","type":"boolean","description":"Use inline layout"},{"name":"iconWidth","type":"number"},{"name":"iconHeight","type":"number"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"frameworks":["react-rsuite5"]},"upload":{"label":"Upload","category":"general","name":"upload","description":"Upload file control, returns an array of json with file info and blob","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"accept","type":"array","description":"Accepted files, file extension or mime type: .doc, .pdf, video/*, image/png, etc. "},{"name":"listType","type":"string","options":["text","picture-text","picture"]},{"name":"maxPreviewFileSize","type":"number","description":"Set the maximum limit for preview files"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"},{"name":"fileListVisible","type":"boolean"},{"name":"disabledFileItem","type":"boolean"},{"name":"multiple","type":"boolean","description":"Allow selecting multiple files"},{"name":"removable","type":"boolean"},{"name":"draggable","type":"boolean"},{"name":"uploadButtonLabel","type":"string | i18n"},{"name":"uploadButtonAppearance","type":"string","options":["default","primary","subtle","link","ghost"]},{"name":"uploadButtonSize","type":"string","options":["lg","md","sm","xs"]},{"name":"draggableText","type":"string | i18n"},{"name":"draggableHeight","type":"number"}],"react-antd":[{"name":"accept","type":"array","description":"Accepted files, file extension or mime type: .doc, .pdf, video/*, image/png, etc. "},{"name":"multiple","type":"boolean","description":"Allow selecting multiple files"},{"name":"listType","type":"string","description":"Built-in stylesheets, support for four types: text, picture, picture-card or picture-circle","options":["text","picture","picture-card","picture-circle"]},{"name":"maxCount","type":"number"},{"name":"showUploadList","type":"boolean"},{"name":"uploadButtonLabel","type":"string | i18n"},{"name":"uploadButtonAppearance","type":"string","options":["primary","default","dashed","text","link"]},{"name":"uploadButtonSize","type":"string","options":["small","default","large"]},{"name":"draggable","type":"boolean"},{"name":"draggableText","type":"string | i18n"},{"name":"draggableHeight","type":"number"},{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-antd"]},"buttons-toggle-group":{"label":"Toggle Buttons","category":"layout","description":"List of toggle buttons, works like a radio group, returns an array of string","name":"buttons-toggle-group","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"options","type":"array"},{"name":"multiple","type":"boolean","description":"Allow to select multiple values"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]}],"frameworks":["react-rsuite5","react-antd"]}}');
;// CONCATENATED MODULE: ./helpers/validate-form.js




function validate_form_toConsumableArray(arr) { return validate_form_arrayWithoutHoles(arr) || validate_form_iterableToArray(arr) || validate_form_unsupportedIterableToArray(arr) || validate_form_nonIterableSpread(); }
function validate_form_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function validate_form_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return validate_form_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return validate_form_arrayLikeToArray(o, minLen); }
function validate_form_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function validate_form_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return validate_form_arrayLikeToArray(arr); }
function validate_form_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var LAYOUT_FIELDS = ['group', 'two-columns', 'three-columns'];
var validateJSONForm = function validateJSONForm(json) {
  if (!isObject_default()(json)) {
    return 'Not a valid JSON object';
  }
  if (!json.version || !isNumber_default()(json.version)) {
    return 'Not a valid LetsForm object, missing "version" value';
  }
  if (isEmpty_default()(json.fields)) {
    return 'Missing or empty "fields" value';
  }

  // check that all fields have component key
  var missingComponentFields = filterFields(json.fields, function (field) {
    return isEmpty_default()(field.component);
  });
  if (!isEmpty_default()(missingComponentFields)) {
    return 'All fields must includes a "component" key (' + missingComponentFields.length + ' incorrect json objects) ';
  }

  // check all non layouts fields have "name" key
  var missingNameFields = filterFields(json.fields, function (field) {
    return !LAYOUT_FIELDS.includes(field.component) && isEmpty_default()(field.name);
  });
  if (!isEmpty_default()(missingNameFields)) {
    return 'Fields (excepts layouts fields like "group") must have a "name" key, check these fields/components: ' + uniq_default()(missingNameFields.map(function (field) {
      return field.component;
    }));
  }

  // collect all component names and check they exists
  var usedComponets = uniq_default()(reduceFields(json.fields, function (field, acc) {
    return [].concat(validate_form_toConsumableArray(acc), [field.component]);
  }, []));
  var availableComponents = Object.keys(manifest_namespaceObject);
  var unknownCommponents = usedComponets.filter(function (component) {
    return !availableComponents.includes(component);
  });
  if (unknownCommponents.length !== 0) {
    return 'Form contains unknows component(s): ' + unknownCommponents.join(', ');
  }
  return null;
};

;// CONCATENATED MODULE: ./helpers/index-export.js










})();

exports["lets-form-helpers"] = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=lets-form-helpers.min.js.map