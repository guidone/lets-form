<p align="center">
  <img width="300" src="https://raw.githubusercontent.com/guidone/lets-form/main/scripts/assets/logo-ext%403x.png">
  <br/>
   Create React forms with simple JSON form schemas, supports Material UI / Bootstrap / AntDesign / RSuite / Mantine
</p>
<p align="center">
  <a href="https://letsform.dev">Documentation</a>
  &nbsp;|&nbsp;
  <a href="https://designer.letsform.dev">Try LetsForm Designer</a>
  &nbsp;|&nbsp;
  <a href="https://www.javascript-jedi.com/LetsForm-Roadmap-f09f7f46fcb14e7a860cd3a88b781bec">Roadmap</a>
  &nbsp;|&nbsp;
  <a href="https://www.javascript-jedi.com">Blog</a>
</p>

# About LetsForm
**LetsForm** is an open source tool to generate React forms with simple JSON schemas using native UI components: Material UI, AntD, RSuite, ReactBootstrap, Mantine or just React

* **forget tedious boilerplate** copy and paste everytime you need to add a field. No more copy and paste from old code

* build the form **visually** with [LetsForm designer](https://designer.letsform.dev)

* based on the performant **React Hook Form**, no more unwanted re-renders even with complex forms

* keep **visual consistency** of the form, with a JSON form schema all forms are rendered in the same way across all pages,
with the same margins, colors, customizations and components.

* [validation](https://letsform.dev/advanced/validation) out of the box with **i18n** and scripting support

* [multi-language](https://letsform.dev/lets-form-designer/automatic-translations) **(i18n) support** and
[automatic translations of i18n tokens](https://letsform.dev/lets-form-designer/i18n-support#autocomplete-translations)

* [implement dynamic forms](https://letsform.dev/advanced/form-scripts) with the language you love - JavaScript -
and a simple set of instructions

* use **form features you will certainly need** in every project like splitting the form in
[tabs](https://letsform.dev/components/tabs#tabs), [steps](https://letsform.dev/components/steps),
[collapsible groups](https://letsform.dev/components/group) or [columns](https://letsform.dev/components/two-columns)

* easily switch **form modes**: [editable, disabled, read only and plaintext](https://letsform.dev/advanced/form-modes)
(you will never have to write form confirmation views)

* [support for arrays](https://letsform.dev/components/array), just define the fields of the array and you'll get the
**UI to add, remove and validate** the items in the array

* over **30** [components](https://letsform.dev/components-matrix) with consistent behaviour and properties

* full set of [helpers](https://letsform.dev/advanced/helpers) to **programmatically interact** with JSON form schemas

* **toolchain** to organize your forms in [projects](https://letsform.dev/lets-form-designer/projects) with
[versioning](https://letsform.dev/lets-form-designer/versioning) and integration with
[GitHub](https://letsform.dev/lets-form-designer/export-to-github), [NPM](https://letsform.dev/lets-form-designer/export-to-npm)
or your [repository](https://letsform.dev/lets-form-designer/export-to-file)

* **leverage** [ready-to-use and useful form templates](https://letsform.dev//lets-form-designer/templates) (like cascading
drop downs of all countries and provinces in all languages or credit card with validation)

* JSON forms can be **created programmatically**, for example in those use cases where a form is defined after introspection
of a data scheme (database table, GraphQL schema, etc.)

# Getting started
Install LetsForm

```
npm i lets-form -D
```

then try a simple JSON form schema with just one text field (or use the [LetsForm Designer](https://designer.letsform.dev) to create one), for example using **RSuite** components

```js
import React from 'react';
import LetsForm from 'lets-form/react-rsuite5';
// or /react-antd or /react-bootstrap or /react-material-ui or /react-mantine or /react
// see https://letsform.dev/docs for more info about specific frameworks

import 'rsuite/dist/rsuite.min.css';

// copied and pasted from LetsForm Designer
const MY_FORM = {
  "$schema": "https://cdn.jsdelivr.net/npm/lets-form/schemas/react-rsuite5/form.json",
  "version": 1,
  "layout": "vertical",
  "validationMode": "onSubmit",
  "fluid": true,
  "fields": [
    {
      "component": "input-text",
      "label": "My Field",
      "name": "my_field"
    }
  ],
  "name": "Simplest example"
};

const MyView = () => {
  return (
    <LetsForm
      form={MY_FORM}
      // or onChange
      onSubmit={(values => {
        console.log('Submitting...', values);
      }}
    />
  );
}
```

## The MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Coded with :heart: in :it:
