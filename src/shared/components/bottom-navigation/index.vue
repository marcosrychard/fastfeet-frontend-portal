<template>
  <v-bottom-navigation fixed v-model="bottomNav" color="purple darken-2">
    <v-btn value="delivered" to="/portal">
      <span>Entregas</span>
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-btn value="profile" to="/profile">
      <span>Meu Perfil</span>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'bottom-navigation',
  data: () => ({
    bottomNav: 'delivered',
  }),
};
</script>

<style>
</style>
