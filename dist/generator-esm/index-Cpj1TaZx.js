/* LetsForm Generator v0.7.12 - ESM */
import React__default, { useRef, useEffect } from 'react';
import Whisper from 'rsuite/Whisper';
import Popover from 'rsuite/Popover';

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
  return /*#__PURE__*/React__default.createElement(Whisper, {
    placement: "bottomStart",
    ref: triggerRef,
    trigger: "none",
    speaker: /*#__PURE__*/React__default.createElement(Popover, {
      style: POPOVER_STYLE,
      visible: !!errorMessage,
      className: "lf-react-rsuite5-error-popover"
    }, /*#__PURE__*/React__default.createElement("div", null, errorMessage))
  }, children);
};

export { RSuite5FieldControl as R };
