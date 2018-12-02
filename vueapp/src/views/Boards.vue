<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Wecome!</h3>
            <div>You have sucessfully connected to Vuetest</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Got it thanks!</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'boards',
  components: {
  },
  data() {
    return {
      //
    };
  },
  computed: {
  },
  methods: {
  },
};
</script>
