import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import goTo from "vuetify/lib/services/goto";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(() => {
  Vue.nextTick(() => {
    document.title = "GoDuu Deliveries";
  });
});

router.afterEach(() => {
  goTo(0, { duration: 0 });
});

export default router;
