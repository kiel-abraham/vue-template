<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-alert v-if="loading" type="info" class="mt-3">
            Loading...
          </v-alert>
          <template v-else>
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Welcome back</v-toolbar-title>
            </v-toolbar>
            <GoogleLogin
              v-if="login === 'google'"
              @loadingChange="loading = $event"
            />
            <EmailLinkLogin v-else @loadingChange="loading = $event" />
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GoogleLogin from "@/components/logins/Google";
import EmailLinkLogin from "@/components/logins/EmailLink";

export default {
  name: "Login",
  components: { GoogleLogin, EmailLinkLogin },
  data() {
    return {
      login: "google",
      loading: false,
      secret: ""
    };
  },
  mounted() {
    document.addEventListener("keydown", this.keyboard);
  },
  methods: {
    keyboard(value) {
      this.secret += value.key;
    }
  },
  watch: {
    secret(value) {
      if (value.toLowerCase() === "smartspeak") {
        this.login = "google";
      }
    }
  }
};
</script>
