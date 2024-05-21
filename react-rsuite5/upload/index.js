import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import { Uploader, Button, Form } from 'rsuite';

import { lfLog } from '../../helpers/lf-log';
import { RequiredIcon, I18N } from '../../components';
import { passRest } from '../../helpers';

import './upload.scss';

const makeDefaultValue = defaultValue => {
  if (_.isArray(defaultValue)) {
    return defaultValue;
  } else if (defaultValue != null) {
    return [defaultValue];
  }
  return [];
};

// shield props component or the uploaded will replace the disabled prop
const ShieldedButton = ({ superDisabled, superSize, disabled, hint, ...rest }) => {
  const inner = (
    <Button
      {...rest}
      size={superSize}
      disabled={superDisabled}
    />
  );

  if (hint) {
    return (
      <div className="upload-layout">
        <div className="upload">
          {inner}
        </div>
        <div className="hint">
          {hint}
        </div>
      </div>
    )
  }
  return inner;
};

const Upload = I18N(
  ({
    name,
    label,
    hint,
    tooltip,
    required,
    onChange,
    multiple,
    removable,
    disabledFileItem,
    fileListVisible,
    draggable,
    disabled,
    accept,
    defaultValue,
    listType,
    uploadButtonLabel,
    uploadButtonAppearance,
    uploadButtonSize,
    draggableText,
    draggableHeight = 200,
    value,
    ...rest
  }) => {
    const [currentValue, setCurrentValue] = useState(makeDefaultValue(value));

    const handleChange = useCallback(
      fileList => {
        setCurrentValue(fileList);
        if (multiple) {
          onChange(fileList);
        } else {
          onChange(!_.isEmpty(fileList) ? fileList[0] : null);
        }
      },
      [multiple, onChange]
    );

    let inner;
    if (draggable) {
      inner = (
        <div style={{ height: draggableHeight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>{draggableText || 'Click or Drag files to this area to upload'}</span>
        </div>
      );
    } else {
      inner = (
        <ShieldedButton
          appearance={uploadButtonAppearance}
          superSize={uploadButtonSize}
          superDisabled={disabled || (!multiple && !_.isEmpty(value))}
          hint={!tooltip && hint}
        >
          {uploadButtonLabel || 'Upload' }
        </ShieldedButton>
      );
    }

    return (
      <div
        className="lf-control-upload"
        data-lf-field-name={name}
      >
        {label && (
          <Form.ControlLabel>
            {label}
            {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
            {required && <RequiredIcon />}
          </Form.ControlLabel>
        )}
        <Uploader
          autoUpload={false}
          action=""
          accept={_.isArray(accept) ? accept.join(',') : accept}
          multiple={multiple}
          removable={removable}
          draggable={draggable}
          disabled={disabled}
          fileListVisible={fileListVisible}
          disabledFileItem={disabledFileItem}
          fileList={currentValue}
          listType={listType}
          onChange={handleChange}
          {...passRest(rest)}
        >
          {inner}
        </Uploader>
        {hint && (draggable && !tooltip) && <Form.HelpText>{hint}</Form.HelpText>}
      </div>
    );
  },
  ['label', 'hint', 'placeholder', 'uploadButtonLabel', 'draggableText']
);
lfLog('Loaded RSuite.Upload');

export default Upload;