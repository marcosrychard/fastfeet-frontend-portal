<template>
  <main id="root" class="mb-12">
    <headerDeliveryDetail :path="header.path" :label="header.label" />
    <v-row>
      <v-col cols="12" class="py-0 delivery-info">
        <deliveryInfoCard />
      </v-col>
      <v-col cols="12" class="py-0 delivery-status">
        <deliveryStatus />
      </v-col>
      <v-col cols="10" sm="12" class="mx-auto px-sm-7 pt-0 grup-btn">
        <grupBtn />
      </v-col>
    </v-row>
    <toolbottomNavigationbar />
  </main>
</template>

<script>
import toolbottomNavigationbar from '@/shared/components/bottom-navigation';
import headerDeliveryDetail from '@/shared/components/header-delivery-detail';
import deliveryInfoCard from './delivery-info-card';
import deliveryStatus from './delivery-status-card';
import grupBtn from './grup-btn';

export default {
  name: 'delivery-detail',
  components: {
    toolbottomNavigationbar,
    headerDeliveryDetail,
    deliveryInfoCard,
    deliveryStatus,
    grupBtn,
  },
  data: () => ({
    toggle_exclusive: '',
    header: {
      path: '/portal',
      label: 'Detalhes da encomenda',
    },
  }),
};
</script>

<style lang="scss" scoped>
#root {
  .title {
    color: #999;
    font-weight: bold;
    font-size: 14px;
  }

  .delivery-info {
    transform: translateY(-20%);
  }

  .delivery-status {
    transform: translateY(-22%);
  }

  .grup-btn {
    transform: translateY(-10%);
  }

  .sub-title {
    color: #666;
  }

  .custom-color {
    color: #7b1fa2;
  }

  .actions {
    display: flex;
  }
}
</style>
