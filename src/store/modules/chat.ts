
import types from '../mutations-types';
import { Module, ActionTree, MutationTree, GetterTree  } from 'vuex';
import { GlobalState } from './types/types';
import { RootState } from '../types';
import { login } from '../../api/login';

export const state: GlobalState = {
  version: '1.0.0',
  token: '',
  user: '111',
};

export const  mutations: MutationTree<any> = {
  [types.SHOW_LOADING](state: any, payload: any): void {
    state.user = payload;
  },
};
// export const getters:GetterTree<GlobalState, RootState> = {
//   getUser(state: GlobalState): string {
//     return state.user;
//   },
// }

export const  actions: ActionTree<any, any> = {
  async login({commit}, payload) {
   // console.log(11);
    commit(types.SHOW_LOADING, payload);
    // let res: Ajax.AjaxResponse = await login(payload).then(res => res.data).catch((e:string)=>console.error(e));
    // if (res.code == 200) {
    //   commit('SHOW_LOADING', res.data);
    // } else {
    //   console.log(res.message)
    // }
  },
};
const namespaced: boolean = true;
export const chat: Module<GlobalState, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
 // getters
};
