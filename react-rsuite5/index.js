import { GenerateGenerator } from '../generator';

import { FormRsuite5 } from './form';
import { TextInput } from './input-text';
import { ToggleInput } from './toggle';
import { Select } from './select';
import { FieldsGroup } from './group';
import { ListArray } from './array';
import { TwoColumns } from './two-columns';
import { ThreeColumns } from './three-columns';
import { InputNumber } from './input-number';
import { SelectDate } from './date';
import { Checkbox } from './checkbox';
import { Slider } from './slider';
import { CheckboxGroup } from './checkbox-group';
import { RadioGroup } from './radio-group';
import { InputTag } from './input-tag';

const Fields = {
  'text-input': {
    'react-rsuite5': TextInput
  },
  'toggle': {
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
  },
  'date': {
    'react-rsuite5': SelectDate
  },
  'checkbox': {
    'react-rsuite5': Checkbox
  },
  'checkbox-group': {
    'react-rsuite5': CheckboxGroup
  },
  'slider': {
    'react-rsuite5': Slider
  },
  'radio-group': {
    'react-rsuite5': RadioGroup
  },
  'input-tag': {
    'react-rsuite5': InputTag
  }
};

const Forms = {
  'react-rsuite5': FormRsuite5
};

const FormGenerator = GenerateGenerator({ Fields, Forms });

export default FormGenerator ;
export * from '../helpers';
export { Fields, Forms };
