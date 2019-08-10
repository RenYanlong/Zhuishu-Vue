let allbooks = {
  namespaced: true,
  state: {
    hotsnovel: '',
    cross: '',
    over: '',
    young: '',
    movies: ''
  },
  mutations: {
    changehotsnovel(state, n) {
      state.hotsnovel = n;
    },
    changecross(state, n) {
      state.cross = n;
    },
    changeover(state, n) {
      state.over = n;
    },
    changeyoung(state, n) {
      state.young = n;
    },
    changemovies(state, n) {
      state.movies = n;
    }
  },
  actions: {
    changehotsnovel(context,n){
      context.commit('changehotsnovel',n)
    },
    changecross(context, n) {
      context.commit('changecross',n);
    },
    changeover(context, n) {
      context.commit('changeover',n);
    },
    changeyoung(context, n) {
      context.commit('changeyoung',n);
    },
    changemovies(context, n) {
      context.commit('changemovies',n);
    },

  }
}

export default allbooks;