export class BaseService {
  protected $api: any;
  protected store: any;

  constructor ($api: any, store: any) {
    this.$api = $api;
    this.store = store;
  }
}
