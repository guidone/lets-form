import React, { useState } from 'react';
import _ from 'lodash';
import { Form, IconButton } from 'rsuite';

import { PlusCircle, MinusCircle } from '../../assets/icons';
import { RequiredIcon } from '../../components';
import FormGenerator, { fillIds } from '../../react-rsuite5';
import { useFormContext } from '../../hooks';

import './list-array.scss';


const ArrayItem = ({
  name,
  children,
  item,
  disabled,
  onAdd = () => {},
  onRemove = () => {},
  disableAdd = false,
  showAdd = false,
  leftMargin = 10
}) => {


  return (
    <div
      data-lf-field-name={name}
      className="gforms-array-item"
    >
      <div className="inner-form">
        {children}
      </div>
      <div className="buttons">
        {showAdd && (
          <IconButton
            disabled={disableAdd || disabled}
            className="arrow"
            appearance="link"
            icon={<PlusCircle height={16} width={16} color="#3498ff" />}
            size="sm"
            onClick={event => {
              onAdd();
            }}
          />
        )}
        {!showAdd && (
          <IconButton
            className="arrow"
            disabled={disabled}
            appearance="link"
            icon={<MinusCircle height={16} width={16} color="#3498ff" />}
            size="sm"
            onClick={event => {
              onRemove();
            }}
          />
        )}
      </div>
    </div>
  );
}




const isEmptyItem = (obj) => {
  return Object
    .keys(obj)
    .filter(key => key !== 'id')
    .every(key => _.isEmpty(obj[key]));
};


const ListArray = ({
  value,
  onChange = () => {},
  onBlur = () => {},
  disabled = false,
  fields,
  hint,
  required,
  tooltip,
  name,
  label,
  maxHeigth = 200,
  leftMargin = 0
}) => {
  const [items, setItems] = useState(
    _.isArray(value) && !_.isEmpty(value) ? fillIds(value) : [{ id: _.uniqueId() }]
  );
  const { locales } = useFormContext();

  // TODO aggiungere params per layouat dentro
  const form = {
    layout: 'inline',
    locales, // copy the locales from the main form
    fields
  };

  let style = {};
  if (maxHeigth) {
    //style.maxHeigth = _.isNumber(maxHeigth) ? `${maxHeigth}px` : maxHeigth;
    style = {
      maxHeigth: '200px', // TODO chissa perche' non lo prende
      overflowY: 'scroll'
    }
  }
  if (leftMargin != null) {
    style.marginLeft = _.isNumber(leftMargin) ? `${leftMargin}px` : leftMargin;
  }

  return (
    <Form.Group controlId={name} className="gforms-list-array">
    {label && <Form.ControlLabel>
        {label}
        {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
        {required && <RequiredIcon />}
      </Form.ControlLabel>}
    <div style={style}>
      {(_.isArray(items) ? items : []).map((item, idx) => {

        const canAdd = idx === (items.length - 1) && !isEmptyItem(item);

        const showAdd = idx === (items.length - 1) || items.length === 1;

        return (
          <ArrayItem
            key={item.id}
            disabled={disabled}
            disableAdd={!canAdd}
            showAdd={showAdd}
            onAdd={() => {
              setItems([
                ...items,
                { id: _.uniqueId() }
              ]);
            }}
            onRemove={() => {
              const newItems = items.filter(i => i.id !== item.id);
              setItems(newItems);
              onChange(newItems.map(i => _.omit(i, 'id')));
            }}
          >
            <FormGenerator
              form={form}
              disabled={disabled}
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
    </Form.Group>
  );
};

export { ListArray };
