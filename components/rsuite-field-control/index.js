import React, { useRef, useEffect } from 'react';

import { Whisper, Popover } from 'rsuite';

const POPOVER_STYLE = {
  padding: '6px',
  color: '#ff6633'
};

const RSuite5FieldControl = ({ errorMessage, children }) => {
  const triggerRef = useRef();

  useEffect(
    () => {
      if (errorMessage) {
        triggerRef.current.open();
      } else {
        triggerRef.current.close();
      }
    },
    [errorMessage]
  );

  return (
    <Whisper
      placement="bottomStart"
      ref={triggerRef}
      trigger="none"
      speaker={<Popover
        style={POPOVER_STYLE}
        visible={!!errorMessage}
        className="lf-react-rsuite5-error-popover"
      ><div>{errorMessage}</div></Popover>}
    >{children}</Whisper>
  );
}

export { RSuite5FieldControl };
