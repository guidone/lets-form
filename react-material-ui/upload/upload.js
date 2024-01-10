/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useState } from 'react';
import { Button, FormHelperText } from '@mui/material';
import _ from 'lodash';

import { I18N } from '../../components';
import { MuiLabel } from '../../components/mui-label';

import './upload.scss';

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
    onChange
  }) => {
    const [currentFile, setCurrentFile] = useState();

    const handleClear = useCallback(
      e => {
        e.preventDefault();
        setCurrentFile(null);
        onChange(null);
      },
      [onChange]
    );

    const handleChange = useCallback(
      e => {
        if (e.target.files && e.target.files.length > 0) {
          setCurrentFile(e.target.files[0]);
          onChange({
            blobFile: e.target.files[0],
            name: e.target.files[0].name
          });
        } else {
          onChange(null);
        }
      },
      [onChange]
    );

    return (
      <div
        className="lf-control-upload"
        data-lf-field-name={name}
      >
        {label && (
          <MuiLabel id={`mui_input_text_${name}`}>{label}</MuiLabel>
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
            {currentFile && (
              <div>
                <span className="lf-upload-file-name">
                  {currentFile.name}
                </span>
                &nbsp;
                <a 
                  href="#"
                  onClick={handleClear}
                >clear</a>
              </div>
            )}
          </div>
        </div>
        {hint && !error && <FormHelperText>{hint}</FormHelperText>}
      </div>
    );
  },
  ['labelOn', 'labelOff', 'labelLink', 'hint']
);

export { Upload };
