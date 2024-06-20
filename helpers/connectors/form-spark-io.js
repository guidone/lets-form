import { method } from "lodash";


const FormSparkIo = async ({
  data,
  options
}) => {
  const opts = Object.assign({
    formId: null
  }, options)

  console.log('FormSparkIo', opts.formId, `https://submit-form.com/${opts.formId}`)

  const formData = new FormData();
  Object.keys(data)
    .forEach(key => formData.append(
      key,
      typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key])
    ))


  const res = await fetch(
    `https://submit-form.com/${opts.formId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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

  console.log('responseData', responseData)

  return responseData;
};

export { FormSparkIo };
