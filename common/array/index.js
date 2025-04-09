import React, { useState, useCallback, useMemo } from 'react';
import _ from 'lodash';

import { useFormContext } from '../../hooks';
import { isEmptyItem } from './helpers/is-empty-item';
import { fillIds } from '../../helpers/fill-ids';
import { collectNames } from '../../helpers/collect-names';
import { ArrayItem } from './views/array-item';

import './list-array.scss';
import classNames from 'classnames';

const NOOP = () => {};

const randomId = function(length = 12) {
  return Math.random().toString(36).substring(2, length+2);
};

/**
 * Check if object is empty or all the keys are empty
 * @param {*} obj
 * @returns
 */
const isEmptyObject = obj => {
  return _.isEmpty(obj) || Object.keys(obj).every(key => obj[key] === null || obj[key] === undefined);
};

/**
 * flatArrayOfValues
 * If an array of object can be flattned (one keuy), then return a flat array, otherwise raise expection
 * @param {*} a
 * @returns
 */
 const flatArrayOfValues = a => {
  const canBeFlat = a.every(obj => Object.keys(obj).length === 1);
  if (!canBeFlat) {
    throw new Error(`Cannot be flattened`);
  }
  if (_.isArray(a) && _.isEmpty(a)) {
    return [];
  }
  const firstKey = Object.keys(a[0])[0];
  return a.map(obj => obj[firstKey]);
}

const formatArray = (a, arrayType = 'arrayOfObject') => {
  // remove array ids and empty objects
  const cleaned = a
    .map(i => _.omit(i, 'id'))
    .filter(i => !isEmptyObject(i));

  try {
    if (arrayType === 'arrayOfString' || arrayType === 'arrayOfValues') {
      const flattened = flatArrayOfValues(cleaned);

      return flattened;
    } else if (arrayType === 'commaSeparated') {
      const flattened = flatArrayOfValues(cleaned);
      return flattened.join(',');
    }
  } catch(e) {
    // do nothing, return as is
  }
  return cleaned;
};


/**
 * isArrayOfValues
 * Is an array of elements (string, boolean, number but NOT object)
 * @param {Array} s
 * @returns
 */
const isArrayOfValues = s => _.isArray(s) && s.every(v => !_.isObject(s));


const makeDefaultValue = (defaultValue, arrayType, form) => {
  let formattedDefaultValue;
  if (arrayType === 'arrayOfString' || arrayType === 'arrayOfValues') {
    const names = collectNames(form);
    // if it's an array of values, forms has just one element and not empty array
    if (isArrayOfValues(defaultValue)
      && names.length === 1
      && _.isArray(defaultValue)
      && defaultValue.length > 0
    ) {
      formattedDefaultValue = defaultValue.map(s => ({
        id: randomId(),
        [names[0]]: s
      }));
    } else {
      formattedDefaultValue = [{ id: randomId() }];
    }
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

  return formattedDefaultValue;
};


const ListArray = ({
  LetsFormComponent,
  value,
  name,
  className,
  onChange = NOOP,
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
  alignOffset = 0,
  error,
  formShowErrors
}) => {
  const { locales } = useFormContext();

  const form = useMemo(
    () => {
      return {
        layout,
        fluid: true,
        locales, // copy the locales from the main form
        fields,
        name: 'Array form ' + name,
        showErrors: formShowErrors
      };
    },
    [layout, locales, fields, name, formShowErrors]
  );

  const [items, setItems] = useState(makeDefaultValue(value, arrayType, form));

  let style = {};
  if (maxHeight) {
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
      setItems(items => {
        const newItems = items.map(i => i.id === value.id ? value : i);
        onChange(formatArray(newItems, arrayType));
        return newItems;
      });
    },
    [onChange, arrayType]
  );

  const handleRemove = useCallback(
    (item) => {
      setItems(
        items => {
          const newItems = items.filter(i => i.id !== item.id);
          onChange(formatArray(newItems, arrayType));
          return newItems;
        }
      );
    },
    [onChange, arrayType]
  );

  if (children) {
    return <div style={{ padding: '0px 10px 1px 10px' }}>{children}</div>;
  }

  return (
    <div
      className={classNames('lf-control-common-array', className, align ? `lf-${align}` : undefined)}
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
              errors={error != null && error.errorMessages != null && error.errorMessages.length > idx ?
                error.errorMessages[idx] : undefined}
            />
          </ArrayItem>
        );
      })}
    </div>
  );
};

export { ListArray };
