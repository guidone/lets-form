(this.webpackChunklets_form_rsuite5=this.webpackChunklets_form_rsuite5||[]).push([[400],{88400:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return $}});var t=n(47037),o=n.n(t),a=n(8156),i=n.n(a),l=n(92652),u=n(64390),s=n(92972),f=n(81940),d=n.n(f),c=n(95099),h=n.n(c),p=n(5078),v=n.n(p),m=n(16037),g=n.n(m),C=[],b="",y=[],k="[]",w="_";function O(e,r){if(void 0===e&&(e=y),void 0===r&&(r=w),!Array.isArray(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(r))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(r)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map((function(e){return e instanceof RegExp?r:e})).join("")}function x(e){for(var r,n=[];-1!==(r=e.indexOf(k));)n.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:n}}var Z=n(80771),P="",T="object";function E(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(n,t){var o,a,i,l,s=void 0===t?e:t,f=s.inputElement,d=s.mask,c=s.guide,h=s.pipe,p=s.placeholderChar,m=void 0===p?w:p,y=s.keepCharPositions,k=void 0!==y&&y,E=s.showMask,A=void 0!==E&&E;if(void 0===n&&(n=f.value),n!==r.previousConformedValue&&(typeof d===T&&void 0!==d.pipe&&void 0!==d.mask&&(h=d.pipe,d=d.mask),d instanceof Array&&(i=O(d,m)),!1!==d)){var V,j=function(e){if(v()(e))return e;if(g()(e))return String(e);if(null==e)return P;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}(n),M=f.selectionEnd,S=r.previousConformedValue,R=r.previousPlaceholder;if("function"==typeof d){if(!1===(l=d(j,{currentCaretPosition:M,previousConformedValue:S,placeholderChar:m})))return;var N=x(l),_=N.maskWithoutCaretTraps;V=N.indexes,i=O(l=_,m)}else l=d;var q={previousConformedValue:S,guide:c,placeholderChar:m,pipe:h,placeholder:i,currentCaretPosition:M,keepCharPositions:k},z=function(e,r,n){if(void 0===e&&(e=""),void 0===r&&(r=[]),void 0===n&&(n={}),t=r,!(Array.isArray&&Array.isArray(t)||t instanceof Array)){if("function"!=typeof r)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=x(r=r(e,n)).maskWithoutCaretTraps}var t,o=n,a=o.guide,i=void 0===a||a,l=o.previousConformedValue,u=void 0===l?"":l,s=o.placeholderChar,f=void 0===s?w:s,d=o.placeholder,c=void 0===d?O(r,f):d,h=o.currentCaretPosition,p=void 0===h?0:h,v=o.keepCharPositions,m=!1===i&&void 0!==u,g=e.length,C=u.length,b=c.length,y=r.length,k=g-C,Z=k>0,P=p+(Z?-k:0),T=P+Math.abs(k);if(!0===v&&!Z){for(var E="",A=P;A<T;A++)c[A]===f&&(E+=f);e=e.slice(0,P)+E+e.slice(P,g)}for(var V=e.split("").map((function(e,r){return{char:e,isNew:r>=P&&r<T}})),j=g-1;j>=0;j--){var M=V[j].char;M!==f&&M===c[j>=P&&C===y?j-k:j]&&V.splice(j,1)}var S="",R=!1;e:for(var N=0;N<b;N++){var _=c[N];if(_===f){if(V.length>0)for(;V.length>0;){var q=V.shift(),z=q.char,F=q.isNew;if(z===f&&!0!==m){S+=f;continue e}if(r[N].test(z)){if(!0===v&&!1!==F&&""!==u&&!1!==i&&Z){for(var I=V.length,W=null,$=0;$<I;$++){var D=V[$];if(D.char!==f&&!1===D.isNew)break;if(D.char===f){W=$;break}}null!==W?(S+=z,V.splice(W,1)):N--}else S+=z;continue e}R=!0}!1===m&&(S+=c.substr(N,b));break}S+=_}if(m&&!1===Z){for(var L=null,B=0;B<S.length;B++)c[B]===f&&(L=B);S=null!==L?S.substr(0,L+1):""}return{conformedValue:S,meta:{someCharsRejected:R}}}(j,l,q).conformedValue,F="function"==typeof h,I={};F&&("boolean"==typeof(I=h(z,(0,u.Z)({rawValue:j},q)))&&!1===I?I={value:S,rejected:!0}:v()(I)&&(I={value:I}));var W=F?null===(o=I)||void 0===o?void 0:o.value:z,$=function(e){var r=e.previousConformedValue,n=void 0===r?b:r,t=e.previousPlaceholder,o=void 0===t?b:t,a=e.currentCaretPosition,i=void 0===a?0:a,l=e.conformedValue,u=e.rawValue,s=e.placeholderChar,f=e.placeholder,d=e.indexesOfPipedChars,c=void 0===d?C:d,h=e.caretTrapIndexes,p=void 0===h?C:h;if(0===i||!u.length)return 0;var v=u.length,m=n.length,g=f.length,y=l.length,k=v-m,w=k>0;if(k>1&&0!==m)return i;var O,x,Z=0;if(!w||n!==l&&l!==f){var P=l.toLowerCase(),T=u.toLowerCase().substr(0,i).split(b).filter((function(e){return-1!==P.indexOf(e)}));x=T[T.length-1];var E=o.substr(0,T.length).split(b).filter((function(e){return e!==s})).length,A=f.substr(0,T.length).split(b).filter((function(e){return e!==s})).length!==E,V=void 0!==o[T.length-1]&&void 0!==f[T.length-2]&&o[T.length-1]!==s&&o[T.length-1]!==f[T.length-1]&&o[T.length-1]===f[T.length-2];!w&&(A||V)&&E>0&&f.indexOf(x)>-1&&void 0!==u[i]&&(O=!0,x=u[i]);for(var j=c.map((function(e){return P[e]})).filter((function(e){return e===x})).length,M=T.filter((function(e){return e===x})).length,S=f.substr(0,f.indexOf(s)).split(b).filter((function(e,r){return e===x&&u[r]!==e})).length+M+j+(O?1:0),R=0,N=0;N<y&&(Z=N+1,P[N]===x&&R++,!(R>=S));N++);}else Z=i-k;if(w){for(var _=Z,q=Z;q<=g;q++)if(f[q]===s&&(_=q),f[q]===s||-1!==p.indexOf(q)||q===g)return _}else if(O){for(var z=Z-1;z>=0;z--)if(l[z]===x||-1!==p.indexOf(z)||0===z)return z}else for(var F=Z;F>=0;F--)if(f[F-1]===s||-1!==p.indexOf(F)||0===F)return F}({previousConformedValue:S,previousPlaceholder:R,conformedValue:W,placeholder:i,rawValue:j,currentCaretPosition:M,placeholderChar:m,indexesOfPipedChars:null===(a=I)||void 0===a?void 0:a.indexesOfPipedChars,caretTrapIndexes:V}),D=W===i&&0===$?A?i:P:W;r.previousConformedValue=D,r.previousPlaceholder=i,f.value!==D&&(f.value=D,"number"==typeof $&&(0,Z.Z)(f,$,$))}}}}var A=n(23341),V=function(e,r){return i().createElement("input",(0,u.Z)({ref:e},r))},j=i().forwardRef((function(e,r){var n=e.mask,t=e.guide,o=void 0===t||t,i=e.placeholderChar,l=e.value,f=e.showMask,c=e.pipe,h=e.render,p=void 0===h?V:h,v=e.onChange,m=(0,s.Z)(e,["mask","guide","placeholderChar","value","showMask","pipe","render","onChange"]),g=(0,a.useRef)(null),C=(0,a.useRef)(),b=(0,a.useCallback)((function(){var r;C.current=E((0,u.Z)({inputElement:g.current},e)),null===(r=C.current)||void 0===r||r.update(l)}),[e,l]),y=(0,a.useCallback)((function(e){var r;null===(r=C.current)||void 0===r||r.update(),null==v||v(e)}),[v]);return(0,a.useEffect)((function(){b()}),[o,i,f,c,n,l,b]),p((0,A.Z)(g,r),(0,u.Z)({onChange:y,defaultValue:l},d()(m,["keepCharPositions"])))}));j.displayName="TextMask",j.propTypes={render:h().func,onChange:h().func,mask:h().oneOfType([h().array,h().func,h().bool]).isRequired,guide:h().bool,value:h().oneOfType([h().string,h().number]),pipe:h().func,placeholderChar:h().string,keepCharPositions:h().bool,showMask:h().bool};var M=j,S=n(83966),R=i().forwardRef((function(e,r){var n=e.as,t=void 0===n?M:n;return i().createElement(S.Z,(0,u.Z)({},e,{as:t,ref:r}))})),N=n(16805),_=n(55593),q=n(93763),z=n(8228),F=["name","label","hint","value","size","placeholder","tooltip","disabled","readOnly","required","error","prefix","postfix","onChange","onBlur","placeholderChar","mask","inside","fullWidth","width"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},I.apply(this,arguments)}var W=(0,_.mb)((function(e){var r,n=e.name,t=e.label,a=e.hint,u=e.value,s=e.size,f=e.placeholder,d=e.tooltip,c=void 0!==d&&d,h=e.disabled,p=void 0!==h&&h,v=e.readOnly,m=void 0!==v&&v,g=e.required,C=void 0!==g&&g,b=e.error,y=e.prefix,k=e.postfix,w=e.onChange,O=e.onBlur,x=e.placeholderChar,Z=void 0===x?"_":x,P=e.mask,T=void 0===P?[]:P,E=e.inside,A=void 0!==E&&E,V=e.fullWidth,j=e.width,M=function(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,F),S="string"!=typeof(r=T)||0===r.length?[]:r.match(/\$\{[a-zA-Z0-9]\}|.{1,1}/gm).map((function(e){return"${d}"===e?/\d/:"${D}"===e?/\D/:"${a}"===e?/[a-zA-Z]/:"${w}"===e?/[a-zA-Z0-9]/:e})),z=i().createElement(l.Z.Control,I({name:n,accepter:R,value:u,onChange:w,onBlur:O,disabled:p,size:s,placeholder:f,readOnly:m,placeholderChar:"string"==typeof Z&&Z.length>0?Z[0]:"_",errorMessage:o()(b)?b:void 0,mask:S},(0,q.QF)(M))),W=k||y;return i().createElement(l.Z.Group,{"data-lf-field-name":n,className:"lf-control-input-mask",style:(0,q.PZ)(V,j)},t&&i().createElement(l.Z.ControlLabel,null,t,a&&c&&i().createElement(l.Z.HelpText,{tooltip:!0},a),C&&i().createElement(_.T_,null)),!W&&z,W&&i().createElement(N.Z,{inside:A},y&&i().createElement(N.Z.Addon,null,y),z,k&&i().createElement(N.Z.Addon,null,k)),a&&!c&&i().createElement(l.Z.HelpText,null,a))}),["label","hint","placeholder"]);(0,z.n)("Loaded RSuite5.InputMask");var $=W},16037:function(e,r,n){var t=n(84365),o=n(55620);e.exports=function(e){return"number"==typeof e||o(e)&&"[object Number]"==t(e)}},5078:function(e,r,n){var t=n(84365),o=n(56227),a=n(55620);e.exports=function(e){return"string"==typeof e||!o(e)&&a(e)&&"[object String]"==t(e)}},16805:function(e,r,n){"use strict";var t=n(77855);r.Z=t.Z},35678:function(e,r,n){"use strict";n.d(r,{Dt:function(){return i},_P:function(){return l},fq:function(){return a},w1:function(){return o}});var t=n(50421),o=function(){return t.Z&&/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent)},a=function(){return t.Z&&window.navigator.userAgent.indexOf("Trident")>-1&&window.navigator.userAgent.indexOf("rv:11.0")>-1},i=function(){return t.Z&&/Android/i.test(navigator.userAgent)},l=function(){if(o())return!1;var e=function(){if(t.Z){var e=window.navigator.userAgent.match(/Chrom(e|ium)\/([\d\.]+)\./);return!!e&&parseFloat(e[2])}return!1}(),r=function(){if(t.Z){var e=window.navigator.userAgent.match(/Version\/([\d\.]+).*Safari/);return!!e&&parseFloat(e[1])}return!1}();return e?e>=84:!r||r>=14.1}},80771:function(e,r,n){"use strict";var t=n(35678),o="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,a="none";r.Z=function(e,r,n){document.activeElement===e&&((0,t.Dt)()?o((function(){return e.setSelectionRange(r,n,a)}),0):e.setSelectionRange(r,n,a))}}}]);
//# sourceMappingURL=400-20cd925e45ae2a3f8a00.map