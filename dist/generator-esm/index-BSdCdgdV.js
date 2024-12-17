/* LetsForm Generator v0.11.6 - ESM */
import { I as I18N, l as lfLog, b as _extends, i as i18nOptions } from './index-BL-8Kev-.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-B8Xg46rO.js';
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
