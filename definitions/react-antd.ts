import { I18NObject, ValidationProps, CommonLetsFormProps, CommonLetsFormSchema } from './common';

export interface InputTextReactAntdProps extends ValidationProps {
  component: 'input-text';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  submitOnEnter?: boolean; // Trigger onSubmit / onError if the user hits Enter key
  size?: "small" | "default" | "large";
  variant?: "outlined" | "borderless" | "filled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  prefix?: string;
  postfix?: string;
  showCount?: boolean;
  maxLength?: number;
  allowClear?: boolean;
  tooltip?: boolean;
};

export interface ToggleReactAntdProps extends ValidationProps {
  component: 'toggle';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "default" | "small";
  tooltip?: boolean;
  checkedChildren?: I18NObject;
  unCheckedChildren?: I18NObject;
};

export interface SelectReactAntdProps extends ValidationProps {
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
  size?: "small" | "default" | "large";
  variant?: "outlined" | "borderless" | "filled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  listHeight?: number; // Config popup height
  allowClear?: boolean;
  popupMatchSelectWidth?: boolean; // Determine whether the popup menu and the select input are the same width
  tooltip?: boolean;
  showSearch?: boolean; // Whether select is searchable
  virtual?: boolean;
  showArrow?: boolean;
};

export interface InputNumberReactAntdProps extends ValidationProps {
  component: 'input-number';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "default" | "large";
  variant?: "outlined" | "borderless" | "filled";
  min?: number;
  step?: number;
  max?: number;
  prefix?: string;
  postfix?: string;
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  showControls?: boolean; // Whether to show +- controls, or set custom arrows icon
  stringMode?: boolean; // Set value as string to support high precision decimals. Will return string value by onChange
  tooltip?: boolean;
};

export interface SliderReactAntdProps extends ValidationProps {
  component: 'slider';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  keyboard?: boolean; // Support using keyboard to move handlers
  dots?: boolean; // Whether the thumb can drag over tick only
  reverse?: boolean; // Reverse the component
  min?: number;
  step?: number;
  max?: number;
  tooltipOpen?: boolean; // Tooltip behaviour, checked always open, unchecked always close
  tooltipPlacement?: "top" | "left" | "right" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
  included?: boolean; // Make effect when marks not null, true means containment and false means coordinative
};

export interface DateReactAntdProps extends ValidationProps {
  component: 'date';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "default" | "large";
  variant?: "outlined" | "borderless" | "filled";
  format?: string; // Dayjs format to display input value, "MMMM D, YYYY" by default. Check https://day.js.org/docs/en/display/format for reference
  picker?: "date" | "week" | "month" | "quarter" | "year";
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  mode?: "time" | "date" | "month" | "year" | "decade";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  minDate?: string;
  maxDate?: string;
  showTime?: boolean;
  showNow?: boolean; // Show now button
  showToday?: boolean; // Show today button
  preserveInvalidOnBlur?: boolean; // Not clean input on blur even when the typing is invalidate
  inputReadOnly?: boolean; // Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)
  needConfirm?: boolean; // Need click confirm button to trigger value change. Default false when multiple
  allowClear?: boolean;
  tooltip?: boolean;
};

export interface CheckboxReactAntdProps extends ValidationProps {
  component: 'checkbox';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
};

export interface CheckboxGroupReactAntdProps extends ValidationProps {
  component: 'checkbox-group';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
};

export interface RadioGroupReactAntdProps extends ValidationProps {
  component: 'radio-group';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  optionType?: "default" | "button";
  size?: "small" | "default" | "large";
  inline?: boolean;
  tooltip?: boolean;
};

export interface TextareaReactAntdProps extends ValidationProps {
  component: 'textarea';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "default" | "large";
  variant?: "outlined" | "borderless" | "filled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  showCount?: boolean;
  autoSize?: boolean;
  maxLength?: number;
  allowClear?: boolean;
  tooltip?: boolean;
};

export interface RateReactAntdProps extends ValidationProps {
  component: 'rate';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  count?: number;
  allowHalf?: boolean; // Allow half votes
  allowClear?: boolean;
  tooltip?: boolean;
};

export interface PlaceholderReactAntdProps extends ValidationProps {
  component: 'placeholder';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  text?: I18NObject; // Supports markdown (i.e., **bold**, _italics_)
  hidden?: boolean;
  tooltip?: boolean;
};

export interface MultiselectReactAntdProps extends ValidationProps {
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
  size?: "small" | "default" | "large";
  variant?: "outlined" | "borderless" | "filled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  listHeight?: number; // Config popup height
  allowClear?: boolean;
  popupMatchSelectWidth?: boolean; // Determine whether the popup menu and the select input are the same width
  tooltip?: boolean;
  showSearch?: boolean; // Whether select is searchable
  virtual?: boolean;
  showArrow?: boolean;
  maxTagCount?: number; // Maximum number of selectable elements
  maxTagPlaceholder?: string; // Placeholder to show when max number of element is reached
  maxTagTextLength?: number; // Maximum length of text tags
};

