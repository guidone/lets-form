import React, { useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import Immutable from 'immutable';

window.lf = {
  'react': React,
  'react-dom': ReactDOM,
  'dayjs': dayjs,
  'immutable': Immutable // TODO remove
};


const PackageComponentUMD = ({
  name,
  url ,
  defaultExport = true,
  exportedKey,
  onChangeType = 'target'
}) => {
  if (!window.lf) {
    window.lf = {};
  }

  const libraryId = name;



  //console.log('Nuova lib', ImportedLib)

  return ({ onChange, ...rest }) => {
    const [ImportedComponent, setImportedComponet] = useState(window.lf[libraryId]);

    const handleChange = useCallback(
      (arg1, arg2, arg3) => {
        if (onChangeType === 'firstArgument') {
          onChange(arg1);
        } else if (onChangeType === 'target') {
          onChange(arg1.target.value);
        }
      },
      [onChange]
    );

    useEffect(
      () => {
        if (window.lf[libraryId]) {
          return;
        }
        window.define = function(dependencies, factory) {
          console.log('----- oh la nuova factory', dependencies)
          //const Imported = factory(React, ReactDOM, dayjs);
          const Imported = factory.apply(
            this,
            dependencies.reduce(
              (acc, name) => [...acc, window.lf[name]],
              []
            )
          );
          console.log('PackageComponentUMD imported ' + libraryId + `(${exportedKey})`, Imported)

          window.lf[libraryId] = defaultExport && exportedKey ? Imported : Imported[exportedKey];
          console.log('Imported component', window.lf[libraryId])
        };
        window.define.amd = true;

        const scriptUMD = document.createElement('script');
        scriptUMD.src = url;
        scriptUMD.onload = function() {
          setImportedComponet(window.lf[libraryId]);
        }
        document.head.appendChild(scriptUMD);
      },
      []
    );

    if (!ImportedComponent) {
      return (
        <></>
      )
    };

    return (
      <ImportedComponent
        {...rest}
        onChange={handleChange}
      />
    );
  };
};

export { PackageComponentUMD };