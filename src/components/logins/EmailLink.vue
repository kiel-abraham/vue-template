<template>
  <v-card-text v-if="sent">
    <p>Please check your email for login link.</p>
  </v-card-text>
  <v-card-text v-else>
    <p>Enter your email and receive a login link.</p>
    <v-form @submit.prevent="send">
      <v-text-field
        label="Email"
        name="email"
        prepend-icon="mdi-email"
        type="email"
        required
        v-model="email"
      ></v-text-field>
      <v-btn type="submit" color="primary">Send</v-btn>
    </v-form>
    <v-alert v-if="errorMessage" type="error" class="mt-3">
      {{ errorMessage }}
    </v-alert>
  </v-card-text>
</template>

<script>
import { auth } from "@/firebase";

export default {
  data() {
    return {
      email: "",
      errorMessage: false,
      sent: false,
    };
  },
  mounted() {
    // Confirm the link is a sign-in with email link.
    if (auth.isSignInWithEmailLink(window.location.href)) {
      this.$emit("loadingChange", true);
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let userEmail = window.localStorage.getItem("emailForSignIn");
      if (!userEmail) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        userEmail = window.prompt("Please provide your email for confirmation");
      }
      // The client SDK will parse the code from the link for you.
      auth
        .signInWithEmailLink(userEmail, window.location.href)
        .then(() => {
          // Clear email from storage.
          window.localStorage.removeItem("emailForSignIn");
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser

          this.$router.push("/access");
        })
        .catch((error) => {
          this.errorMessage = error.message;
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
  },
  methods: {
    send() {
      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: window.location.href,
        // This must be true.
        handleCodeInApp: true,
      };
      auth
        .sendSignInLinkToEmail(this.email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem("emailForSignIn", this.email);
          this.sent = true;
        })
        .catch((error) => {
          this.errorMessage = error.message;
        });
    },
  },
};
</script>

<style></style>
