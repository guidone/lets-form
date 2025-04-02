import { I18NObject, ValidationProps, CommonLetsFormProps, CommonLetsFormSchema } from './common';

export interface InputTextReactMantineProps extends ValidationProps {
  component: 'input-text';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  submitOnEnter?: boolean; // Trigger onSubmit / onError if the user hits Enter key
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "unstyled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  leftSection?: string;
  rightSection?: string;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
  pointer?: boolean; // Determines whether the input should have cursor: pointer style, false by default
  withErrorStyles?: boolean; // Determines whether the input should have red border and red text color when the error prop is set, true by default
};

export interface ToggleReactMantineProps extends ValidationProps {
  component: 'toggle';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  labelPosition?: "left" | "right";
  offLabel?: string; // 	Inner label when the Switch is in unchecked state
  onLabel?: string; // Inner label when the Switch is in checked state
  color?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
};

export interface SelectReactMantineProps extends ValidationProps {
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
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "unstyled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  leftSection?: string;
  rightSection?: string;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
  withCheckIcon?: boolean; // Determines whether check icon should be displayed near the selected option label, true by default
  checkIconPosition?: "left" | "right";
  allowDeselect?: boolean; // Determines whether it should be possible to deselect value by clicking on the selected option, true by default
  clearable?: boolean; // Determines whether the clear button should be displayed in the right section when the component has value, false by default
  defaultDropdownOpened?: boolean; // Uncontrolled dropdown initial opened state
  withScrollArea?: boolean; // Determines whether the options should be wrapped with scroll bars, true by default
  pointer?: boolean; // Determines whether the input should have cursor: pointer style, false by default
  withErrorStyles?: boolean; // Determines whether the input should have red border and red text color when the error prop is set, true by default
};

export interface InputNumberReactMantineProps extends ValidationProps {
  component: 'input-number';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "unstyled";
  min?: number;
  step?: number;
  max?: number;
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  leftSection?: string;
  rightSection?: string;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
  pointer?: boolean; // Determines whether the input should have cursor: pointer style, false by default
  withErrorStyles?: boolean; // Determines whether the input should have red border and red text color when the error prop is set, true by default
  valueIsNumericString?: boolean; // If value is passed as string representation of numbers (unformatted) and number is used in any format props like in prefix or suffix in numeric format and format prop in pattern format then this should be passed as true. false by default
  hideControls?: boolean;
  allowLeadingZeros?: boolean;
  allowNegative?: boolean;
  clampBehavior?: "none" | "blur" | "strict"; // Controls how value is clamped, strict – user is not allowed to enter values that are not in [min, max] range, blur – user is allowed to enter any values, but the value is clamped when the input loses focus (default behavior), none – lifts all restrictions, [min, max] range is applied only for controls and up/down keys
  startValue?: number; // Value set to the input when increment/decrement buttons are clicked or up/down arrows pressed if the input is empty, 0 by default
  allowDecimal?: boolean;
  decimalSeparator?: string; // Character used as a decimal separator, "." by default
  fixedDecimalScale?: boolean; // If set, 0s are added after decimalSeparator to match given decimalScale. false by default
  decimalScale?: number; // Limits the number of digits that can be entered after the decimal point
  thousandsGroupStyle?: "none" | "thousand" | "lakh" | "wan"; // Defines the thousand grouping style
  thousandSeparator?: string; // A character used to separate thousands
};

export interface SliderReactMantineProps extends ValidationProps {
  component: 'slider';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  min?: number;
  step?: number;
  max?: number;
  precision?: number; // Number of significant digits after the decimal point
  inverted?: boolean; // Determines whether track value representation should be inverted, false by default
  labelAlwaysOn?: boolean; // Determines whether the label should be visible when the slider is not being dragged or hovered, false by default
  showLabelOnHover?: boolean; // Determines whether the label should be displayed when the slider is hovered, true by default
};

