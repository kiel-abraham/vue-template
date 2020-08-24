<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Dashboard</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-skeleton-loader
            type="card, paragraph"
            boilerplate="true"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="4">
          <v-skeleton-loader
            type="list-item-avatar-two-line, list-item-avatar-three-line, list-item-avatar-two-line, text@3"
            boilerplate="true"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="4">
          <v-skeleton-loader
            type="card-avatar, actions"
            boilerplate="true"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Dashboard"
    };
  }
};
</script>