export interface PlaceholderImageReactAntdProps extends ValidationProps {
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

export interface ButtonReactAntdProps extends ValidationProps {
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
  size?: "small" | "default" | "large";
  type?: "primary" | "default" | "dashed" | "text" | "link"; // Only available for link-type buttons
};

export interface DividerReactAntdProps extends ValidationProps {
  component: 'divider';
  name?: string; // The name of the field and the key of the JSON
  size?: number; // Thickness of the divider
  color?: string;
  hidden?: boolean;
};

export interface DatetimeReactAntdProps extends ValidationProps {
  component: 'datetime';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "default" | "large";
  variant?: "outlined" | "borderless" | "filled";
  format?: string; // Dayjs format to display input value, "MMMM D, YYYY" by default. Check https://day.js.org/docs/en/display/format for reference
  picker?: "date" | "week" | "month" | "quarter" | "year";
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  mode?: "time" | "date" | "month" | "year" | "decade";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  minDate?: string;
  maxDate?: string;
  showTime?: boolean;
  showNow?: boolean; // Show now button
  showToday?: boolean; // Show today button
  preserveInvalidOnBlur?: boolean; // Not clean input on blur even when the typing is invalidate
  inputReadOnly?: boolean; // Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)
  needConfirm?: boolean; // Need click confirm button to trigger value change. Default false when multiple
  allowClear?: boolean;
  tooltip?: boolean;
};

export interface UploadReactAntdProps extends ValidationProps {
  component: 'upload';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  hidden?: boolean;
  multiple?: boolean; // Allow selecting multiple files
  listType?: "text" | "picture" | "picture-card" | "picture-circle"; // Built-in stylesheets, support for four types: text, picture, picture-card or picture-circle
  maxCount?: number;
  showUploadList?: boolean;
  uploadButtonLabel?: I18NObject;
  uploadButtonAppearance?: "primary" | "default" | "dashed" | "text" | "link";
  uploadButtonSize?: "small" | "default" | "large";
  draggable?: boolean;
  draggableText?: I18NObject;
  draggableHeight?: number;
  tooltip?: boolean;
};

export interface ButtonsToggleGroupReactAntdProps extends ValidationProps {
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
  size?: "small" | "default" | "large";
};

export interface TimeReactAntdProps extends ValidationProps {
  component: 'time';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "default" | "large";
  variant?: "outlined" | "borderless" | "filled";
  format?: string; // Dayjs format to display input value, "HH:mm:ss" by default. Check https://day.js.org/docs/en/display/format for reference
  hourStep?: number; // Interval between hours in picker
  minuteStep?: number; // Interval between minutes in picker
  secondStep?: number; // Interval between seconds in picker
  allowClear?: boolean;
  hideDisabledOptions?: boolean; // Whether hide the options that can not be selected
  inputReadOnly?: boolean; // Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)
  needConfirm?: boolean; // Need click confirm button to trigger value change
  showNow?: boolean; // Whether to show Now button on panel
  use12Hours?: boolean; // Display as 12 hours format, with default format h:mm:ss a
  tooltip?: boolean;
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
};

export interface HiddenReactAntdProps extends ValidationProps {
  component: 'hidden';
  name?: string; // The name of the field and the key of the JSON
};

export interface CurrencyReactAntdProps extends ValidationProps {
  component: 'currency';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  currency?: "AFN" | "ALL" | "DZD" | "ARS" | "AMD" | "AUD" | "AZN" | "BHD" | "BDT" | "BYN" | "BZD" | "BOB" | "BAM" | "BWP" | "BRL" | "GBP" | "BND" | "BGN" | "BIF" | "XOF" | "XAF" | "KHR" | "CAD" | "CVE" | "CLP" | "CNY" | "COP" | "KMF" | "CDF" | "CRC" | "HRK" | "CZK" | "DKK" | "DJF" | "DOP" | "EGP" | "ERN" | "EEK" | "ETB" | "EUR" | "GEL" | "GHS" | "GTQ" | "GNF" | "HNL" | "HKD" | "HUF" | "ISK" | "INR" | "IDR" | "IRR" | "IQD" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KWD" | "LVL" | "LBP" | "LYD" | "LTL" | "MOP" | "MKD" | "MGA" | "MYR" | "MUR" | "MXN" | "MDL" | "MAD" | "MZN" | "MMK" | "NAD" | "NPR" | "TWD" | "NZD" | "NIO" | "NGN" | "NOK" | "OMR" | "PKR" | "PAB" | "PYG" | "PEN" | "PHP" | "PLN" | "QAR" | "RON" | "RUB" | "RWF" | "SAR" | "RSD" | "SGD" | "SOS" | "ZAR" | "KRW" | "LKR" | "SDG" | "SEK" | "CHF" | "SYP" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRY" | "USD" | "UGX" | "UAH" | "AED" | "UYU" | "UZS" | "VEF" | "VND" | "YER" | "ZMK" | "ZWL";
  align?: "left" | "center" | "right"; // Currency alignment in the input field
  size?: "small" | "default" | "large";
  variant?: "outlined" | "borderless" | "filled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  prefix?: string;
  postfix?: string;
  showCount?: boolean;
  maxLength?: number;
  allowClear?: boolean;
  tooltip?: boolean;
};

type LfFieldReactAntdProps =
  | InputTextReactAntdProps
  | ToggleReactAntdProps
  | SelectReactAntdProps
  | InputNumberReactAntdProps
  | SliderReactAntdProps
  | DateReactAntdProps
  | CheckboxReactAntdProps
  | CheckboxGroupReactAntdProps
  | RadioGroupReactAntdProps
  | TextareaReactAntdProps
  | RateReactAntdProps
  | PlaceholderReactAntdProps
  | MultiselectReactAntdProps
  | PlaceholderImageReactAntdProps
  | ButtonReactAntdProps
  | DividerReactAntdProps
  | DatetimeReactAntdProps
  | UploadReactAntdProps
  | ButtonsToggleGroupReactAntdProps
  | TimeReactAntdProps
  | HiddenReactAntdProps
  | CurrencyReactAntdProps

export type { LfFieldReactAntdProps };

export interface LfColumnsReactAntdProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
};

