
import fetch from 'cross-fetch';

const Zapier = async ({
  data,
  options
}) => {
  const opts = Object.assign({
    method: 'POST'
  }, options);

  return await fetch(
    'https://hooks.zapier.com/hooks/catch/1379304/2op10jf/',
    {
      method: 'POST',

      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      //redirect: 'follow',
      body: JSON.stringify(data)
      //,
      //mode: 'no-cors'
    }
  );
};

export { Zapier };
