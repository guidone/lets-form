/* LetsForm Generator v0.10.4 - ESM */
import { s as styleInject, q as LOCALES, F as FormContext, n as _isObject, r as _isEmpty, _ as _isString, d as _slicedToArray, t as _omit, o as _objectSpread2, g as _defineProperty, e as classNames, l as lfLog, u as isI18n, a as _objectWithoutProperties, b as _extends } from './index-6qJf7V-N.js';
import React$1, { useContext, useState, useCallback, forwardRef } from 'react';
import { Form, InputGroup, SelectPicker, Input } from 'rsuite';
import { R as RequiredIcon } from './index-BfEPZ2mR.js';
import TextInput from './index-6_nyh5KH.js';
import Textarea from './index-ByRRAdlh.js';
import { R as RSuite5FieldControl } from './index-DtX0KdlB.js';
import 'react-hook-form';
import './index-D0ioTeR9.js';

var IconCheck = function IconCheck(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height;
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Interface / Check"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Vector",
    d: "M6 12L10.2426 16.2426L18.727 7.75732",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var css_248z = ".lf-input-text-i18n-item-locale {\n  font-size: 0.9em;\n}\n\n.lf-input-text-i18n .rs-input-group-addon {\n  padding: 2px 4px !important;\n}\n.lf-input-text-i18n .rs-input-group-addon .status {\n  font-size: 10px;\n}\n.lf-input-text-i18n .rs-input-group-addon .btn-clear {\n  display: inline-block;\n  margin-left: 5px;\n  margin-top: -2px;\n  color: #666666;\n  text-decoration: none;\n}\n.lf-input-text-i18n .rs-input-group-addon .btn-clear:hover {\n  color: #1675e0;\n}\n.lf-input-text-i18n .group-input-select {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: flex-start;\n}\n.lf-input-text-i18n .group-input-select .translation-control {\n  order: 0;\n  flex: 1 0;\n  align-self: auto;\n  width: unset !important;\n  z-index: 1;\n}\n.lf-input-text-i18n .group-input-select .translation-control .translated {\n  color: #999999;\n}\n.lf-input-text-i18n .group-input-select .select-control {\n  order: 1;\n  flex: 0 0;\n  align-self: center;\n  z-index: 2;\n  margin-left: 5px;\n}\n.lf-input-text-i18n .group-input-select.textarea .rs-input-group-addon {\n  position: absolute;\n  right: 2px;\n  top: 3px;\n}\n.lf-input-text-i18n .group-input-select.textarea textarea {\n  resize: none;\n}\n.lf-input-text-i18n .group-input-select.textarea .select-control {\n  align-self: self-start;\n}";
styleInject(css_248z);

var _excluded = ["value"];
var LANGUAGES_OPTIONS = Object.keys(LOCALES['language-names']).map(function (lang) {
  return {
    value: lang,
    name: LOCALES['language-names'][lang][1],
    label: LOCALES['language-names'][lang][1]
  };
});
var languageMenuItem = function languageMenuItem(label, item) {
  return /*#__PURE__*/React$1.createElement("div", {
    className: "lf-input-text-i18n-item-locale"
  }, item.label, " ", /*#__PURE__*/React$1.createElement("b", null, item.value), item.filled && /*#__PURE__*/React$1.createElement(IconCheck, {
    width: 16,
    height: 16
  }));
};
var TextareaAccepter = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React$1.createElement(Input, _extends({
    ref: ref,
    as: "textarea",
    value: value
  }, props));
});
var defaultOrEnglish = function defaultOrEnglish(obj) {
  if (isI18n(obj)) {
    if (obj['en-US']) {
      return obj['en-US'];
    } else if (obj['en-GB']) {
      return obj['en-GB'];
    } else if (Object.keys(obj).length !== 0) {
      return obj[Object.keys(obj)[0]];
    }
    return '';
  }
  return obj;
};
var InputTextI18N = function InputTextI18N(props) {
  var name = props.name,
    label = props.label,
    hint = props.hint,
    value = props.value,
    size = props.size,
    placeholder = props.placeholder,
    _props$tooltip = props.tooltip,
    tooltip = _props$tooltip === void 0 ? false : _props$tooltip,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    width = props.width,
    error = props.error,
    _onChange = props.onChange,
    onBlur = props.onBlur,
    defaultLocale = props.defaultLocale,
    _props$textarea = props.textarea,
    textarea = _props$textarea === void 0 ? false : _props$textarea,
    rows = props.rows;
  var _useContext = useContext(FormContext),
    _useContext$locales = _useContext.locales,
    locales = _useContext$locales === void 0 ? [] : _useContext$locales;
  var preselectedLanguage = null;
  if (_isObject(value)) {
    // preselect a value in the drop down of the language only if there's a i18n object
    // in value, otherwise is a simple string and by definition is not associated with any
    // language
    if (defaultLocale && locales.includes(defaultLocale)) {
      preselectedLanguage = defaultLocale;
    } else if (!_isEmpty(locales)) {
      preselectedLanguage = locales[0];
    }
  }
  var preselectedValue = null;
  if (_isObject(value)) {
    preselectedValue = preselectedLanguage ? value[preselectedLanguage] : null;
  } else if (_isString(value)) {
    preselectedValue = value;
  }
  var totalLocales = !_isEmpty(locales) ? locales.length : LANGUAGES_OPTIONS.length;
  var _useState = useState(preselectedLanguage),
    _useState2 = _slicedToArray(_useState, 2),
    currentLanguage = _useState2[0],
    setCurrentLanguage = _useState2[1];
  var _useState3 = useState(value),
    _useState4 = _slicedToArray(_useState3, 2),
    currentValue = _useState4[0],
    setCurrentValue = _useState4[1];
  var _useState5 = useState(preselectedValue),
    _useState6 = _slicedToArray(_useState5, 2),
    translation = _useState6[0],
    setTranslation = _useState6[1];
  var handleChange = useCallback(function (value) {
    // update the UI
    setTranslation(value);
    if (_isEmpty(value)) {
      // in case the user entered an empty value...
      if (_isObject(currentValue) && currentLanguage) {
        // if i18n object and a language is selected, then void the value for that language
        var newCurrentValue = _omit(currentValue, currentLanguage);
        setCurrentValue(newCurrentValue);
        _onChange(newCurrentValue);
      } else if (_isString(currentValue)) {
        setCurrentValue(value);
        _onChange(value);
      }
    } else {
      // in case the user entered a non empty value...
      if (currentLanguage) {
        // if a current language is selected, then the typed text ends up
        // in a i18n object
        var _newCurrentValue = _objectSpread2(_objectSpread2({}, currentValue), {}, _defineProperty({}, currentLanguage, value));
        setCurrentValue(_newCurrentValue);
        _onChange(_newCurrentValue);
        //setTranslation(value);
      } else if (_isObject(currentValue)) ; else {
        // if language not selected and current value is not an object
        // just set the current value as string
        //setTranslation(value);
        setCurrentValue(value);
        _onChange(value);
      }
    }
  }, [currentLanguage, currentValue, _onChange]);

  // if no locales, then use plain input text, since it's possible the the value is still
  // a 18n (in case the user switched from a multi language form to a single language form
  // then put some defaults)
  if (_isEmpty(locales)) {
    var newProps = _objectSpread2(_objectSpread2({}, props), {}, {
      value: defaultOrEnglish(value)
    });
    return textarea ? /*#__PURE__*/React$1.createElement(Textarea, newProps) : /*#__PURE__*/React$1.createElement(TextInput, newProps);
  }
  // evaluate current translated locales
  var translatedLocales = _isObject(currentValue) ? Object.keys(currentValue).filter(function (locale) {
    return _isEmpty(locales) || locales.includes(locale);
  }) : [];
  var multiValuesAndNoLang = _isObject(currentValue) && Object.keys(currentValue).length !== 0 && !currentLanguage;
  var languageData = LANGUAGES_OPTIONS.filter(function (item) {
    return _isEmpty(locales) || locales.includes(item.value);
  }).map(function (item) {
    return _objectSpread2(_objectSpread2({}, item), {}, {
      filled: currentValue && !_isEmpty(currentValue[item.value])
    });
  });
  var InputComponent = textarea ? TextareaAccepter : Input;
  return /*#__PURE__*/React$1.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-input-text-i18n lf-input-text-i18n"
  }, label && /*#__PURE__*/React$1.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React$1.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React$1.createElement(RequiredIcon, null)), /*#__PURE__*/React$1.createElement("div", {
    className: classNames('group-input-select', {
      'textarea': textarea
    })
  }, /*#__PURE__*/React$1.createElement(InputGroup, {
    className: "translation-control",
    inside: true
  }, /*#__PURE__*/React$1.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React$1.createElement(InputComponent, {
    name: name,
    rows: rows,
    style: width ? {
      width: "".concat(width, "px")
    } : undefined,
    value: multiValuesAndNoLang ? '<multiple translations>' : translation,
    readOnly: readOnly || multiValuesAndNoLang,
    onChange: handleChange,
    onBlur: onBlur,
    disabled: disabled,
    size: size,
    placeholder: placeholder
  })), /*#__PURE__*/React$1.createElement(InputGroup.Addon, null, /*#__PURE__*/React$1.createElement("span", {
    className: "status"
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "translated"
  }, translatedLocales.length), "\xA0/\xA0", /*#__PURE__*/React$1.createElement("span", null, totalLocales)))), /*#__PURE__*/React$1.createElement("div", {
    className: "select-control"
  }, /*#__PURE__*/React$1.createElement(SelectPicker, {
    appearance: "subtle",
    cleanable: false,
    size: "xs",
    readOnly: readOnly,
    value: currentLanguage,
    placement: "autoVerticalEnd",
    placeholder: "no tx",
    searchable: languageData.length > 20,
    renderValue: function renderValue(value) {
      return /*#__PURE__*/React$1.createElement("span", null, value);
    },
    renderMenuItem: languageMenuItem,
    onChange: function onChange(value) {
      if (_isString(currentValue) && !_isEmpty(currentValue)) {
        // if currentValue is a string and not empty,
        setCurrentLanguage(value);
        var newValue = _defineProperty({}, value, currentValue);
        setCurrentValue(newValue);
        _onChange(newValue);
      } else if (_isObject(currentValue)) {
        var _currentValue$value;
        // it's already a i18n object, just switch the language
        setCurrentLanguage(value);
        setTranslation((_currentValue$value = currentValue[value]) !== null && _currentValue$value !== void 0 ? _currentValue$value : '');
      } else {
        setCurrentLanguage(value);
      }
    },
    data: languageData
  }))), hint && !tooltip && /*#__PURE__*/React$1.createElement(Form.HelpText, null, hint));
};
lfLog('Loaded RSuite.InputTextI18N');

export { InputTextI18N as default };
