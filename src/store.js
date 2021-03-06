import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import allbooks from './store/allbooks';

export default new Vuex.Store({
  modules: {
    allbooks,
    male: {
      state: {
        hot: '',
        highOpinion: '',
        city: '',
        xuanhuan: '',
        kehuan: ''
      },
      mutations: {
        changeHot(state, n) {
          state.hot = n;
        },
        changehighOpinion(state, n) {
          state.highOpinion = n;
        },
        changeCity(state, n) {
          state.city = n;
        },
        changexuanhuan(state, n) {
          state.xuanhuan = n;
        },
        changekehuan(state, n) {
          state.kehuan = n;
        }
      }
    },
    female: {
      state: {
        Hotfe: "",
        jingshangfe: '',
        xuanyi: ''
      },
      mutations: {
        changeHotfe(state, n) {
          state.Hotfe = n;
        },
        changejingshangfe(state, n) {
          state.jingshangfe = n;
        },
        changexuanyi(state, n) {
          state.xuanyi = n;
        }
      }
    },
    press: {
      state: {
        chenggong: "",
        zhuanji: '',
        junshi: ''
      },
      mutations: {
        changechenggong(state, n) {
          state.chenggong = n;
        },
        changezhuanji(state, n) {
          state.zhuanji = n;
        },
        changejunshi(state, n) {
          state.junshi = n;
        }
      }
    }
  },
  state: {
    isActivate: false,
    moreBooks: '',
    // hotsnovel: '',
    // cross: '',
    // over: '',
    // young: '',
    // movies: ''
  },
  mutations: {
    changeisActivate(state) {
      state.isActivate = !state.isActivate;
    },
    changemoreBooks(state, n) {
      state.moreBooks = n;
    }
  }
});
