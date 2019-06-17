
import types from '../mutations-types';
import { Module, ActionTree, MutationTree, GetterTree  } from 'vuex';
import { GlobalFood } from './types/types';
import { RootState } from '../types';
import { login } from '../../api/login';

export const state: GlobalFood = {
  food: '可乐',
};

export const  mutations: MutationTree<any> = {
  [types.ADD_FOOD](state: any, payload: any): void {
    state.food = payload;
  },
};
// export const getters:GetterTree<GlobalFood, RootState> = {
//   getFood(state: GlobalFood): string {
//     return state.food;
//   },
// }

export const  actions: ActionTree<any, any> = {

};
const namespaced: boolean = true;
export const shop: Module<GlobalFood, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
 // getters
};
