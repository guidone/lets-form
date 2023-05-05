import React from 'react';

import { GenerateGenerator } from '../generator';

import { FormRsuite5 } from './form';
import { TextInput } from './input-text';
import { ToggleInput } from './toggle';
import { Select } from './select';
import { Group } from './group';
import { ListArray } from './array';
import { TwoColumns } from './two-columns';
import { ThreeColumns } from './three-columns';
import { InputNumber } from './input-number';
import { SelectDate } from './date';
import { SelectDatetime } from './datetime';
import { Checkbox } from './checkbox';
import { Slider } from './slider';
import { CheckboxGroup } from './checkbox-group';
import { RadioGroup } from './radio-group';
import { InputTag } from './input-tag';
import { InputMask } from './input-mask';
import { Textarea } from './textarea';
import { Rate } from './rate';
import { Placeholder } from './placeholder';
import { Multiselect } from './multiselect';
import { MultiselectLanguage } from './multiselect-language';
import { InputTextI18N } from './input-text-i18n';
import { SelectStates } from './select-states';
import { PlaceholderImage } from './placeholder-image';
import { Button } from './button';
import { Divider } from './divider';
import { ReactView } from './react-view';

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
    'react-rsuite5': Group
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
  },
  'input-mask': {
    'react-rsuite5': InputMask
  },
  'textarea': {
    'react-rsuite5': Textarea
  },
  'rate': {
    'react-rsuite5': Rate
  },
  'placeholder': {
    'react-rsuite5': Placeholder
  },
  'multiselect': {
    'react-rsuite5': Multiselect
  },
  'multiselect-language': {
    'react-rsuite5': MultiselectLanguage
  },
  'input-text-i18n': {
    'react-rsuite5': InputTextI18N
  },
  'select-states': {
    'react-rsuite5': SelectStates
  },
  'placeholder-image': {
    'react-rsuite5': PlaceholderImage
  },
  'button': {
    'react-rsuite5': Button
  },
  'divider': {
    'react-rsuite5': Divider
  },
  'react-view': {
    'react-rsuite5': ReactView
  },
  'datetime': {
    'react-rsuite5': SelectDatetime
  }
};

const Forms = {
  'react-rsuite5': FormRsuite5
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = ({ framework, children, ...rest}) => (
  <FormGenerator framework="react-rsuite5" {...rest}>{children}</FormGenerator>
);

export default LetsForm ;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
