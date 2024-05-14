/* LetsForm Generator v0.7.12 - ESM */
import { a as _objectWithoutProperties, f as filterOptions, b as _extends, C as _isNumber, p as passRest } from './index-DRF8thTp.js';
import React__default from 'react';
import { M as MuiLabel } from './index-Bu_z0pfR.js';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

var _excluded = ["name", "label", "hint", "value", "placeholder", "options", "filterKey", "filterValue", "component", "disabled", "readOnly", "required", "error", "multiple", "fullWidth", "width", "floatingLabel", "autoWidth", "size", "variant", "onChange", "onBlur", "className", "children"];

// DOC: https://mui.com/material-ui/api/select/

var MuiGenericSelect = function MuiGenericSelect(_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.placeholder;
    var options = _ref.options,
    filterKey = _ref.filterKey,
    filterValue = _ref.filterValue;
    _ref.component;
    var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    floatingLabel = _ref.floatingLabel,
    autoWidth = _ref.autoWidth,
    size = _ref.size,
    variant = _ref.variant,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    className = _ref.className;
    _ref.children;
    var rest = _objectWithoutProperties(_ref, _excluded);
  var filteredOptions = filterOptions(options, filterValue, filterKey);
  var items;
  if (multiple) {
    items = (filteredOptions || []).map(function (option) {
      return /*#__PURE__*/React__default.createElement(MenuItem, {
        key: option.value,
        value: option.value
      }, /*#__PURE__*/React__default.createElement(Checkbox, {
        checked: (value || []).includes(option.value)
      }), /*#__PURE__*/React__default.createElement(ListItemText, {
        primary: option.label
      }));
    });
  } else {
    items = (filteredOptions || []).map(function (_ref2) {
      var value = _ref2.value,
        label = _ref2.label;
      return /*#__PURE__*/React__default.createElement(MenuItem, {
        key: value,
        value: value
      }, label);
    });
  }

  // Io un troiaio del genere in una libreria UI non l'ho mai visto, il floating label
  // si sposta e quando non e' in focus va a coprire il componente, se focus si sposta in alto
  // ma siccome lo spazio non se lo crea da solo, devi mettere la label anche nel componente select
  // altrimenti nella variante outlined vedi la label tagliata dalla riga del bordo.
  return /*#__PURE__*/React__default.createElement("div", {
    className: className,
    "data-lf-field-name": name
  }, /*#__PURE__*/React__default.createElement(FormControl, {
    size: size,
    disabled: disabled,
    required: required,
    error: error != null,
    variant: variant !== null && variant !== void 0 ? variant : undefined,
    fullWidth: fullWidth
  }, label && !floatingLabel && /*#__PURE__*/React__default.createElement(MuiLabel, null, label), label && floatingLabel && /*#__PURE__*/React__default.createElement(InputLabel, {
    id: "mui_select_".concat(name)
  }, label), /*#__PURE__*/React__default.createElement(Select, _extends({
    id: name,
    labelId: "mui_select_".concat(name),
    value: value,
    multiple: multiple,
    onChange: onChange,
    onBlur: onBlur,
    label: floatingLabel ? label : undefined // needed for the background
    ,
    style: _isNumber(width) && !fullWidth ? {
      width: "".concat(parseInt(width, 10), "px")
    } : undefined,
    autoWidth: autoWidth,
    inputProps: readOnly ? {
      readOnly: true
    } : undefined
  }, passRest(rest)), items), hint && !error && /*#__PURE__*/React__default.createElement(FormHelperText, null, hint), error && /*#__PURE__*/React__default.createElement(FormHelperText, null, error)));
};

export { MuiGenericSelect as M };
