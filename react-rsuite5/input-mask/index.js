/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, MaskedInput, InputGroup } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon } from '../../components';

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
}

const InputMask = ({
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
  ...rest
}) => {

  const parsedMask = prepareMask(mask);
  console.log('parsedMask', parsedMask)

  const inner = (
    <Form.Control
      name={name}
      accepter={MaskedInput}
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
      {...rest}
    />
  );

  const needsGroup = postfix || prefix;

  return (
    <Form.Group controlId={name}>
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
};

export { InputMask };