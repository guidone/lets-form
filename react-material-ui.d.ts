import { FunctionComponent } from 'react';

import {
  LfFieldReactMaterialUiProps,
  LfColumnsReactMaterialUiProps,
  LfColumnReactMaterialUiProps,
  LfTabsReactMaterialUiProps,
  LfTabReactMaterialUiProps,
  LfStepsReactMaterialUiProps,
  LfStepReactMaterialUiProps,
  LfGroupReactMaterialUiProps,
  LfArrayReactMaterialUiProps,
  LetsFormReactMaterialUiProps,
  LetsFormSchemaReactMaterialUi
} from './definitions/react-material-ui';

declare const LetsForm: FunctionComponent<LetsFormReactMaterialUiProps>;
export default LetsForm;

export const LfField: FunctionComponent<LfFieldReactMaterialUiProps>;
export const LfColumns: FunctionComponent<LfColumnsReactMaterialUiProps>;
export const LfColumn: FunctionComponent<LfColumnReactMaterialUiProps>;
export const LfTabs: FunctionComponent<LfTabsReactMaterialUiProps>;
export const LfTab: FunctionComponent<LfTabReactMaterialUiProps>;
export const LfSteps: FunctionComponent<LfStepsReactMaterialUiProps>;
export const LfStep: FunctionComponent<LfStepReactMaterialUiProps>;
export const LfGroup: FunctionComponent<LfGroupReactMaterialUiProps>;
export const LfArray: FunctionComponent<LfArrayReactMaterialUiProps>;
export { LetsFormSchemaReactMaterialUi };
