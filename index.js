import { GenerateGenerator } from './generator';

import { Fields as FieldsReactRsuite5, Forms as FormsReactRsuite5 } from './react-rsuite5';
import { Fields as FieldsReactMaterialUI, Forms as FormsReactMaterialUI } from './react-material-ui';
import { Fields as FieldsReact, Forms as FormsReact } from './react';

import { mergeFields } from './helpers/merge-fields';

const Fields = mergeFields(
  FieldsReactRsuite5,
  FieldsReactMaterialUI,
  FieldsReact
);

const Forms = {
  ...FormsReactRsuite5,
  ...FormsReactMaterialUI,
  ...FormsReact
};

console.log('finally', Fields, Forms)

const FormGenerator = GenerateGenerator({ Fields, Forms });

console.log('Form generator generated', FormGenerator);

export default FormGenerator ;
export * from './helpers';
export { Fields, Forms };
