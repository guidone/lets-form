import React, { useCallback } from 'react';
import _ from 'lodash';
import { Form, DatePicker } from 'antd';
import dayjs from 'dayjs';

import localeArabic from 'antd/es/date-picker/locale/ar_EG';
import localeAzerbaijani from 'antd/es/date-picker/locale/az_AZ';
import localeBulgarian from 'antd/es/date-picker/locale/bg_BG';
import localeBanglaBangladesh from 'antd/es/date-picker/locale/bn_BD';
import localeBelarusian from 'antd/es/date-picker/locale/by_BY';
import localeCatalan from 'antd/es/date-picker/locale/ca_ES';
import localeCzech from 'antd/es/date-picker/locale/cs_CZ';
import localeDanish from 'antd/es/date-picker/locale/da_DK';
import localeGerman from 'antd/es/date-picker/locale/de_DE';
import localeGreek from 'antd/es/date-picker/locale/el_GR';
import localeEnglishUnitedKingdom from 'antd/es/date-picker/locale/en_GB';
import localeEnglish from 'antd/es/date-picker/locale/en_US';
import localeSpanish from 'antd/es/date-picker/locale/es_ES';
import localeBasque from 'antd/es/date-picker/locale/eu_ES';
import localeEstonian from 'antd/es/date-picker/locale/et_EE';
import localePersian from 'antd/es/date-picker/locale/fa_IR';
import localeFinnish from 'antd/es/date-picker/locale/fi_FI';
import localeFrenchBelgium from 'antd/es/date-picker/locale/fr_BE';
import localeFrenchCanada from 'antd/es/date-picker/locale/fr_CA';
import localeFrenchFrance from 'antd/es/date-picker/locale/fr_FR';
import localeIrishIreland from 'antd/es/date-picker/locale/ga_IE';
import localeGalicianSpain from 'antd/es/date-picker/locale/gl_ES';
import localeHebrew from 'antd/es/date-picker/locale/he_IL';
import localeHindi from 'antd/es/date-picker/locale/hi_IN';
import localeCroatian from 'antd/es/date-picker/locale/hr_HR';
import localeHungarian from 'antd/es/date-picker/locale/hu_HU';
import localeIndonesian from 'antd/es/date-picker/locale/id_ID';
import localeItalian from 'antd/es/date-picker/locale/it_IT';
import localeIcelandic from 'antd/es/date-picker/locale/is_IS';
import localeJapanese from 'antd/es/date-picker/locale/ja_JP';
import localeGeorgian from 'antd/es/date-picker/locale/ka_GE';
import localeKurdishKurmanji from 'antd/es/date-picker/locale/kmr_IQ';
import localeKannada from 'antd/es/date-picker/locale/kn_IN';
import localeKazakh from 'antd/es/date-picker/locale/kk_KZ';
import localeKhmer from 'antd/es/date-picker/locale/km_KH';
import localeKorean from 'antd/es/date-picker/locale/ko_KR';
import localeLithuanian from 'antd/es/date-picker/locale/lt_LT';
import localeLatvian from 'antd/es/date-picker/locale/lv_LV';
import localeMacedonian from 'antd/es/date-picker/locale/mk_MK';
import localeMalayalamIndia from 'antd/es/date-picker/locale/ml_IN';
import localeMongolian from 'antd/es/date-picker/locale/mn_MN';
import localeMalayMalaysia from 'antd/es/date-picker/locale/ms_MY';
import localeNorwegian from 'antd/es/date-picker/locale/nb_NO';
import localeDutchBelgium from 'antd/es/date-picker/locale/nl_BE';
import localeDutch from 'antd/es/date-picker/locale/nl_NL';
import localePolish from 'antd/es/date-picker/locale/pl_PL';
import localePortugueseBrazil from 'antd/es/date-picker/locale/pt_BR';
import localePortuguese from 'antd/es/date-picker/locale/pt_PT';
import localeRomanian from 'antd/es/date-picker/locale/ro_RO';
import localeRussian from 'antd/es/date-picker/locale/ru_RU';
import localeSinhalese from 'antd/es/date-picker/locale/si_LK';
import localeSlovak from 'antd/es/date-picker/locale/sk_SK';
import localeSerbian from 'antd/es/date-picker/locale/sr_RS';
import localeSlovenian from 'antd/es/date-picker/locale/sl_SI';
import localeSwedish from 'antd/es/date-picker/locale/sv_SE';
import localeTamil from 'antd/es/date-picker/locale/ta_IN';
import localeThai from 'antd/es/date-picker/locale/th_TH';
import localeTurkish from 'antd/es/date-picker/locale/tr_TR';
import localeTurkmen from 'antd/es/date-picker/locale/tk_TK';
import localeUrduPakistan from 'antd/es/date-picker/locale/ur_PK';
import localeUkrainian from 'antd/es/date-picker/locale/uk_UA';
import localeVietnamese from 'antd/es/date-picker/locale/vi_VN';
import localeChineseSimplified from 'antd/es/date-picker/locale/zh_CN';
import localeChineseTWTraditional from 'antd/es/date-picker/locale/zh_TW';