export interface LfColumnReactAntdProps {
  name?: string;
  alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
  size?: number;
};

export interface LfTabsReactAntdProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
  size?: "small" | "middle" | "large";
  tabType?: "line" | "card";
  animated?: boolean;
  centered?: boolean;
};

export interface LfTabReactAntdProps {
  value?: string;
  label?: I18NObject;
};

export interface LfStepsReactAntdProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
  labelNext?: I18NObject;
  labelPrevious?: I18NObject;
  align?: "left" | "center" | "right";
  stepsType?: "default" | "navigation" | "inline"; // Change the layout of the steps, some optoions not available for type "inline"
  status?: "finish" | "wait" | "process" | "error";
  percent?: number; // Completion percentage of current step
  small?: boolean;
  clickable?: boolean; // Make steps clickable
  labelPlacement?: "horizontal" | "vertical";
};

export interface LfStepReactAntdProps {
  value?: string;
  label?: I18NObject;
  subtitle?: I18NObject;
  description?: I18NObject;
  icon?: string;
};

export interface LfGroupReactAntdProps {
  name?: string;
  label?: I18NObject;
  hidden?: boolean;
  align?: "left" | "center" | "right";
  collapsible?: boolean;
  open?: boolean;
  border?: "top" | "bottom" | "topBottom" | "boxed";
};

export interface LfArrayReactAntdProps {
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

export interface LetsFormReactAntdProps extends CommonLetsFormProps {
  labelColSpan?: number;
  labelColOffset?: number;
  wrapperColSpan?: number;
  wrapperColOffset?: number;
  size?: "small" | "default" | "large";
  layout?: "inline" | "horizontal" | "vertical";
  labelAlign?: "left" | "right";
  labelWrap?: boolean;
  requiredMark?: boolean;
  form: LetsFormSchemaReactAntd;
};

interface GroupReactAntdProps extends LfGroupReactAntdProps {
  component: "group";
  fields: Array<LfFieldReactAntdProps | ArrayReactAntdProps | ColumnsReactAntdProps | StepsReactAntdProps | TabsReactAntdProps>;
};

interface ArrayReactAntdProps extends LfArrayReactAntdProps {
  component: "array";
  fields: Array<LfFieldReactAntdProps | GroupReactAntdProps | ColumnsReactAntdProps>;
};

interface ColumnsReactAntdProps extends LfColumnsReactAntdProps {
  component: "columns";
  fields: { [index: string]: Array<LfFieldReactAntdProps | ArrayReactAntdProps | GroupReactAntdProps | TabsReactAntdProps | StepsReactAntdProps>; };
  columns: Array<{
    name?: string;
    alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
    size?: number;
  }>;
};

interface StepsReactAntdProps extends LfStepsReactAntdProps {
  component: "steps";
  fields: { [index: string]: Array<LfFieldReactAntdProps | ArrayReactAntdProps | ColumnsReactAntdProps | GroupReactAntdProps | TabsReactAntdProps>; };
  steps: Array<{
    value?: string;
    label?: I18NObject;
    subtitle?: I18NObject;
    description?: I18NObject;
    icon?: string;
  }>;
};

interface TabsReactAntdProps extends LfTabsReactAntdProps {
  component: "tabs";
  fields: { [index: string]: Array<LfFieldReactAntdProps | ArrayReactAntdProps | ColumnsReactAntdProps | GroupReactAntdProps | StepsReactAntdProps>; };
  tabs: Array<{
    value?: string;
    label?: I18NObject;
  }>;
};


export interface LetsFormSchemaReactAntd extends CommonLetsFormSchema {
  labelColSpan?: number;
  labelColOffset?: number;
  wrapperColSpan?: number;
  wrapperColOffset?: number;
  size?: "small" | "default" | "large";
  layout?: "inline" | "horizontal" | "vertical";
  labelAlign?: "left" | "right";
  labelWrap?: boolean;
  requiredMark?: boolean;
  fields: Array<LfFieldReactAntdProps | GroupReactAntdProps | ArrayReactAntdProps | ColumnsReactAntdProps | StepsReactAntdProps | TabsReactAntdProps>;
};
