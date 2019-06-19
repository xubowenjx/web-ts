import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "home"
      }
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "about"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "vuer";
  next();
});
router.afterEach(() => {
  window.scrollTo(0, 0);
});
export default router;
