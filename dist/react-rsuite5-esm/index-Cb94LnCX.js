/* LetsForm react-rsuite5 v0.7.10 - ESM */
import { c as _castSlice, d as _hasUnicode, e as _stringToArray, t as toString_1, g as getDefaultExportFromCjs, h as _isNumber, j as _defineProperty, k as classNames, u as useFormContext, m as _slicedToArray, n as _toConsumableArray, o as _isArray, q as _omit, _ as _isString, r as collectNames, v as _isEmpty, w as fillIds, I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, L as LetsForm, p as passRest } from './index-CN7S9eQn.js';
import React, { useCallback, useState } from 'react';
import Form from 'rsuite/Form';
import { R as RequiredIcon } from './index-CZPPdDWK.js';

var PlusCircle = function PlusCircle(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color;
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
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
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H7Z"
  }));
};

var isEmptyItem = function isEmptyItem(obj) {
  return Object.keys(obj).filter(function (key) {
    return key !== 'id';
  }).every(function (key) {
    return obj[key] === null || obj[key] === undefined || obj[key] === '';
  });
};

var castSlice = _castSlice,
  hasUnicode = _hasUnicode,
  stringToArray = _stringToArray,
  toString$1 = toString_1;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst$1(methodName) {
  return function (string) {
    string = toString$1(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
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

var toString = toString_1,
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
  return upperFirst(toString(string).toLowerCase());
}
var capitalize_1 = capitalize;

var _capitalize = /*@__PURE__*/getDefaultExportFromCjs(capitalize_1);

var IconButton = function IconButton(_ref) {
  var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    className = _ref.className,
    Icon = _ref.icon,
    onClick = _ref.onClick;
  var handleClick = useCallback(function (e) {
    e.preventDefault();
    if (!disabled) {
      onClick();
    }
  }, [disabled, onClick]);
  return /*#__PURE__*/React.createElement("a", {
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
  var handleRemove = useCallback(function () {
    return onRemove(item);
  }, [item]);
  var style;
  if ((align === 'top' || align === 'bottom') && _isNumber(alignOffset) && alignOffset > 0) {
    style = _defineProperty({}, "margin".concat(_capitalize(align)), "".concat(alignOffset, "px"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-common-array-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner-form"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "buttons",
    style: style
  }, showAdd && /*#__PURE__*/React.createElement(IconButton, {
    disabled: disableAdd || disabled || readOnly,
    className: "arrow",
    appearance: "link",
    icon: /*#__PURE__*/React.createElement(PlusCircle, {
      height: 16,
      width: 16,
      color: "#3498ff"
    }),
    size: "sm",
    onClick: onAdd
  }), !showAdd && /*#__PURE__*/React.createElement(IconButton, {
    className: "arrow",
    disabled: disabled || readOnly,
    appearance: "link",
    icon: /*#__PURE__*/React.createElement(MinusCircle, {
      height: 16,
      width: 16,
      color: "#3498ff"
    }),
    size: "sm",
    onClick: handleRemove
  })));
};

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
        return _defineProperty({
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
        return _defineProperty({
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
    _ref3$onChange = _ref3.onChange,
    _onChange = _ref3$onChange === void 0 ? function () {} : _ref3$onChange,
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
    alignOffset = _ref3$alignOffset === void 0 ? 0 : _ref3$alignOffset;
  var _useFormContext = useFormContext(),
    locales = _useFormContext.locales;
  var form = {
    layout: layout,
    fluid: true,
    locales: locales,
    // copy the locales from the main form
    fields: fields
  };
  var _useState = useState(makeDefaultValue(value, arrayType, form)),
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
  var handleAdd = useCallback(function () {
    setItems(function (items) {
      return [].concat(_toConsumableArray(items), [{
        id: randomId()
      }]);
    });
  }, []);
  var handleRemove = useCallback(function (item) {
    var newItems = items.filter(function (i) {
      return i.id !== item.id;
    });
    setItems(newItems);
    _onChange(formatArray(newItems, arrayType));
  }, [items, _onChange, arrayType]);
  if (children) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0px 10px 1px 10px'
      }
    }, children);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('lf-control-common-array', align ? "lf-".concat(align) : undefined),
    style: style
  }, (_isArray(items) ? items : []).map(function (item, idx) {
    var canAdd = idx === items.length - 1 && !isEmptyItem(item);
    var showAdd = idx === items.length - 1 || items.length === 1;
    return /*#__PURE__*/React.createElement(ArrayItem, {
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
    }, /*#__PURE__*/React.createElement(LetsFormComponent, {
      form: form,
      locale: lfLocale,
      disabled: disabled,
      readOnly: readOnly,
      defaultValues: item,
      onlyFields: true,
      onChange: function onChange(value) {
        var newItems = items.map(function (i) {
          return i.id === value.id ? value : i;
        });
        setItems(newItems);
        _onChange(formatArray(newItems, arrayType));
      }
    }));
  }));
};

var _excluded = ["hint", "required", "tooltip", "name", "label"];
var ListArrayRSuite5 = I18N(function (_ref) {
  var hint = _ref.hint,
    required = _ref.required,
    tooltip = _ref.tooltip,
    name = _ref.name,
    label = _ref.label,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-array"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, passRest(rest))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint']);
lfLog('Loaded RSuite5.ListArray');

export { ListArrayRSuite5 as default };
