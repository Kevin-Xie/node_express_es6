import _ from 'lodash';
import baseConfig from './default';

let env = process.env.NODE_ENV || 'development';

import envConfig from `./${env}.js`;


let config = _.merge(baseConfig, envConfig);
