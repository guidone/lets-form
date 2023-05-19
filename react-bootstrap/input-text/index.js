import React, { useCallback } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { RequiredIcon ,I18N } from '../../components';
import { passRest, makeWidthStyle } from '../../helpers';
import { TextOrIcon } from '../../common';

import { BootstrapGenericInput } from '../../components/bootstrap-generic-input';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const TextInput = I18N(
  ({
    onChange,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <BootstrapGenericInput
        className="lf-control-input-text"
        component="input-text"
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);

export { TextInput };