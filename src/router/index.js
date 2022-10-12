import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Search.vue';

const routes = [
  {
    path: '/',
    name: 'search',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
