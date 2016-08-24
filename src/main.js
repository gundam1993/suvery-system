import Vue from 'vue';
import App from './App';
import Home from './components/Home.vue';
import SuvreyBuilder from './components/SuvreyBuilder.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/Home': {
    component: Home,
  },
  '/SuvreyBuilder': {
    component: SuvreyBuilder,
  },
});

router.redirect({
  '*': 'Home',
});

router.start(App, '#app');
