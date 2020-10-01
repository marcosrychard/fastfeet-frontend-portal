<template>
  <section>
    <v-app-bar color="purple darken-2 " dark>
      <v-toolbar-title>
        <v-avatar color="purple lighten-1">
          <span class="white--text headline">CJ</span>
        </v-avatar>Gaspar Antunes
      </v-toolbar-title>

      <v-btn icon to="/" class="ml-auto">
        <v-icon @click="drawer = true">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container class="mb-0 pb-0">
      <v-row class="mx-auto align-center justify-space-between mt-3">
        <span class="title">Entregas</span>
        <section class="d-flex">
          <v-btn text small to="/portal/pending">Pendentes</v-btn>
          <v-btn text small to="/portal/delivered">Entregues</v-btn>
        </section>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'toobar',
  data: () => ({}),
};
</script>
