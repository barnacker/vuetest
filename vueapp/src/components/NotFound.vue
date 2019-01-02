<template>
  <v-layout
    fill-height
    column
    class="grey darken-3"
    text-xs-center
    style="color: #FFFFFF;"
  >
    <v-flex xs12>
      <v-layout align-center justify-center column fill-height>
        <h1 class="display-4">404</h1>
        <h1 class="display-2">Your adventure ends here.</h1>
      </v-layout>
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
  name: 'not-found',
  props: {
    message: String,
  },
  data: () => ({
    //
  }),
};
</script>
