import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import store from '../store/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Login, meta: { requiredAuth: true } },
    { path: "/login", component: Login, meta: { requiredAuth: false } },
    { path: "/dashboard", component: Dashboard, meta: { requiredAuth: true } },
  ],
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiredAuth) {
    let userProfile = store.getters["auth/getUserProfile"];
    if (userProfile.id === 0) {
      await store.dispatch("auth/userProfile");
      userProfile = store.getters["auth/getUserProfile"];
      if (userProfile.id === 0) {
        return next({ path: "/login" });
      } else {
        return next();
      }
    }
  }
  return next();
});

export default router
