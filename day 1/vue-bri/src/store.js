import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "123456789",
    name: "windi"
  },
  mutations: {
    MUTATE_SET_STATE(state, name) {
      state.name = name
    }
  },
  actions: {
    action_set_state({ commit }, name) {
      commit('MUTATE_SET_STATE', name)
    }
  }
})
