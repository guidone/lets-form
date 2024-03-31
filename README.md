<p align="center">
  <img width="300" src="https://raw.githubusercontent.com/guidone/lets-form/main/scripts/assets/logo-ext%403x.png">
  <br/>
   Create React forms with simple JSON form schemas, supports Material UI / Bootstrap / AntDesign / RSuite / Mantine
</p>
<p align="center">
  <a href="https://letsform.dev">Documentation</a>
  &nbsp;|&nbsp;
  <a href="https://designer.letsform.dev">Try LetsForm Designer</a>
</p>

# About LetsForm
**LetsForm** is an open source tool to generate React forms with simple JSON schemas using native UI components: Material UI, AntD, RSuite, ReactBootstrap or just React

* [multi-language](https://letsform.dev/lets-form-designer/automatic-translations) (i18n) support
* [validation](https://letsform.dev/advanced/validation) with i18n and scripting support
* read-only and disabled mode
* scripting support for [dynamic forms](https://letsform.dev/advanced/transformers)
* over **30** [components](https://letsform.dev/components-matrix) available, including layout components like array, tabs, steps, groups and columns
* use [LetsForm designer](https://designer.letsform.dev) to visually create forms
* full set of [helpers](https://letsform.dev/advanced/helpers) to programmatically interact with JSON forms
* standalone and open source component, no connections with third party servers

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
  "$schema": "https://unpkg.com/lets-form/schemas/react-rsuite5/form.json",
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

# Why LetsForm
Using a JSON form schema to create React forms is - of course - opinionated, it brings some advantages

- **Best practices**: Define the form declaratively and use one of the available frameworks to render it. The components will be rendered in an idiomatic way, following the best practices of the specific framework.

- **React Hook Form**: based on the performant React Hook Form, no more unwanted re-renders even with complex forms

- **Consistency**: with a JSON form schema all forms are rendered in the same way across all pages, with consistent margins, colors, customizations and components.

- **Boilerplate**: Avoid writing the same code over and over to set up labels, hints, validation elements, and other comon form features. No more copy and paste

- **Toolchain**: enable a set of tools to work with JSON form schemas, i.e. GitHub and Npm integration, automatic translators, etc

- **Maintanable**: decouple the business logic from the definition of the form. This allows - for example - translators and content editors to handle the form without interfering with the code

- **Don’t reinvent the wheel**: Don’t implement over and over the same functionalities like validation, localization, dynamic fields, plaintext mode for confirmation pages, disabling the form while submitting, etc.

- **Forms defined programmatically**: JSON forms can be created programmatically, for example in those use cases where a form is defined after introspection of a data scheme (database table, GraphQL schema, etc.)

- **Developer friendly**: is some circumstances with dynamic fors, it's easier to manipulate
  the JSON schema rather then the React code

- **Serializable**: JSON schema can be easily serialized and stored, this can be useful in scenarios where data needs to be stored along with *"how"* the data is manipulated

## The MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Coded with :heart: in :it:
