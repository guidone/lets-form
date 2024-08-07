/* LetsForm Generator v0.10.2 - ESM */
import { s as styleInject, I as I18N, l as lfLog, k as _isArray, n as _isObject, d as _slicedToArray, _ as _isString, H as _toConsumableArray } from './index-BLtO_gT8.js';
import React, { useCallback, useId, useState } from 'react';
import { R as RequiredIcon } from './index-ChdJMNzj.js';
import { C as CrossCirle } from './cross-circle-BuJKwduq.js';
import { I as IconAttachment, f as formatBytes, L as LetfDotsWithFixedRight } from './attachment-DLDdesup.js';
import 'react-hook-form';

var css_248z = ".lf-control-upload .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n}\n.lf-control-upload .MuiButton-sizeLarge .lf-icon {\n  max-width: 22px;\n  max-height: 22px;\n}\n.lf-control-upload .MuiButton-sizeSmall .lf-icon {\n  max-width: 18px;\n  max-height: 18px;\n}\n.lf-control-upload .lf-upload-button-layout {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n.lf-control-upload .lf-upload-button-layout .lf-upload-button-left {\n  order: 0;\n  flex: 0 0 auto;\n  align-self: auto;\n}\n.lf-control-upload .lf-upload-button-layout .lf-upload-button-right {\n  order: 0;\n  flex: 1 0;\n  overflow: hidden;\n  align-self: auto;\n  margin-left: var(--lf-field-margin);\n}\n.lf-control-upload .lf-upload-file-list {\n  margin-top: 10px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n}\n.lf-control-upload .lf-upload-file-list .lf-upload-file-item {\n  padding: 4px 0px;\n}\n.lf-control-upload .lf-upload-file-list .lf-upload-file-item:hover {\n  background-color: #eeeeee;\n}\n.lf-control-upload .lf-upload-file-item {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n.lf-control-upload .lf-upload-file-item .lf-attachment-icon {\n  flex: 0 0;\n  align-self: auto;\n  margin-right: 5px;\n}\n.lf-control-upload .lf-upload-file-item .lf-clear-button {\n  flex: 0 0;\n  align-self: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-size: 1px;\n}\n.lf-control-upload .lf-upload-file-item .lf-name {\n  flex: 1 0;\n  align-self: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lf-control-upload .lf-upload-file-item .lf-size {\n  flex: 0 0 auto;\n  align-self: auto;\n  margin-left: 5px;\n  color: #888888;\n}\n.lf-control-upload .lf-size {\n  color: #888888;\n}";
styleInject(css_248z);

var FileItem = function FileItem(_ref) {
  var file = _ref.file,
    _ref$onRemove = _ref.onRemove,
    onRemove = _ref$onRemove === void 0 ? function () {} : _ref$onRemove;
  var handleClick = useCallback(function (e) {
    e.preventDefault();
    onRemove(file);
  }, [onRemove, file]);
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-upload-file-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-attachment-icon"
  }, /*#__PURE__*/React.createElement(IconAttachment, {
    width: 16,
    height: 16,
    color: "#666666"
  })), /*#__PURE__*/React.createElement("div", {
    className: "lf-name"
  }, file.name), /*#__PURE__*/React.createElement("div", {
    className: "lf-size"
  }, formatBytes(file.size)), /*#__PURE__*/React.createElement("a", {
    className: "lf-clear-button",
    href: "#",
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(CrossCirle, {
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
    required = _ref.required;
  var uploadButtonId = useId();
  var _useState = useState(multiple && _isArray(value) || !multiple && _isObject(value) ? value : undefined),
    _useState2 = _slicedToArray(_useState, 2),
    currentFile = _useState2[0],
    setCurrentFile = _useState2[1];
  var hasError = error && _isString(error);
  var handleClear = useCallback(function (e) {
    e.preventDefault();
    setCurrentFile(null);
    onChange(null);
  }, [onChange]);
  var handleRemove = useCallback(function (fileToRemove) {
    var newCurrentFile = currentFile.filter(function (file) {
      return file !== fileToRemove;
    });
    setCurrentFile(newCurrentFile);
    onChange(newCurrentFile);
  }, [currentFile, onChange]);
  var handleChange = useCallback(function (e) {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-upload",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React.createElement("label", {
    for: name
  }, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "lf-upload-button-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-upload-button-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lf-form-react-primary-button",
    for: uploadButtonId
  }, uploadButtonLabel || 'Upload'), /*#__PURE__*/React.createElement("input", {
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
  })), /*#__PURE__*/React.createElement("div", {
    className: "lf-upload-button-right"
  }, !multiple && currentFile && /*#__PURE__*/React.createElement(LetfDotsWithFixedRight, {
    left: /*#__PURE__*/React.createElement("span", {
      className: "lf-upload-file-name"
    }, currentFile.name),
    right: /*#__PURE__*/React.createElement(React.Fragment, null, "\xA0", /*#__PURE__*/React.createElement("span", {
      className: "lf-size"
    }, formatBytes(currentFile.size)), "\xA0", /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: handleClear
    }, /*#__PURE__*/React.createElement(CrossCirle, {
      color: "#666666",
      yOffset: 2,
      width: 16,
      height: 16
    })))
  }))), hint && !hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-message"
  }, hint), hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-error-message"
  }, error), multiple && currentFile && /*#__PURE__*/React.createElement("div", {
    className: "lf-upload-file-list"
  }, currentFile.map(function (file) {
    return /*#__PURE__*/React.createElement(FileItem, {
      file: file,
      key: file.name,
      onRemove: handleRemove
    });
  })));
}, ['label', 'uploadButtonLabel', 'hint']);
lfLog('Loaded React.Upload');
var Upload$1 = Upload;

export { Upload$1 as default };
