/* LetsForm react-antd v0.12.5 - ESM */
import { I as I18N, l as lfLog, a as _extends, m as makeClassName, e as i18nOptions } from './index-m9L8Kg0k.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-DbIKg_xn.js';
import 'react-hook-form';
import 'antd';

var SelectAntd = I18N(function (props) {
  return /*#__PURE__*/React.createElement(AntdGenericSelect, _extends({}, makeClassName('select', props.name, props.className), props));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded AntD.Select');

export { SelectAntd as default };
