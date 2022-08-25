import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { AlertData } from '~/services/main/dto/alert.data';

@Module({
  name: 'mainStoreModule',
  stateFactory: true,
  namespaced: true,
})
export default class MainStoreModule extends VuexModule {
  private alertData: AlertData = new AlertData();
  private isOpenSideMenu: boolean = false;
  private isShowLoading: boolean = false;

  @Mutation
  setAlertData(data: AlertData) {
    this.alertData = data;
  }

  get alertDataStore(): AlertData {
    return this.alertData;
  }

  @Mutation
  setIsOpenSideMenu(isOpen: boolean) {
    this.isOpenSideMenu = isOpen;
  }

  get isOpenSideMenuStore(): boolean {
    return this.isOpenSideMenu;
  }

  @Mutation
  setIsShowLoading(isShow: boolean) {
    this.isShowLoading = isShow;
  }

  get isShowLoadingStore(): boolean {
    return this.isShowLoading;
  }
}
