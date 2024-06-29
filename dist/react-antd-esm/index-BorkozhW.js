/* LetsForm react-antd v0.9.0 - ESM */
import { I as I18N, l as lfLog, a as _extends, f as i18nOptions } from './index-JWzQxIpS.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-CQvWAmkd.js';
import 'react-hook-form';
import 'antd';

var SelectAntd = I18N(function (props) {
  return /*#__PURE__*/React.createElement(AntdGenericSelect, _extends({
    className: "lf-control-select"
  }, props));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded AntD.Select');

export { SelectAntd as default };