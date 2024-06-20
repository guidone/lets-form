const AirTable = async ({
  data,
  options,
  fetch
}) => {
  const opts = Object.assign({
    webhookUrl: null
  }, options);

  return fetch(
    opts.webhookUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  );
};

export { AirTable };
