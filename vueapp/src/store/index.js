import Vue from 'vue';
import Vuex from 'vuex';
import feathersVuex from 'feathers-vuex';
import feathersClient from '../feathers-client';

import security from './security';

const {
  service,
  auth,
  FeathersVuex,
} = feathersVuex(feathersClient, {
  idField: '_id',
});

Vue.use(Vuex);
Vue.use(FeathersVuex);

export default new Vuex.Store({
  modules: {
    security,
  },
  plugins: [
    service('users', {
      instanceDefaults: {
        username: '',
        password: '',
        displayname: '',
      },
    }),
    service('boards', {
      instanceDefaults: {
        name: '',
        background: '',
      },
    }),
    service('lists', {
      instanceDefaults: {
        name: '',
        order: 0,
        boardId: '',
        archived: false,
        color: '#E0E0E0FF',
      },
    }),
    service('cards', {
      instanceDefaults: {
        content: '',
        order: 0,
        listId: '',
        done: false,
      },
    }),
    service('activities', {
      instanceDefaults: {
        text: '',
        boardId: '',
      },
      debug: true,
    }),
    // Setup the auth plugin.
    auth({
      userService: 'users',
    }),
  ],
  state: {
    activeListCreateCard: '',
    blindActivities: 0,
    drawer: false,
  },
  mutations: {
    SET_ACTIVE_LIST_CREATE_CARD(state, listId) {
      const currentState = state;
      currentState.activeListCreateCard = listId;
    },
    SET_DRAWER(state, drawer) {
      const currentState = state;
      currentState.drawer = drawer;
    },
    ADD_BLIND_ACTIVITIES(state, number) {
      const currentState = state;
      currentState.blindActivities += number;
    },
    RESET_BLIND_ACTIVITIES(state) {
      const currentState = state;
      currentState.blindActivities = 0;
    },
  },
  actions: {
    setActiveListCreateCard(context, listId) {
      context.commit('SET_ACTIVE_LIST_CREATE_CARD', listId);
    },
    setDrawer(context, drawer) {
      if (drawer) { context.commit('RESET_BLIND_ACTIVITIES'); }
      context.commit('SET_DRAWER', drawer);
    },
    addBlindActivities(context, number) {
      if (!context.state.drawer) {
        context.commit('ADD_BLIND_ACTIVITIES', number);
      }
    },
    resetBlindActivities(context) {
      context.commit('RESET_BLIND_ACTIVITIES');
    },
  },
});
