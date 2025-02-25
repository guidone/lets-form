import React, { useCallback } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { RequiredIcon } from '../../components/required-icon';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { TextOrIcon } from '../../common/text-or-icon';
import { makeClassName } from '../../helpers/make-class-name';
import { CommonCurrency } from '../../common/currency';

import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const Currency = I18N(
  ({
    name,
    label,
    hint,
    value,
    lfLocale,
    className,
    disabled = false,
    readOnly = false,
    plaintext = false,
    error,
    component,
    required,
    submitOnEnter = false,
    prefix,
    postfix,
    fullWidth,
    width,
    floatingLabel = false,
    align,
    ...rest
  }) => {
    const inner = (
      <CommonCurrency
        defaultValue={value}
        control={Form.Control}
        locale={lfLocale}
        name={name}
        type="text"
        isInvalid={error != null}
        style={makeWidthStyle(fullWidth, width, { [align ? 'text-align' : undefined]: align })}
        {...passRest(rest)}
      />
    );

    let innerGroup = inner;
    const needsGroup = postfix || prefix;
    if (needsGroup) {
      innerGroup = (
        <InputGroup>
          {prefix && <InputGroup.Text>{TextOrIcon(prefix)}</InputGroup.Text>}
          {inner}
          {postfix && <InputGroup.Text>{TextOrIcon(postfix)}</InputGroup.Text>}
        </InputGroup>
      );
    }

    const useFloatingLabels = floatingLabel && !needsGroup;

    return (
      <Form.Group {...makeClassName(component, name, className)}>
        {useFloatingLabels && label && (
          <FloatingLabel
            label={label}
          >
            {innerGroup}
          </FloatingLabel>
        )}
        {!useFloatingLabels && label && (
          <Form.Label>
            {label}
            {required && <RequiredIcon />}
          </Form.Label>
        )}
        {!useFloatingLabels && innerGroup}
        {hint && !error && <Form.Text>{hint}</Form.Text>}
        {_.isString(error) && !_.isEmpty(error) && (
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        )}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded ReactBootrap.Currency');

export default Currency;