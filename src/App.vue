<template>
  <v-app>
    <Header v-if="isAuthenticated" />

    <v-main>
      <router-view />
    </v-main>

    <v-footer v-if="isAuthenticated">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/TheHeader";

export default {
  name: "App",
  metaInfo() {
    return {
      title: "Example Vue app"
    };
  },
  components: {
    Header
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.user;
    }
  }
};
</script>
