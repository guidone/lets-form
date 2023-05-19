import React from 'react';
import { Form } from 'rsuite';

import { RequiredIcon } from '../../components';
import { ListArray } from '../../common';
import LetsForm from '../../react-rsuite5';
import { IfNotPlaintext } from '../../components';

const ListArrayRSuite5 = ({
  hint,
  required,
  tooltip,
  name,
  label,
  plaintext,
  ...rest
}) => {
  return (
    <Form.Group
      data-lf-field-name={name}
      className="lf-control-array"
    >
      {label && (
        <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>
      )}
      <IfNotPlaintext component="array" value={rest.value} locale={rest.lfLocale} plaintext={plaintext}>
        <ListArray
          LetsFormComponent={LetsForm}
          {...rest}
        />
      </IfNotPlaintext>

      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { ListArrayRSuite5 as ListArray };
