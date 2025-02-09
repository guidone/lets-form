/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';

import { ChevronUp, ChevronDown } from '../../assets/icons';
import { I18N } from '../../components/i18n';
import { makeClassName } from '../../helpers/make-class-name';

import './group.scss';

const Group = I18N(
  ({
    name,
    className,
    label,
    disabled = false,
    open = true,
    collapsible = true,
    border = 'top',
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
    // if open changes, then change status
    useEffect(
      () => {
        setIsOpen(open);
      },
      [open]
    );

    return (
      <div
        {...makeClassName(
          'group',
          name,
          className,
          `lf-border-${border}`,
          { 'open': isOpen, 'close': !isOpen }
        )}
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
        {(isOpen || !collapsible) && <div className="lf-group-content">{children}</div>}
      </div>
    );
  },
  ['label'])
;

export { Group };
