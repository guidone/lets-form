/* LetsForm react-antd v0.7.13 - ESM */
import { s as styleInject, c as classNames, I as I18N, l as lfLog, _ as _objectWithoutProperties, j as _isEmpty, A as _slicedToArray, o as _isArray, a as _extends, p as passRest, E as _isFunction, q as _objectSpread2 } from './index-BEUaYCKz.js';
import React, { useState, useCallback } from 'react';
import { Steps, Button } from 'antd';
import 'react-hook-form';

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

var css_248z = ".lf-control-steps .lf-step {\n  margin-top: var(--lf-field-margin);\n  margin-bottom: var(--lf-field-margin);\n}\n.lf-control-steps .lf-navigation-buttons.left {\n  text-align: left;\n}\n.lf-control-steps .lf-navigation-buttons.right {\n  text-align: right;\n}\n.lf-control-steps .lf-navigation-buttons.center {\n  text-align: center;\n}\n\n.lf-form-react-antd .lf-control-steps .ant-steps-icon svg {\n  vertical-align: baseline;\n}";
styleInject(css_248z);

var _excluded = ["name", "children", "value", "steps", "onChange", "align", "status", "small", "labelNext", "labelPrevious", "labelPlacement", "percent", "clickable", "stepsType"];
var i18nSteps = function i18nSteps(value, i18n) {
  return (value !== null && value !== void 0 ? value : []).filter(function (value) {
    return value != null;
  }).map(function (value) {
    return _objectSpread2(_objectSpread2({}, value), {}, {
      label: i18n(value.label),
      description: i18n(value.description),
      subtitle: i18n(value.subtitle)
    });
  });
};
var AntdSteps = I18N(function (_ref) {
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
    labelPlacement = _ref.labelPlacement,
    percent = _ref.percent,
    clickable = _ref.clickable,
    stepsType = _ref.stepsType,
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
  var handleChange = useCallback(function (current) {
    setStepIdx(current);
    onChange(steps[current]);
  }, [steps]);
  var antdSteps = (steps || []).map(function (step) {
    return {
      title: step.label,
      description: step.description,
      subTitle: step.subtitle,
      icon: step.icon ? /*#__PURE__*/React.createElement(GenericIcon, {
        icon: step.icon
      }) : undefined
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-steps",
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement(Steps, _extends({
    current: stepIdx,
    status: status,
    percent: percent,
    type: stepsType,
    labelPlacement: labelPlacement,
    size: small ? 'small' : 'default',
    items: antdSteps,
    onChange: clickable ? handleChange : undefined
  }, passRest(rest))), _isFunction(children) && /*#__PURE__*/React.createElement("div", {
    className: "lf-step"
  }, children(step)), /*#__PURE__*/React.createElement("div", {
    className: classNames('lf-navigation-buttons', align)
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handlePrevious,
    disabled: _isEmpty(steps) || stepIdx === 0
  }, labelPrevious || 'Previous'), /*#__PURE__*/React.createElement(Button, {
    onClick: handleNext,
    disabled: _isEmpty(steps) || stepIdx === steps.length - 1,
    style: {
      margin: '0 8px'
    }
  }, labelNext || 'Next'))));
}, ['labelPrevious', 'labelNext'], {
  tabs: i18nSteps
});
lfLog('Loaded AntD.Steps');
var AntdSteps$1 = AntdSteps;

export { AntdSteps$1 as default };
