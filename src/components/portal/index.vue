<template>
  <main>
    <toolbar />
    <transition name="fade" mode="out-in">
      <router-view class="mt-4 container" />
    </transition>
    <toolbottomNavigationbar />
  </main>
</template>

<script>
import toolbar from '@/shared/components/toolbar';
import toolbottomNavigationbar from '@/shared/components/bottom-navigation';

export default {
  components: { toolbar, toolbottomNavigationbar },
};
</script>
