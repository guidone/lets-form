import React from 'react';



const FormMaterialUI = ({ children, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export { FormMaterialUI };
