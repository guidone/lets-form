/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useState } from 'react';
import { Button, FormHelperText } from '@mui/material';
import _ from 'lodash';

import { I18N } from '../../components';
import { MuiLabel } from '../../components/mui-label';
import { CrossCirle } from '../../assets/icons/cross-circle';
import { formatBytes } from '../../helpers/format-bytes';

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
    value
  }) => {
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
              console.log('.-', e.target.files[idx])
              newCurrentFile.push({
                blobFile: e.target.files[idx],
                name: e.target.files[idx].name,
                size: e.target.files[idx].size
              })
            }
            setCurrentFile(newCurrentFile);
            onChange(newCurrentFile);
          } else {
            setCurrentFile(e.target.files[0]);
            onChange({
              blobFile: e.target.files[0],
              name: e.target.files[0].name
            });
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
              <div>
                <span className="lf-upload-file-name">
                  {currentFile.name}
                  &nbsp;
                  <span className="lf-size">
                    {formatBytes(currentFile.size)}
                  </span>
                </span>
                &nbsp;
                <a 
                  href="#"
                  onClick={handleClear}
                ><CrossCirle color="#666666" width={16} height={16}/></a>
              </div>
            )}
          </div>
        </div>
        {hint && !error && <FormHelperText>{hint}</FormHelperText>}
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
  ['labelOn', 'labelOff', 'labelLink', 'hint']
);

export { Upload };
