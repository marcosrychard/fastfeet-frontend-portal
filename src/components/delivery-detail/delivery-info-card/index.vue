<template>
  <v-card class="mx-auto col-11 col-sm-9 pb-0" outlined>
    <v-card-title>
      <v-icon color="purple darken-2" class="mr-4" large>mdi-truck-fast</v-icon>
      <span class="custom-color">Informações da entrega</span>
    </v-card-title>
    <v-card-actions class="actions my-0 py-0">
      <v-row>
        <v-col cols="12">
          <span class="d-flex title">DESTINATÁRIO</span>
          <span class="sub-title">Ludwig van Beethoven</span>
        </v-col>
        <v-col cols="12">
          <span class="d-flex title">ENDEREÇO DE ENTREGA</span>
          <span class="sub-title">Rua Beethoven, 1729, Diadema - SP, 09960-580</span>
        </v-col>
        <v-col cols="12">
          <span class="d-flex title">PRODUTO</span>
          <span class="sub-title">Yamaha SX7</span>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'delivery-info-card',
};
</script>

<style lang="scss" scoped>
  .custom-color {
    color: #7b1fa2;
  }
</style>
