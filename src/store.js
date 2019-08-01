import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isActivate: false
    
  },
  mutations: {
    changeisActivate(state){
      state.isActivate = !state.isActivate;
    }
  },
  actions: {}
});
