# LetsForm Designer Changelog

## v0.11.1
- feat: switched form translation to OpenAPI

## v0.11.0
- feat: added `object` field to all frameworks
- feat: increase limit to 5 forms for free users
- feat: import JSON schema in designer
- fix: array arrayOfValues and support for primitives
- fix: form re-renders if `errors` prop changes
- fix: create form button in dashboard
- fix: form builders box in dashboard
- fix: height of modal
- fix: cookie consent

## v0.10.1
- fix: missing React import
- fix: default currency prop with warning
- fix: un-necessary re-render on arrays [72](https://github.com/guidone/lets-form/issues/72)
- feat: added `currency` field

## v0.10.0
- feat: LetsForm Builder generally avaiable

## v0.9.17
- feat: added `columns` field
- fix: more fixes for LetsForm Builder

## v0.9.16
- fix: `divider` and `columns` missing className param (@ghoshorn)

## v0.9.15
- fix: missing `lodash` while rendering forms

## v0.9.14
- feat: added `className` property to all components
- fix: broken create new form
- fix: package peer dependency
- fix: RSuite checkbox alignment

## v0.9.13
- feat: add Slack channel link

## v0.9.12
- feat: add `hide` column param

## v0.9.11
- fix: setFieldValue may not work properly #60

## v0.9.10
- fix: form reset
- fix: Mantine checkbox group
- fix: Antd not firing onChange
- fix: cascading invocation of form scripts on `setFieldValue()`
- fixed labels

## v0.9.9
- feat: improved validation messages
- feat: nested validation for arrays
- refactored validation library
- fix: RSuite scoped styles
- fix: AntD toggle
- updted AntD, MUI, RSuite and Mantine

## v0.9.8
- cleanup and rotate keys

## v0.9.7
- feat: reorganizatiom of the dashboard
- feat: preparation for LetsForm Builder
- fix: Mantine rating and radio group not retaining values
- fix: Type error: Re-exporting a type when 'isolatedModules' is enabled requires using 'export type'
- fix: `addField` methdod support `top` and `bottom`

## v0.9.6
- css fixes for for builder

## v0.9.5
- feat: preparation for embeddable builder
- fix: removed `multi-select-language` component

## v0.9.4
- fix: support larger forms for packaging into zips
- fix: support download packages also for Safari, Firefox, Edge
- fix: use Craco to export MUI

## v0.9.3
- improved published forms and connectors
- feat: auto-detect locale
- fix: input-text-i18n css and warnings
- fix: deprecated setArrayValue and fix script error missing setParam
- fix: "errorMessage" warning

## v0.9.2
- added preview for templates gallery
- fix: edit custom CSS for a form
- fix: Mantine `input-text` type and mode
- fix: Mantine `button` in icon-only mode
- fix: AntD `select` label not visible without an icon
- fix: clash of field names using reserved words

## v0.9.1
- fix: minor CSS fixes

## v0.9.0
- new plugin architecture and UI cleanup
- beta: publish forms
- deprecated `two-columns` and `three-columns`
- added `columns` component with up to 12 columns
- renamed `.setValue()` method to `.setParam()` in Form Scripts
- added `.setFieldValue()` method in Form Scripts
- support for async functions in `validate`
- fix: AntD date showing incorrect default date
- fix: made `steps` and `tabs` controlled for all frameworks
- fix: fix Mantine `input-text` not showing initial value
- fix: void AntdD autofill of children inputs for value and defaultValue
- fix: rerender form on context change
- fix: DSL for tabs and steps with props check

## v0.8.24
- updated PostHog library
- fixed export to LetsForm DSL

## v0.8.23
- removed module component
- pre-select framework with url in designer

## v0.8.20
- added DSL for form definition
- connectors available for everyone

## v0.8.19
- connectors in Beta
- search filters for tempplates (and more templates available)

## v0.8.17
- AntD: removed _borderless_ attribute, added _variant_
- added Time field to AntD

## v0.8.16
- fixed RSuite radio-group missing required icon
- fixed RSuite fullWidth / Width params in select
- added time component for MUI, RSuite, Mantine
- fixed required icon for MUI for all components
- cleanup and more properties for MUI Date and MUI Datime
- Hidden field for all frameworks

## v0.8.15
- updated PostHog lib

## v0.8.14
- added feedback button

## v0.8.12
- preparation for Form Playground

## v0.8.11
- news box
- preparation for Form Playground
- fix infinite loop reading news

## v0.8.10
- news box
- preparation for Form Playground

## v0.8.9
- improved CI/CD tool chain

## v0.8.8
- added Mantine Upload, Image Placeholder, Multiselect and Button
- ImagePlaceholder max width/height defaults to 100%
- MUI Upload value is now the entire File object
- Improved JSON proview in Debug panel
- Fixed bottom padding of Group

## v0.8.7
- added export for Vite and Html import map (beta)
- switched from WebPack to Rollup
- ESM build for all frameworks
- fixed AntD direct import

## v0.8.6
- Added Mantine: tabs
- Fixed extra keys in configuring fields (very annoying)
- Added RSuite5: color for checkboxes
- Fixed crash on notification of events

## v0.8.5
- Added JSON Schemas for all UI frameworks
- Extracted react-hook-form from main bundle

## v0.8.4
- Mantine: divider, rating, slider, input tag
- fix framework resets

## v0.8.3
- Moved translate buttons

## v0.8.2
- Added support for Mantine: date
- Removed Providers components from LetsForm, need to be added outside it at application level
- Removed RSuite Form.Control
- Remove locales from all packages, added dependencies to load them dynamically
- Improved code generation to include locales and providers if needed
- Improved dependencies management for all components and frameworks

## v0.8.1
- Added versions management (restore, delete)
- Added export to Create React App

## v0.8.0
- Fixed CodeSandbox code generation
- Improved vanilla code generation
- Added support for Mantine: input-text, input-number, two-columns, three-columns, array, checkbox, checkbox-group, select, toggle, group

## v0.7.14
- Fixed broken Upload component in MUI
- Fixed broken Button component in React

## v0.7.13
- Fixex broken Columns components in MUI

## v0.7.12
- Split chunks for components of MUI, RSuite, AntD, ReactBootstrap and React: now components are loaded only if used
from CDN
- Fix: preview shows the right framework
- Fix: cleanup JSON schema in CodeSanbox
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

## v0.7.11
- fix MUI upload font styles
- changelog
- added React Input Number component

## v0.7.10
- [LF-8](https://github.com/guidone/lets-form/issues/8) Form > MUI Upload > Multiple = true > Error when select file

## v0.7.9
- [LF-6](https://github.com/guidone/lets-form/issues/6) LetsForm Designer > MUI Toggle > Crash when remove size pro
- added error boundary on LetsForm with link to GH issues

## v0.7.8
- added warning for mobile phones

## v0.7.7
- added icon in steps component
- array buttons alignment
- members list

## v0.7.6
- submit on enter for text-field

## v0.7.5
- add steps component for RSuite
- added sign-up/sign-in form free builder

## v0.7.4
- fixed bug with automatic translation panel
- moved CodeSandbox button
- fix save button

## v0.7.3
- Fixed bug on save form if not logged

## v0.7.2
- Improve merge template

## v0.7.1
- fix save new form

## v0.7.0
- css tweaks and UX improvements
- added Buttons Toggle for RSuite
- add split button to save, save and close, save with comment
- show form versions
- improved drag and drops in layout elements
- redesigned schema colors for layout elements / drag and drop
- fixed bug logging with GitHub + instructions

## v0.6.15
- improved CodeSandbox button

## v0.6.14
- avoid drag onto itself
- fixed GitHub login
- added support chat

## v0.6.13
- track events
- fix drag and drop bug

## v0.6.12
- upload component for RSuite5
- arrayType for array field: array of objects, array of string, comma separated values
- upload avatar from settings

## v0.6.10
- fix saving error
- shared forms box in dashboard

## v0.6.9
- subscribe to newsletter in signup
- this changelog
- drag handle to field wrappers

## v0.6.8
- added unsubscribe from newsletter in settings