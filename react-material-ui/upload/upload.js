/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useState, useId } from 'react';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import _ from 'lodash';

import { I18N } from '../../components';
import { CrossCirle } from '../../assets/icons/cross-circle';
import { formatBytes } from '../../helpers/format-bytes';
import { lfLog } from '../../helpers/lf-log';
import { LetfDotsWithFixedRight } from '../../components/left-dots-with-fixed-right';

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
    uploadButtonVariant,
    uploadButtonSize,
    uploadButtonIcon,
    color,
    onChange,
    multiple,
    required,
    value
  }) => {
    const controlId = useId();
    const [currentFile, setCurrentFile] = useState(
      (multiple && _.isArray(value)) || (!multiple && _.isObject(value)) ? value : undefined
    );

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
      <div
        className="lf-control-upload"
        data-lf-field-name={name}
      >
        {label && (
          <FormLabel id={controlId} required={required}>{label}</FormLabel>
        )}
        <div className="lf-upload-button-layout">
          <div className="lf-upload-button-left">
            <Button
              color={color ?? undefined}
              component="label"
              variant={uploadButtonVariant ?? undefined}
              size={uploadButtonSize ?? undefined}
              startIcon={uploadButtonIcon ? <img className="lf-icon" src={uploadButtonIcon} /> : undefined}
            >
              {uploadButtonLabel || 'Upload'}

              <input
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
            </Button>
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
        {hint && !error && <FormHelperText>{hint}</FormHelperText>}
        {error && <FormHelperText>{error}</FormHelperText>}
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
lfLog('Loaded MUI.Upload');

export default Upload;
