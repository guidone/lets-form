/* LetsForm Generator v0.10.4 - ESM */
import { I as I18N, l as lfLog, b as _extends, i as i18nOptions } from './index-6qJf7V-N.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-C3hgvVhA.js';
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