export interface DateReactMantineProps extends ValidationProps {
  component: 'date';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "unstyled";
  valueFormat?: string; // Dayjs format to display input value, "MMMM D, YYYY" by default. Check https://day.js.org/docs/en/display/format for reference
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6; // number 0-6, 0 - Sunday, 6 - Saturday, defaults to 1 - Monday
  hideOutsideDates?: boolean; // Determines whether outside dates should be hidden, defaults to false
  labelSeparator?: string; // Separator between range value
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  dateType?: "default" | "range" | "multiple";
  dropdownType?: "modal" | "popover"; // Type of dropdown, defaults to popover
  allowDeselect?: boolean; // Determines whether user can deselect the date by clicking on selected item, applicable only when type="default"
  clearable?: boolean; // Determines whether input value can be cleared, adds clear button to right section, false by default
  hideWeekdays?: boolean; // Determines whether weekdays row should be hidden, defaults to false
  defaultLevel?: "decade" | "month" | "year";
  hasNextLevel?: boolean; // Determines whether next level button should be enabled, defaults to true
  maxLevel?: "decade" | "month" | "year"; // Max level that user can go up to (decade, year, month), defaults to decade
  numberOfColumns?: number; // Number of columns to render next to each other
  columnsToScroll?: number; // Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns
  minDate?: string;
  maxDate?: string;
  withCellSpacing?: boolean; // Determines whether controls should be separated by spacing, true by default
  pointer?: boolean; // Determines whether the input should have cursor: pointer style, false by default
  withErrorStyles?: boolean; // Determines whether the input should have red border and red text color when the error prop is set, true by default
  leftSection?: string;
  rightSection?: string;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
};

export interface CheckboxReactMantineProps extends ValidationProps {
  component: 'checkbox';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  labelPosition?: "left" | "right";
  color?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
  iconColor?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
  autoContrast?: boolean; // Determines whether icon color with filled variant should depend on background-color. If luminosity of the color prop is less than theme.luminosityThreshold, then theme.white will be used for text color, otherwise theme.black. Overrides theme.autoContrast.
  indeterminate?: boolean;
};

export interface CheckboxGroupReactMantineProps extends ValidationProps {
  component: 'checkbox-group';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  labelPosition?: "left" | "right";
  color?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
  iconColor?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
  autoContrast?: boolean; // Determines whether icon color with filled variant should depend on background-color. If luminosity of the color prop is less than theme.luminosityThreshold, then theme.white will be used for text color, otherwise theme.black. Overrides theme.autoContrast.
};

export interface RadioGroupReactMantineProps extends ValidationProps {
  component: 'radio-group';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  labelPosition?: "left" | "right";
  color?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
  iconColor?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
  autoContrast?: boolean; // Determines whether icon color with filled variant should depend on background-color. If luminosity of the color prop is less than theme.luminosityThreshold, then theme.white will be used for text color, otherwise theme.black. Overrides theme.autoContrast.
};

export interface InputTagReactMantineProps extends ValidationProps {
  component: 'input-tag';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "unstyled";
  leftSection?: string;
  rightSection?: string;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
  maxTags?: number; // Maximum number of tags, Infinity by default
  maxDropdownHeight?: number; // Max-height of the dropdown, only applicable when withScrollArea prop is true, 250 by default
  limit?: number; // Maximum number of options displayed at a time, Infinity by default
  allowDuplicates?: boolean;
  clearable?: boolean;
  defaultDropdownOpened?: boolean;
  pointer?: boolean; // Determines whether the input should have cursor: pointer style, false by default
  searchable?: boolean; // Determines whether the select should be searchable, false by default
  selectFirstOptionOnChange?: boolean; // Determines whether the first option should be selected when value changes, false by default
  withCheckIcon?: boolean; // Determines whether check icon should be displayed near the selected option label, true by default
  withErrorStyles?: boolean; // Determines whether the input should have red border and red text color when the error prop is set, true by default
  withScrollArea?: boolean; // Determines whether the options should be wrapped with scroll bars, true by default
};

