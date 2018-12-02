<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-icon x-large v-if="!authenticating">assignment_ind</v-icon>
        <v-form
          v-if="!authenticating"
          v-model="valid"
          @submit.prevent="login">
          <v-text-field
            v-model="user.username"
            :rules="[notEmptyRules]"
            label="User"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            :rules="[notEmptyRules]"
            type="password"
            label="Password"
            required
          ></v-text-field>
          <div class="text-xs-center">
            <v-btn type="submit" :disabled="!valid">Login</v-btn>
          </div>
        </v-form>
        <h5 class="headline" v-if="authenticating">
          Authenticating...
        </h5>
        <v-progress-circular
          v-if="authenticating"
          indeterminate
          color="primary"
        ></v-progress-circular>
        <v-dialog
          v-model="dialog"
          max-width="290"
        >
          <v-card>
            <v-card-title class="headline">
              <v-icon large>error</v-icon>
              Authentication Error
            </v-card-title>

            <v-card-text>{{authErr}}</v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                flat="flat"
                @click="dialog = false"
              >
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  name: 'login',
  // eslint-disable-next-line
  data: vm => ({
    valid: false,
    dialog: false,
    authErr: '',
    user: {
      username: '',
      password: '',
    },
    notEmptyRules: value => !!value || 'Cannot be empty',
  }),
  computed: {
    ...mapState('auth', { authenticating: 'isAuthenticatePending' }),
  },
  methods: {
    ...mapActions('auth', ['authenticate']),
    login() {
      if (this.valid) {
        // Authenticate with the local email/password strategy
        this.authenticate({
          strategy: 'local',
          ...this.user,
        }).then(() => {
          // Logged in
          this.$router.push('/boards');
        }).catch((e) => {
          this.authErr = e.message;
          this.dialog = true;
        });
      }
    },
  },
};
</script>
