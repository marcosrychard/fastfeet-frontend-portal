<template>
  <v-app id="app">
    <transition mode="out-in">
      <router-view />
    </transition>
    <toolbottomNavigationbar />
  </v-app>
</template>

<script>
import toolbottomNavigationbar from '@/shared/components/bottom-navigation';

export default {
  name: 'delivery-detail',
  components: { toolbottomNavigationbar },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
#app {
  background-color: #ecf0f5;
  overflow-x: hidden;
}
</style>
