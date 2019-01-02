import router from '../router';

const actions = {
  async login({ dispatch }, { user }) {
    // Authenticate with the local email/password strategy
    await dispatch('auth/authenticate', {
      strategy: 'local',
      ...user,
    }, { root: true });

    router.push('/boards');
  },
  logout() {

  },
};

export default {
  namespaced: true,
  actions,
};
