import { method } from "lodash";


const IFTT = async ({
  data,
  options
}) => {
  const opts = Object.assign({
    key: null,
    eventName: null
  }, options);

  const res = await fetch(
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
  let responseData;
  try {
    responseData = await res.json();
  } catch(e) {
    // do nothing
  }

  return responseData;
};

export { IFTT };
