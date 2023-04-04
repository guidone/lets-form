import { GenerateGenerator } from "../generator";

import { FormReact } from './form';
import { TextInput } from './input-text';
import { Checkbox } from './checkbox';
import { Textarea } from './textarea';
import { ThreeColumns } from './three-columns';
import { TwoColumns } from './two-columns';

const Fields = {
  'text-input': {
    'react': TextInput
  },
  'checkbox': {
    'react': Checkbox
  },
  'textarea': {
    'react': Textarea
  },
  'three-columns': {
    'react': ThreeColumns
  },
  'two-columns': {
    'react': TwoColumns
  }
};

const Forms = {
  'react': FormReact
};

const FormGenerator = GenerateGenerator({ Fields, Forms });

export default FormGenerator ;
export * from '../helpers';
export { Fields, Forms };
