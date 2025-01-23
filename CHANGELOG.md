# LetsForm Changelog

## v0.12.8
- fix: `divider` and `columns` missing className param (@ghoshorn)

## v0.12.7
- fix: relax throwing errors on unknows component params
- fix: avoid warning for unknows params on custom components

## v0.12.5
- feat: added `className` property to all components
- fix: package peer dependency
- fix: RSuite checkbox alignment

## v0.12.4
- feat: add `hide` column param

## v0.12.3
- fix: setFieldValue may not work properly

## v0.12.2
- fix: inconsistent styling in columns

## v0.12.1
- fix: form reset
- fix: Mantine checkbox group
- fix: Antd not firing onChange
- fix: cascading invocation of form scripts on `setFieldValue()`

## v0.12.0
- feat: improved validation messages
- feat: nested validation for arrays
- refactored validation library
- fix: RSuite scoped styles
- fix: AntD toggle

## v0.11.6
- fix: missing `form` prop in TypeScript definitions

## v0.11.5
- fix: Mantine rating and radio group not retaining values

## v0.11.4
- fix: Type error: Re-exporting a type when 'isolatedModules' is enabled requires using 'export type'

## v0.11.3
- fix: `addField` methdod support `top` and `bottom`
- fix: removed `multi-select-language` component

## v0.11.2
- fix: enable passing id to inner form for enabling html5 button form attribute [@butchmarshall]
- fix: hiding submit and cancel buttons in material-ui [@butchmarshall]

## v0.11.1
- fix: expose TypeScript definitions

## v0.11.0
- feat: TypeScript support
- fix: RSuite, Mantine, Antd fix translations for `steps`

## v0.10.8
- fix: plaintext mode in DSL mode
- fix: plaintext mode shows preview of array of objects (if only has 1 key)
- feat: added `disableButtons` parameter

## v0.10.7
- fix: Mantine Select breaks if value = null

## v0.10.6
- fix: react-bootstrap input-number

## v0.10.5
- feat: auto-detect locale
- fix: input-text-i18n css and warnings
- fix: deprecated setArrayValue and fix script error missing setParam
- fix: "errorMessage" warning

## v0.10.4
- fix: Mantine `input-text` type and mode
- fix: Mantine `button` in icon-only mode
- fix: AntD `select` label not visible without an icon
- fix: clash of field names using reserved words

## v0.10.3
- support for async functions in `validate`
- fix: AntD date showing incorrect default date

## v0.10.0
- deprecated `two-columns` and `three-columns`
- added `columns` component with up to 12 columns
- renamed `.setValue()` method to `.setParam()` in Form Scripts
- added `.setFieldValue()` method in Form Scripts
- fix: made `steps` and `tabs` controlled for all frameworks
- fix: fix Mantine `input-text` not showing initial value
- fix: void AntdD autofill of children inputs for value and defaultValue
- fix: rerender form on context change
- fix: DSL for tabs and steps with props check

## v0.9.7
- fix: RSuite input-number imports

## v0.9.6
- [fix](https://github.com/guidone/lets-form/issues/30): AntD postfix for input-number

## v0.9.5
- added `context` property
- added `--lf-buttons-margin` css variable
- expose `validate` method
- fix: expose DSL tags in all builds
- fix: full width in RSuite input-text
- fix: re-render form if custom prop changes
- fix: hide submit button

## v0.9.4
- fixed DSL

## v0.9.3
- fixed Zapier connector
- added DSL for form definition

## v0.9.2
- added `footer` param to LetsForm
- support for DSL to create forms

## v0.9.1
- cleanup for connectors

## v0.9.0
- added connectors
- minor fixes in React Bootstrap

## v0.8.3
- fixed Divider field
- fixed broken manifests

## v0.8.0
- finally remove beta tag

## v0.7.20
- AntD: removed _borderless_ attribute, added _variant_
- added Time field to AntD

## v0.7.19
- fixed RSuite radio-group missing required icon
- fixed RSuite fullWidth / Width params in select
- added time component for MUI, RSuite, Mantine
- fixed required icon for MUI for all components
- cleanup and more properties for MUI Date and MUI Datime
- Hidden field for all frameworks

## v0.7.18
- added React Upload component
- fixed css layout ofr MUI React Upload
- fixed required icon for non-floating label in MUI
- tabs component for Mantine
- fixed RSuite spacing

## v0.7.17
- fix RSuite select icon

## v0.7.16
- fix array components onRemove deleting all elements
- fix AntD date spacing

## v0.7.15
- RSuite treeshaking

## v0.7.14
- added append() and fields() to formHelper
- ToggleButtons now accepts params fullWidth, justifyContent and buttons with image

## v0.7.13
- removed webpack dependencies
- CI/CD on gh

## v0.7.12
- general cleanup

## v0.7.11
- added Mantine Upload, Image Placeholder, Multiselect and Button
- ImagePlaceholder max width/height defaults to 100%
- MUI Upload value is now the entire File object
- Fixed bottom padding of Group

## v0.7.10
- switched from WebPack to Rollup
- ESM build for all frameworks
- fixed AntD direct import

## v0.7.9
- converted .json imports to .js

## v0.7.8
- Fix Mantine slider not retaining value
- Experimental ESM build for MantineUI

## v0.7.7
- Added Mantine: tabs
- Added RSuite5: color for checkboxes

## v0.7.6
- Added JSON Schemas for all UI frameworks
- Extracted react-hook-form from main bundle

## v0.7.4
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