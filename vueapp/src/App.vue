<template>
  <v-app>
    <v-toolbar dark color="primary" app>
      <v-toolbar-title class="headline text-uppercase">
        <v-btn
          flat icon
          v-if="backArrow"
          class="hidden-xs-only"
          @click="back()"
        >
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <span>VueApp</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!connected">
        <v-btn flat :to="{ name: 'login' }">Login</v-btn>
        <v-btn flat :to="{ name: 'signup' }">Sign up</v-btn>
      </v-toolbar-items>
      <v-menu offset-y v-if="connected">
        <v-btn
          flat
          slot="activator"
        >
          <v-icon>face</v-icon>&nbsp;{{connected.displayname}}<v-icon>arrow_drop_down</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="disconnect">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer>
      <span>Tayol</span>
    </v-footer>
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    ...mapState('auth', {
      disconnecting: 'isLogoutPending',
      connected: 'user',
      backArrow() {
        return (Object.keys(this.$route.params).length !== 0);
      },
    }),
  },
  methods: {
    ...mapActions('auth', ['logout']),
    disconnect() {
      this.logout().then(() => {
        this.$router.push('/');
      }).catch(() => {
        this.$router.push('/');
      });
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
