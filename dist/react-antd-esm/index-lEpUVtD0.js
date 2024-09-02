/* LetsForm react-antd v0.10.6 - ESM */
import { I as I18N, l as lfLog, a as _extends, e as i18nOptions } from './index-Bp32pDtT.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-DMSIv9q3.js';
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
