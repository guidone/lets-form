/* LetsForm react-antd v0.12.17 - ESM */
import { I as I18N, l as lfLog, a as _extends, m as makeClassName, e as i18nOptions } from './index-fVMEB3Z4.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-COLEKW_Q.js';
import 'antd';

var Multiselect = I18N(function (props) {
  return /*#__PURE__*/React.createElement(AntdGenericSelect, _extends({}, makeClassName('multiselect', props.name, props.className), {
    mode: "multiple"
  }, props));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded AntD.Multiselect');

export { Multiselect as default };
