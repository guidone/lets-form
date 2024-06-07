import React, { useCallback } from 'react';

import { CrossCirle } from '../../assets/icons/cross-circle';
import { IconAttachment } from '../../assets/icons/attachment';
import { formatBytes } from '../../helpers/format-bytes';

const FileItem = ({ file, onRemove = () => {} }) => {
  const handleClick = useCallback(
    e => {
      e.preventDefault();
      onRemove(file);
    },
    [onRemove, file]
  );

  return (
    <div className="lf-upload-file-item">
      <div className="lf-attachment-icon">
        <IconAttachment width={16} height={16} color="#666666" />
      </div>
      <div className="lf-name">
        {file.name}
      </div>
      <div className="lf-size">
        {formatBytes(file.size)}
      </div>
      <a 
        className="lf-clear-button"
        href="#" 
        onClick={handleClick}
      >
        <CrossCirle color="#666666" width={16} height={16}/>
      </a>
    </div>
  );
};

export { FileItem };
