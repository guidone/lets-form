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
      <div className="lf-control-group">
        <div
          role="separator"
          className={classNames('header', align)}
        >
          <span class="inner-text">
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