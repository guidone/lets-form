/* LetsForm Generator v0.12.4 - ESM */
import React, { useRef, useEffect } from 'react';
import { Whisper, Popover } from 'rsuite';

var POPOVER_STYLE = {
  padding: '6px',
  color: '#ff6633'
};
var RSuite5FieldControl = function RSuite5FieldControl(_ref) {
  var errorMessage = _ref.errorMessage,
    children = _ref.children;
  var triggerRef = useRef();
  useEffect(function () {
    if (errorMessage) {
      triggerRef.current.open();
    } else {
      triggerRef.current.close();
    }
  }, [errorMessage]);
  return /*#__PURE__*/React.createElement(Whisper, {
    placement: "bottomStart",
    ref: triggerRef,
    trigger: "none",
    speaker: /*#__PURE__*/React.createElement(Popover, {
      style: POPOVER_STYLE,
      visible: !!errorMessage,
      className: "lf-react-rsuite5-error-popover"
    }, /*#__PURE__*/React.createElement("div", null, errorMessage))
  }, children);
};

export { RSuite5FieldControl as R };
