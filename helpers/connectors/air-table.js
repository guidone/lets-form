const AirTable = async ({
  data,
  options = {},
  fetch
}) => {
  const opts = {
    webhookUrl: null,
    ...options
  };

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
