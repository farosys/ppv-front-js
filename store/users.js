export const state = () => ({
  users: [],
  user: {},
  userLog: {}
});

export const getters = {
  $all(state) {
    return state.users;
  },
  $single(state) {
    return state.user;
  },
  $loged(state) {
    return state.userLog;
  }
};

export const mutations = {
  SET_ALL(state, payload) {
    state.users = payload
  },
  SET_SINGLE(state, payload) {
    state.user = payload
  },
  SET_LOGED(state, payload) {
    state.userLog = payload
  },
};

export const actions = {
  async index(context) {
    await this.$axios.get('users').then(res => {
      context.commit('SET_ALL', res.data)
    })
  },
  async show(context, id) {
    await this.$axios.get(`users/${id}`).then(res => {
      context.commit('SET_SINGLE', res.data)
    })
  },
  login(context, payload) {
    context.commit('SET_LOGED', payload)
  }
}