//import 'dayjs/locale/de';
//import daysLocaleIt from 'dayjs/locale/it';
import daysLocaleItCh from 'dayjs/locale/it-ch';

import 'dayjs/locale/ar';
import 'dayjs/locale/az';
import 'dayjs/locale/bg';
import 'dayjs/locale/bn';
//import 'dayjs/locale/by';
import 'dayjs/locale/ca';
import 'dayjs/locale/cs';
import 'dayjs/locale/da';
import 'dayjs/locale/de';
import 'dayjs/locale/el';
import 'dayjs/locale/en';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/eu';
import 'dayjs/locale/et';
import 'dayjs/locale/fa';
import 'dayjs/locale/fi';
import 'dayjs/locale/fr';
import 'dayjs/locale/fr';
import 'dayjs/locale/fr';
import 'dayjs/locale/ga';
import 'dayjs/locale/gl';
import 'dayjs/locale/he';
import 'dayjs/locale/hi';
import 'dayjs/locale/hr';
import 'dayjs/locale/hu';
import 'dayjs/locale/id';
import 'dayjs/locale/it';
import 'dayjs/locale/is';
import 'dayjs/locale/ja';
import 'dayjs/locale/ka';
//import 'dayjs/locale/kmQ';
import 'dayjs/locale/kn';
import 'dayjs/locale/kk';
import 'dayjs/locale/km';
import 'dayjs/locale/ko';
import 'dayjs/locale/lt';
import 'dayjs/locale/lv';
import 'dayjs/locale/mk';
import 'dayjs/locale/ml';
import 'dayjs/locale/mn';
import 'dayjs/locale/ms';
import 'dayjs/locale/nb';
import 'dayjs/locale/nl';
import 'dayjs/locale/nl';
import 'dayjs/locale/pl';
import 'dayjs/locale/pt';
import 'dayjs/locale/pt';
import 'dayjs/locale/ro';
import 'dayjs/locale/ru';
import 'dayjs/locale/si';
import 'dayjs/locale/sk';
import 'dayjs/locale/sr';
import 'dayjs/locale/sl';
import 'dayjs/locale/sv';
import 'dayjs/locale/ta';
import 'dayjs/locale/th';
import 'dayjs/locale/tr';
import 'dayjs/locale/tk';
import 'dayjs/locale/ur';
import 'dayjs/locale/uk';
import 'dayjs/locale/vi';
import 'dayjs/locale/zh';
import 'dayjs/locale/zh';


