import { I18NObject, ValidationProps, CommonLetsFormProps, CommonLetsFormSchema } from './common';

export interface InputTextReactRsuite5Props extends ValidationProps {
  component: 'input-text';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  submitOnEnter?: boolean; // Trigger onSubmit / onError if the user hits Enter key
  size?: "lg" | "md" | "sm" | "xs";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  prefix?: string;
  inside?: boolean; // Show prefix and postfix inside the input box
  postfix?: string;
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface ToggleReactRsuite5Props extends ValidationProps {
  component: 'toggle';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "lg" | "md" | "sm" | "xs";
  checkedChildren?: I18NObject;
  unCheckedChildren?: I18NObject;
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface SelectReactRsuite5Props extends ValidationProps {
  component: 'select';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  showImageOptions?: boolean; // Show image field for Select options to be displayed in the drop-down
  filterKey?: string;
  filterValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  placement?: "topStart" | "topEnd" | "leftStart" | "rightStart" | "leftEnd" | "rightEnd" | "bottomStart" | "bottomEnd" | "auto" | "autoVerticalStart" | "autoVerticalEnd" | "autoHorizontalStart" | "autoHorizontalEnd";
  size?: "lg" | "md" | "sm" | "xs";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  searchable?: boolean;
  cleanable?: boolean;
  tooltip?: boolean; // Show hint as tooltip next to label
  appearance?: "default" | "subtle";
};

export interface InputNumberReactRsuite5Props extends ValidationProps {
  component: 'input-number';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "lg" | "md" | "sm" | "xs";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  allowClear?: boolean;
  min?: number;
  step?: number;
  max?: number;
  prefix?: string;
  inside?: boolean; // Show prefix and postfix inside the input box
  postfix?: string;
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface SliderReactRsuite5Props extends ValidationProps {
  component: 'slider';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  tooltip?: boolean; // Show hint as tooltip next to label
  min?: number;
  step?: number;
  max?: number;
  vertical?: boolean;
  progress?: boolean; // Show sliding progress bar
  showTooltip?: boolean; // Whether to show Tooltip when sliding
  graduated?: boolean;
};

export interface DateReactRsuite5Props extends ValidationProps {
  component: 'date';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  format?: string; // Check https://date-fns.org library for available formats
  size?: "lg" | "md" | "sm" | "xs";
  appearance?: "default" | "subtle";
  placement?: "topStart" | "topEnd" | "leftStart" | "rightStart" | "leftEnd" | "rightEnd" | "bottomStart" | "bottomEnd" | "auto" | "autoVerticalStart" | "autoVerticalEnd" | "autoHorizontalStart" | "autoHorizontalEnd";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  cleanable?: boolean;
  editable?: boolean; // Rendered as an input, the date can be entered via the keyboard
  oneTap?: boolean; // One click to complete the selection date
  showMeridian?: boolean; // Display hours in 12 format
  showWeekNumbers?: boolean;
  isoWeek?: boolean; // ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day
};

export interface CheckboxReactRsuite5Props extends ValidationProps {
  component: 'checkbox';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  color?: "red" | "orange" | "yellow" | "green" | "cyan" | "blue" | "violet";
  indeterminate?: boolean; // Status can be indeterminate (null), cycle values trough false, inderminate, true
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface CheckboxGroupReactRsuite5Props extends ValidationProps {
  component: 'checkbox-group';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  color?: "red" | "orange" | "yellow" | "green" | "cyan" | "blue" | "violet";
  inline?: boolean;
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface RadioGroupReactRsuite5Props extends ValidationProps {
  component: 'radio-group';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  inline?: boolean;
  appearance?: "default" | "picker"; // Show as default radio control or stacked buttons
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface InputTagReactRsuite5Props extends ValidationProps {
  component: 'input-tag';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  trigger?: Array<"Enter" | "Space" | "Comma">; // Set the trigger for creating tags
  block?: boolean; // Only in fluid layout
  size?: "lg" | "md" | "sm" | "xs";
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface InputMaskReactRsuite5Props extends ValidationProps {
  component: 'input-mask';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  mask?: string; // Use ${d} - digits, ${D} - any non digits, ${a} - any non alpha chars, ${w} - any word chars 
  guide?: boolean;
  keepCharPositions?: boolean; // When true, adding or deleting characters will not affect the position of existing characters
  showMask?: boolean; // When the input value is empty, the mask is displayed as a placeholder instead of a regular placeholder
  placeholderChar?: string; // The placeholder character represents the fillable spot in the mask
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  size?: "lg" | "md" | "sm" | "xs";
  tooltip?: boolean; // Show hint as tooltip next to label
  prefix?: string;
  inside?: boolean; // Show prefix and postfix inside the input box
  postfix?: string;
};

export interface TextareaReactRsuite5Props extends ValidationProps {
  component: 'textarea';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  size?: "lg" | "md" | "sm" | "xs";
  rows?: number;
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface RateReactRsuite5Props extends ValidationProps {
  component: 'rate';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  allowHalf?: boolean;
  cleanable?: boolean;
  vertical?: boolean; // Vertical direction when half selected
  max?: number;
  color?: "red" | "orange" | "yellow" | "green" | "cyan" | "blue" | "violet";
  size?: "lg" | "md" | "sm" | "xs";
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface PlaceholderReactRsuite5Props extends ValidationProps {
  component: 'placeholder';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  text?: I18NObject; // Supports markdown (i.e., **bold**, _italics_)
  hidden?: boolean;
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface MultiselectReactRsuite5Props extends ValidationProps {
  component: 'multiselect';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  filterKey?: string;
  filterValue?: string;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  placement?: "topStart" | "topEnd" | "leftStart" | "rightStart" | "leftEnd" | "rightEnd" | "bottomStart" | "bottomEnd" | "auto" | "autoVerticalStart" | "autoVerticalEnd" | "autoHorizontalStart" | "autoHorizontalEnd";
  size?: "lg" | "md" | "sm" | "xs";
  multiselectMode?: "tag" | "plain"; // Show the selected values as tag element or plain string
  block?: boolean; // Only in fluid layout
  searchable?: boolean;
  cleanable?: boolean;
  tooltip?: boolean; // Show hint as tooltip next to label
  preventOverflow?: boolean; // Prevent floating element overflow
};

export interface PlaceholderImageReactRsuite5Props extends ValidationProps {
  component: 'placeholder-image';
  name?: string;
  url?: string;
  align?: "left" | "center" | "right";
  hidden?: boolean;
  maxWidth?: number;
  maxHeight?: number;
  marginTop?: number;
  marginBottom?: number;
};

export interface ButtonReactRsuite5Props extends ValidationProps {
  component: 'button';
  name?: string; // The name of the field and the key of the JSON
  buttonType?: "toggle" | "link"; // Type of button: toggle 2-states button or link button
  labelOn?: I18NObject;
  iconOn?: string;
  labelOff?: I18NObject;
  iconOff?: string;
  initialValue?: boolean;
  labelLink?: I18NObject;
  iconLink?: string;
  href?: string;
  hint?: I18NObject; // Show hint in a tooltip
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  hidden?: boolean;
  size?: "lg" | "md" | "sm" | "xs";
  appearance?: "default" | "primary" | "subtle" | "link" | "ghost"; // Only available for link-type buttons
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface DividerReactRsuite5Props extends ValidationProps {
  component: 'divider';
  name?: string; // The name of the field and the key of the JSON
  size?: number; // Thickness of the divider
  color?: string;
  hidden?: boolean;
};

export interface DatetimeReactRsuite5Props extends ValidationProps {
  component: 'datetime';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  format?: string; // Check https://date-fns.org library for available formats
  size?: "lg" | "md" | "sm" | "xs";
  appearance?: "default" | "subtle";
  placement?: "topStart" | "topEnd" | "leftStart" | "rightStart" | "leftEnd" | "rightEnd" | "bottomStart" | "bottomEnd" | "auto" | "autoVerticalStart" | "autoVerticalEnd" | "autoHorizontalStart" | "autoHorizontalEnd";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  cleanable?: boolean;
  editable?: boolean; // Rendered as an input, the date can be entered via the keyboard
  oneTap?: boolean; // One click to complete the selection date
  showMeridian?: boolean; // Display hours in 12 format
  isoWeek?: boolean; // ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day
  showWeekNumbers?: boolean;
};

export interface RadioTileReactRsuite5Props extends ValidationProps {
  component: 'radio-tile';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  initalOption?: string;
  disabled?: boolean;
  hidden?: boolean;
  inline?: boolean; // Use inline layout
  iconWidth?: number;
  iconHeight?: number;
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface UploadReactRsuite5Props extends ValidationProps {
  component: 'upload';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  hidden?: boolean;
  listType?: "text" | "picture-text" | "picture";
  maxPreviewFileSize?: number; // Set the maximum limit for preview files
  tooltip?: boolean; // Show hint as tooltip next to label
  fileListVisible?: boolean;
  disabledFileItem?: boolean;
  multiple?: boolean; // Allow selecting multiple files
  removable?: boolean;
  draggable?: boolean;
  uploadButtonLabel?: I18NObject;
  uploadButtonAppearance?: "default" | "primary" | "subtle" | "link" | "ghost";
  uploadButtonSize?: "lg" | "md" | "sm" | "xs";
  draggableText?: I18NObject;
  draggableHeight?: number;
};

export interface ButtonsToggleGroupReactRsuite5Props extends ValidationProps {
  component: 'buttons-toggle-group';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  showImageOptions?: boolean; // Show image field for Select options to be displayed in the drop-down
  multiple?: boolean; // Allow to select multiple values
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  fullWidth?: boolean;
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
  size?: "lg" | "md" | "sm" | "xs";
};

export interface EsmModuleReactRsuite5Props extends ValidationProps {
  component: 'esm-module';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  componentUrl?: string;
  defaultExport?: boolean;
  exportedKey?: string; // The exported key from the ESM module
  count?: number;
  placeholder?: string;
};

export interface TimeReactRsuite5Props extends ValidationProps {
  component: 'time';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "lg" | "md" | "sm" | "xs";
  appearance?: "default" | "subtle";
  placement?: "topStart" | "topEnd" | "leftStart" | "rightStart" | "leftEnd" | "rightEnd" | "bottomStart" | "bottomEnd" | "auto" | "autoVerticalStart" | "autoVerticalEnd" | "autoHorizontalStart" | "autoHorizontalEnd";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  cleanable?: boolean;
  editable?: boolean; // Rendered as an input, the date can be entered via the keyboard
  oneTap?: boolean; // One click to complete the selection date
  showMeridian?: boolean; // Display hours in 12 format
  format?: "HH:mm" | "HH:mm:ss" | "hh:mm:ss aaa" | "hh:mm aaa";
};

export interface HiddenReactRsuite5Props extends ValidationProps {
  component: 'hidden';
  name?: string; // The name of the field and the key of the JSON
};

type LfFieldReactRsuite5Props =
  | InputTextReactRsuite5Props
  | ToggleReactRsuite5Props
  | SelectReactRsuite5Props
  | InputNumberReactRsuite5Props
  | SliderReactRsuite5Props
  | DateReactRsuite5Props
  | CheckboxReactRsuite5Props
  | CheckboxGroupReactRsuite5Props
  | RadioGroupReactRsuite5Props
  | InputTagReactRsuite5Props
  | InputMaskReactRsuite5Props
  | TextareaReactRsuite5Props
  | RateReactRsuite5Props
  | PlaceholderReactRsuite5Props
  | MultiselectReactRsuite5Props
  | PlaceholderImageReactRsuite5Props
  | ButtonReactRsuite5Props
  | DividerReactRsuite5Props
  | DatetimeReactRsuite5Props
  | RadioTileReactRsuite5Props
  | UploadReactRsuite5Props
  | ButtonsToggleGroupReactRsuite5Props
  | EsmModuleReactRsuite5Props
  | TimeReactRsuite5Props
  | HiddenReactRsuite5Props

export type { LfFieldReactRsuite5Props };

export interface LfColumnsReactRsuite5Props {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
};

export interface LfColumnReactRsuite5Props {
  name?: string;
  alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
  size?: number;
};

export interface LfTabsReactRsuite5Props {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
  appearance?: "default" | "tabs" | "subtle";
  reversed?: boolean;
  justified?: boolean;
};

export interface LfTabReactRsuite5Props {
  value?: string;
  label?: I18NObject;
};

export interface LfStepsReactRsuite5Props {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
  labelNext?: I18NObject;
  labelPrevious?: I18NObject;
  align?: "left" | "center" | "right";
  small?: boolean;
  status?: "finish" | "wait" | "process" | "error";
};

export interface LfStepReactRsuite5Props {
  value?: string;
  label?: I18NObject;
  description?: I18NObject;
  icon?: string;
};

export interface LfGroupReactRsuite5Props {
  name?: string;
  label?: I18NObject;
  hidden?: boolean;
  align?: "left" | "center" | "right";
  collapsible?: boolean;
  open?: boolean;
  border?: "top" | "bottom" | "topBottom" | "boxed";
};

export interface LfArrayReactRsuite5Props {
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  align?: "top" | "center" | "bottom"; // Vertical alignment of add / remove buttons
  alignOffset?: number; // Offset of the add / remove button from the top / bottom (depends on the alignment)
  arrayType?: "arrayOfObject" | "arrayOfString" | "commaSeparated"; // Defines the result of the list component, "arrayOfString" and "commaSeparated" only applies if list field has only one field
};

export interface LetsFormReactRsuite5Props extends CommonLetsFormProps {
  layout?: "inline" | "horizontal" | "vertical";
  fluid?: boolean; // Allows the form to fill 100% of the container
};

interface GroupReactRsuite5Props extends LfGroupReactRsuite5Props {
  component: "group";
  fields: Array<LfFieldReactRsuite5Props | ArrayReactRsuite5Props | ColumnsReactRsuite5Props | StepsReactRsuite5Props | TabsReactRsuite5Props>;
};

interface ArrayReactRsuite5Props extends LfArrayReactRsuite5Props {
  component: "array";
  fields: Array<LfFieldReactRsuite5Props | GroupReactRsuite5Props | ColumnsReactRsuite5Props>;
};

interface ColumnsReactRsuite5Props extends LfColumnsReactRsuite5Props {
  component: "columns";
  fields: { [index: string]: Array<LfFieldReactRsuite5Props | ArrayReactRsuite5Props | GroupReactRsuite5Props | TabsReactRsuite5Props | StepsReactRsuite5Props>; };
  columns: Array<{
    name?: string;
    alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
    size?: number;
  }>;
};

interface StepsReactRsuite5Props extends LfStepsReactRsuite5Props {
  component: "steps";
  fields: { [index: string]: Array<LfFieldReactRsuite5Props | ArrayReactRsuite5Props | ColumnsReactRsuite5Props | GroupReactRsuite5Props | TabsReactRsuite5Props>; };
  steps: Array<{
    value?: string;
    label?: I18NObject;
    description?: I18NObject;
    icon?: string;
  }>;
};

interface TabsReactRsuite5Props extends LfTabsReactRsuite5Props {
  component: "tabs";
  fields: { [index: string]: Array<LfFieldReactRsuite5Props | ArrayReactRsuite5Props | ColumnsReactRsuite5Props | GroupReactRsuite5Props | StepsReactRsuite5Props>; };
  tabs: Array<{
    value?: string;
    label?: I18NObject;
  }>;
};


export interface LetsFormSchemaReactRsuite5 extends CommonLetsFormSchema {
  layout?: "inline" | "horizontal" | "vertical";
  fluid?: boolean; // Allows the form to fill 100% of the container
  fields: Array<LfFieldReactRsuite5Props | GroupReactRsuite5Props | ArrayReactRsuite5Props | ColumnsReactRsuite5Props | StepsReactRsuite5Props | TabsReactRsuite5Props>;
};
