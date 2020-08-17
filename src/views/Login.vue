<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Welcome back</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="email"
                required
                v-model="email"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                required
                v-model="password"
              ></v-text-field>
              <v-btn
                type="submit"
                :loading="loading"
                :disabled="loading"
                color="primary"
              >
                Login
              </v-btn>
            </v-form>
            <v-alert v-if="errorMessage" type="error" class="mt-3">
              Invalid email or password
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: false,
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.errorMessage = false;

      const catchError = this.$store.dispatch("userLogin", {
        email: this.email,
        password: this.password,
        redirect: this.$route.query.redirect
      });
      catchError.then(() => {
        this.loading = false;
        this.errorMessage = true;
      });
    }
  }
};
</script>
