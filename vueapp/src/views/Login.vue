<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-icon x-large>assignment_ind</v-icon>
        <v-form v-model="valid" @submit.prevent="login" @keydown.enter.prevent>
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
          <div class="text-xs-center">
            <v-btn
              type="submit"
              :loading="authenticating"
              :disabled="!valid || authenticating"
            >Login</v-btn>
          </div>
        </v-form>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">
              <v-icon large>error</v-icon>Authentication Error
            </v-card-title>

            <v-card-text>{{authErr}}</v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                flat="flat"
                @click="dialog = false"
              >OK</v-btn>
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
