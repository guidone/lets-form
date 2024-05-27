import React, { useState, useCallback } from 'react';
import _ from 'lodash';

import { fillIds, collectNames } from '../../helpers';
import { useFormContext } from '../../hooks';

import { isEmptyItem } from './helpers/is-empty-item';
import { ArrayItem } from './views/array-item';

import './list-array.scss';
import classNames from 'classnames';

const randomId = function(length = 12) {
  return Math.random().toString(36).substring(2, length+2);
};

/**
 * Check if object is empty or all the keys are empty
 * @param {*} obj
 * @returns
 */
const isEmptyObject = obj => {
  return _.isEmpty(obj) || Object.keys(obj).every(key => _.isEmpty(obj[key]));
};

/**
 * flatArrayOfString
 * If an array of object can be flattned (one keuy), then return a flat array, otherwise raise expection
 * @param {*} a
 * @returns
 */
 const flatArrayOfString = a => {
  const canBeFlat = a.every(obj => Object.keys(obj).length === 1);
  if (!canBeFlat) {
    throw new Error(`Cannot be flattened`);
  }
  return a.map(obj => obj[Object.keys(obj)[0]]);
}

const formatArray = (a, arrayType = 'arrayOfObject') => {
  const cleaned = a
    .map(i => _.omit(i, 'id'))
    .filter(i => !isEmptyObject(i));

  try {
    const flattened = flatArrayOfString(cleaned);
    if (arrayType === 'arrayOfString') {
      return flattened;
    } else if (arrayType === 'commaSeparated') {
      return flattened.join(',');
    }
  } catch(e) {
    // do nothing, return as is
  }
  return cleaned;
};


const makeDefaultValue = (defaultValue, arrayType, form) => {
  if (arrayType === 'arrayOfString') {
    const isArrayOfString = _.isArray(defaultValue) && defaultValue.every(s => _.isString(s));
    const names = collectNames(form);
    // if it's an array of string
    if (isArrayOfString && names.length === 1) {
      return defaultValue.map(s => ({
        id: randomId(),
        [names[0]]: s
      }));
    }
    return [{ id: randomId() }];
  } else if (arrayType === 'commaSeparated') {
    const names = collectNames(form);
    if (names.length === 1 && _.isString(defaultValue) && !_.isEmpty(defaultValue)) {
      return defaultValue.split(',').map(s => ({
        id: randomId(),
        [names[0]]: s
      }));
    }
    return [{ id: randomId() }];
  } else {
    return _.isArray(defaultValue) && !_.isEmpty(defaultValue) ? fillIds(defaultValue) : [{ id: randomId() }]
  }
};


const ListArray = ({
  LetsFormComponent,
  value,
  onChange = () => {},
  disabled = false,
  readOnly = false,
  fields,
  layout = 'vertical',
  maxHeight,
  lfLocale,
  leftMargin = 0,
  children,
  arrayType = 'arrayOfObject',
  align = 'top',
  alignOffset = 0
}) => {
  const { locales } = useFormContext();
  const form = {
    layout,
    fluid: true,
    locales, // copy the locales from the main form
    fields
  };
  const [items, setItems] = useState(makeDefaultValue(value, arrayType, form));

  let style = {};
  if (maxHeight) {
    //style.maxHeigth = _.isNumber(maxHeigth) ? `${maxHeigth}px` : maxHeigth;
    style = {
      maxHeight: `${maxHeight}px`,
      overflowY: 'scroll'
    }
  }
  if (leftMargin != null) {
    style.marginLeft = _.isNumber(leftMargin) ? `${leftMargin}px` : leftMargin;
  }

  const handleAdd = useCallback(
    () => {
      setItems(items => [
        ...items,
        { id: randomId() }
      ]);
    },
    []
  );

  const handleChange = useCallback(
    value => {
      const newItems = items.map(i => i.id === value.id ? value : i);
      setItems(newItems);
      onChange(formatArray(newItems, arrayType));
    },
    [items, onChange, arrayType]
  );

  const handleRemove = useCallback(
    (item) => {
      const newItems = items.filter(i => i.id !== item.id);
      setItems(newItems);
      onChange(formatArray(newItems, arrayType));
    },
    [items, onChange, arrayType]
  );

  if (children) {
    return <div style={{ padding: '0px 10px 1px 10px' }}>{children}</div>;
  }

  return (
    <div
      className={classNames('lf-control-common-array', align ? `lf-${align}` : undefined)}
      style={style}
    >
      {(_.isArray(items) ? items : []).map((item, idx) => {
        const canAdd = idx === (items.length - 1) && !isEmptyItem(item);
        const showAdd = idx === (items.length - 1) || items.length === 1;

        return (
          <ArrayItem
            key={item.id}
            item={item}
            disabled={disabled}
            readOnly={readOnly}
            disableAdd={!canAdd}
            showAdd={showAdd}
            onAdd={handleAdd}
            onRemove={handleRemove}
            align={align}
            alignOffset={alignOffset}
          >
            <LetsFormComponent
              form={form}
              locale={lfLocale}
              disabled={disabled}
              readOnly={readOnly}
              defaultValues={item}
              onlyFields={true}
              onChange={handleChange}
            />
          </ArrayItem>
        );
      })}
    </div>
  );
};

export { ListArray };
