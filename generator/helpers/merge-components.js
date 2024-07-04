import _ from 'lodash';

import { PackageComponetESM } from './wrap-named-import';
import { PackageComponentUMD } from './package-component-umd';

/**
 * mergeComponents
 * Merge additional components to the main library used to render the components as custom, custom components
 * can also be defined with import map
 * @param {*} main
 * @param {*} additional
 * @param {Object} importMap
 * @returns
 */
export const mergeComponents = (main, additional, importMap) => {

  console.log('merge components', importMap)

  // if not empty, then merge, overwriting is ok
  if (!_.isEmpty(additional) && Object.keys(additional).length !== 0) {
    Object.keys(additional)
      .forEach(componentName => {
        if (main[componentName] == null) {
          main[componentName] = additional[componentName];
        } else {
          main[componentName] = {
            ...main[componentName],
            ...additional[componentName]
          };
        }
      });
  }

  if (!_.isEmpty(importMap) && Object.keys(importMap).length !== 0) {
    Object.keys(importMap)
      .forEach(namedImport => {
        if (_.isString(importMap[namedImport])) {
          main[namedImport] = {
            '*': PackageComponetESM({
              name: namedImport,
              url: importMap[namedImport]
            })
          };
        } else if (_.isObject(importMap[namedImport])) {
          if (importMap[namedImport].type == 'esm') {
            main[namedImport] = {
              '*': PackageComponetESM({
                name: namedImport,
                url: importMap[namedImport].url,
                defaultExport: importMap[namedImport].defaultExport ?? true,
                exportedKey: importMap[namedImport].exportedKey,
                onChangeType: importMap[namedImport].onChangeType
              })
            };
          } else {
            main[namedImport] = {
              '*': PackageComponentUMD({
                name: namedImport,
                url: importMap[namedImport].url,
                defaultExport: importMap[namedImport].defaultExport ?? true,
                exportedKey: importMap[namedImport].exportedKey,
                onChangeType: importMap[namedImport].onChangeType
              })
            };
          }
        }
      });
  }

  return main;
};