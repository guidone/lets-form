


const defaultBlockProperty = s => ({
  rich_text: [
    {
      text: {
        content: s
      }
    }
  ]
});

const NotionMappings = {
  'input-number': 'number'
};


const Notion = async ({
  data,
  options,
  fetch,
  fields
}) => {
  const opts = Object.assign({
    secretKey: null,
    databaseId: null
  }, options);

  console.log('notion fields', fields)

  const notionProperties = Object.keys(data)
    .reduce(
      (acc, key) => {
        let newValue;
        if (typeof NotionMappings[fields[key]] === 'function') {
          newValue = NotionMappings[fields[key]](data[key]);
        } else if (NotionMappings[fields[key]]) {
          newValue = { [NotionMappings[fields[key]]]: data[key] };
        } else {
          newValue = defaultBlockProperty(data[key]);
        }

        return {
          ...acc,
          [key]: newValue
        };
      },
      {}
    );

  console.log('notionProperties', notionProperties)

  return await fetch(
    'https://api.notion.com/v1/pages',
    {
      method: 'POST',

      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${opts.secretKey}`,
        'Notion-Version': '2022-06-28'
      }),
      body: JSON.stringify({
        parent: {
          database_id: opts.databaseId
        },
        properties: notionProperties,

      })
    }
  );
};

export { Notion };
