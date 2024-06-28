

export const LfField = () => (<></>);
export const LfGroup = () => (<></>);
export const LfColumns = () => (<></>);
export const LfColumn = () => (<></>);
export const LfArray = () => (<></>);
export const LfTabs = () => (<></>);
export const LfTab = () => (<></>);
export const LfSteps = () => (<></>);
export const LfStep = () => (<></>);

const elementToString = el => {
  console.log('failed comp', el)
  return `type: ${typeToString(el.type)}${cleanupProperties(el.props)}`;
};

const typeToString = type => {
  if (type === LfField) { return '<LfField>' } else
  if (type === LfGroup) { return '<LfGroup>' } else
  if (type === LfColumns) { return '<LfColumns>' } else
  if (type === LfColumn) { return '<LfColumn>' } else
  if (type === LfArray) { return '<LfArray>' } else
  if (type === LfTabs) { return '<LfTabs>' } else
  if (type === LfTab) { return '<LfTab>' } else
  if (type === LfSteps) { return '<LfSteps>' } else
  if (type === LfStep) { return '<LfStep>' } else { return 'unknown'; }
};

const typesToString = types => {
  return types
    .map(typeToString)
    .join(', ');
};

const cleanupProperties = props => {
  console.log('cleanup', props)
  const cleaned = Object.keys(props)
    .reduce(
      (acc, key) => {
        if (typeof props[key] === 'string' || typeof props[key] === 'number') {
          return {
            ...acc,
            [key]: props[key]
          }
        }
        return acc;
      },
      {}
    );
  if (Object.keys(cleaned).length !== 0) {
    return ' - ' + JSON.stringify(cleaned);
  }
  return '';
};


/**
 * elementOf
 * Check if element is one of the type
 * @param {obj} element
 * @param {ReactElement,[ReactElement]} types
 */
const elementOf = (element, types) => {
  const checkTypes = Array.isArray(types) ? types : [types];
  return checkTypes.some(type => element.type === type);
};

const assertElementsOf = (elements, types) => {
  const checkTypes = Array.isArray(types) ? types : [types];
  return elements.every(element => {
    if (!elementOf(element, checkTypes)) {
      throw new Error('LetsForm DSL error, this element ' + elementToString(element) +
        ' should be one of these components: ' + typesToString(checkTypes));
    }
    return true;
  })
}

export const traverseChildren = children => {

  ///console.log('TRAVERSED-------');
  //console.log(children);

  let elements = [];
  if (children) {
    elements = Array.isArray(children) ? children : [children];
  }

  return elements
    .map(element => {
      if (elementOf(element, LfField)) {
        return {
          id: _.uniqueId('lf_dsl_'),
          ...element.props
        };
      } else if (elementOf(element, LfGroup)) {
        console.log('traverse group', element)
        return {
          id: _.uniqueId('lf_dsl_'),
          ..._.omit(element.props, 'children'),
          component: 'group',
          fields: traverseChildren(element.props.children)
        };
      } else if (elementOf(element, LfColumns) &&
        Array.isArray(element.props.children) &&
        element.props.children.length == 2 &&
        assertElementsOf(element.props.children, LfColumn)

      ) {
        return {
          id: _.uniqueId('lf_dsl_'),
          component: 'two-columns',
          ..._.omit(element.props, 'children'),
          leftFields: traverseChildren(element.props.children[0].props.children),
          rightFields: traverseChildren(element.props.children[1].props.children)
        }
      } else if (element.type === LfColumns &&
        Array.isArray(element.props.children) &&
        element.props.children.length == 3 &&
        assertElementsOf(element.props.children, [LfColumn])
      ) {
        return {
          id: _.uniqueId('lf_dsl_'),
          component: 'three-columns',
          ..._.omit(element.props, 'children'),
          leftFields: traverseChildren(element.props.children[0].props.children),
          centerFields: traverseChildren(element.props.children[1].props.children),
          rightFields: traverseChildren(element.props.children[2].props.children)
        };
      } else if (element.type === LfArray &&
        assertElementsOf(element.props.children, [LfField, LfGroup, LfColumn, LfColumns])
      ) {
        return {
          id: _.uniqueId('lf_dsl_'),
          ..._.omit(element.props, 'children'),
          component: 'array',
          fields: traverseChildren(element.props.children)
        };
      } else {
        return {
          name: 'script', // TODO randomize
          component: 'react-view',
          view: () => {
            return <>{element}</>
          }
        };
      }
    })
    .filter(Boolean);
};