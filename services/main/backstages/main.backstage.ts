import { BaseService } from '../../base/base.service';
import { getModule } from 'vuex-module-decorators';
import mainStoreModule from '../../../store/main.store.module';
import { AlertData } from '../dto/alert.data';

export class MainBackstage extends BaseService {
  private mainStore = getModule(mainStoreModule, this.store);
  /**
    * get alert data from store
    */
   getAlertData(): AlertData {
    return this.mainStore.alertDataStore;
  }
  /**
   * set alert data to store
   */
  setAlertData(data: AlertData): void {
    this.mainStore.setAlertData(data);
  }

  /**
   * get flag open side menu from store
   */
  getIsOpenSideMenu(): boolean {
    return this.mainStore.isOpenSideMenuStore;
  }
  /**
   * set flag open side menu from store
   */
  setIsOpenSideMenu(isOpen: boolean): void {
    // save user result to store
    this.mainStore.setIsOpenSideMenu(isOpen);
  }
  /**
   * get flag show loading from store
   */
   getIsShowLoading(): boolean {
    return this.mainStore.isShowLoadingStore;
  }
  /**
   * set flag show loading from store
   */
  setIsShowLoading(isShow: boolean): void {
    this.mainStore.setIsShowLoading(isShow);
  }
}
