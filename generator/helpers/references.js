const refs = {};
const dependenciesRefs = {};
const checkReferentialIntegrity = (
  label,
  func,
  {
    dependencies = [],
    dump = false
  } = {}
) => {
  if (refs[label] === undefined) {
    console.log(`REFERENCE: Reference created for '${label}'`);
    refs[label] = func;
    if (dependencies !== undefined) {
      dependenciesRefs[label] = dependencies;
    }
  } else if (refs[label] !== func) {


    const failedPositions = dependencies.reduce(
      (acc, dependency, idx) => {
        if (dependency !== dependenciesRefs[label][idx]) {
          return [...acc, idx]
        }
        return acc;
      },
      []
    );
    console.log(`REFERENCE: Reference integrity violated for '${label}', failing ${failedPositions}`);
    if (dump) {
      console.log('REFERENCE: previous', refs[label], ' current ', func);
    }

    refs[label] = func;
    if (dependencies !== undefined) {
      dependenciesRefs[label] = dependencies;
    }
  } else if (refs[label] === func) {
    console.log(`REFERENCE: Reference integrity OK for '${label}'`);
    refs[label] = func;
    if (dependencies !== undefined) {
      dependenciesRefs[label] = dependencies;
    }
  }
};

export { checkReferentialIntegrity };