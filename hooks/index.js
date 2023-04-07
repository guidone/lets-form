import { useContext } from 'react';

import FormContext from '../form-context';

export const useFormContext = () => {
  const context = useContext(FormContext);

  // put here some defaults

  return context;
};
