import { method } from "lodash";


const GetFormIo = async ({
  data,
  options
}) => {
  const opts = Object.assign(options, {

  })

  console.log('GetFormIo', opts.url)

  const formData = new FormData();
  Object.keys(data)
    .forEach(key => formData.append(
      key,
      typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key])
    ))

  const res = await fetch(
    opts.url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData,
      mode: 'no-cors'
    }
  );
  let responseData;
  try {
    responseData = await res.json();
  } catch(e) {
    // do nothing
  }

  return responseData;
};

export { GetFormIo };
