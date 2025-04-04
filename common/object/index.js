/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import classNames from 'classnames';

import { useFormContext } from '../../hooks';
import { ChevronUp, ChevronDown } from '../../assets/icons';
import { I18N } from '../../components/i18n';
import { makeClassName } from '../../helpers/make-class-name';

import './object.scss';

const EMPTY_OBJECT = {};

const CommonObject = I18N(
  ({
    LetsFormComponent,
    name,
    className,
    label,
    lfLocale,
    layout = 'vertical',
    fields,
    disabled = false,
    readOnly = false,
    value,
    open = true,
    collapsible = true,
    border = 'top',
    align,
    error,
    formShowErrors,
    onChange,
    children
  }) => {
    const [isOpen, setIsOpen] = useState(open);
    const { locales } = useFormContext();

    const handleClick = useCallback(
      event => {
        event.preventDefault();
        setIsOpen(!isOpen);
      },
      [isOpen]
    );

    const form = useMemo(
      () => {
        return {
          layout,
          fluid: true,
          locales, // copy the locales from the main form
          fields,
          name: 'Object form ' + name,
          showErrors: formShowErrors
        };
      },
      [layout, locales, fields, name, formShowErrors]
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
          'object',
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
        {(isOpen || !collapsible) && (
          <div className="lf-object-content">
            {children ?
              children :
              <LetsFormComponent
                form={form}
                locale={lfLocale}
                disabled={disabled}
                readOnly={readOnly}
                defaultValues={value || EMPTY_OBJECT}
                onlyFields={true}
                onChange={onChange}
                errors={error != null && error.errorMessages != null && error.errorMessages.length > idx ?
                  error.errorMessages[idx] : undefined}
              />
            }
          </div>
        )}
      </div>
    );
  },
  ['label'])
;

export { CommonObject };
