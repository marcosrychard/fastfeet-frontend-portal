<template>
  <v-row class="mx-auto mt-0 pt-0">
    <v-col cols="12">
      <v-card class="mx-auto" outlined>
        <v-card-title>
          <v-icon color="purple darken-2" class="mr-4" large>mdi-truck-fast</v-icon>
          <span id="title">Encomenda 01</span>
        </v-card-title>

        <v-stepper alt-labels class="stepper py-0 my-0" vertical>
          <v-stepper-header class="header">
            <v-stepper-step step complete color="purple darken-2">Aguardando Retirada</v-stepper-step>
            <v-divider class="border-color" />
            <v-stepper-step step complete color="purple darken-2">Retirada</v-stepper-step>
            <v-divider />
            <v-stepper-step step color="purple darken-2">Entregue</v-stepper-step>
          </v-stepper-header>
        </v-stepper>

        <v-card-actions class="actions my-0 py-0 px-7">
          <v-row>
            <v-col md="4">
              <span class="d-flex">Data</span>
              <strong class="d-flex">14/01/2020</strong>
            </v-col>

            <v-col md="4">
              <span class="d-flex">Cidade</span>
              <strong class="d-flex">Diadema</strong>
            </v-col>

            <v-col class="d-flex align-center" md="4">
              <v-btn text small to="/delivery-detail" class="justify-content-end">
                <strong class="custom-color">Ver detalhes</strong>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'stepper',
};
</script>

<style lang="scss" scoped>
#title {
  color: #7b1fa2;
}

.custom-color {
  color: #7b1fa2;
}

.actions {
  background-color: #f8f9fd;
}

.stepper,
.header {
  border: none;
  box-shadow: none;
  font-size: 12px;
}
</style>
