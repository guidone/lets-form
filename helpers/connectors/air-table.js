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
      redirect: 'follow',
      body: JSON.stringify(data)
    }
  );

  /*let responseData;
  try {
    responseData = await res.json();
  } catch(e) {
    // do nothing
  }

  return responseData;*/
};

export { AirTable };
