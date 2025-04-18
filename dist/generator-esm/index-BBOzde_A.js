/* LetsForm Generator v0.13.0 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, i as i18nOptions } from './index-Df19TMKV.js';
import React, { useCallback, useMemo } from 'react';
import { M as MuiGenericSelect } from './index--9SfmvDe.js';
import '@mui/material/InputLabel';
import '@mui/material/MenuItem';
import '@mui/material/FormControl';
import '@mui/material/Select';
import '@mui/material/FormHelperText';
import '@mui/material/Checkbox';
import '@mui/material/ListItemText';
import '@mui/material/FormLabel';

var _excluded = ["onChange", "value"];
var Multiselect = I18N(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    var value = e.target.value;
    onChange(typeof value === 'string' ? value.split(',') : value);
  }, [onChange]);
  var renderValue = useMemo(function () {
    return function (selected) {
      var selectedOptions = (rest.options || []).filter(function (option) {
        return (selected || []).includes(option.value);
      }).map(function (option) {
        return option.label;
      });
      return selectedOptions.join(', ');
    };
  }, [rest.options]);
  return /*#__PURE__*/React.createElement(MuiGenericSelect, _extends({
    component: "multiselect",
    onChange: handleChange,
    renderValue: renderValue,
    multiple: true,
    value: value || []
  }, rest));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded MUI.Multiselect');

export { Multiselect as default };
