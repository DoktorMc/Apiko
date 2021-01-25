let Vue = require("vue");
let VueRouter = require("vue-router");

Vue.use(VueRouter);
let routes = [
  {
    name: "additem",
    path: "/add",
    component: require("./../../vue/pages/add-item.vue"),
    props: true,
  },
  {
    name: "reg",
    path: "/reg",
    component: require("./../../vue/pages/v-registration.vue"),
    props: true,
  },
  {
    name: "login",
    path: "/login",
    component: require("./../../vue/pages/v-login.vue"),
    props: true,
  },
  {
    name: "home",
    path: "/:gen?",
    component: require("./../../vue/pages/v-item-cards.vue"),
    props: true,
  },
];

module.exports = new VueRouter({
  mode: "history",
  routes: routes,
});
