let Vue = require("vue");
let VueRouter = require("vue-router");
let firebase = require("firebase/firebase");

Vue.use(VueRouter);

let routes = [
  {
    name: "additem",
    path: "/add",
    component: require("./../../vue/pages/add-item.vue"),
    // meta: { requiresAuth: true },
  },
  {
    name: "reg",
    path: "/reg",
    component: require("./../../vue/pages/v-registration.vue"),
    // meta: { requiresGuest: true },
  },
  {
    name: "login",
    path: "/login",
    component: require("./../../vue/pages/v-login.vue"),
    // meta: { requiresGuest: true },
  },
  {
    name: "home",
    path: "/",
    component: require("./../../vue/pages/v-item-cards.vue"),
    // props: true,
    // meta: { requiresAuth: true },
  },
];

let router = new VueRouter({
  mode: "history",
  routes: routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!firebase.auth().currentUser) {
//       next({
//         path: "/",
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else if (to.matched.some(record => record.meta.requiresGuest)) {
//     if (firebase.auth().currentUser) {
//       next({
//         path: "/",
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

module.exports = router;
