const Vue = require("vue");
const Vuex = require("vuex");
const AXIOS = require("axios");

var firebase = require("firebase/firebase");

firebase.initializeApp({
  apiKey: "AIzaSyByeuCAy8CQoymPiEx1yFY7hAxSaTV1l6E",
  authDomain: "cinema-space.firebaseapp.com",
  databaseURL: "https://cinema-space.firebaseio.com",
  projectId: "cinema-space",
  storageBucket: "cinema-space.appspot.com",
  messagingSenderId: "359445031776",
  appId: "1:359445031776:web:4e0294da31eb013734cc05",
});

var db = firebase.firestore();
var storage = firebase.storage();

Vue.use(Vuex);

module.exports = new Vuex.Store({
  state: {
    item:[],
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
      return state.movies[payload.id - 1].hall[payload.r][payload.s].reserved;
    },
  },

  mutations: {
    reserving(state, payload) {
      state.movies[payload.id - 1].hall[payload.r][payload.s].reserved = !state
        .movies[payload.id - 1].hall[payload.r][payload.s].reserved;
    },

    writeMovieData: function (state, payload) {},
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

    addMovie: function ({ commit }, data) {
      db.collection("movies")
        .add({
          id: 1,
          src: data.src,
          title: data.title,
          genre: data.genre,
          strTime: data.strTime,
          drtn: data.drtn,
          release: data.release,
          tcktPrice: data.tcktPrice
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
      

    }
  },
});
