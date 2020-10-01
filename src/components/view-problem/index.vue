<template>
  <main>
    <headerDeliveryDetail :path="header.path" :label="header.label" />
    <section class="view-problema">
      <v-card class="mx-auto col-11 col-sm-6 pb-0 my-5" outlined>
        <v-card-actions class="pt-1 mt-1 mb-2 p-2">
          <v-row>
            <v-col cols="12" sm="9" class="py-0 my-0">
              <span>Destinatário ausente</span>
            </v-col>
            <v-col cols="12" sm="3" class="py-0 my-0">
              <span>14/01/2020</span>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto col-11 col-sm-6 pb-0 my-5" outlined>
        <v-card-actions class="pt-1 mt-1 mb-2 p-2">
          <v-row>
            <v-col cols="12" sm="9" class="py-0 my-0">
              <span>Destinatário ausente</span>
            </v-col>
            <v-col cols="12" sm="3" class="py-0 my-0">
              <span>14/01/2020</span>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto col-11 col-sm-6 pb-0 my-5" outlined>
        <v-card-actions class="pt-1 mt-1 mb-2 p-2">
          <v-row>
            <v-col cols="12" sm="9" class="py-0 my-0">
              <span>Destinatário ausente</span>
            </v-col>
            <v-col cols="12" sm="3" class="py-0 my-0">
              <span>14/01/2020</span>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </section>
  </main>
</template>

<script>
import headerDeliveryDetail from '@/shared/components/header-delivery-detail';

export default {
  name: 'view-problema',
  components: { headerDeliveryDetail },
  data: () => ({
    header: {
      path: '/delivery-detail',
      label: 'Visualizar problemas',
    },
  }),
};
</script>

<style lang="scss" scoped>
.view-problema {
  transform: translateY(-45px);
}
</style>
