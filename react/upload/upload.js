/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useState, useId } from 'react';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { CrossCirle } from '../../assets/icons/cross-circle';
import { formatBytes } from '../../helpers/format-bytes';
import { lfLog } from '../../helpers/lf-log';
import { RequiredIcon } from '../../components/required-icon';
import { LetfDotsWithFixedRight } from '../../components/left-dots-with-fixed-right';
import { makeClassName } from '../../helpers/make-class-name';

import './upload.scss';
import { FileItem } from './file-item';

const Upload = I18N(
  ({
    label,
    uploadButtonLabel,
    name,
    accept,
    hint,
    error,
    onChange,
    multiple,
    value,
    required,
    className
  }) => {
    const uploadButtonId = useId();
    const [currentFile, setCurrentFile] = useState(
      (multiple && _.isArray(value)) || (!multiple && _.isObject(value)) ? value : undefined
    );
    const hasError = error && _.isString(error);

    const handleClear = useCallback(
      e => {
        e.preventDefault();
        setCurrentFile(null);
        onChange(null);
      },
      [onChange]
    );

    const handleRemove = useCallback(
      (fileToRemove) => {
        const newCurrentFile = currentFile
          .filter(file => file !== fileToRemove);
        setCurrentFile(newCurrentFile);
        onChange(newCurrentFile);
      },
      [currentFile, onChange]
    );

    const handleChange = useCallback(
      e => {
        if (e.target.files && e.target.files.length > 0) {
          if (multiple) {
            const newCurrentFile = currentFile ? [...currentFile] : [];
            let idx;

            for(idx = 0; idx < e.target.files.length; idx++) {
              newCurrentFile.push(e.target.files[idx]);
            }
            setCurrentFile(newCurrentFile);
            onChange(newCurrentFile);
          } else {
            setCurrentFile(e.target.files[0]);
            onChange(e.target.files[0]);
          }
        } else {
          onChange(null);
        }
      },
      [onChange, multiple, currentFile]
    );

    return (
      <div {...makeClassName('upload', name, 'lf-form-react-control-group', className)} >
        {label && (
          <label for={name}>
            {label}
            {required && <RequiredIcon />}
          </label>
        )}
        <div className="lf-upload-button-layout">
          <div className="lf-upload-button-left">
              <label
                className="lf-form-react-primary-button"
                for={uploadButtonId}
              >{uploadButtonLabel || 'Upload'}</label>
              <input
                id={uploadButtonId}
                type="file"
                accept={accept}
                onChange={handleChange}
                multiple={multiple}
                style={{
                  clip: 'rect(0 0 0 0)',
                  clipPath: 'inset(50%)',
                  height: 1,
                  overflow: 'hidden',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  whiteSpace: 'nowrap',
                  width: 1,
                }}
              />
          </div>
          <div className="lf-upload-button-right">
            {!multiple && currentFile && (
              <LetfDotsWithFixedRight
                left={
                  <span className="lf-upload-file-name">
                    {currentFile.name}
                  </span>
                }
                right={
                  <>
                    &nbsp;
                    <span className="lf-size">
                      {formatBytes(currentFile.size)}
                    </span>
                    &nbsp;
                    <a
                      href="#"
                      onClick={handleClear}
                    ><CrossCirle color="#666666" yOffset={2} width={16} height={16}/></a>
                  </>
                }
              />
            )}
          </div>
        </div>
        {hint && !hasError && <div className="lf-form-react-message">{hint}</div>}
        {hasError && <div className="lf-form-react-error-message">{error}</div>}
        {multiple && currentFile && (
          <div className="lf-upload-file-list">
            {currentFile.map(file => (
              <FileItem
                file={file}
                key={file.name}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
  ['label', 'uploadButtonLabel', 'hint']
);
lfLog('Loaded React.Upload');

export default Upload;
