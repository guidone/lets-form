import _ from 'lodash';

export const passRest = props => _.omit(props, 'lfFramework', 'lfComponent', 'lfLocale', 'lfOnEnter', 'transformer');
