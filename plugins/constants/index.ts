import * as data from './data';
import * as enums from './enums';
import * as routes from './routes';

export default (ctx: any, inject: any) => {
  inject('constants', {
    ...data,
    ...enums,
    ...routes,
  });
};
