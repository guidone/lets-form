const IFTT = async ({
  data,
  options
}) => {
  const opts = Object.assign({
    key: null,
    eventName: null
  }, options);

  return await fetch(
    `https://maker.ifttt.com/trigger/${opts.eventName}/json/with/key/${opts.key}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      body: JSON.stringify(data),
      mode: 'no-cors'
    }
  );
};

export { IFTT };
