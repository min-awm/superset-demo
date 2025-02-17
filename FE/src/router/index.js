import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/components/home/HomePage.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
