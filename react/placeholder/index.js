import React from 'react';

import { Placeholder } from '../../common/placeholder';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const PlaceholderReact = I18N(
  ({
    name,
    label,
    hint,
    text
  }) => {
    return (
      <div {...makeClassName('placeholder', name, 'lf-form-react-control-group', className)}>
        {label && (
          <label for={name}>
            {label}
          </label>
        )}
        <Placeholder text={text} />
        {hint && <div className="lf-form-react-message">{hint}</div>}
      </div>
    );
  },
  ['label', 'hint', 'text']
);
lfLog('Loaded React.Placeholder');

export default PlaceholderReact;