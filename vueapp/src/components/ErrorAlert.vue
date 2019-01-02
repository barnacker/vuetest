<template>
  <v-layout fill-height column class="grey darken-3">
    <v-flex xs12 pa-0>
      <v-alert :value="true" type="error">{{ message }}</v-alert>
    </v-flex>
    <v-flex xs12>
      <v-img
        :src="require('../assets/error.gif')"
        class="my-3"
        contain
        height="100"
      ></v-img>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'error-alert',
  props: {
    message: String,
  },
  data: () => ({
    //
  }),
};
</script>
