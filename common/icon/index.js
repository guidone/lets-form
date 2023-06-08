/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames';

import './common-icon.scss';

const CommonIcon = ({ src, className, alt, onClick, size }) => {

  return (
    <div className={classNames(
      'lf-common-icon', className,
      {
        small: size === 'small',
        large: size === 'large'
        //[size]: COMMON_ICON_SIZES.includes(size)
      }
    )}>
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
      >
        <img src={src} alt={alt}/>
      </a>
    </div>
  )
};

export { CommonIcon };
