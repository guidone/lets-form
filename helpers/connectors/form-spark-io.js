const FormSparkIo = async ({
  data,
  options = {},
  fetch
}) => {
  const opts = {
    formId: null,
    ...options
  };

  return await fetch(
    `https://submit-form.com/${opts.formId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }
  );
};

export { FormSparkIo };
