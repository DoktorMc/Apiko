let Vue = require('vue');
let firebase = require('firebase/firebase');

let app;

firebase.auth().onAuthStateChanged(user => {
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