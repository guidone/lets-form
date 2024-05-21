/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, MaskedInput, InputGroup } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon, I18N } from '../../components';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const prepareMask = str => {
  if (typeof str !== 'string' || str.length === 0) {
    return [];
  }

  const matches = str.match(/\$\{[a-zA-Z0-9]\}|.{1,1}/gm);

  return matches
    .map(token => {
      if (token === '${d}') {
        return /\d/;
      } else if (token === '${D}') {
        return /\D/;
      } else if (token === '${a}') {
        return /[a-zA-Z]/;
      } else if (token === '${w}') {
        return /[a-zA-Z0-9]/;
      }

      return token;
    });
};

const InputMask = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    error,
    prefix,
    postfix,
    onChange,
    onBlur,
    placeholderChar = '_',
    mask = [],
    inside = false,
    fullWidth,
    width,
    ...rest
  }) => {
    const parsedMask = prepareMask(mask);

    const inner = (
      <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
        <MaskedInput
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          size={size}
          placeholder={placeholder}
          readOnly={readOnly}
          placeholderChar={typeof placeholderChar === 'string' && placeholderChar.length > 0 ? placeholderChar[0] : '_'}
          errorMessage={_.isString(error) ? error : undefined }
          mask={parsedMask}
          {...passRest(rest)}
        />
      </RSuite5FieldControl>
    );

    const needsGroup = postfix || prefix;

    return (
      <Form.Group
        data-lf-field-name={name}
        className="lf-control-input-mask"
        style={makeWidthStyle(fullWidth, width)}
      >
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        {!needsGroup && inner}
        {needsGroup && (
          <InputGroup inside={inside}>
            {prefix && <InputGroup.Addon>{prefix}</InputGroup.Addon>}
            {inner}
            {postfix && <InputGroup.Addon>{postfix}</InputGroup.Addon>}
          </InputGroup>
        )}
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite5.InputMask');

export default InputMask;
