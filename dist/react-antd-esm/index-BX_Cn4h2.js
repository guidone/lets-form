/* LetsForm react-antd v0.9.1 - ESM */
import { I as I18N, l as lfLog, a as _extends, f as i18nOptions } from './index-SroAG_kS.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-BDrM6P7y.js';
import 'react-hook-form';
import 'antd';

var Multiselect = I18N(function (props) {
  return /*#__PURE__*/React.createElement(AntdGenericSelect, _extends({
    className: "lf-control-multiselect",
    mode: "multiple"
  }, props));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded AntD.Multiselect');

export { Multiselect as default };
