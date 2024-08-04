const LAYOUT_FIELDS = ['group', 'two-columns', 'three-columns', 'columns', 'steps', 'tabs'];

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
  'input-number': 'number',
  'toggle': b => ({ 'checkbox': !!b }),
  'checkbox': b => ({ 'checkbox': !!b }),
  'date': d => ({
    date: {
      start: d
    }
  }),
  'datetime': d => ({
    date: {
      start: d
    }
  }),
  'select': s => ({
    select: {
      name: s
    }
  }),
  'radio-group': s => ({
    select: {
      name: s
    }
  }),
  'multiselect': d => ({
    'multi_select': (d ?? []).map(key => ({ name: key }))
  })
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

  // translat properties according to this
  // DOC: https://developers.notion.com/reference/property-value-object
  // omit all layout fields
  const notionProperties = Object.keys(data)
    .filter(key => !LAYOUT_FIELDS.includes(key))
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
