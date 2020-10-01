<template>
  <main id="root">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center">
            <img src="@/assets/img/svg/fastfeet-logo.svg" alt="logo" />
          </v-col>
          <v-col cols="12">
            <v-text-field placeholder="Informe seu ID de cadastro" solo></v-text-field>
            <v-btn block color="success" x-large dark to="/portal">Entrar no sistema</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </main>
</template>

<script>
export default {
  name: 'signin',
};
</script>

<style lang="scss" scoped>
#root {
  background-color: #7d40e7;
  overflow: hidden !important;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
