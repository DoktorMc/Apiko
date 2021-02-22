let Vue = require('vue');
let firebase = require('firebase/firebase');
require('./firebaseApp');

Vue.config.productionTip = false;
let app;

firebase.auth().onAuthStateChanged(user => {
    console.log("user - ", user);
    if(!app){
        app = new Vue({
            el: '#app',
            router: require('./app.router'),
            store: require('./app.store'),
            render: function (init) {
                return init(require('./../../vue/index.vue'));
            }
        });
    }
});