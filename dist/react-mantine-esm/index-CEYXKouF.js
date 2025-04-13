/* LetsForm react-mantine v0.13.0 - ESM */
import { n as lazyPreload, o as GenerateGenerator, _ as _objectWithoutProperties, a as _extends, s as styleInject, I as I18N, h as _slicedToArray, u as useFormContext, m as makeClassName, q as classNames, r as ChevronUp, t as ChevronDown, l as lfLog } from './index-DLdYirby.js';
import React, { forwardRef, useRef, useImperativeHandle, useState, useCallback, useMemo, useEffect } from 'react';

var _excluded = ["framework", "children"];
var Fields = {
  'input-text': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-BPN-jBNf.js');
    })
  },
  'select': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-BGRiG6OV.js');
    })
  },
  'checkbox': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-Bd73NFae.js');
    })
  },
  'toggle': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-DUCDiPCt.js');
    })
  },
  'checkbox-group': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-BpHbDilJ.js');
    })
  },
  'placeholder': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-CJ3tWko4.js');
    })
  },
  'placeholder-image': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-CTxMSXG1.js');
    })
  },
  'date': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-BzhZUl2M.js');
    })
  },
  'textarea': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-DO3rqxNi.js');
    })
  },
  'slider': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-BP3pB0Sd.js');
    })
  },
  'three-columns': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-B3J9Krck.js');
    })
  },
  'columns': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-BoSYuaYT.js');
    })
  },
  'two-columns': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-6pRTHIuW.js');
    })
  },
  'group': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-DxTUHSDs.js');
    })
  },
  'object': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-BUp7cGaN.js');
    })
  },
  'radio-group': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-D7imIxdJ.js');
    })
  },
  'divider': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-DLdYirby.js').then(function (n) { return n.aw; });
    })
  },
  'react-view': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-L4yXUL1_.js');
    })
  },
  'datetime': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-DV5osLQJ.js');
    })
  },
  'array': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-Dij9CbSf.js');
    })
  },
  'input-number': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-BRD3fyuz.js');
    })
  },
  'tabs': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-CBXNotkq.js');
    })
  },
  'button': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-BbHYu7t_.js');
    })
  },
  'hidden': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-Dg-iAB-Q.js');
    })
  },
  'currency': {
    'react-bootstrap': lazyPreload(function () {
      return import('./index-CtwaKsYf.js');
    })
  }
};
var Forms = {
  'react-bootstrap': lazyPreload(function () {
    return import('./index-B1ne2swZ.js');
  })
};
var FormGenerator = GenerateGenerator({
  Fields: Fields,
  Forms: Forms
});
var LetsForm = /*#__PURE__*/forwardRef(function (_ref, ref) {
  _ref.framework;
    var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var refForm = useRef();
  useImperativeHandle(ref, function () {
    return {
      validate: function validate() {
        return refForm.current.validate();
      }
    };
  });
  return /*#__PURE__*/React.createElement(FormGenerator, _extends({
    ref: refForm,
    framework: "react-bootstrap"
  }, rest), children);
});

var css_248z = ".lf-form .lf-control-object:not(:first-child) {\n  margin-top: calc(var(--lf-group-header) + var(--lf-field-margin));\n}\n\n.lf-control-object .header svg {\n  display: inline-block;\n}\n.lf-control-object.lf-border-boxed {\n  border-bottom: 1px solid var(--lf-border-color);\n  border-left: 1px solid var(--lf-border-color);\n  border-right: 1px solid var(--lf-border-color);\n}\n.lf-control-object.lf-border-boxed .header:before {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-boxed .header:after {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-boxed .lf-object-content {\n  padding-left: var(--lf-group-padding);\n  padding-right: var(--lf-group-padding);\n  padding-bottom: var(--lf-group-padding);\n}\n.lf-control-object.lf-border-topBottom {\n  border-bottom: 1px solid var(--lf-border-color);\n}\n.lf-control-object.lf-border-topBottom .header:before {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-topBottom .header:after {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-topBottom .lf-object-content {\n  padding-bottom: var(--lf-group-padding);\n}\n.lf-control-object.lf-border-top .header:before {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-top .header:after {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-bottom {\n  border-bottom: 1px solid var(--lf-border-color);\n}\n.lf-control-object .header {\n  align-items: center;\n  background: transparent;\n  display: flex;\n  height: 1px;\n  flex-direction: row;\n  margin: var(--lf-group-header) 0px;\n}\n.lf-control-object .header .inner-text {\n  flex: 0 0 auto;\n  padding: 0 12px;\n  display: inline-block;\n}\n.lf-control-object .header.left:before {\n  flex: 0 0 10px;\n}\n.lf-control-object .header.right:after {\n  flex: 0 0 10px;\n}";
styleInject(css_248z);

var EMPTY_OBJECT = {};
var CommonObject = I18N(function (_ref) {
  var LetsFormComponent = _ref.LetsFormComponent,
    name = _ref.name,
    className = _ref.className,
    label = _ref.label,
    lfLocale = _ref.lfLocale,
    _ref$layout = _ref.layout,
    layout = _ref$layout === void 0 ? 'vertical' : _ref$layout,
    fields = _ref.fields,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    value = _ref.value,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? true : _ref$open,
    _ref$collapsible = _ref.collapsible,
    collapsible = _ref$collapsible === void 0 ? true : _ref$collapsible,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? 'top' : _ref$border,
    align = _ref.align,
    error = _ref.error,
    formShowErrors = _ref.formShowErrors,
    onChange = _ref.onChange,
    children = _ref.children;
  var _useState = useState(open),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useFormContext = useFormContext(),
    locales = _useFormContext.locales;
  var handleClick = useCallback(function (event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }, [isOpen]);
  var form = useMemo(function () {
    return {
      layout: layout,
      fluid: true,
      locales: locales,
      // copy the locales from the main form
      fields: fields,
      name: 'Object form ' + name,
      showErrors: formShowErrors
    };
  }, [layout, locales, fields, name, formShowErrors]);

  // if open changes, then change status
  useEffect(function () {
    setIsOpen(open);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", makeClassName('object', name, className, "lf-border-".concat(border), {
    'open': isOpen,
    'close': !isOpen
  }), /*#__PURE__*/React.createElement("div", {
    role: "separator",
    className: classNames('header', align)
  }, /*#__PURE__*/React.createElement("span", {
    className: "inner-text"
  }, label, collapsible && /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "lf-btn-collapse",
    disabled: disabled,
    appearance: "link",
    onClick: handleClick
  }, isOpen ? /*#__PURE__*/React.createElement(ChevronUp, {
    color: "#3498ff"
  }) : /*#__PURE__*/React.createElement(ChevronDown, {
    color: "#3498ff"
  })))), (isOpen || !collapsible) && /*#__PURE__*/React.createElement("div", {
    className: "lf-object-content"
  }, children ? children : /*#__PURE__*/React.createElement(LetsFormComponent, {
    form: form,
    locale: lfLocale,
    disabled: disabled,
    readOnly: readOnly,
    defaultValues: value || EMPTY_OBJECT,
    onlyFields: true,
    onChange: onChange,
    errors: error != null && error.errorMessages != null ? error.errorMessages : undefined
  })));
}, ['label']);

var ReactMantineObject = function ReactMantineObject(props) {
  return /*#__PURE__*/React.createElement(CommonObject, _extends({
    LetsFormComponent: LetsForm
  }, props));
};
lfLog('Loaded Mantine.Object');

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ReactMantineObject
});

export { CommonObject as C, LetsForm as L, index as i };
