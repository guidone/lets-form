const HttpCall = async ({
  data,
  options,
  fetch
}) => {
  const opts = Object.assign({
    method: 'POST'
  }, options);

  return await fetch(
    opts.url,
    {
      method: opts.method,
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      body: JSON.stringify(data)
    }
  );
};

export { HttpCall };
