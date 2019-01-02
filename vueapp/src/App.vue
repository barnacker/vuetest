<template>
  <v-app id="inspire">
    <v-navigation-drawer
      ref="nav"
      v-if="activities.length > 0"
      :clipped="$vuetify.breakpoint.smAndUp"
      v-model="drawerState"
      fixed
      app
      right
      width="300"
    >
      <v-list two-line subheader>
        <v-subheader>Activities</v-subheader>

        <v-list-tile v-for="activity in activities" :key="activity._id" avatar>
          <v-list-tile-action>
            <v-icon v-if="activity.action == 'created'" large>note_add</v-icon>
            <v-icon v-else-if="activity.action == 'modified'" large>create</v-icon>
            <v-icon v-else-if="activity.action == 'moved'" large>swap_horiz</v-icon>
            <v-icon v-else-if="activity.action == 'reordered'" large>swap_vert</v-icon>
            <v-icon v-else-if="activity.action == 'removed'" large>delete_sweep</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ activity.action | capitalize }}
              {{activity.entityType}}
              {{activity.entityName}}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{activity.user.displayname}}
              {{ activity.updatedAt | moment("from") }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-avatar>
            <v-gravatar
              :email="activity.user.email ? activity.user.email : ''"
            />
          </v-list-tile-avatar>
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
      <v-toolbar-side-icon v-if="backArrow" @click="back()">
        <v-icon>arrow_back</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span>Vuetify prototype</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn
          v-if="loadingActivities || activities.length > 0"
          icon
          @click.stop="drawerState = !drawerState"
          slot="activator"
        >
          <v-progress-circular
            v-if="loadingActivities"
            indeterminate
            size="24"
            color="white"
          ></v-progress-circular>
          <v-badge v-else left overlap color="red" v-model="blindState">
            <span slot="badge">{{blindActivities}}</span>
            <v-icon>notifications</v-icon>
          </v-badge>
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
import {
  mapState, mapActions, mapGetters, mapMutations,
} from 'vuex';

export default {
  name: 'App',
  data: () => ({
    localDrawer: false,
    firstScanActivities: false,
  }),
  watch: {
    activities(newVal, oldVal) {
      if (oldVal.length !== 0) {
        this.addBlindActivities(newVal.length - oldVal.length);
      }
    },
  },
  computed: {
    ...mapState(['blindActivities', 'drawer']),
    ...mapState('auth', {
      disconnecting: 'isLogoutPending',
      connected: 'user',
    }),
    ...mapState('activities', {
      loadingActivities: 'isFindPending',
      creatingActivity: 'isCreatePending',
    }),
    ...mapGetters('activities', { findActivitiesInStore: 'find' }),
    navActive() {
      if (this.$refs.nav) {
        return this.$refs.nav.isActive;
      }
      return false;
    },
    activities() {
      const activities = this.findActivitiesInStore({
        query: {
          $sort: {
            updatedAt: -1,
          },
        },
      }).data;

      return activities;
    },
    backArrow() {
      return Object.keys(this.$route.params).length !== 0;
    },
    drawerState: {
      get() { return this.drawer; },
      set(drawerState) { this.$store.dispatch('setDrawer', drawerState); },
    },
    blindState: {
      get() { return this.blindActivities; },
      set() {
        // do nothing
      },
    },
  },
  methods: {
    ...mapMutations('users', { clearUsers: 'clearAll' }),
    ...mapMutations('boards', { clearBoards: 'clearAll' }),
    ...mapMutations('lists', { clearLists: 'clearAll' }),
    ...mapMutations('cards', { clearCards: 'clearAll' }),
    ...mapMutations('activities', { clearActivities: 'clearAll' }),
    ...mapActions(['setDrawer', 'addBlindActivities']),
    ...mapActions('auth', ['logout']),
    async flushStore() {
      await this.clearActivities();
      await this.clearCards();
      await this.clearLists();
      await this.clearBoards();
      await this.clearUsers();
    },
    async disconnect() {
      await this.flushStore();
      await this.logout();
      this.$router.push('/');
    },
    back() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.replace('/boards');
      }
    },
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      let text = value;
      text = text.toString();
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
  },
};
</script>
