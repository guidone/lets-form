
import { ChangeEvent, FunctionComponent } from 'react';

type Locale = (
  | "af-ZA"
  | "ar"
  | "bg-BG"
  | "ca-AD"
  | "cs-CZ"
  | "cy-GB"
  | "da-DK"
  | "de-DE"
  | "el-GR"
  | "en-US"
  | "es-ES"
  | "et-EE"
  | "eu"
  | "fa-IR"
  | "fi-FI"
  | "fr-FR"
  | "he-IL"
  | "hi-IN"
  | "hr-HR"
  | "hu-HU"
  | "id-ID"
  | "is-IS"
  | "it-IT"
  | "ja-JP"
  | "km-KH"
  | "ko-KR"
  | "la"
  | "lt-LT"
  | "lv-LV"
  | "mn-MN"
  | "nb-NO"
  | "nl-NL"
  | "nn-NO"
  | "pl-PL"
  | "pt-PT"
  | "ro-RO"
  | "ru-RU"
  | "sk-SK"
  | "sl-SI"
  | "sr-RS"
  | "sv-SE"
  | "th-TH"
  | "tr-TR"
  | "uk-UA"
  | "vi-VN"
  | "zh-CN"
);

type ObjectOfStrings = {
  [index: string]: any;
}

interface LetsFormProps {
  name?: string;
  locale?: Locale;
  plaintext?: boolean;
  debug?: boolean;
  disabled?: boolean;
  disableButtons?: boolean;
  form?: object;
  demo?: boolean;
  context?: object;
  defaultValues?: ObjectOfStrings;
  onChange?: (values: ObjectOfStrings) => void
}

interface LfFieldProps {
  component: string;
  name: string;
  required?: boolean;
  label?: string;
}

const LetsForm: FunctionComponent<LetsFormProps>;
const LfField: FunctionComponent<LfFieldProps>

export default LetsForm;