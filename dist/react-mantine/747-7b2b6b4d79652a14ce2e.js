"use strict";(this.webpackChunklets_form_mantine=this.webpackChunklets_form_mantine||[]).push([[747],{3747:function(e,t,r){r.r(t);var n=r(1469),a=r.n(n),l=r(8156),o=r.n(l),i=r(6661),u=r(5593),c=r(853),f=r(8228),s=["name","label","hint","value","placeholder","plaintext","tooltip","disabled","readOnly","required","error","onChange","onBlur","options"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function p(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=(0,u.mb)((function(e){var t,r,n=e.name,u=e.label,f=e.hint,y=e.value,m=(e.placeholder,e.plaintext,e.tooltip,e.disabled),h=void 0!==m&&m,v=e.readOnly,g=void 0!==v&&v,O=e.required,j=void 0!==O&&O,k=e.error,S=e.onChange,w=(e.onBlur,e.options),E=void 0===w?[]:w,A=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s),C=(t=(0,l.useState)(a()(y)?y:y?String().split(","):[]),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],u=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return i}}(t,r)||p(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),I=C[0],x=C[1],_=(0,l.useCallback)((function(e){var t;t=e.target.checked?[].concat(function(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(I),[e.target.value]):I.filter((function(t){return t!==e.target.value})),x(t),S(t)}),[S]);return o().createElement("div",{"data-lf-field-name":n,className:"lf-control-checkbox-group"},u&&o().createElement(i.Input.Label,{required:j},u),o().createElement(i.Stack,{style:{marginTop:"var(--lf-field-margin-top)"}},(null!=E?E:[]).map((function(e){var t=e.value,r=e.label;return o().createElement(i.Checkbox,d({key:t,value:t,label:r,disabled:h,readOnly:g,onChange:_,checked:I.includes(t)},(0,c.QF)(A)),r)}))),f&&o().createElement(i.Input.Description,null,f),k&&o().createElement(i.Input.Error,null,k))}),["label","hint","placeholder"],{options:c.Lo});(0,f.n)("Loaded Mantine.CheckboxGroup"),t.default=y}}]);
//# sourceMappingURL=747-7b2b6b4d79652a14ce2e.map