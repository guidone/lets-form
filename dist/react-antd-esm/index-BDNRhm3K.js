/* LetsForm react-antd v0.11.3 - ESM */
import { I as I18N, l as lfLog, a as _extends, e as i18nOptions } from './index-mmT6Qy9p.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-BMUPr8n7.js';
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
