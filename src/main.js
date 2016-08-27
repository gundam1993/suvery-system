import Vue from 'vue';
import App from './App';
import Home from './components/Home.vue';
import SuvreyBuild from './components/SuvreyBuild.vue';
import SuvreyDisplay from './components/SuvreyDisplay.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/Home': {
    component: Home,
  },
  '/Edit/:suveryId': {
    component: SuvreyBuild,
  },
  '/Edit': {
    component: SuvreyBuild,
  },
  '/Fill/:suveryId': {
    component: SuvreyDisplay,
  }
});

router.redirect({
  '*': 'Home',
});

router.start(App, '#app');
