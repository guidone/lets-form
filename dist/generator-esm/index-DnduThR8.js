/* LetsForm Generator v0.9.6 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, d as _slicedToArray, r as _isEmpty, E as _toConsumableArray, o as _objectSpread2, p as passRest, b as _extends, k as _isArray } from './index-coWQ6kHL.js';
import React, { useState, useCallback } from 'react';
import { Upload, Form, Button } from 'antd';
import 'react-hook-form';

var css_248z = ".lf-control-upload .upload-layout {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n.lf-control-upload .upload-layout .upload {\n  order: 0;\n  flex: 0 0 auto;\n  align-self: auto;\n}\n.lf-control-upload .upload-layout .hint {\n  margin-left: var(--lf-field-column-margin);\n  order: 0;\n  flex: 1 0 auto;\n  align-self: auto;\n}";
styleInject(css_248z);

var _excluded = ["hint"],
  _excluded2 = ["name", "accept", "draggable", "draggableText", "draggableHeight", "uploadButtonLabel", "error", "label", "hint", "tooltip", "required", "size", "disabled", "value", "multiple", "listType", "maxCount", "showUploadList", "uploadButtonSize", "uploadButtonAppearance", "onChange"];
var Dragger = Upload.Dragger;
var makeDefaultValue = function makeDefaultValue(defaultValue) {
  if (_isArray(defaultValue)) {
    return defaultValue;
  } else if (defaultValue != null) {
    return [defaultValue];
  }
  return [];
};

// convert to same format for all upload
var translatePayload = function translatePayload(files) {
  if (_isArray(files)) {
    return files.map(translatePayload);
  } else {
    return {
      blobFile: files,
      name: files.name,
      fileKey: files.uid
    };
  }
};
var ButtonWithHint = function ButtonWithHint(_ref) {
  var hint = _ref.hint,
    props = _objectWithoutProperties(_ref, _excluded);
  var inner = /*#__PURE__*/React.createElement(Button, props);
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
var AntDUpload = I18N(function (_ref2) {
  var name = _ref2.name,
    accept = _ref2.accept,
    draggable = _ref2.draggable,
    draggableText = _ref2.draggableText,
    draggableHeight = _ref2.draggableHeight,
    uploadButtonLabel = _ref2.uploadButtonLabel,
    error = _ref2.error,
    label = _ref2.label,
    hint = _ref2.hint,
    tooltip = _ref2.tooltip,
    required = _ref2.required;
    _ref2.size;
    var disabled = _ref2.disabled,
    value = _ref2.value,
    multiple = _ref2.multiple,
    listType = _ref2.listType,
    maxCount = _ref2.maxCount,
    showUploadList = _ref2.showUploadList,
    uploadButtonSize = _ref2.uploadButtonSize,
    uploadButtonAppearance = _ref2.uploadButtonAppearance,
    _ref2$onChange = _ref2.onChange,
    onChange = _ref2$onChange === void 0 ? function () {} : _ref2$onChange,
    rest = _objectWithoutProperties(_ref2, _excluded2);
  var _useState = useState(makeDefaultValue(value)),
    _useState2 = _slicedToArray(_useState, 2),
    currentValue = _useState2[0],
    setCurrentValue = _useState2[1];
  var disabledTooMany = multiple && maxCount && currentValue && currentValue.length >= maxCount || !multiple && !_isEmpty(value);
  var handlePropagate = useCallback(function (newFileList) {
    setCurrentValue(newFileList);
    if (multiple) {
      onChange(translatePayload(newFileList));
    } else {
      onChange(translatePayload(!_isEmpty(newFileList) ? newFileList[0] : null));
    }
  }, [multiple, onChange]);
  var handleChange = useCallback(function (file, fileList) {
    var newFileList = [].concat(_toConsumableArray(currentValue), [file]);
    handlePropagate(newFileList);
    return false;
  }, [currentValue, handlePropagate]);
  var handleRemove = useCallback(function (file) {
    var newFileList = currentValue.filter(function (f) {
      return f.uid !== file.uid;
    });
    handlePropagate(newFileList);
  }, [currentValue, handlePropagate]);
  var handleDrag = useCallback(function (e) {
    var newFileList = [].concat(_toConsumableArray(currentValue), _toConsumableArray(e.dataTransfer.files));
    handlePropagate(newFileList);
  }, [currentValue, handlePropagate]);
  var uploadProps = _objectSpread2({
    accept: accept,
    disabled: disabled,
    multiple: multiple,
    fileList: currentValue,
    maxCount: maxCount,
    showUploadList: showUploadList,
    beforeUpload: handleChange,
    onRemove: handleRemove
  }, passRest(rest));
  var inner;
  if (draggable) {
    inner = /*#__PURE__*/React.createElement(Dragger, _extends({}, uploadProps, {
      onDrop: handleDrag
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: draggableHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", null, draggableText || 'Click or Drag files to this area to upload')));
  } else {
    // TODO implementare il placeholder
    inner = /*#__PURE__*/React.createElement(Upload, uploadProps, /*#__PURE__*/React.createElement(ButtonWithHint, {
      disabled: disabled || disabledTooMany,
      type: uploadButtonAppearance,
      size: uploadButtonSize,
      hint: !tooltip && hint
    }, uploadButtonLabel || 'Upload'));
  }
  return /*#__PURE__*/React.createElement(Form.Item, {
    className: "lf-control-upload",
    "data-lf-field-name": name,
    listType: listType,
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip && draggable ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, inner);
}, ['label', 'hint', 'placeholder', 'uploadButtonLabel', 'draggableText']);
lfLog('Loaded AnttD.Upload');

export { AntDUpload as default };
