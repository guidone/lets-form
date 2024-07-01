const Zapier = async ({
  data,
  options,
  fetch
}) => {
  const opts = Object.assign({
    url: null
  }, options);

  return await fetch(
    opts.url,
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
      //mode: 'no-cors'
    }
  );
};

export { Zapier };
