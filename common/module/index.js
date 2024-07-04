import React, { useEffect, useState, useId } from 'react';

const makeModuleName = (name) => `${name}Module`;

const makeImportMap = ({ name, componentUrl }) => `{
  "imports": {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom": "https://esm.sh/react-dom@18.2.0",
    "antd-rate": "https://esm.sh/antd?external=react,react-dom"
  }
}`;

//"${makeModuleName(name)}": "${componentUrl}"

const makeInstallCode = ({
  eventsContainerId,
  containerId,
  currentProps,
  defaultExport,
  name,
  exportedKey
}) => `import { createElement } from 'react';
import { createRoot } from 'react-dom';
${defaultExport ? `import MyComponent from '${makeModuleName(name)}';` : `import { ${exportedKey} as MyComponent } from '${makeModuleName(name)}';`}

const container = document.getElementById('${containerId}');
const eventsContainer = document.getElementById('${eventsContainerId}');

try {
  const root = createRoot(container);
  const restValues = ${JSON.stringify(currentProps)};
  const formElement = createElement(MyComponent, {
    ...restValues,
    value: undefined,
    defaultValue: ${JSON.stringify(currentProps.value) || null},
    onChange: e => {
      console.log('value....', e.target.value);
      const event = new CustomEvent('lf_onChange', { detail: { value: e.target.value } });
      eventsContainer.dispatchEvent(event);
    }
  });
  root.render(formElement);

  eventsContainer.addEventListener(
    'lf_unmount',
    () => root.unmount()
  );
  eventsContainer.addEventListener(
    'lf_refresh',
    e => {
      if (root && root.render) {
        root.render(createElement(MyComponent,
          {
            ...e.detail,
            onChange: e => {
              console.log('value....', e.target.value);
              const event = new CustomEvent('lf_onChange', { detail: { value: e.target.value } });
              eventsContainer.dispatchEvent(event);
            }
          }
        ));
      }
    }
  );
} catch(e) {
  console.log('errorascio', e);
}
`;

const ModuleComponent = ({
  name,
  componentUrl,
  defaultExport,
  exportedKey,
  onChange = () => {},
  ...rest
}) => {
  const eventsContainerId = useId();
  const containerId = useId();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [currentProps, setCurrentProps] = useState(rest);



  console.log('Render EMS value:', rest)

  useEffect(
    () => {
      // skip if nothing
      if (_.isEmpty(componentUrl) || (!defaultExport && _.isEmpty(exportedKey))) {
        setIsValid(false);
        return;
      }

      const scriptMountComponent = document.createElement('script');
      scriptMountComponent.type = 'module';
      const installCode = makeInstallCode({
        eventsContainerId,
        containerId,
        currentProps: rest,
        defaultExport,
        name,
        exportedKey
      });

      scriptMountComponent.innerHTML = installCode;
      document.body.appendChild(scriptMountComponent);

      setIsLoading(false);
      setIsValid(true);
      setError(null);

      return () => {
        const eventsContainer = document.getElementById(eventsContainerId);
        if (eventsContainer) {
          eventsContainer.dispatchEvent(new CustomEvent('lf_unmount'));
        }
        document.body.removeChild(scriptImportMap);
        document.body.removeChild(scriptMountComponent);
      };
    },
    [name, componentUrl, defaultExport, exportedKey]
  );

  // handle change value, separate
  useEffect(
    () => {
      const eventsContainer = document.getElementById(eventsContainerId);
      const evt = e => onChange(e.detail.value)
      eventsContainer.addEventListener('lf_onChange', evt);
      return () => {
        eventsContainer.removeEventListener('lf_onChange', evt);
      }
    },
    [onChange]
  );

  useEffect(() => {
    const eventsContainer = document.getElementById(eventsContainerId);
    const event = new CustomEvent('lf_refresh', {
      detail: { ...rest }
    });
    // needs to be detached from arrive
    setTimeout(() => {
      eventsContainer.dispatchEvent(event)
    }, 10);
  });

  return (
    <div className="lf-control-module" id={eventsContainerId}>
      <div id={containerId}></div>
      {error && (
        <div>
          some error
        </div>
      )}
    </div>
  );
};

export { ModuleComponent };
