import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Index from "../views/index.vue";
import Details from "../views/details.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: Index,
  },

  {
    path: "/infos/:id",
    name: "details",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
