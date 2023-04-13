/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useCallback } from 'react';
import classNames from 'classnames';

import { ChevronUp, ChevronDown } from '../../assets/icons';
import { I18N } from '../../components';

import './group.scss';

const Group = I18N(
  ({
    label,
    disabled = false,
    open = true,
    collapsible = true,
    bottomBorder = false,
    align,
    children
  }) => {
    const [isOpen, setIsOpen] = useState(open);
    const handleClick = useCallback(
      event => {
        event.preventDefault();
        setIsOpen(!isOpen);
      },
      [isOpen]
    );

    return (
      <div
        className={classNames('lf-control-group', {
          'bottom-border': bottomBorder,
          'open': isOpen,
          'close': !isOpen
        })}
      >
        <div
          role="separator"
          className={classNames('header', align)}
        >
          <span className="inner-text">
          {label}
          {collapsible && (
            <a
              href="#"
              className="lf-btn-collapse"
              disabled={disabled}
              appearance="link"
              onClick={handleClick}
            >
              {isOpen ? <ChevronUp color="#3498ff"/> : <ChevronDown color="#3498ff" />}
            </a>
          )}
          </span>
        </div>
        {(isOpen || !collapsible) && <>{children}</>}
      </div>
    );
  },
  ['label'])
;

export { Group };