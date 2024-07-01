const HttpCall = async ({
  data,
  options,
  fetch
}) => {
  const opts = {
    method: 'POST',
    ...options
  };

  const headers = {
    'Content-Type': 'application/json'
  };

  if (opts.authorization === 'bearer') {
    headers.Authorization = `Bearer ${opts.bearerToken}`;
  } else if (opts.authorization === 'basic') {
    const hash = btoa(opts.username + ':' + opts.password);
    headers.Authorization = `Basic ${hash}`;
  }

  return await fetch(
    opts.url,
    {
      method: opts.method,
      headers,
      redirect: 'follow',
      body: JSON.stringify(data)
    }
  );
};

export { HttpCall };