export interface TextareaReactMantineProps extends ValidationProps {
  component: 'textarea';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "unstyled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  autosize?: boolean;
  minRows?: number;
  maxRows?: number;
  leftSection?: string;
  rightSection?: string;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
  pointer?: boolean; // Determines whether the input should have cursor: pointer style, false by default
  withErrorStyles?: boolean; // Determines whether the input should have red border and red text color when the error prop is set, true by default
};

export interface RateReactMantineProps extends ValidationProps {
  component: 'rate';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
  count?: number; // Number of controls, 5 by default
  fractions?: number; // Number of fractions each item can be divided into, 1 by default
  highlightSelectedOnly?: boolean; // If set, only the selected symbol changes to full symbol when selected, false by default
};

export interface PlaceholderReactMantineProps extends ValidationProps {
  component: 'placeholder';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  text?: I18NObject; // Supports markdown (i.e., **bold**, _italics_)
  hidden?: boolean;
};

export interface MultiselectReactMantineProps extends ValidationProps {
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
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "unstyled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  leftSection?: string;
  rightSection?: string;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
  limit?: number; // Maximum number of options displayed at a time, Infinity by default
  maxDropdownHeight?: number; // max-height of the dropdown, only applicable when withScrollArea prop is true, 250 by default
  maxValues?: number; // Maximum number of values, Infinity by default
  searchable?: boolean; // Determines whether the select should be searchable, false by default
  nothingFoundMessage?: I18NObject; // Message displayed when no option matched current search query, only applicable when searchable prop is set
  clearable?: boolean; // Determines whether the clear button should be displayed in the right section when the component has value, false by default
  defaultDropdownOpened?: boolean; // Uncontrolled dropdown initial opened state
  hidePickedOptions?: boolean; // Determines whether picked options should be removed from the options list, false by default
  pointer?: boolean; // Determines whether the input should have cursor: pointer style, false by default
  selectFirstOptionOnChange?: boolean; // Determines whether the first option should be selected when value changes, false by default
  withCheckIcon?: boolean; // Determines whether check icon should be displayed near the selected option label, true by default
  withErrorStyles?: boolean; // Determines whether the input should have red border and red text color when the error prop is set, true by default
  withScrollArea?: boolean; // Determines whether the options should be wrapped with scroll bars, true by default
};

