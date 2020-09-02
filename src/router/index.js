import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/404.vue";
import ComponentOnPage from "@/views/ComponentOnPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/presentation",
    name: "Presentation",
    component: ComponentOnPage,
    children: [
      {
        path: "lines",
        name: "line",
        component: () =>
          import(/* webpackChunkName: "lines" */ "../components/Lines.vue")
      },
      {
        path: "rounding",
        name: "rounding",
        component: () => import("../components/Rounding")
      },
      {
        path: "percent",
        name: "percent",
        component: () => import("../components/Percent")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
