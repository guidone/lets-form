/* LetsForm Generator v0.12.13 - ESM */
import { I as I18N, l as lfLog, a as _extends, m as makeClassName, i as i18nOptions } from './index-COFOUgfY.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-C5NG7aGd.js';
import 'antd';

var SelectAntd = I18N(function (props) {
  return /*#__PURE__*/React.createElement(AntdGenericSelect, _extends({}, makeClassName('select', props.name, props.className), props));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded AntD.Select');

export { SelectAntd as default };
