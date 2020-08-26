<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" link :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            :src="require('../assets/smartspeak-logo.png')"
            transition="scale-transition"
            max-height="45"
            max-width="250"
          />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: null,
      items: [
        { icon: "mdi-home", text: "Dashboard", link: "/" },
        { icon: "mdi-information", text: "About", link: "/about" },
        { icon: "mdi-file-chart", text: "Reports" },
        { icon: "mdi-cog", text: "Settings" },
        { icon: "mdi-message", text: "Send feedback" },
        { icon: "mdi-help-circle", text: "Help" }
      ]
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("userLogout");
    }
  }
};
</script>
