import React, { useState } from 'react';
import _ from 'lodash';
import { Form, IconButton } from 'rsuite';
//import PlusIcon from '@rsuite/icons/Plus';
//import MinusIcon from '@rsuite/icons/Minus';

import './list-array.scss';

import { Asterisk } from '../../components';

import FormGenerator, { fillIds } from '../../react-rsuite5';

const PlusIcon = () => <span>+</span>;
const MinusIcon = () => <span>-</span>;



const ArrayItem = ({
  children,
  item,
  onAdd = () => {},
  onRemove = () => {},
  disableAdd = false,
  showAdd = false,
  leftMargin = 10
}) => {


  return (
    <div className="gforms-array-item">
      <div className="inner-form">
        {children}
      </div>
      <div className="buttons">
        {showAdd && (
          <IconButton
            disabled={disableAdd}
            className="arrow"
            appearance="link"
            icon={<PlusIcon />}
            size="sm"
            onClick={event => {
              onAdd();
            }}
          />
        )}
        {!showAdd && (
          <IconButton
            className="arrow"
            appearance="link"
            icon={<MinusIcon />}
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
  fields,
  hint,
  required,
  tooltip,
  name,
  label,
  maxHeigth = 200,
  leftMargin = 15
}) => {
  const [items, setItems] = useState(fillIds(value) || [{ id: _.uniqueId() }]);

  // TODO aggiungere params per layouat dentro
  const form = {
    layout: 'inline',
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
        {required && <Asterisk />}
      </Form.ControlLabel>}
    <div style={style}>
      {items.map((item, idx) => {

        const canAdd = idx === (items.length - 1) && !isEmptyItem(item);

        const showAdd = idx === (items.length - 1) || items.length === 1;

        return (
          <ArrayItem
            key={item.id}
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
