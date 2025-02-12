import React, { useCallback } from 'react';
import { TextInput } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';
import { CommonCurrency } from '../../common/currency';

const Currency = I18N(
  ({
    name,
    hint,
    value,
    fullWidth,
    width,
    error,
    className,
    lfLocale,
    ...rest
  }) => {


    return (
      <CommonCurrency
        defaultValue={value}
        control={TextInput}
        locale={lfLocale}
        {...makeClassName('currency', name, className)}
        //value={value}
        style={makeWidthStyle(fullWidth, width)}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        {...passRest(_.omit(rest, 'inputType', 'inputMode'))}
      />
    );


    /*return (
      <TextInput
        {...makeClassName('currency', name, className)}
        value={value}
        style={makeWidthStyle(fullWidth, width)}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        onChange={handleChange}
        onBlur={onBlur}
        onKeyUp={submitOnEnter ? handleKeyUp : undefined}
        type={rest.inputType ? rest.inputType : undefined}
        inputmode={rest.inputMode ? rest.inputMode : undefined}
        {...passRest(_.omit(rest, 'inputType', 'inputMode'))}
      />*/
    //);
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.Currency');

export default Currency;
