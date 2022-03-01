export const state = () => ({
  books: [],
  book: {}
});

export const getters = {
  $all(state) {
    return state.books
  },
  $single(state) {
    return state.book
  },
};

export const mutations = {
  SET_ALL(state, payload) {
    state.books = payload
  },
  SET_SINGLE(state, payload) {
    state.book = payload
  },
};

export const actions = {
  async index(context) {
    await this.$axios.get('articles').then(res => {
      context.commit('SET_ALL', res.data)
    })
  },
  async show(context, id) {
    await this.$axios.get(`articles/${id}`).then(res => {
      context.commit('SET_SINGLE', res.data)
    })
  },
}
