/* LetsForm Generator v0.7.16 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, d as _slicedToArray, r as _isEmpty, b as _extends, k as _isArray, p as passRest } from './index-1bLsmo1d.js';
import React, { useState, useCallback } from 'react';
import { Form, Uploader, Button } from 'rsuite';
import { R as RequiredIcon } from './index-Bq32ExY-.js';
import 'react-hook-form';

var css_248z = ".lf-control-upload .upload-layout {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n.lf-control-upload .upload-layout .upload {\n  order: 0;\n  flex: 0 0 auto;\n  align-self: auto;\n}\n.lf-control-upload .upload-layout .hint {\n  margin-left: var(--lf-field-column-margin);\n  order: 0;\n  flex: 1 0 auto;\n  align-self: auto;\n}";
styleInject(css_248z);

var _excluded = ["superDisabled", "superSize", "disabled", "hint"],
  _excluded2 = ["name", "label", "hint", "tooltip", "required", "onChange", "multiple", "removable", "disabledFileItem", "fileListVisible", "draggable", "disabled", "accept", "defaultValue", "listType", "uploadButtonLabel", "uploadButtonAppearance", "uploadButtonSize", "draggableText", "draggableHeight", "value"];
var makeDefaultValue = function makeDefaultValue(defaultValue) {
  if (_isArray(defaultValue)) {
    return defaultValue;
  } else if (defaultValue != null) {
    return [defaultValue];
  }
  return [];
};

// shield props component or the uploaded will replace the disabled prop
var ShieldedButton = function ShieldedButton(_ref) {
  var superDisabled = _ref.superDisabled,
    superSize = _ref.superSize;
    _ref.disabled;
    var hint = _ref.hint,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner = /*#__PURE__*/React.createElement(Button, _extends({}, rest, {
    size: superSize,
    disabled: superDisabled
  }));
  if (hint) {
    return /*#__PURE__*/React.createElement("div", {
      className: "upload-layout"
    }, /*#__PURE__*/React.createElement("div", {
      className: "upload"
    }, inner), /*#__PURE__*/React.createElement("div", {
      className: "hint"
    }, hint));
  }
  return inner;
};
var Upload = I18N(function (_ref2) {
  var name = _ref2.name,
    label = _ref2.label,
    hint = _ref2.hint,
    tooltip = _ref2.tooltip,
    required = _ref2.required,
    onChange = _ref2.onChange,
    multiple = _ref2.multiple,
    removable = _ref2.removable,
    disabledFileItem = _ref2.disabledFileItem,
    fileListVisible = _ref2.fileListVisible,
    draggable = _ref2.draggable,
    disabled = _ref2.disabled,
    accept = _ref2.accept;
    _ref2.defaultValue;
    var listType = _ref2.listType,
    uploadButtonLabel = _ref2.uploadButtonLabel,
    uploadButtonAppearance = _ref2.uploadButtonAppearance,
    uploadButtonSize = _ref2.uploadButtonSize,
    draggableText = _ref2.draggableText,
    _ref2$draggableHeight = _ref2.draggableHeight,
    draggableHeight = _ref2$draggableHeight === void 0 ? 200 : _ref2$draggableHeight,
    value = _ref2.value,
    rest = _objectWithoutProperties(_ref2, _excluded2);
  var _useState = useState(makeDefaultValue(value)),
    _useState2 = _slicedToArray(_useState, 2),
    currentValue = _useState2[0],
    setCurrentValue = _useState2[1];
  var handleChange = useCallback(function (fileList) {
    setCurrentValue(fileList);
    if (multiple) {
      onChange(fileList);
    } else {
      onChange(!_isEmpty(fileList) ? fileList[0] : null);
    }
  }, [multiple, onChange]);
  var inner;
  if (draggable) {
    inner = /*#__PURE__*/React.createElement("div", {
      style: {
        height: draggableHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", null, draggableText || 'Click or Drag files to this area to upload'));
  } else {
    inner = /*#__PURE__*/React.createElement(ShieldedButton, {
      appearance: uploadButtonAppearance,
      superSize: uploadButtonSize,
      superDisabled: disabled || !multiple && !_isEmpty(value),
      hint: !tooltip && hint
    }, uploadButtonLabel || 'Upload');
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-upload",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(Uploader, _extends({
    autoUpload: false,
    action: "",
    accept: _isArray(accept) ? accept.join(',') : accept,
    multiple: multiple,
    removable: removable,
    draggable: draggable,
    disabled: disabled,
    fileListVisible: fileListVisible,
    disabledFileItem: disabledFileItem,
    fileList: currentValue,
    listType: listType,
    onChange: handleChange
  }, passRest(rest)), inner), hint && draggable && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder', 'uploadButtonLabel', 'draggableText']);
lfLog('Loaded RSuite.Upload');

export { Upload as default };
