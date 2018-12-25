<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
      right
    >
      <v-list two-line subheader>
        <v-subheader>Activities</v-subheader>

        <v-list-tile v-for="activity in activities" :key="activity._id" avatar>
          <v-list-tile-avatar>
            <v-icon>face</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ activity.text }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ activity.text }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">info</v-icon>
            </v-btn>
          </v-list-tile-action>
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
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>face</v-icon>
      </v-btn>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>notifications</v-icon>
      </v-btn>
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
      return this.findActivitiesInStore({
        query: {
          // boardId: this.$route.params.id,
        },
      }).data;
    },
    backArrow() {
      return Object.keys(this.$route.params).length !== 0;
    },
  },
  methods: {
    ...mapActions('activities', { findActivities: 'find' }),
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
  mounted() {
    const a = this.findActivities({
      query: {
        //
      },
    });
    log(a);
  },
};
</script>