export interface PlaceholderImageReactMantineProps extends ValidationProps {
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

export interface ButtonReactMantineProps extends ValidationProps {
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
  size?: "xs" | "compact-xs" | "sm" | "compact-sm" | "md" | "compact-md" | "lg" | "compact-lg" | "xl" | "compact-xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "light" | "outline" | "subtle" | "transparent" | "white"; // Only available for link-type buttons
  color?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
  tooltip?: boolean; // Show hint as tooltip next to label
};

export interface DividerReactMantineProps extends ValidationProps {
  component: 'divider';
  name?: string; // The name of the field and the key of the JSON
  size?: number; // Thickness of the divider
  color?: string;
  hidden?: boolean;
  label?: I18NObject;
  labelPosition?: "left" | "center" | "right";
};

export interface DatetimeReactMantineProps extends ValidationProps {
  component: 'datetime';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "unstyled";
  valueFormat?: string; // Dayjs format to display input value, "DD/MM/YYYY HH:mm" by default. Check https://day.js.org/docs/en/display/format for reference
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6; // number 0-6, 0 - Sunday, 6 - Saturday, defaults to 1 - Monday
  hideOutsideDates?: boolean; // Determines whether outside dates should be hidden, defaults to false
  labelSeparator?: string; // Separator between range value
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  withSeconds?: boolean;
  dropdownType?: "modal" | "popover"; // Type of dropdown, defaults to popover
  allowDeselect?: boolean; // Determines whether user can deselect the date by clicking on selected item, applicable only when type="default"
  clearable?: boolean; // Determines whether input value can be cleared, adds clear button to right section, false by default
  hideWeekdays?: boolean; // Determines whether weekdays row should be hidden, defaults to false
  defaultLevel?: "decade" | "month" | "year";
  hasNextLevel?: boolean; // Determines whether next level button should be enabled, defaults to true
  maxLevel?: "decade" | "month" | "year"; // Max level that user can go up to (decade, year, month), defaults to decade
  numberOfColumns?: number; // Number of columns to render next to each other
  columnsToScroll?: number; // Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns
  minDate?: string;
  maxDate?: string;
  withCellSpacing?: boolean; // Determines whether controls should be separated by spacing, true by default
  pointer?: boolean; // Determines whether the input should have cursor: pointer style, false by default
  withErrorStyles?: boolean; // Determines whether the input should have red border and red text color when the error prop is set, true by default
  leftSection?: string;
  rightSection?: string;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
};

export interface UploadReactMantineProps extends ValidationProps {
  component: 'upload';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  hidden?: boolean;
  placeholder?: I18NObject;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "unstyled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  leftSection?: string;
  rightSection?: string;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
  clearable?: boolean;
  multiple?: boolean; // Determines whether user can pick more than one file, false by default
  pointer?: boolean; // Determines whether the input should have cursor: pointer style, false by default
  withErrorStyles?: boolean; // Determines whether the input should have red border and red text color when the error prop is set, true by default
};

export interface TimeReactMantineProps extends ValidationProps {
  component: 'time';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "unstyled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  minTime?: string;
  maxTime?: string;
  withSeconds?: boolean; // Determines whether seconds input should be rendered
  pointer?: boolean; // Determines whether the input should have cursor: pointer style, false by default
  showBrowserPicker?: boolean; // Show browser native picker (if supported)
  leftSection?: string;
  rightSection?: string;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
};

export interface HiddenReactMantineProps extends ValidationProps {
  component: 'hidden';
  name?: string; // The name of the field and the key of the JSON
};

export interface CurrencyReactMantineProps extends ValidationProps {
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
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "unstyled";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  leftSection?: string;
  rightSection?: string;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
  pointer?: boolean; // Determines whether the input should have cursor: pointer style, false by default
  withErrorStyles?: boolean; // Determines whether the input should have red border and red text color when the error prop is set, true by default
};

type LfFieldReactMantineProps =
  | InputTextReactMantineProps
  | ToggleReactMantineProps
  | SelectReactMantineProps
  | InputNumberReactMantineProps
  | SliderReactMantineProps
  | DateReactMantineProps
  | CheckboxReactMantineProps
  | CheckboxGroupReactMantineProps
  | RadioGroupReactMantineProps
  | InputTagReactMantineProps
  | TextareaReactMantineProps
  | RateReactMantineProps
  | PlaceholderReactMantineProps
  | MultiselectReactMantineProps
  | PlaceholderImageReactMantineProps
  | ButtonReactMantineProps
  | DividerReactMantineProps
  | DatetimeReactMantineProps
  | UploadReactMantineProps
  | TimeReactMantineProps
  | HiddenReactMantineProps
  | CurrencyReactMantineProps

export type { LfFieldReactMantineProps };

export interface LfColumnsReactMantineProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
};

export interface LfColumnReactMantineProps {
  name?: string;
  alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
  size?: number;
};

export interface LfTabsReactMantineProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
  color?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
  variant?: "default" | "outline" | "pills";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  grow?: boolean; // Determines whether tabs should take all available space, false by default
  justify?: "flex-start" | "center" | "flex-end" | "space-between";
  orientation?: "horizontal" | "vertical";
  placement?: "left" | "right";
  activateTabWithKeyboard?: boolean; // Determines whether tab should be activated with arrow key press, true by default
  allowTabDeactivation?: boolean; // Determines whether tab can be deactivated, false by default
  autoContrast?: boolean; // Determines whether icon color with filled variant should depend on background-color. If luminosity of the color prop is less than theme.luminosityThreshold, then theme.white will be used for text color, otherwise theme.black. Overrides theme.autoContrast.
  inverted?: boolean; // Determines whether tabs should have inverted styles, false by default
  keepMounted?: boolean; // If set to false, Tabs.Panel content will be unmounted when the associated tab is not active, true by default
  loop?: boolean; // Determines whether arrow key presses should loop though items (first to last and last to first), true by default
};

