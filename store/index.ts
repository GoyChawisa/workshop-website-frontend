import Vue from 'vue';
import Vuex from 'vuex';
import mainStoreModule from './main.store.module';

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: {
      // add state
    },
    modules: {
      mainStoreModule,
    },
  });
};

export default store;
