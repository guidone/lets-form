"use strict";(this.webpackChunklets_form_bootstrap=this.webpackChunklets_form_bootstrap||[]).push([[495],{2495:function(t,e,n){n.r(e),n.d(e,{default:function(){return R}});var r=n(8156),o=n.n(r),a=n(3466),i=n(386),l=n.n(i),s=n(3704);const u=["as","disabled"];function d({tagName:t,disabled:e,href:n,target:r,rel:o,role:a,onClick:i,tabIndex:l=0,type:s}){t||(t=null!=n||null!=r||null!=o?"a":"button");const u={tagName:t};if("button"===t)return[{type:s||"button",disabled:e},u];const d=r=>{(e||"a"===t&&function(t){return!t||"#"===t.trim()}(n))&&r.preventDefault(),e?r.stopPropagation():null==i||i(r)};return"a"===t&&(n||(n="#"),e&&(n=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:e?void 0:l,href:n,target:"a"===t?r:void 0,"aria-disabled":e||void 0,rel:"a"===t?o:void 0,onClick:d,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),d(t))}},u]}r.forwardRef(((t,e)=>{let{as:n,disabled:r}=t,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,u);const[a,{tagName:i}]=d(Object.assign({tagName:n,disabled:r},o));return(0,s.jsx)(i,Object.assign({},o,a,{ref:e}))})).displayName="Button";var c=n(5675);const b=r.forwardRef((({as:t,bsPrefix:e,variant:n="primary",size:r,active:o=!1,disabled:a=!1,className:i,...u},b)=>{const f=(0,c.vE)(e,"btn"),[m,{tagName:p}]=d({tagName:t,disabled:a,...u}),v=p;return(0,s.jsx)(v,{...m,...u,ref:b,disabled:a,className:l()(i,f,o&&"active",n&&`${f}-${n}`,r&&`${f}-${r}`,u.href&&a&&"disabled")})}));b.displayName="Button";var f=b,m=n(4184),p=n.n(m),v=n(8228),y=n(3379),g=n.n(y),h=n(7795),A=n.n(h),C=n(569),S=n.n(C),x=n(3565),E=n.n(x),N=n(9216),k=n.n(N),w=n(4589),j=n.n(w),P=n(8484),Z={};function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}Z.styleTagTransform=j(),Z.setAttributes=E(),Z.insert=S().bind(null,"head"),Z.domAPI=A(),Z.insertStyleElement=k(),g()(P.Z,Z),P.Z&&P.Z.locals&&P.Z.locals,(0,v.n)("Loaded ReactBootrap.Form");var R=function(t){var e,n,r,i=t.name,l=t.children,s=t.onSubmit,u=t.buttonsAlign,d=t.onReset,c=t.hideToolbar,b=void 0!==c&&c,m=t.onlyFields,v=void 0!==m&&m,y=t.disabled,g=void 0!==y&&y,h=t.disabledSubmit,A=void 0!==h&&h,C=t.plaintext,S=t.labelSubmit,x=void 0===S?"Submit":S,E=t.labelCancel,N=void 0===E?"Cancel":E,k=t.custom;return o().createElement(a.Z,{className:p()("lf-form lf-form-react-bootstrap",(e={},n=u?"lf-form-buttons-align-".concat(u):void 0,r=!0,(n=function(t){var e=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===O(e)?e:String(e)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e)),"data-lf-form-name":i,onSubmit:s},o().createElement("div",null,l),!b&&!v&&!C&&o().createElement("div",{className:"lf-buttons"},o().createElement(f,{variant:"primary",onClick:s,disabled:g||A},x),o().createElement(f,{variant:"secondary",onClick:d,disabled:g},N),k))}},8484:function(t,e,n){var r=n(7537),o=n.n(r),a=n(3645),i=n.n(a)()(o());i.push([t.id,".lf-form-react-bootstrap .lf-buttons{display:flex}.lf-form-react-bootstrap .lf-buttons button:not(:first-child){margin-left:10px}","",{version:3,sources:["webpack://./react-bootstrap/form/index.scss"],names:[],mappings:"AACE,qCACE,YAAA,CAEA,8DACE,gBAAA",sourcesContent:[".lf-form-react-bootstrap {\n  .lf-buttons {\n    display: flex;\n\n    button:not(:first-child) {\n      margin-left: 10px;\n    }\n  }\n\n}\n"],sourceRoot:""}]),e.Z=i}}]);
//# sourceMappingURL=495-e179b4c1fc99bc8eefab.map