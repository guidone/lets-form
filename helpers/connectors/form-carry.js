const FormCarry = async ({
  data,
  options,
  fetch
}) => {
  const opts = {
    url: null,
    ...options
  };

  return await fetch(
    opts.url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    }
  );
};

export { FormCarry };
