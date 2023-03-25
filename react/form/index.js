import React from 'react';


const FormReact = ({ children, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export { FormReact }