<template>
  <v-dialog v-model="value" max-width="290">
    <v-card>
      <v-card-title class="headline">
        <v-icon large>error</v-icon>
        {{errTitle}}
      </v-card-title>

      <v-card-text>{{errText}}</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          flat="flat"
          @click="$emit('input', false)"
        >OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'error-pop',
  props: {
    value: Boolean,
    errTitle: String,
    errText: String,
  },
  data: () => ({
    //
  }),
};
</script>
