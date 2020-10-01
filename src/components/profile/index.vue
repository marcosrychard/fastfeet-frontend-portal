<template>
  <main id="root">
    <section class="container">
      <v-row >
        <v-col cols="12" class="text-center">
          <v-avatar color="purple lighten-3" size="130">
            <span class="white--text headline">CJ</span>
          </v-avatar>
        </v-col>
        <v-col cols="12" sm="6" class="mx-auto">
          <v-row>
            <v-col cols="12" class="mx-auto mt-5">
              <span class="d-flex">Nome completo</span>
              <h2 class="text-secondary">Gaspar Antunes</h2>
            </v-col>
            <v-col cols="12" class="mx-auto">
              <span class="d-flex">Email</span>
              <h2 class="text-secondary">marcos_rychard@hotmail.com</h2>
            </v-col>
            <v-col cols="12" class="mx-auto mb-5">
              <span class="d-flex">Data de cadastro</span>
              <h2 class="mb-5">10/01/2020</h2>
            </v-col>
            <v-col cols="12" sm="6" class="mx-auto">
              <v-btn color="red lighten-1" block large to="/" dark>Logout</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section class="navigationbar">
      <toolbottomNavigationbar />
    </section>
  </main>
</template>

<script>
import toolbottomNavigationbar from '@/shared/components/bottom-navigation';

export default {
  name: 'profile',
  components: { toolbottomNavigationbar },
};
</script>

<style lang="scss" scoped>
#root {
  background-color: #fff;
  height: 100vh;

  .headline {
    font-size: 60px !important;
  }

  .text-secondary {
    word-wrap: break-word;
  }
}
.navigationbar {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
