import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import { auth } from "@/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    userLogout({ commit }) {
      auth
        .signOut()
        .then(() => {
          commit("setUser", null);
          router.push("/login");
        })
        .catch(() => {
          commit("setUser", null);
          router.push("/login");
        });
    }
  },
  getters: {
    user(state) {
      return state.user !== null && state.user !== undefined;
    }
  },
  modules: {}
});
