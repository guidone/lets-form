import React from 'react';

console.log('Cristoddio', React);

const FormGenerator = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      sto cazzo {count}
      <button onClick={() => setCount(count+1)}>dai cazzo!</button>
    </div>
  );
};

//window.React1 = React;

export default FormGenerator ;
