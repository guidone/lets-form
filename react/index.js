import { GenerateGenerator } from "../generator";

import { FormReact } from './form';
import { TextInput } from './input-text';
/*import { ToggleInput } from './toggle';
import { Select } from './select';
import { FieldsGroup } from './group';
import { ListArray } from './array';
import { TwoColumns } from './two-columns';
import { ThreeColumns } from './three-columns';
import { InputNumber } from './input-number';*/


const Fields = {
  'text-input': {
    'react': TextInput
  },
  /*'toggle': {
    'react-rsuite5': ToggleInput
  },
  'select': {
    'react-rsuite5': Select
  },
  'group': {
    'react-rsuite5': FieldsGroup
  },
  'array': {
    'react-rsuite5': ListArray
  },
  'two-columns': {
    'react-rsuite5': TwoColumns
  },
  'three-columns': {
    'react-rsuite5': ThreeColumns
  },
  'input-number': {
    'react-rsuite5': InputNumber
  }*/
};

const Forms = {
  'react': FormReact
}

const FormGenerator = GenerateGenerator({ Fields, Forms });

export default FormGenerator ;
export * from '../helpers';
export { Fields, Forms };
