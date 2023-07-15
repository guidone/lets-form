import { useContext, useEffect } from 'react';
import _ from 'lodash';

import FormContext from '../form-context';

export const useFormContext = () => {
  const context = useContext(FormContext);

  // put here some defaults

  return context;
};

export const useStylesheet = (id, css) => {
  useEffect(
    () => {
      if (!_.isEmpty(css)) {
        const head = document.head;
        const style = document.createElement("style");
        style.id = `letsform-sheet-${id}`;
        style.innerHTML = css.replaceAll(
          '.lf-current-form', 
          `.lf-lets-form [data-lf-form-name=${id}]`
        );
        head.appendChild(style);
      }

      return () => {
        if (!_.isEmpty(css)) {
          document.querySelector(`#letsform-sheet-${id}`)?.remove();
        }
      };
    },
    [css, id]
  );
}
