const GetFormIo = async ({
  data,
  options = {},
  fetch
}) => {
  const opts = {
    url: null,
    ...options
  };

  const formData = new FormData();
  Object.keys(data)
    .forEach(key => formData.append(
      key,
      typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key])
    ));

  return await fetch(
    opts.url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData
    }
  );
};

export { GetFormIo };
