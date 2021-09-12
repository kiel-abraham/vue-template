<template>
  <v-card-text class="text-center">
    <v-btn outlined color="primary" @click="login">
      <v-img
        max-width="20"
        max-height="50"
        class="mr-3"
        src="https://www.gstatic.com/dialogflow-console/common/assets/img/new-google-favicon-128.png"
      ></v-img>
      Sign in with Google
    </v-btn>
    <v-alert v-if="errorMessage" type="error" class="mt-3">
      {{ errorMessage }}
    </v-alert>
  </v-card-text>
</template>

<script>
import { auth, googleProvider } from "@/firebase";

export default {
  data() {
    return {
      errorMessage: "",
    };
  },
  mounted() {
    auth.getRedirectResult().catch((error) => {
      this.errorMessage = error;
      console.log(error);
    });
  },
  methods: {
    login() {
      const provider = new googleProvider();
      auth.signInWithRedirect(provider);
    },
  },
};
</script>

<style></style>
