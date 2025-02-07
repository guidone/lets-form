/* LetsForm Generator v0.12.9 - ESM */
import { s as styleInject, u as classNames, g as _defineProperty, l as lfLog } from './index-C3mTkrR6.js';
import React from 'react';

var css_248z = ".lf-form-react input[type=text],\n.lf-form-react input[type=password],\n.lf-form-react input[type=email],\n.lf-form-react input[type=url],\n.lf-form-react input[type=date],\n.lf-form-react input[type=month],\n.lf-form-react input[type=time],\n.lf-form-react input[type=datetime],\n.lf-form-react input[type=datetime-local],\n.lf-form-react input[type=week],\n.lf-form-react input[type=number],\n.lf-form-react input[type=search],\n.lf-form-react input[type=tel],\n.lf-form-react input[type=color],\n.lf-form-react select,\n.lf-form-react textarea {\n  padding: 0.5em 0.6em;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  vertical-align: middle;\n  box-sizing: border-box;\n  height: 36px;\n}\n\n/*\nNeed to separate out the :not() selector from the rest of the CSS 2.1 selectors\nsince IE8 won't execute CSS that contains a CSS3 selector.\n*/\n.lf-form-react input:not([type]) {\n  padding: 0.5em 0.6em;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n/* Chrome (as of v.32/34 on OS X) needs additional room for color to display. */\n/* May be able to remove this tweak as color inputs become more standardized across browsers. */\n.lf-form-react input[type=color] {\n  padding: 0.2em 0.5em;\n}\n\n.lf-form-react input[type=text]:focus,\n.lf-form-react input[type=password]:focus,\n.lf-form-react input[type=email]:focus,\n.lf-form-react input[type=url]:focus,\n.lf-form-react input[type=date]:focus,\n.lf-form-react input[type=month]:focus,\n.lf-form-react input[type=time]:focus,\n.lf-form-react input[type=datetime]:focus,\n.lf-form-react input[type=datetime-local]:focus,\n.lf-form-react input[type=week]:focus,\n.lf-form-react input[type=number]:focus,\n.lf-form-react input[type=search]:focus,\n.lf-form-react input[type=tel]:focus,\n.lf-form-react input[type=color]:focus,\n.lf-form-react select:focus,\n.lf-form-react textarea:focus {\n  outline: 0;\n  border-color: #129FEA;\n}\n\n/*\nNeed to separate out the :not() selector from the rest of the CSS 2.1 selectors\nsince IE8 won't execute CSS that contains a CSS3 selector.\n*/\n.lf-form-react input:not([type]):focus {\n  outline: 0;\n  border-color: #129FEA;\n}\n\n.lf-form-react input[type=file]:focus,\n.lf-form-react input[type=radio]:focus,\n.lf-form-react input[type=checkbox]:focus {\n  outline: thin solid #129FEA;\n  outline: 1px auto #129FEA;\n}\n\n.lf-form-react .lf-form-react-checkbox,\n.lf-form-react .lf-form-react-radio {\n  display: block;\n}\n\n.lf-form-react input[type=text][disabled],\n.lf-form-react input[type=password][disabled],\n.lf-form-react input[type=email][disabled],\n.lf-form-react input[type=url][disabled],\n.lf-form-react input[type=date][disabled],\n.lf-form-react input[type=month][disabled],\n.lf-form-react input[type=time][disabled],\n.lf-form-react input[type=datetime][disabled],\n.lf-form-react input[type=datetime-local][disabled],\n.lf-form-react input[type=week][disabled],\n.lf-form-react input[type=number][disabled],\n.lf-form-react input[type=search][disabled],\n.lf-form-react input[type=tel][disabled],\n.lf-form-react input[type=color][disabled],\n.lf-form-react select[disabled],\n.lf-form-react textarea[disabled] {\n  cursor: not-allowed;\n  background-color: #eaeded;\n  color: #cad2d3;\n}\n\n.lf-form-react input[readonly],\n.lf-form-react select[readonly],\n.lf-form-react textarea[readonly] {\n  background-color: #eee; /* menu hover bg color */\n  color: #777; /* menu text color */\n  border-color: #ccc;\n}\n\n.lf-form-react input:focus:invalid,\n.lf-form-react textarea:focus:invalid,\n.lf-form-react select:focus:invalid {\n  color: #b94a48;\n  border-color: #e9322d;\n}\n\n.lf-form-react input[type=file]:focus:invalid:focus,\n.lf-form-react input[type=radio]:focus:invalid:focus,\n.lf-form-react input[type=checkbox]:focus:invalid:focus {\n  outline-color: #e9322d;\n}\n\n.lf-form-react select {\n  /* Normalizes the height; padding is not sufficient. */\n  height: 2.25em;\n  border: 1px solid #ccc;\n  background-color: white;\n}\n\n.lf-form-react select[multiple] {\n  height: auto;\n}\n\n.lf-form-react label {\n  margin: 3px 0px;\n}\n\n.lf-form-react fieldset {\n  margin: 0;\n  padding: 0.35em 0 0.75em;\n  border: 0;\n}\n\n.lf-form-react legend {\n  display: block;\n  width: 100%;\n  padding: 0.3em 0;\n  color: #333;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.lf-form-react-stacked input[type=text],\n.lf-form-react-stacked input[type=password],\n.lf-form-react-stacked input[type=email],\n.lf-form-react-stacked input[type=url],\n.lf-form-react-stacked input[type=date],\n.lf-form-react-stacked input[type=month],\n.lf-form-react-stacked input[type=time],\n.lf-form-react-stacked input[type=datetime],\n.lf-form-react-stacked input[type=datetime-local],\n.lf-form-react-stacked input[type=week],\n.lf-form-react-stacked input[type=number],\n.lf-form-react-stacked input[type=search],\n.lf-form-react-stacked input[type=tel],\n.lf-form-react-stacked input[type=color],\n.lf-form-react-stacked input[type=file],\n.lf-form-react-stacked select,\n.lf-form-react-stacked label,\n.lf-form-react-stacked textarea {\n  display: block;\n}\n\n.pure-form-aligned input,\n.pure-form-aligned textarea,\n.pure-form-aligned select,\n.pure-form-message-inline {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.pure-form-aligned textarea {\n  vertical-align: top;\n}\n\n/* Aligned Forms */\n.pure-form-aligned .pure-control-group {\n  margin-bottom: 0.5em;\n}\n\n.pure-form-aligned .pure-control-group label {\n  text-align: right;\n  display: inline-block;\n  vertical-align: middle;\n  width: 10em;\n  margin: 0 1em 0 0;\n}\n\n.pure-form-aligned .pure-controls {\n  margin: 1.5em 0 0 11em;\n}\n\n.lf-form-react .lf-form-react-input-1 {\n  width: 100%;\n}\n\n.lf-form-react .lf-form-react-input-3-4 {\n  width: 75%;\n}\n\n.lf-form-react .lf-form-react-input-2-3 {\n  width: 66%;\n}\n\n.lf-form-react .lf-form-react-input-1-2 {\n  width: 50%;\n}\n\n.lf-form-react .lf-form-react-input-1-3 {\n  width: 33%;\n}\n\n.lf-form-react .lf-form-react-input-1-4 {\n  width: 25%;\n}\n\n.lf-form-react-message {\n  display: block;\n  color: #666;\n  font-size: 0.875em;\n}\n\n.lf-form-react-error-message {\n  color: #FF3300;\n  display: block;\n  font-size: 0.875em;\n}\n\n.lf-form-react-primary-button {\n  appearance: button;\n  background-color: #1652F0;\n  border: 1px solid #1652F0;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1.15;\n  overflow: visible;\n  padding: 8px 16px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transition: all 80ms ease-in-out;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: fit-content;\n}\n.lf-form-react-primary-button:focus {\n  outline: 0;\n}\n.lf-form-react-primary-button:hover {\n  background-color: #0A46E4;\n  border-color: #0A46E4;\n}\n.lf-form-react-primary-button:active {\n  background-color: #0039D7;\n  border-color: #0039D7;\n}\n\n.lf-form-react-secondary-button {\n  appearance: button;\n  background-color: #999999;\n  border: 1px solid #999999;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1.15;\n  overflow: visible;\n  padding: 8px 16px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transition: all 80ms ease-in-out;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: fit-content;\n}\n.lf-form-react-secondary-button:focus {\n  outline: 0;\n}\n.lf-form-react-secondary-button:hover {\n  background-color: #888888;\n  border-color: #888888;\n}\n.lf-form-react-secondary-button:active {\n  background-color: #888888;\n  border-color: #888888;\n}\n\n.lf-form-react .lf-buttons {\n  display: flex;\n}\n.lf-form-react .lf-buttons button:not(:first-child) {\n  margin-left: 10px;\n}";
styleInject(css_248z);

