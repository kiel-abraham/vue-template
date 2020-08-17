<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Dashboard</h1>
        </v-col>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined tile>
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
