<template>
  <v-container fill-height>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center>
        <v-flex xs2 class="text-xs-center">
          <v-icon x-large>face</v-icon>
          <v-form v-model="valid" @submit.prevent="signup">
            <v-text-field
              v-model="user.username"
              :rules="[notEmptyRules]"
              label="User"
              required
              :disabled="loading"
            ></v-text-field>
            <v-text-field
              v-model="user.displayname"
              :rules="[notEmptyRules]"
              label="Display Name"
              required
              :disabled="loading"
            ></v-text-field>
            <v-text-field
              v-model="user.email"
              :rules="[notEmptyRules,validEmail]"
              label="Email"
              required
              :disabled="loading"
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              :rules="[notEmptyRules]"
              type="password"
              label="Password"
              required
              :disabled="loading"
            ></v-text-field>
            <v-text-field
              v-model="user.confirm_password"
              :rules="[notEmptyRules, confirmPasswordRules]"
              type="password"
              label="Confirm Password"
              required
              :disabled="loading"
            ></v-text-field>
            <div class="text-xs-center">
              <v-btn
                type="submit"
                :loading="loading"
                :disabled="!valid || loading"
              >Sign up</v-btn>
            </div>
          </v-form>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { notEmptyRules, validEmail } from '../rules';

export default {
  name: 'signup',
  // eslint-disable-next-line
  data: vm => ({
    valid: false,
    user: {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      displayname: '',
    },
    notEmptyRules,
    validEmail,
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
        user.save().then(() => {
          this.$router.push('/login');
        }); // --> Creates the todo on the server.
      }
    },
  },
};
</script>
