/* LetsForm Generator v0.9.5 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, q as _isEmpty, g as _slicedToArray, k as _isArray, b as _extends, p as passRest, K as _isFunction, c as classNames, E as _objectSpread2 } from './index-Cn9nwTB0.js';
import React, { useState, useCallback } from 'react';
import { Steps, ButtonGroup, Button } from 'rsuite';
import 'react-hook-form';
import './index-nKThgXMM.js';
import './index-6FBKir1_.js';
import './cross-circle-BhcLUIwD.js';
import './index-CjbtUGG-.js';

/* LetsForm react-rsuite5 v0.9.5 - ESM */
var css_248z$1 = ".lf-generic-icon {\n  max-width: 16px;\n  max-height: 16px;\n}\n.lf-generic-icon.lg {\n  max-width: 20px;\n  max-height: 20px;\n}\n.lf-generic-icon .xs {\n  max-width: 12px;\n  max-height: 12px;\n}";
styleInject(css_248z$1);
var GenericIcon = function GenericIcon(_ref) {
  var icon = _ref.icon,
    size = _ref.size;
  return /*#__PURE__*/React.createElement("img", {
    className: classNames("lf-generic-icon", {
      size: size
    }),
    src: icon
  });
};
var css_248z = ".lf-control-steps .lf-step {\n  margin-top: var(--lf-field-margin);\n  margin-bottom: var(--lf-field-margin);\n}\n.lf-control-steps .lf-navigation-buttons.left {\n  text-align: left;\n}\n.lf-control-steps .lf-navigation-buttons.right {\n  text-align: right;\n}\n.lf-control-steps .lf-navigation-buttons.center {\n  text-align: center;\n}";
styleInject(css_248z);
var _excluded = ["name", "children", "value", "steps", "onChange", "align", "status", "small", "labelNext", "labelPrevious"];
var i18nSteps = function i18nSteps(value, i18n) {
  return (value !== null && value !== void 0 ? value : []).filter(function (value) {
    return value != null;
  }).map(function (value) {
    return _objectSpread2(_objectSpread2({}, value), {}, {
      label: i18n(value.label),
      description: i18n(value.description)
    });
  });
};
var Rsuite5Steps = I18N(function (_ref) {
  var name = _ref.name,
    children = _ref.children,
    value = _ref.value,
    steps = _ref.steps,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    align = _ref.align,
    status = _ref.status,
    small = _ref.small,
    labelNext = _ref.labelNext,
    labelPrevious = _ref.labelPrevious,
    rest = _objectWithoutProperties(_ref, _excluded);
  var defaultStep = value;
  var defaultStepIdx = (steps || []).findIndex(function (obj) {
    return obj.value === value;
  });
  if (!defaultStep && !_isEmpty(steps)) {
    defaultStepIdx = 0;
  }
  var _useState = useState(defaultStepIdx),
    _useState2 = _slicedToArray(_useState, 2),
    stepIdx = _useState2[0],
    setStepIdx = _useState2[1];
  var step = _isArray(steps) && !_isEmpty(steps) && stepIdx >= 0 ? steps[stepIdx].value : null;
  var handleNext = useCallback(function () {
    var step = steps[stepIdx + 1].value;
    setStepIdx(function (value) {
      return value + 1;
    });
    onChange(step);
  }, [onChange, stepIdx, steps]);
  var handlePrevious = useCallback(function () {
    var step = steps[stepIdx - 1].value;
    setStepIdx(function (value) {
      return value - 1;
    });
    onChange(step);
  }, [onChange, stepIdx, steps]);
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-steps",
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement(Steps, _extends({
    current: stepIdx,
    currentStatus: status,
    small: small
  }, passRest(rest)), (steps || []).map(function (step) {
    return /*#__PURE__*/React.createElement(Steps.Item, {
      key: "step_".concat(step.value),
      description: step.description || undefined,
      title: step.label,
      icon: step.icon && /*#__PURE__*/React.createElement(GenericIcon, {
        icon: step.icon
      })
    });
  })), _isFunction(children) && /*#__PURE__*/React.createElement("div", {
    className: "lf-step"
  }, children(step)), /*#__PURE__*/React.createElement("div", {
    className: classNames('lf-navigation-buttons', align)
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handlePrevious,
    disabled: _isEmpty(steps) || stepIdx === 0
  }, labelPrevious || 'Previous'), /*#__PURE__*/React.createElement(Button, {
    onClick: handleNext,
    disabled: _isEmpty(steps) || stepIdx === steps.length - 1
  }, labelNext || 'Next'))));
}, ['labelPrevious', 'labelNext'], {
  tabs: i18nSteps
});
lfLog('Loaded Rsuite5.Steps');

export { Rsuite5Steps as default };
