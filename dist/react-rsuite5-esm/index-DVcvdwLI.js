/* LetsForm react-rsuite5 v0.9.1 - ESM */
import { a as _objectWithoutProperties, n as _slicedToArray, C as _objectSpread2, b as _extends, p as passRest } from './index-BCTKBANa.js';
import React, { useId, useState, useEffect } from 'react';
import 'react-hook-form';

var _excluded$1 = ["name", "componentUrl", "defaultExport", "exportedKey", "onChange"];
var makeModuleName = function makeModuleName(name) {
  return "".concat(name, "Module");
};
var makeImportMap = function makeImportMap(_ref) {
  var name = _ref.name,
    componentUrl = _ref.componentUrl;
  return "{\n  \"imports\": {\n    \"react\": \"https://esm.sh/react@18.2.0\",\n    \"react-dom\": \"https://esm.sh/react-dom@18.2.0\",\n    \"".concat(makeModuleName(name), "\": \"").concat(componentUrl, "\"\n  }\n}");
};
var makeInstallCode = function makeInstallCode(_ref2) {
  var eventsContainerId = _ref2.eventsContainerId,
    containerId = _ref2.containerId,
    currentProps = _ref2.currentProps,
    defaultExport = _ref2.defaultExport,
    name = _ref2.name,
    exportedKey = _ref2.exportedKey;
  return "import { createElement } from 'react';\nimport { createRoot } from 'react-dom';\n".concat(defaultExport ? "import MyComponent from '".concat(makeModuleName(name), "';") : "import { ".concat(exportedKey, " as MyComponent } from '").concat(makeModuleName(name), "';"), "\n\nconst container = document.getElementById('").concat(containerId, "');\nconst eventsContainer = document.getElementById('").concat(eventsContainerId, "');\n\ntry {\n  const root = createRoot(container);\n  const restValues = ").concat(JSON.stringify(currentProps), ";\n  const formElement = createElement(MyComponent, {\n    ...restValues,\n    value: undefined,\n    defaultValue: ").concat(JSON.stringify(currentProps.value) || null, ",\n    onChange: e => {\n      console.log('value....', e.target.value);\n      const event = new CustomEvent('lf_onChange', { detail: { value: e.target.value } });\n      eventsContainer.dispatchEvent(event);\n    }\n  });\n  root.render(formElement);\n\n  eventsContainer.addEventListener(\n    'lf_unmount',\n    () => root.unmount()\n  );\n  eventsContainer.addEventListener(\n    'lf_refresh',\n    e => {\n      if (root && root.render) {\n        root.render(createElement(MyComponent,\n          {\n            ...e.detail,\n            onChange: e => {\n              console.log('value....', e.target.value);\n              const event = new CustomEvent('lf_onChange', { detail: { value: e.target.value } });\n              eventsContainer.dispatchEvent(event);\n            }\n          }\n        ));\n      }\n    }\n  );\n} catch(e) {\n  console.log('errorascio', e);\n}\n");
};
var ModuleComponent = function ModuleComponent(_ref3) {
  var name = _ref3.name,
    componentUrl = _ref3.componentUrl,
    defaultExport = _ref3.defaultExport,
    exportedKey = _ref3.exportedKey,
    _ref3$onChange = _ref3.onChange,
    onChange = _ref3$onChange === void 0 ? function () {} : _ref3$onChange,
    rest = _objectWithoutProperties(_ref3, _excluded$1);
  var eventsContainerId = useId();
  var containerId = useId();
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setIsLoading = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2);
    _useState6[0];
    var setIsValid = _useState6[1];
  var _useState7 = useState(rest),
    _useState8 = _slicedToArray(_useState7, 2);
    _useState8[0];
    _useState8[1];
  console.log('Render EMS value:', rest);
  useEffect(function () {
    // skip if nothing
    if (_.isEmpty(componentUrl) || !defaultExport && _.isEmpty(exportedKey)) {
      setIsValid(false);
      return;
    }
    var scriptImportMap = document.createElement('script');
    scriptImportMap.type = 'importmap';
    var importMapCode = makeImportMap({
      name: name,
      componentUrl: componentUrl
    });
    scriptImportMap.innerHTML = importMapCode;
    document.body.appendChild(scriptImportMap);
    var scriptMountComponent = document.createElement('script');
    scriptMountComponent.type = 'module';
    var installCode = makeInstallCode({
      eventsContainerId: eventsContainerId,
      containerId: containerId,
      currentProps: rest,
      defaultExport: defaultExport,
      name: name,
      exportedKey: exportedKey
    });
    scriptMountComponent.innerHTML = installCode;
    document.body.appendChild(scriptMountComponent);
    setIsLoading(false);
    setIsValid(true);
    setError(null);
    return function () {
      var eventsContainer = document.getElementById(eventsContainerId);
      if (eventsContainer) {
        eventsContainer.dispatchEvent(new CustomEvent('lf_unmount'));
      }
      document.body.removeChild(scriptImportMap);
      document.body.removeChild(scriptMountComponent);
    };
  }, [name, componentUrl, defaultExport, exportedKey]);

  // handle change value, separate
  useEffect(function () {
    var eventsContainer = document.getElementById(eventsContainerId);
    var evt = function evt(e) {
      return onChange(e.detail.value);
    };
    eventsContainer.addEventListener('lf_onChange', evt);
    return function () {
      eventsContainer.removeEventListener('lf_onChange', evt);
    };
  }, [onChange]);
  useEffect(function () {
    var eventsContainer = document.getElementById(eventsContainerId);
    var event = new CustomEvent('lf_refresh', {
      detail: _objectSpread2({}, rest)
    });
    // needs to be detached from arrive
    setTimeout(function () {
      eventsContainer.dispatchEvent(event);
    }, 10);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-module",
    id: eventsContainerId
  }, /*#__PURE__*/React.createElement("div", {
    id: containerId
  }), error && /*#__PURE__*/React.createElement("div", null, "some error"));
};

var _excluded = ["name", "componentUrl", "onChange", "value", "defaultExport", "exportedKey"];
var RSuite5ModuleComponent = function RSuite5ModuleComponent(_ref) {
  var name = _ref.name,
    componentUrl = _ref.componentUrl,
    onChange = _ref.onChange,
    value = _ref.value,
    defaultExport = _ref.defaultExport,
    exportedKey = _ref.exportedKey,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ModuleComponent, _extends({
    name: name,
    onChange: onChange,
    componentUrl: componentUrl,
    value: value,
    defaultExport: defaultExport,
    exportedKey: exportedKey
  }, passRest(rest)));
};

export { RSuite5ModuleComponent as default };
