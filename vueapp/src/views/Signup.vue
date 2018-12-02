<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-form v-model="valid" @submit.prevent="signup">
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
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'signup',
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
  methods: {
    signup() {
      if (this.valid) {
        console.log('the form is valid');
      }
    },
  },
};
</script>
