import { FunctionComponent } from 'react';

import {
  LfFieldReactBootstrapProps,
  LfColumnsReactBootstrapProps,
  LfColumnReactBootstrapProps,
  LfTabsReactBootstrapProps,
  LfTabReactBootstrapProps,
  LfStepsReactBootstrapProps,
  LfStepReactBootstrapProps,
  LfGroupReactBootstrapProps,
  LfArrayReactBootstrapProps,
  LetsFormReactBootstrapProps,
  LetsFormSchemaReactBootstrap
} from './definitions/react-bootstrap';

declare const LetsForm: FunctionComponent<LetsFormReactBootstrapProps>;
export default LetsForm;

export const LfField: FunctionComponent<LfFieldReactBootstrapProps>;
export const LfColumns: FunctionComponent<LfColumnsReactBootstrapProps>;
export const LfColumn: FunctionComponent<LfColumnReactBootstrapProps>;
export const LfTabs: FunctionComponent<LfTabsReactBootstrapProps>;
export const LfTab: FunctionComponent<LfTabReactBootstrapProps>;
export const LfSteps: FunctionComponent<LfStepsReactBootstrapProps>;
export const LfStep: FunctionComponent<LfStepReactBootstrapProps>;
export const LfGroup: FunctionComponent<LfGroupReactBootstrapProps>;
export const LfArray: FunctionComponent<LfArrayReactBootstrapProps>;
export { LetsFormSchemaReactBootstrap };
