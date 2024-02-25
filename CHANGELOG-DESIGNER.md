# LetsForm Designer Changelog

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