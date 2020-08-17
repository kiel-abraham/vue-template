import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import router from "@/router";

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
    userLogin({ commit }, { email, password, redirect }) {
      const route = redirect || "/";

      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user.user);
          router.push(route);
        })
        .catch(() => {
          return true;
        });
    },
    userLogout({ commit }) {
      firebase
        .auth()
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
