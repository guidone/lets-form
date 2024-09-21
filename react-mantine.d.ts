import { FunctionComponent } from 'react';

import {
  LfFieldReactMantineProps,
  LfColumnsReactMantineProps,
  LfColumnReactMantineProps,
  LfTabsReactMantineProps,
  LfTabReactMantineProps,
  LfStepsReactMantineProps,
  LfStepReactMantineProps,
  LfGroupReactMantineProps,
  LfArrayReactMantineProps,
  LetsFormReactMantineProps,
  LetsFormSchemaReactMantine
} from './definitions/react-mantine';

declare const LetsForm: FunctionComponent<LetsFormReactMantineProps>;
export default LetsForm;

export const LfField: FunctionComponent<LfFieldReactMantineProps>;
export const LfColumns: FunctionComponent<LfColumnsReactMantineProps>;
export const LfColumn: FunctionComponent<LfColumnReactMantineProps>;
export const LfTabs: FunctionComponent<LfTabsReactMantineProps>;
export const LfTab: FunctionComponent<LfTabReactMantineProps>;
export const LfSteps: FunctionComponent<LfStepsReactMantineProps>;
export const LfStep: FunctionComponent<LfStepReactMantineProps>;
export const LfGroup: FunctionComponent<LfGroupReactMantineProps>;
export const LfArray: FunctionComponent<LfArrayReactMantineProps>;
export { LetsFormSchemaReactMantine };
