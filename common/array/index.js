import React, { useState, useCallback } from 'react';
import _ from 'lodash';

import FormGenerator, { fillIds } from '../../react-rsuite5';

import { isEmptyItem } from './helpers/is-empty-item';
import { ArrayItem } from './views/array-item';

import { useFormContext } from '../../hooks';

import './list-array.scss';

const ListArray = ({
  value,
  onChange = () => {},
  onBlur = () => {},
  disabled = false,
  readOnly = false,
  fields,
  layout = 'vertical',
  maxHeight,
  leftMargin = 0
}) => {
  const [items, setItems] = useState(
    _.isArray(value) && !_.isEmpty(value) ? fillIds(value) : [{ id: _.uniqueId() }]
  );
  const { locales } = useFormContext();

  const form = {
    layout,
    fluid: true,
    locales, // copy the locales from the main form
    fields
  };

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
        { id: _.uniqueId() }
      ]);
    },
    []
  );

  const handleRemove = useCallback(
    (item) => {
      const newItems = items.filter(i => i.id !== item.id);
      setItems(newItems);
      onChange(newItems.map(i => _.omit(i, 'id')));
    },
    [items, onChange]
  );

  return (
    <div
      className="lf-control-common-array"
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
          >
            <FormGenerator
              form={form}
              disabled={disabled}
              readOnly={readOnly}
              framework="react-rsuite5"
              defaultValues={item}
              onlyFields={true}
              onChange={value => {
                console.log('changed item', value)
                const newItems = items.map(i => i.id === value.id ? value : i);
                setItems(newItems);
                onChange(newItems.map(i => _.omit(i, 'id')));
              }}
            />
          </ArrayItem>
        );
      })}
    </div>
  );
};

export { ListArray };
