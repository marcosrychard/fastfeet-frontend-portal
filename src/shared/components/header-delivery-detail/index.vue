<template>
  <v-container fluid class="py-0">
    <v-row class="header" color="purple darken-1">
      <v-col cols="1" >
        <v-btn icon :to="path" dark>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="10" class="text-center mr-sm-12">
        <h2>{{label}}</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'header-delivery-detail',
  props: {
    path: {
      type: String,
      required: true,
      default: '/portal',
    },
    label: {
      type: String,
      required: true,
      default: 'Detalhes da encomenda',
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 140px;
  background-color: #8e24aa;
  color: #fff;
}
</style>
