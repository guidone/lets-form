const validateRulesDefinition = rules => {
  if (Array.isArray(rules)) {
    // empty is ok
    if (rules.length === 0) {
      return null;
    }
    const genericFormat = rules.every(rule => {
      return typeof rule === 'object' && rule.condition != null && rule.verb != null;
    });

    return genericFormat ? null : 'Every rule should be an object with these keys: condition, verb and optionally names';
  }
  return 'Rules object is not an array';
};

export { validateRulesDefinition };