export interface LfTabReactMantineProps {
  value?: string;
  label?: I18NObject;
};

export interface LfStepsReactMantineProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
  labelNext?: I18NObject;
  labelPrevious?: I18NObject;
  align?: "left" | "center" | "right";
  color?: "grey" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  iconPosition?: "left" | "right"; // Icon position relative to the step body, "left" by default
  iconSize?: number; // Determines whether steps should wrap to the next line if no space is available, true by default
  wrap?: boolean; // Determines whether steps should wrap to the next line if no space is available, true by default
  allowStepClick?: boolean; // Set to false to disable clicks on step
  allowStepSelect?: boolean; // Should step selection be allowed
  autoContrast?: boolean; // Determines whether icon color with filled variant should depend on background-color. If luminosity of the color prop is less than theme.luminosityThreshold, then theme.white will be used for text color, otherwise theme.black. Overrides theme.autoContrast.
};

export interface LfStepReactMantineProps {
  value?: string;
  label?: I18NObject;
  description?: I18NObject;
  icon?: string;
};

export interface LfGroupReactMantineProps {
  name?: string;
  label?: I18NObject;
  hidden?: boolean;
  align?: "left" | "center" | "right";
  collapsible?: boolean;
  open?: boolean;
  border?: "top" | "bottom" | "topBottom" | "boxed";
};

export interface LfArrayReactMantineProps {
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

export interface LetsFormReactMantineProps extends CommonLetsFormProps {
  form: LetsFormSchemaReactMantine;
};

interface GroupReactMantineProps extends LfGroupReactMantineProps {
  component: "group";
  fields: Array<LfFieldReactMantineProps | ArrayReactMantineProps | ColumnsReactMantineProps | StepsReactMantineProps | TabsReactMantineProps>;
};

interface ArrayReactMantineProps extends LfArrayReactMantineProps {
  component: "array";
  fields: Array<LfFieldReactMantineProps | GroupReactMantineProps | ColumnsReactMantineProps>;
};

interface ColumnsReactMantineProps extends LfColumnsReactMantineProps {
  component: "columns";
  fields: { [index: string]: Array<LfFieldReactMantineProps | ArrayReactMantineProps | GroupReactMantineProps | TabsReactMantineProps | StepsReactMantineProps>; };
  columns: Array<{
    name?: string;
    alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
    size?: number;
  }>;
};

interface StepsReactMantineProps extends LfStepsReactMantineProps {
  component: "steps";
  fields: { [index: string]: Array<LfFieldReactMantineProps | ArrayReactMantineProps | ColumnsReactMantineProps | GroupReactMantineProps | TabsReactMantineProps>; };
  steps: Array<{
    value?: string;
    label?: I18NObject;
    description?: I18NObject;
    icon?: string;
  }>;
};

interface TabsReactMantineProps extends LfTabsReactMantineProps {
  component: "tabs";
  fields: { [index: string]: Array<LfFieldReactMantineProps | ArrayReactMantineProps | ColumnsReactMantineProps | GroupReactMantineProps | StepsReactMantineProps>; };
  tabs: Array<{
    value?: string;
    label?: I18NObject;
  }>;
};


export interface LetsFormSchemaReactMantine extends CommonLetsFormSchema {
  fields: Array<LfFieldReactMantineProps | GroupReactMantineProps | ArrayReactMantineProps | ColumnsReactMantineProps | StepsReactMantineProps | TabsReactMantineProps>;
};
