<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-if="activities.length > 0"
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
      right
      width="300"
    >
      <v-list two-line subheader>
        <v-subheader>Activities</v-subheader>

        <v-list-tile v-for="activity in activities" :key="activity._id" avatar>
          <v-list-tile-avatar>
            <v-gravatar email="habib.tremblay@gmail.com"/>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ activity.user.displayname }} {{ activity.text }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ activity.updatedAt | moment("from") }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-right="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon v-if="backArrow" @click="back()">
          <v-icon>arrow_back</v-icon>
        </v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Trello Clone</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn
          v-if="loadingActivities || activities.length > 0"
          icon
          @click.stop="drawer = !drawer"
          slot="activator"
        >
          <v-progress-circular
            v-if="loadingActivities"
            indeterminate
            size="24"
            color="white"
          ></v-progress-circular>
          <v-icon v-else>notifications</v-icon>
        </v-btn>
        <span>Activities</span>
      </v-tooltip>
      <v-toolbar-items v-if="!connected">
        <v-btn flat :to="{ name: 'login' }">Login</v-btn>
        <v-btn flat :to="{ name: 'signup' }">Sign up</v-btn>
      </v-toolbar-items>
      <v-menu offset-y v-else>
        <v-btn icon large slot="activator">
          <v-avatar :size="32" v-if="connected">
            <v-gravatar :email="connected.email"/>
          </v-avatar>
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
  </v-app>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import { log } from 'util';

export default {
  name: 'App',
  data: () => ({
    drawer: false,
  }),
  computed: {
    ...mapState('auth', {
      disconnecting: 'isLogoutPending',
      connected: 'user',
    }),
    ...mapState('activities', { loadingActivities: 'isFindPending' }),
    ...mapGetters('activities', { findActivitiesInStore: 'find' }),
    activities() {
      log('Finding activities...');
      let activities;
      activities = this.findActivitiesInStore({
        query: {
          $sort: {
            updatedAt: -1,
          },
        },
      }).data;
      log(activities.length > 0);
      if (!this.boardId) {
        // activities = false;
      }

      return activities;
    },
    backArrow() {
      return Object.keys(this.$route.params).length !== 0;
    },
  },
  methods: {
    ...mapActions('auth', ['logout']),
    disconnect() {
      this.logout()
        .then(() => {
          this.$router.push('/');
        })
        .catch(() => {
          this.$router.push('/');
        });
    },
    back() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.replace('/boards');
      }
    },
  },

};
</script>
