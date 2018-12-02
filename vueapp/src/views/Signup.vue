<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-icon x-large v-if="!loading">face</v-icon>
        <v-form
          v-if="!loading"
          v-model="valid"
          @submit.prevent="signup">
          <v-text-field
            v-model="user.username"
            :rules="[notEmptyRules]"
            label="User"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.displayname"
            :rules="[notEmptyRules]"
            label="Display Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            :rules="[notEmptyRules]"
            type="password"
            label="Password"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.confirm_password"
            :rules="[notEmptyRules, confirmPasswordRules]"
            type="password"
            label ="Confirm Password"
            required
          ></v-text-field>
          <v-btn type="submit" :disabled="!valid">Sign up</v-btn>
        </v-form>
        <h5 class="headline" v-if="loading">
          Registering...
        </h5>
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="primary"
        ></v-progress-circular>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'signup',
  // eslint-disable-next-line
  data: vm => ({
    valid: false,
    user: {
      username: '',
      password: '',
      confirm_password: '',
      displayname: '',
    },
    notEmptyRules: value => !!value || 'Cannot be empty',
    confirmPasswordRules: value => value === vm.user.password || 'Password must match',
  }),
  computed: {
    ...mapState('users', { loading: 'isCreatePending' }),
  },
  methods: {
    signup() {
      if (this.valid) {
        const { User } = this.$FeathersVuex;
        const user = new User(this.user);
        user.save()
          .then(() => {
            this.$router.push('/login');
          }); // --> Creates the todo on the server.
      }
    },
  },
};
</script>
