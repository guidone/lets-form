/* LetsForm react-antd v0.9.6 - ESM */
import { I as I18N, l as lfLog, a as _extends, e as i18nOptions } from './index-BKOS0vl_.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-DfLO1suR.js';
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
