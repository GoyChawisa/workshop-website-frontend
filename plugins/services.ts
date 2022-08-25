import { MainService } from '~/services/main/main.service';
import { SampleService } from '~/services/sample/sample.service';

export default (ctx: any, inject: any) => {
  const services = {
    main: new MainService(ctx.$api, ctx.store),
    sample: new SampleService(ctx.$api, ctx.store),
  }

  inject('services', services);
}
