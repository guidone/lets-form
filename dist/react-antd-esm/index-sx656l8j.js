/* LetsForm react-antd v0.12.3 - ESM */
import { I as I18N, l as lfLog, a as _extends, e as i18nOptions } from './index-C7TV-2wI.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-hkN0NHo4.js';
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
