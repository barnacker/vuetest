import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Boards from './views/Boards.vue';
import Store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/boards',
      name: 'boards',
      component: Boards,
    },
  ],
});

// Global session route dispatching
router.beforeEach((to, from, next) => {
  // Authenticate with the local email/password strategy
  Store.dispatch('auth/authenticate').then(() => {
    if (['/', '/signup', '/login'].includes(to.path)) {
      next('/boards');
    } else {
      next();
    }
  }).catch(() => {
    if (['/', '/signup', '/login'].includes(to.path)) {
      next();
    } else {
      next('/login');
    }
  });
});

export default router;
