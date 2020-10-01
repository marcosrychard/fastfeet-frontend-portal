<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="50%">
      <v-card>
        <v-card-title class="headline">{{ title }}</v-card-title>
        <v-card-text>
          <p>{{ message }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="close">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'GenercModal',
  props: {
    title: {
      type: String,
      default: 'Aviso',
    },
    message: {
      type: String,
      default: 'Modal generecio',
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
