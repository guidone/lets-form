import { FunctionComponent } from 'react';

import {
  LfFieldReactAntdProps,
  LfColumnsReactAntdProps,
  LfColumnReactAntdProps,
  LfTabsReactAntdProps,
  LfTabReactAntdProps,
  LfStepsReactAntdProps,
  LfStepReactAntdProps,
  LfGroupReactAntdProps,
  LfArrayReactAntdProps,
  LetsFormReactAntdProps,
  LetsFormSchemaReactAntd
} from '../definitions/react-antd';

declare const LetsForm: FunctionComponent<LetsFormReactAntdProps>;
export default LetsForm;

export const LfField: FunctionComponent<LfFieldReactAntdProps>;
export const LfColumns: FunctionComponent<LfColumnsReactAntdProps>;
export const LfColumn: FunctionComponent<LfColumnReactAntdProps>;
export const LfTabs: FunctionComponent<LfTabsReactAntdProps>;
export const LfTab: FunctionComponent<LfTabReactAntdProps>;
export const LfSteps: FunctionComponent<LfStepsReactAntdProps>;
export const LfStep: FunctionComponent<LfStepReactAntdProps>;
export const LfGroup: FunctionComponent<LfGroupReactAntdProps>;
export const LfArray: FunctionComponent<LfArrayReactAntdProps>;
export { LetsFormSchemaReactAntd };
