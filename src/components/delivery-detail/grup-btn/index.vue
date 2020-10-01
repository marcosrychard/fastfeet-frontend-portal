<template>
  <v-row class="d-flex mt-0 p-0" justify="center">
    <v-btn height="83px" class="col-12 col-sm-3 mb-2" to="/delivery-detail/report-problem">
      <span>
        <v-icon class="d-flex" color="red" large>mdi-close-circle-outline</v-icon>Informar Problema
      </span>
    </v-btn>
    <v-btn height="83px" class="col-12 col-sm-3 mb-2 mx-2" to="/delivery-detail/view-problem">
      <span>
        <v-icon class="d-flex" color="yellow darken-4" large>mdi-alert-circle-outline</v-icon>Visualizar Problemas
      </span>
    </v-btn>
    <v-btn height="83px" class="col-12 col-sm-3 mb-2" to="/delivery-detail/confirm-delivery">
      <span>
        <v-icon class="d-flex" color="purple darken-2" large>mdi-check-circle-outline</v-icon>Confirmar Entrega
      </span>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'grup-btn',
};
</script>

<style>
</style>
