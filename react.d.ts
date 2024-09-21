import { FunctionComponent } from 'react';

import {
  LfFieldReactProps,
  LfColumnsReactProps,
  LfColumnReactProps,
  LfTabsReactProps,
  LfTabReactProps,
  LfStepsReactProps,
  LfStepReactProps,
  LfGroupReactProps,
  LfArrayReactProps,
  LetsFormReactProps,
  LetsFormSchemaReact
} from './definitions/react';

declare const LetsForm: FunctionComponent<LetsFormReactProps>;
export default LetsForm;

export const LfField: FunctionComponent<LfFieldReactProps>;
export const LfColumns: FunctionComponent<LfColumnsReactProps>;
export const LfColumn: FunctionComponent<LfColumnReactProps>;
export const LfTabs: FunctionComponent<LfTabsReactProps>;
export const LfTab: FunctionComponent<LfTabReactProps>;
export const LfSteps: FunctionComponent<LfStepsReactProps>;
export const LfStep: FunctionComponent<LfStepReactProps>;
export const LfGroup: FunctionComponent<LfGroupReactProps>;
export const LfArray: FunctionComponent<LfArrayReactProps>;
export { LetsFormSchemaReact };
