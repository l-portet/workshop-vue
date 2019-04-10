import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import NewMessage from '@/views/NewMessage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'NewMessage',
      component: NewMessage
    }
  ]
});
