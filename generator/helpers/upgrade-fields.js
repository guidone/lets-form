import { mapFields } from '../../helpers';
import { lfWarn } from '../../helpers/lf-log';

const upgradeFields = (fields, version) => {
  if (version === 1) {
    const upgradedFields = mapFields(
      fields,
      field => {
        if (field.component === 'two-columns') {
          lfWarn(`Component 'two-columns' is deprecated, use 'columns' instead`);
          const [_match, oneSize, twoSize] = (field.layout || '').match(/layout-([0-9])-([0-9])/) ?? [];

          return {
            component: 'columns',
            name: field.name,
            columns: [
              {
                name: 'one',
                alignment: field.leftAlignment,
                size: oneSize != null ? parseInt(oneSize, 10) : 1
              },
              {
                name: 'two',
                alignment: field.rightAlignment,
                size: twoSize != null ? parseInt(twoSize, 10) : 1
              }
            ],
            fields: {
              one: field.leftFields,
              two: field.rightFields
            }
          };
        } else if (field.component === 'three-columns') {
          lfWarn(`Component 'three-columns' is deprecated, use 'columns' instead`);
          const [_match, oneSize, twoSize, threeSize] = (field.layout || '').match(/layout-([0-9])-([0-9])-([0-9])/) ?? [];

          return {
            component: 'columns',
            name: field.name,
            columns: [
              {
                name: 'one',
                alignment: field.leftAlignment,
                size: oneSize != null ? parseInt(oneSize, 10) : 1
              },
              {
                name: 'two',
                alignment: field.centerAligment,
                size: twoSize != null ? parseInt(twoSize, 10) : 1
              },
              {
                name: 'three',
                alignment: field.rightAlignment,
                size: threeSize != null ? parseInt(threeSize, 10) : 1
              }
            ],
            fields: {
              one: field.leftFields,
              two: field.centerFields,
              three: field.rightFields
            }
          };
        }

        return field;
      }
    );

    return upgradedFields;
  }

  return fields;
};

export { upgradeFields };
