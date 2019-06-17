import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import * as getters from './getters';
import modules from './modules';
Vue.use(Vuex);
const store: StoreOptions<RootState> = {
  state: {
    version: '2.0.0',
  },
  getters,
  modules,
};

export default new Vuex.Store<RootState>(store);
