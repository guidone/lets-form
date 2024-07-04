import React, { useEffect, useState, useId } from 'react';
import _ from 'lodash';


const makeInstallCode = ({
  eventsContainerId,
  containerId,
  currentProps,
  defaultExport,
  name,
  exportedKey,
  onChangeType
}) => {

  let onChangeFunction;
  if (onChangeType === 'target') {
    onChangeFunction = 'const value = arg1.target.value;';
  } else if (onChangeType === 'firstArgument') {
    onChangeFunction = 'const value = arg1;';
  }

  // TODO check error target container is not a dom

  return `import { createElement } from 'react';
import { createRoot } from 'react-dom';
${defaultExport ? `import MyComponent from '${name}';` : `import { ${exportedKey} as MyComponent } from '${name}';`}

const container = document.getElementById('${containerId}');
const eventsContainer = document.getElementById('${eventsContainerId}');

try {
  const root = createRoot(container);
  const restValues = ${JSON.stringify(currentProps)};
  const formElement = createElement(MyComponent, {
    ...restValues,
    value: undefined,
    defaultValue: ${JSON.stringify(currentProps.value) || null},
    onChange: (arg1, arg2, arg3) => {
      ${onChangeFunction}
      const event = new CustomEvent('lf_onChange', { detail: { value } });
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
            onChange: (arg1, arg2, arg3) => {
              ${onChangeFunction}
              const event = new CustomEvent('lf_onChange', { detail: { value } });
              eventsContainer.dispatchEvent(event);
            }
          }
        ));
      }
    }
  );
} catch(e) {
  console.log('Error installing', e);
}
`;
};


const PackageComponetESM = ({
  name,
  url: componentUrl,
  defaultExport = true,
  exportedKey,
  onChangeType = 'target'
}) => {
  //let ImportedComponent;

  return ({
    onChange = () => {},
    ...rest
  }) => {
    const eventsContainerId = useId();
    const containerId = useId();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [currentProps, setCurrentProps] = useState(rest);


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
          exportedKey,
          onChangeType
        });

        scriptMountComponent.innerHTML = installCode;
        console.log('Mounting---', scriptMountComponent)
        document.body.appendChild(scriptMountComponent);

        setIsLoading(false);
        setIsValid(true);
        setError(null);

        return () => {
          const eventsContainer = document.getElementById(eventsContainerId);
          if (eventsContainer) {
            eventsContainer.dispatchEvent(new CustomEvent('lf_unmount'));
          }
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

};

export { PackageComponetESM };