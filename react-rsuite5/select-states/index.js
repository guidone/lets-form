import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { Select } from '../select';

const LETS_FORM_COUNTRIES = 'https://unpkg.com/lets-form-countries@1.0.1';

const SelectStates = ({ country, placeholder, ...props }) => {
  const [options, setOptions] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(
    () => {
      const fetchData = async (c) => {
        try {
          const res = await fetch(`${LETS_FORM_COUNTRIES}/${c.toUpperCase()}.json`);
          const country = await res.json();
          setOptions(
            country.provinces.map(province => ({ value: province, label: province }))
          );
          setDisabled(false);
        } catch(e) {
          console.error(`[LetsForm] Error fetching states for country ${c}`);
        }
      };
      if (_.isString(country) && !_.isEmpty(country)) {
        setDisabled(true);
        fetchData(country);
      }
    },
    [country]
  );

  return (
    <Select
      {...props}
      options={options ?? []}
      placeholder={disabled ? 'Loading...' : placeholder}
      disabled={disabled}
    />
  );
};

export { SelectStates };
