
import * as _ from 'lodash';

export default (ctx: any, inject: any) => {
  inject('functions', {
  });
  inject('_', {
    ..._,
  });
};
