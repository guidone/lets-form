const VALIDATION_PROPS = [
  'validationMaxLength',
  'validationMinLength',
  'validationMin',
  'validationMax',
  'validationPattern',
  'validate',
  'errorMessage'
];

// create blank elements for the DSL
export const LfField = () => (<></>);
export const LfGroup = () => (<></>);
export const LfObject = () => (<></>);
export const LfColumns = () => (<></>);
export const LfColumn = () => (<></>);
export const LfArray = () => (<></>);
export const LfTabs = () => (<></>);
export const LfTab = () => (<></>);
export const LfSteps = () => (<></>);
export const LfStep = () => (<></>);

const elementToString = el => {
  return `type: ${typeToString(el.type)}${cleanupProperties(el.props)}`;
};

const typeToString = type => {
  if (type === LfField) { return '<LfField>' } else
  if (type === LfGroup) { return '<LfGroup>' } else
  if (type === LfObject) { return '<LfObject>' } else
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

const assertElementsOf = (elements, types, quiet= false) => {
  const checkTypes = Array.isArray(types) ? types : [types];
  const checkElements = Array.isArray(elements) ? elements : [elements];
  return checkElements.every(element => {
    if (!elementOf(element, checkTypes)) {
      if (!quiet) {
        throw new Error('LetsForm DSL error, element ' + elementToString(element) +
          ' should be one of these components: ' + typesToString(checkTypes));
      }
      return false;
    }
    return true;
  });
};

const assertValidSteps = elements => {
  const checkElements = Array.isArray(elements) ? elements : [elements];
  return checkElements.every(element => {
    if (_.isEmpty(element.props.value)) {
      throw new Error('LetsForm DSL error, LfStep ' + elementToString(element) +
        ' must have a "value" property (the internal name of the step)');
    }
    if (_.isEmpty(element.props.label)) {
      throw new Error('LetsForm DSL error, LfStep ' + elementToString(element) +
        ' must have a "label" property');
    }
    return true;
  });
};

const assertValidTabs = elements => {
  const checkElements = Array.isArray(elements) ? elements : [elements];
  return checkElements.every(element => {
    if (_.isEmpty(element.props.value)) {
      throw new Error('LetsForm DSL error, LfTab ' + elementToString(element) +
        ' must have a "value" property (the internal name of the tab)');
    }
    if (_.isEmpty(element.props.label)) {
      throw new Error('LetsForm DSL error, LfStep ' + elementToString(element) +
        ' must have a "label" property');
    }
    return true;
  });
};

const assertElementsOfElements = (elements, types) => {
  const checkTypes = Array.isArray(types) ? types : [types];
  const checkElements = Array.isArray(elements) ? elements : [elements];

   return checkElements.every(element => {
    if (!assertElementsOf(element.props.children, checkTypes, true)) {
      throw new Error('LetsForm DSL error, element ' + elementToString(element) +
        ' should only have childrenbe of these components: ' + typesToString(checkTypes));
    }
    return true;
  });
};

/**
 * assertElementName
 * Assert element has name property or raise error
 */
const assertElementName = element => {
  if (_.isEmpty(element.props.name)) {
    throw new Error('LetsForm DSL error, element ' + elementToString(element) +' missing "name" property ');
  }
  return true;
};

/**
 * assertElementComponent
 * Assert element has component prop, or raise error
 */
const assertElementComponent = (element, { components, framework } = {}) => {
  if (_.isEmpty(element.props.component)) {
    throw new Error('LetsForm DSL error, element ' + elementToString(element) +' missing "component" property ');
  }
  if (components && framework) {
    if (!components[element.props.component] || !components[element.props.component][framework]) {
      throw new Error('LetsForm DSL error, element ' + elementToString(element) +` invalid component property "${element.props.component}" for framework "${framework}"`);
    }
  }
  return true;
};


const spreadValidationFields = (props) => {
  const newProps = _.omit(props, VALIDATION_PROPS);

  // if any validation prop
  if (VALIDATION_PROPS.some(prop => props[prop] != null)) {
    const validation = VALIDATION_PROPS
      .reduce(
        (acc, prop) => {
          if (props[prop] != null) {
            if (prop.startsWith('validation')) {
              return {
                ...acc,
                [prop.replace('validation', '')]: props[prop]
              };
            } else if (prop === 'errorMessage') {
              return {
                ...acc,
                message: props[prop]
              };
            } else {
              return {
                ...acc,
                [prop]: props[prop]
              };
            }
          }
          return acc;
        },
        {}
      );
    newProps.validation = validation;
  }

  return newProps;
}

export const traverseChildren = (children, { components, framework } = {}) => {

  let elements = [];
  if (children) {
    elements = Array.isArray(children) ? children : [children];
  }

  return elements
    .map(element => {
      if (elementOf(element, LfField)
        && assertElementName(element)
        && assertElementComponent(element, { components, framework })
      ) {
        return {
          ...spreadValidationFields(element.props)
        };
      } else if (elementOf(element, LfGroup)) {
        return {
          ..._.omit(element.props, 'children'),
          component: 'group',
          fields: traverseChildren(element.props.children, { components, framework })
        };
      } else if (elementOf(element, LfObject)) {
        return {
          ..._.omit(element.props, 'children'),
          component: 'object',
          fields: traverseChildren(element.props.children, { components, framework })
        };
      } else if (elementOf(element, LfColumns) &&
        Array.isArray(element.props.children) &&
        assertElementsOf(element.props.children, LfColumn)
      ) {
        const columns = element.props.children.map(el => ({
          name: _.uniqueId('lf_column_name_'),
          ...(_.omit(el.props, 'children'))
        }));

        return {
          name: _.uniqueId('lf_field_name_'),
          component: 'columns',
          columns,
          ..._.omit(element.props, 'children'),
          fields: columns.reduce(
            (acc, column, idx) => ({
              ...acc,
              [column.name]: traverseChildren(element.props.children[idx].props.children, { components, framework })
            }),
            {}
          )
        };
      } else if (element.type === LfArray &&
        assertElementsOf(element.props.children, [LfField, LfGroup, LfColumns])
      ) {
        return {
          ..._.omit(element.props, 'children'),
          component: 'array',
          fields: traverseChildren(element.props.children, { components, framework })
        };
      } else if (element.type === LfTabs &&
        assertElementsOf(element.props.children, [LfTab]) &&
        assertElementsOfElements(element.props.children, [LfField, LfGroup, LfColumns, LfArray]) &&
        assertValidTabs(element.props.children)
      ) {
        const tabs = element.props.children.map(el => ({
          name: _.uniqueId('lf_tab_name_'),
          ...(_.omit(el.props, 'children'))
        }));

        return {
          name: _.uniqueId('lf_field_name_'),
          component: 'tabs',
          ..._.omit(element.props, 'children'),
          tabs,
          fields: tabs.reduce(
            (acc, column, idx) => ({
              ...acc,
              [column.value]: traverseChildren(element.props.children[idx].props.children, { components, framework })
            }),
            {}
          )
        };
      } else if (element.type === LfSteps &&
        assertElementsOf(element.props.children, [LfStep]) &&
        assertElementsOfElements(element.props.children, [LfField, LfGroup, LfColumns, LfArray]) &&
        assertValidSteps(element.props.children)
      ) {
        const steps = element.props.children.map(el => ({
          name: _.uniqueId('lf_step_name_'),
          ...(_.omit(el.props, 'children'))
        }));

        return {
          name: _.uniqueId('lf_field_name_'),
          component: 'steps',
          ..._.omit(element.props, 'children'),
          steps,
          fields: steps.reduce(
            (acc, column, idx) => ({
              ...acc,
              [column.value]: traverseChildren(element.props.children[idx].props.children, { components, framework })
            }),
            {}
          )
        };
      } else {
        // othwerwise wrap in react-view component
        return {
          name: _.uniqueId('lf_field_name_'),
          component: 'react-view',
          view: () => (<>{element}</>)
        };
      }
    })
    .filter(Boolean);
};