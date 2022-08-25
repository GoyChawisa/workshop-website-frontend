import Vue from "vue"
import Notifications from "vue-notification"

Vue.use(Notifications)

export default (ctx: any, inject: any) => {
  inject('toast', Vue.notify);
}
