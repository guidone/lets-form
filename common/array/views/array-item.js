/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from 'react';
import classNames from 'classnames';

import { PlusCircle, MinusCircle } from '../../../assets/icons';

const IconButton = ({
  disabled = false,
  className,
  icon: Icon,
  onClick
}) => {
  const handleClick = useCallback(
    e => {
      e.preventDefault();
      if (!disabled) {
        onClick();
      }
    },
    [disabled, onClick]
  );

  return (
    <a
      href="#"
      className={classNames('lf-icon-button', className, {
        disabled
      })}
      onClick={handleClick}
    >
      {Icon}
    </a>
  );
}


const ArrayItem = ({
  children,
  item,
  disabled,
  readOnly,
  onAdd = () => {},
  onRemove = () => {},
  disableAdd = false,
  showAdd = false,
  align,
  alignOffset
}) => {
  const handleRemove = useCallback(
    () => onRemove(item),
    [item]
  );
  let style;
  if ((align === 'top' || align === 'bottom') && _.isNumber(alignOffset) && alignOffset > 0) {
    style = {
      [`margin-${align}`]: `${alignOffset}px`
    };
  }

  return (
    <div
      className="lf-control-common-array-item"
    >
      <div className="inner-form">
        {children}
      </div>
      <div className="buttons" style={style}>
        {showAdd && (
          <IconButton
            disabled={disableAdd || disabled || readOnly}
            className="arrow"
            appearance="link"
            icon={<PlusCircle height={16} width={16} color="#3498ff" />}
            size="sm"
            onClick={onAdd}
          />
        )}
        {!showAdd && (
          <IconButton
            className="arrow"
            disabled={disabled || readOnly}
            appearance="link"
            icon={<MinusCircle height={16} width={16} color="#3498ff" />}
            size="sm"
            onClick={handleRemove}
          />
        )}
      </div>
    </div>
  );
};

export { ArrayItem };
