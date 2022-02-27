// import axios from "@nuxtjs/axios";
export const state = () => ({
  categories: [],
  categorie: {}
});

export const getters = {
  $all(state) {
    return state.categories
  },
  $single(state) {
    return state.categorie
  }
}

export const mutations = {
  SET_ALL(state, payload) {
    state.categories = payload
  },
  SET_SINGLE(state, payload) {
    state.categorie = payload
  }
}

export const actions = {
  async index(context) {
    await this.$axios.get('categories').then(res => {
      context.commit('SET_ALL',res.data)
    })
  },
  async show(context, id) {
    await this.$axios.get(`categories/${id}`).then(res => {
      context.commit('SET_SINGLE', res.data)
    })
  }
}
