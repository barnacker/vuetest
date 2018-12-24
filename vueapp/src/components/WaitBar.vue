<template>
  <v-container grid-list-md fluid fill-height>
    <v-layout align-center justify-center row fill-height text-xs-center>
      <v-flex xs12>
        <v-card flat>
          <v-card-text class="px-0">
            <span class="headline">{{ text }}</span>
          </v-card-text>
          <v-progress-linear indeterminate color="primary"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'wait-bar',
  props: {
    text: String,
  },
  data: () => ({
    //
  }),
};
</script>
