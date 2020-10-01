<template>
  <v-card class="mx-auto col-11 col-sm-9 pt-0 mb-0 pb-0" outlined>
    <v-card-title>
      <v-icon color="purple darken-2" class="mr-4" large>mdi-calendar</v-icon>
      <span class="custom-color">Situação da entrega</span>
    </v-card-title>
    <v-card-actions class="actions my-0 py-0">
      <v-row>
        <v-col cols="12">
          <span class="d-flex title">STATUS</span>
          <span class="sub-title">Pendente</span>
        </v-col>
        <v-col cols="6">
          <span class="d-flex title">DATA DE RETIRADA</span>
          <span class="sub-title">14 / 01 / 2020</span>
        </v-col>
        <v-col cols="6">
          <span class="d-flex title">DATA DE ENTREGA</span>
          <span class="sub-title">- - / - - / - -</span>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'delivery-status',
};
</script>

<style lang="scss" scoped>
.custom-color {
  color: #7b1fa2;
}
</style>
