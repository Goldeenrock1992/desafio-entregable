import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    usuarios: []
  },
  mutations: {
    setUsuarios(state, usuarios) {
      state.usuarios = usuarios;
    }
  },
  actions: {
    fetchUsuarios({ commit }) {
      axios.get('https://649e09649bac4a8e669e8b5e.mockapi.io/usuarios')
        .then(response => {
          commit('setUsuarios', response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
});

export default store;
