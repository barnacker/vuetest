import Vue from 'vue';
import Vuex from 'vuex';
import feathersVuex from 'feathers-vuex';
import feathersClient from './feathers-client';

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
    // Setup the auth plugin.
    auth({
      userService: 'users',
    }),
  ],
  state: {
    activeListCreateCard: '',
  },
  mutations: {
    SET_ACTIVE_LIST_CREATE_CARD(state, listId) {
      const currentState = state;
      currentState.activeListCreateCard = listId;
    },
  },
  actions: {
    setActiveListCreateCard(context, listId) {
      context.commit('SET_ACTIVE_LIST_CREATE_CARD', listId);
    },
  },
});
