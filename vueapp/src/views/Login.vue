<template>
  <v-container fill-height>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center>
        <v-flex xs2 class="text-xs-center">
          <v-icon x-large>assignment_ind</v-icon>
          <v-form
            v-model="valid"
            @submit.prevent="login"
            @keydown.enter.prevent
          >
            <v-text-field
              v-model="user.username"
              :rules="[notEmptyRules]"
              label="User"
              required
              :disabled="authenticating"
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              :rules="[notEmptyRules]"
              type="password"
              label="Password"
              required
              :disabled="authenticating"
            ></v-text-field>
            <v-btn
              type="submit"
              :loading="authenticating"
              :disabled="!valid || authenticating"
            >Login</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">
          <v-icon large>error</v-icon>Authentication Error
        </v-card-title>

        <v-card-text>{{authErr}}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { log } from 'util';
import { notEmptyRules } from '../rules';

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
    notEmptyRules,
  }),
  computed: {
    ...mapState('auth', { authenticating: 'isAuthenticatePending' }),
  },
  methods: {
    ...mapActions('auth', ['authenticate']),
    login() {
      log(notEmptyRules);
      if (this.valid) {
        // Authenticate with the local email/password strategy
        this.authenticate({
          strategy: 'local',
          ...this.user,
        })
          .then(() => {
            // Logged in
            this.$router.push('/boards');
          })
          .catch((e) => {
            this.authErr = e.message;
            this.dialog = true;
          });
      }
    },
  },
};
</script>
