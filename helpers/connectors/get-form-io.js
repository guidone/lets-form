const GetFormIo = async ({
  data,
  options
}) => {
  const opts = Object.assign(options, {
    url: null
  });

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
