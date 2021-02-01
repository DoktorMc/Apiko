const Vue = require("vue");
const Vuex = require("vuex");
const AXIOS = require("axios");
let firebase = require("firebase/firebase");
let router = require("./app.router");
require("./firebaseApp");

var db = firebase.firestore();
var storage = firebase.storage();
let auth = firebase.auth();

Vue.use(Vuex);

module.exports = new Vuex.Store({
  state: {
    isLogeedIn: false,
    currentUser: false,
    cards: [],
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

    getCards: (state) => {
      return state.cards;
    },

  },

  mutations: {
    cardsInStore(state, payload){
      console.log(payload);
      state.cards.push(payload) ;
    },

    isLoggedIn(state, payload) {
      state.isLogeedIn = payload;
    },
  },

  actions: {
    fetchCards: function ({commit}) {
      db.collection("cards")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            commit('cardsInStore', doc.data());
          });
        });
    },

    addCard: async function ({ commit }, data) {
      const promises = [];
      if (data.src) {
        for (let i = 0; i < data.src.length; i++) {
          let metadata = {
            contentType: "image/jpeg",
          };
          const uploadTask = storage
            .ref()
            .child("cardImage/" + data.src[i].name)
            .put(data.src[i], metadata);

          promises.push(uploadTask.then(snapshot => snapshot.ref.getDownloadURL()));
        }
      }
      const URLs = await Promise.all(promises);
      console.log(URLs);
      db.collection("cards")
        .add({
          id: 1,
          img: URLs,
          title: data.title,
          location: data.loc,
          price: data.price,
          description: data.desc,
          like: false,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    },

    addUser: function ({ commit }, data) {
      console.log("DATA : " + data);
      console.log("Mail : " + data.email);
      console.log("Password : " + data.pass);
      auth
        .createUserWithEmailAndPassword(data.email, data.pass)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          alert(`Account created for ${user.email}`);
          router.push("/login");
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
      auth
        .signInWithEmailAndPassword(data.email, data.pass)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log("User is " + user.uid + "User email " + user.email);
          commit("isLoggedIn", true);
          router.push("/");
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    },
  },
});
