const Vue = require("vue");
const Vuex = require("vuex");
const AXIOS = require("axios");
let firebase = require("firebase/firebase");
let router  = require('./app.router');
require('./firebaseApp');

var db = firebase.firestore();
var storage = firebase.storage();
let auth = firebase.auth();

Vue.use(Vuex);

module.exports = new Vuex.Store({
  state: {
    isLogeedIn: false,
    currentUser: false,
    item: [],
  },

  getters: {
    getMovieById: (state) => (id) => {
      return state.movies.find((movie) => movie.id == id);
    },

    getMovieByGenre: (state) => (gen) => {
      let query = gen.toLowerCase();
      let buffer = state.movies;

      let currMovies = buffer.filter((movie) => {
        for (let i = 0; i < movie.genre.length; i++) {
          if (movie.genre[i].toLowerCase() == query) {
            return movie.genre[i].toLowerCase() == query;
          }
        }
      });
      console.log(currMovies);
      return currMovies;
    },

    getMovie: (state) => {
      return state.movies;
    },

    getTicketStatus: (state) => (payload) => {
      return ;
    },
  },

  mutations: {
    reserving(state, payload) {
      state.movies[payload.id - 1].hall[payload.r][payload.s].reserved = !state
        .movies[payload.id - 1].hall[payload.r][payload.s].reserved;
    },

    isLoggedIn(state, payload){
      state.isLogeedIn = payload;
    }
  },

  actions: {
    fetchMovie: function () {
      db.collection("movies")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          });
        });
    },

    addCard: function ({ commit }, data) {
      db.collection("cards")
        .add({
          id: 1,
          src: data.src,
          title: data.title,
          price: data.price,
          like: false
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    },

    uploadMoviePoster: function (file) {
      var postre = file; // use the Blob or File API
    },

    addUser: function ({ commit }, data) {
      console.log('DATA : '+data);
      console.log('Mail : '+data.email);
      console.log('Password : '+data.pass);
      auth.createUserWithEmailAndPassword(data.email, data.pass)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        alert(`Account created for ${user.email}`);
        router.push('/login');
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(`ERROR!!! ${errorMessage}`);
        // ..
      });
    },

    signIn: function ({ commit }, data) {
      auth.signInWithEmailAndPassword(data.email, data.pass)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log('User is ' + user.uid + 'User email '+ user.email);
        commit('isLoggedIn', true);
        router.push('/');
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }
  },
});
