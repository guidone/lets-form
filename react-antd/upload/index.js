
import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import { Button, Form, Upload } from 'antd';

import { passRest } from '../../helpers/pass-rest';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

import './upload.scss';

const { Dragger } = Upload;

const makeDefaultValue = defaultValue => {
  if (_.isArray(defaultValue)) {
    return defaultValue;
  } else if (defaultValue != null) {
    return [defaultValue];
  }
  return [];
};

// convert to same format for all upload
const translatePayload = files => {
  if (_.isArray(files)) {
    return files.map(translatePayload);
  } else {
    return {
      blobFile: files,
      name: files.name,
      fileKey: files.uid
    };
  }
};

const ButtonWithHint = ({ hint, ...props}) => {
  const inner = (
    <Button
      {...props}
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
}

const AntDUpload = I18N(
  ({
    name,
    accept,
    draggable,
    draggableText,
    draggableHeight,
    uploadButtonLabel,
    error,
    label,
    hint,
    tooltip,
    required,
    size,
    disabled,
    value,
    multiple,
    listType,
    maxCount,
    showUploadList,
    uploadButtonSize,
    uploadButtonAppearance,
    onChange = () => {},
    className,
    ...rest
  }) => {
    const [currentValue, setCurrentValue] = useState(makeDefaultValue(value));

    const disabledTooMany = (multiple && maxCount && currentValue && currentValue.length >= maxCount)
      || (!multiple && !_.isEmpty(value));

    const handlePropagate = useCallback(
      newFileList => {
        setCurrentValue(newFileList);
        if (multiple) {
          onChange(translatePayload(newFileList));
        } else {
          onChange(translatePayload(!_.isEmpty(newFileList) ? newFileList[0] : null));
        }
      },
      [multiple, onChange]
    );

    const handleChange = useCallback(
      (file, fileList) => {
        const newFileList = [...currentValue, file];
        handlePropagate(newFileList);
        return false;
      },
      [currentValue, handlePropagate]
    );

    const handleRemove = useCallback(
      file => {
        const newFileList = currentValue.filter(f => f.uid !== file.uid);
        handlePropagate(newFileList);
      },
      [currentValue, handlePropagate]
    );

    const handleDrag = useCallback(
      e => {
        const newFileList = [...currentValue, ...e.dataTransfer.files];
        handlePropagate(newFileList);
      },
      [currentValue, handlePropagate]
    );

    const uploadProps = {
      accept,
      disabled,
      multiple,
      fileList: currentValue,
      maxCount,
      showUploadList,
      beforeUpload: handleChange,
      onRemove: handleRemove,
      ...passRest(rest)
    };

    let inner;
    if (draggable) {
      inner = (
        <Dragger
          {...uploadProps}
          onDrop={handleDrag}
        >
          <div style={{ height: draggableHeight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>{draggableText || 'Click or Drag files to this area to upload'}</span>
          </div>
        </Dragger>
      );
    } else {

      // TODO implementare il placeholder
      inner = (
        <Upload {...uploadProps}>
          <ButtonWithHint
            disabled={disabled || disabledTooMany}
            type={uploadButtonAppearance}
            size={uploadButtonSize}
            hint={!tooltip && hint}
          >
            {uploadButtonLabel || 'Upload' }
          </ButtonWithHint>
        </Upload>
      );
    }

    return (
      <Form.Item
          {...makeClassName('upload', name, className)}
          listType={listType}
          label={label}
          name={name}
          help={error != null ? error : (hint && !tooltip && draggable ? hint : undefined)}
          required={required}
          tooltip={tooltip && hint}
          hasFeedback={error != null}
          validateStatus={error ? 'error': undefined}
          valuePropName={null}
        >
          {inner}
        </Form.Item>
    );
  },
  ['label', 'hint', 'placeholder', 'uploadButtonLabel', 'draggableText']
);
lfLog('Loaded AnttD.Upload');

export default AntDUpload;
