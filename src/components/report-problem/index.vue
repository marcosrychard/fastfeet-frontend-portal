<template>
  <main>
    <headerDeliveryDetail :path="header.path" :label="header.label" />
    <v-card class="mx-auto col-11 col-sm-6 pb-0 report-problem" outlined>
      <v-card-actions>
        <v-row>
          <v-col cols="12">
            <v-textarea name="input-7-1" label="Inclua aqui o problema que ocorreu na entrega." />
          </v-col>
          <v-col cols="12">
            <v-btn color="purple darken-1" block dark large>Enviar</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </main>
</template>

<script>
import headerDeliveryDetail from '@/shared/components/header-delivery-detail';

export default {
  name: 'report-problem',
  components: { headerDeliveryDetail },
  data: () => ({
    header: {
      path: '/delivery-detail',
      label: 'Informar problema',
    },
  }),
};
</script>

<style lang="scss" scoped>
.report-problem {
  transform: translateY(-14%);
}
</style>
