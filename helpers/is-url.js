import _ from 'lodash';

export const isUrl = url => _.isString(url) && url.match(/^http[s]{0,1}:\/\//);