var FormReact = function FormReact(_ref) {
  var id = _ref.id,
    name = _ref.name,
    children = _ref.children,
    buttonsAlign = _ref.buttonsAlign,
    _ref$hideToolbar = _ref.hideToolbar,
    hideToolbar = _ref$hideToolbar === void 0 ? false : _ref$hideToolbar,
    _ref$onlyFields = _ref.onlyFields,
    onlyFields = _ref$onlyFields === void 0 ? false : _ref$onlyFields,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$disabledSubmit = _ref.disabledSubmit,
    disabledSubmit = _ref$disabledSubmit === void 0 ? false : _ref$disabledSubmit,
    plaintext = _ref.plaintext,
    _ref$labelSubmit = _ref.labelSubmit,
    labelSubmit = _ref$labelSubmit === void 0 ? 'Submit' : _ref$labelSubmit,
    _ref$labelCancel = _ref.labelCancel,
    labelCancel = _ref$labelCancel === void 0 ? 'Cancel' : _ref$labelCancel,
    _ref$onSubmit = _ref.onSubmit,
    onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit,
    _ref$onReset = _ref.onReset,
    onReset = _ref$onReset === void 0 ? function () {} : _ref$onReset,
    _ref$onBlur = _ref.onBlur,
    onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
    custom = _ref.custom;
  return /*#__PURE__*/React.createElement("form", {
    id: id,
    onSubmit: onSubmit,
    className: classNames('lf-form lf-form-react lf-form-react-stacked', _defineProperty({}, buttonsAlign ? "lf-form-buttons-align-".concat(buttonsAlign) : undefined, true)),
    "data-lf-form-name": name,
    onBlur: onBlur
  }, children, !hideToolbar && !onlyFields && !plaintext && /*#__PURE__*/React.createElement("div", {
    className: "lf-buttons"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    onClick: onSubmit,
    disabled: disabled || disabledSubmit,
    className: "lf-form-react-primary-button"
  }, labelSubmit), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    className: "lf-form-react-secondary-button",
    onClick: onReset
  }, labelCancel), custom));
};
lfLog('Loaded React.Form');

export { FormReact as default };
