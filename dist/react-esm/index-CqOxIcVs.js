/* LetsForm react v0.7.19 - ESM */
import { s as styleInject, I as I18N, l as lfLog, w as _isArray, B as _isObject, v as _slicedToArray, b as _isString, g as _toConsumableArray } from './index-CAgWZbKc.js';
import React, { useCallback, useId, useState } from 'react';
import { R as RequiredIcon } from './index-DfdOZvZY.js';
import 'react-hook-form';

var CrossCirle = function CrossCirle(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color,
    _ref$yOffset = _ref.yOffset,
    yOffset = _ref$yOffset === void 0 ? 0 : _ref$yOffset;
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 ".concat(yOffset, " 24 24"),
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

function formatBytes(bytes) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (!+bytes) return '0 Bytes';
  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return "".concat(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), " ").concat(sizes[i]);
}

var css_248z$1 = ".lf-left-dots-with-fixed-right {\n  display: flex;\n  width: inherit;\n  overflow: hidden;\n}\n.lf-left-dots-with-fixed-right .lf-left-dots {\n  flex: 1 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n.lf-left-dots-with-fixed-right .lf-right-fixed {\n  flex: 0 0;\n  white-space: nowrap;\n}";
styleInject(css_248z$1);

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
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-left-dots-with-fixed-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-left-dots"
  }, left), /*#__PURE__*/React.createElement("div", {
    className: "lf-right-fixed"
  }, right));
};

var css_248z = ".lf-control-upload .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n}\n.lf-control-upload .MuiButton-sizeLarge .lf-icon {\n  max-width: 22px;\n  max-height: 22px;\n}\n.lf-control-upload .MuiButton-sizeSmall .lf-icon {\n  max-width: 18px;\n  max-height: 18px;\n}\n.lf-control-upload .lf-upload-button-layout {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n.lf-control-upload .lf-upload-button-layout .lf-upload-button-left {\n  order: 0;\n  flex: 0 0 auto;\n  align-self: auto;\n}\n.lf-control-upload .lf-upload-button-layout .lf-upload-button-right {\n  order: 0;\n  flex: 1 0;\n  overflow: hidden;\n  align-self: auto;\n  margin-left: var(--lf-field-margin);\n}\n.lf-control-upload .lf-upload-file-list {\n  margin-top: 10px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n}\n.lf-control-upload .lf-upload-file-list .lf-upload-file-item {\n  padding: 4px 0px;\n}\n.lf-control-upload .lf-upload-file-list .lf-upload-file-item:hover {\n  background-color: #eeeeee;\n}\n.lf-control-upload .lf-upload-file-item {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n.lf-control-upload .lf-upload-file-item .lf-attachment-icon {\n  flex: 0 0;\n  align-self: auto;\n  margin-right: 5px;\n}\n.lf-control-upload .lf-upload-file-item .lf-clear-button {\n  flex: 0 0;\n  align-self: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-size: 1px;\n}\n.lf-control-upload .lf-upload-file-item .lf-name {\n  flex: 1 0;\n  align-self: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lf-control-upload .lf-upload-file-item .lf-size {\n  flex: 0 0 auto;\n  align-self: auto;\n  margin-left: 5px;\n  color: #888888;\n}\n.lf-control-upload .lf-size {\n  color: #888888;\n}";
styleInject(css_248z);

var IconAttachment = function IconAttachment(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color;
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "-8 0 32 32",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Set",
    transform: "translate(-212.000000, -151.000000)",
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M226,155 L226,175 C226,178.313 223.313,181 220,181 C216.687,181 214,178.313 214,175 L214,157 C214,154.791 215.791,153 218,153 C220.209,153 222,154.791 222,157 L222,175 C222,176.104 221.104,177 220,177 C218.896,177 218,176.104 218,175 L218,159 L216,159 L216,175 C216,177.209 217.791,179 220,179 C222.209,179 224,177.209 224,175 L224,157 C224,153.687 221.313,151 218,151 C214.687,151 212,153.687 212,157 L212,176 C212.493,179.945 215.921,183 220,183 C224.079,183 227.507,179.945 228,176 L228,155 L226,155",
    id: "attachment"
  }))));
};

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
