import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import { routeIsPublic, userIsLoggedIn } from "./route-helpers";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (routeIsPublic(to.fullPath)) {
    return next();
  }

  if (!userIsLoggedIn()) {
    return next("/");
  }

  next();
});

export default router;