const ANTD_LOCALES_MAPPING = {
  'ar_EG': localeArabic,
  'az_AZ': localeAzerbaijani,
  'bg_BG': localeBulgarian,
  'bn_BD': localeBanglaBangladesh,
  'by_BY': localeBelarusian,
  'ca_ES': localeCatalan,
  'cs_CZ': localeCzech,
  'da_DK': localeDanish,
  'de_DE': localeGerman,
  'el_GR': localeGreek,
  'en_GB': localeEnglishUnitedKingdom,
  'en_US': localeEnglish,
  'es_ES': localeSpanish,
  'eu_ES': localeBasque,
  'et_EE': localeEstonian,
  'fa_IR': localePersian,
  'fi_FI': localeFinnish,
  'fr_BE': localeFrenchBelgium,
  'fr_CA': localeFrenchCanada,
  'fr_FR': localeFrenchFrance,
  'ga_IE': localeIrishIreland,
  'gl_ES': localeGalicianSpain,
  'he_IL': localeHebrew,
  'hi_IN': localeHindi,
  'hr_HR': localeCroatian,
  'hu_HU': localeHungarian,
  'id_ID': localeIndonesian,
  'it_IT': localeItalian,
  'is_IS': localeIcelandic,
  'ja_JP': localeJapanese,
  'ka_GE': localeGeorgian,
  'kmr_IQ': localeKurdishKurmanji,
  'kn_IN': localeKannada,
  'kk_KZ': localeKazakh,
  'km_KH': localeKhmer,
  'ko_KR': localeKorean,
  'lt_LT': localeLithuanian,
  'lv_LV': localeLatvian,
  'mk_MK': localeMacedonian,
  'ml_IN': localeMalayalamIndia,
  'mn_MN': localeMongolian,
  'ms_MY': localeMalayMalaysia,
  'nb_NO': localeNorwegian,
  'nl_BE': localeDutchBelgium,
  'nl_NL': localeDutch,
  'pl_PL': localePolish,
  'pt_BR': localePortugueseBrazil,
  'pt_PT': localePortuguese,
  'ro_RO': localeRomanian,
  'ru_RU': localeRussian,
  'si_LK': localeSinhalese,
  'sk_SK': localeSlovak,
  'sr_RS': localeSerbian,
  'sl_SI': localeSlovenian,
  'sv_SE': localeSwedish,
  'ta_IN': localeTamil,
  'th_TH': localeThai,
  'tr_TR': localeTurkish,
  'tk_TK': localeTurkmen,
  'ur_PK': localeUrduPakistan,
  'uk_UA': localeUkrainian,
  'vi_VN': localeVietnamese,
  'zh_CN': localeChineseSimplified,
  'zh_TW': localeChineseTWTraditional
};

const DateAntd = ({
  name,
  label,
  hint,
  value,
  size,
  placeholder,
  showCount,
  tooltip = false,
  disabled = false,
  readOnly = false,
  required = false,
  maxLength,
  error,
  prefix,
  postfix,
  allowClear,
  bordered,
  onChange,
  onBlur,
  width,
  placement,
  format,
  showNow,
  showToday,
  picker,
  mode,
  locale,
  ...rest
}) => {
  const handleChange = useCallback(
    d => onChange(d.toDate ? d.toDate() : undefined),
    [onChange]
  );
  // set locale for dates
  let defaultValue = dayjs(value);
  if (defaultValue && locale) {
    defaultValue = defaultValue.locale(locale);
  }

  return (
    <Form.Item
      label={label}
      // not needed, breaks in case date is set
      //name={name}
      help={error != null ? error : (hint && !tooltip ? hint : undefined)}
      required={required}
      tooltip={tooltip && hint}
      hasFeedback={error != null}
      validateStatus={error ? 'error': undefined}
    >
      <DatePicker
        bordered={bordered}
        inputReadOnly={readOnly}
        placeholder={placeholder}
        onChange={handleChange}
        placement={placement}
        size={size}
        onBlur={onBlur}
        defaultValue={defaultValue}
        disabled={disabled}
        allowClear={allowClear}
        format={format}
        showNow={showNow}
        showToday={showToday}
        picker={picker}
        mode={mode}
        locale={ANTD_LOCALES_MAPPING[locale]}
        style={_.isNumber(width) ? { width: `${width}px` } : undefined}
        {...(_.omit(rest, 'lfFramework', 'lfComponent'))}
      />
    </Form.Item>
  )
};

export { DateAntd as Date };
