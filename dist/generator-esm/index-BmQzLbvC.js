/* LetsForm Generator v0.12.6 - ESM */
import { I as I18N, l as lfLog, a as _extends, m as makeClassName, i as i18nOptions } from './index-DP3yuoJB.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-B5G0qfp7.js';
import 'react-hook-form';
import 'antd';

var SelectAntd = I18N(function (props) {
  return /*#__PURE__*/React.createElement(AntdGenericSelect, _extends({}, makeClassName('select', props.name, props.className), props));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded AntD.Select');

export { SelectAntd as default };
