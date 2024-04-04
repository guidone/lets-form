# LetsForm Changelog

## 0.7.6
- Added JSON Schemas for all UI frameworks
- Extracted react-hook-form from main bundle

## 0.7.4
- Mantine: divider, rating, slider, input tag

## v0.7.3
- Added support for Mantine: date
- Removed Providers components from LetsForm, need to be added outside it at application level
- Removed RSuite Form.Control
- Remove locales from all packages, added dependencies to load them dynamically

## v0.7.0
- Added support for Mantine: input-text, input-number, two-columns, three-columns, array, checkbox, checkbox-group, select, toggle, group

## v0.6.2
- Fixed broken Upload component in MUI
- Fixed broken Button component in React

## v0.6.1
- Fixed broken Columns components in MUI

## v0.6.0
- Split chunks for components of MUI, RSuite, AntD, ReactBootstrap and React
- LetsForm: added `loader` and `preloadComponents` params
- LetsForm: **Breaking changes**** imports are changed for consistency with the UI frameworks names used in JSON schema

```js
// For React
import LetsForm from 'lets-form/react'; // this is unchanged
// For AntD
import LetsForm from 'lets-form/react-antd'; // previously was 'lets-form/antd'
// For RSuite5
import LetsForm from 'lets-form/react-rsuite5'; // previously was 'lets-form/rsuite5'
// For React Bootstrap
import LetsForm from 'lets-form/react-bootstrap'; // previously was 'lets-form/bootstrap'
// For Material UI
import LetsForm from 'lets-form/react-material-ui'; // previously was 'lets-form/material-ui'
```

## v0.5.8
- fix MUI upload font styles
- added React Input Number component

## v0.5.7
- [LF-8](https://github.com/guidone/lets-form/issues/8) Form > MUI Upload > Multiple = true > Error when select file

## v0.5.6
- [LF-6](https://github.com/guidone/lets-form/issues/6) LetsForm Designer > MUI Toggle > Crash when remove size prop
- fixed Upload component in MUI not reading "value" prop

## v0.5.5
- Button component for React
- renamed property "transformer" to "script"
- pass-through "disabled" property for group, columns, array, steps and tabs
- added upload component for MUI

## v0.5.4
- AntD steps

## v0.5.3
- fixed missed dependency in ArrayItem
- WebPack minimize

## v0.5.2
- added buttons alignment in array component
- added icon steps component

## v0.4.21
- submit on enter for text-field

## v0.4.20
- add steps component for RSuite

## v0.4.15
- add validate json helper

## v0.4.14
- fix array i18n support

## v0.4.12
- - added Buttons Toggle for RSuite

## v0.4.11
- Upload for AntD

## v0.4.10
- upload component for RSuite5
- arrayType for array field: array of objects, array of string, comma separated values

## v0.4.9
- This changelog!