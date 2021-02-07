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
    getCardByNameAndLoc: (state) => (payload) => {
      console.log(payload);
      let queryN = payload.title.toLowerCase();
      let queryL = payload.location.toLowerCase();
      console.log(queryN);
      console.log(queryL);
      let buffer = state.cards;

      bufferN = buffer.filter(
        (card) => ~card.title.toLowerCase().indexOf(queryN)
      );

      buffer = bufferN.filter(
        (card) => ~card.location.toLowerCase().indexOf(queryL)
      );

      state.cards = buffer;

      return state.cards;
    },

    getCards: (state) => {
      console.log(state.cards);
      return state.cards;
    },

    getLike:(state) => (id) => {
      for (let i = 0; i < state.cards.length; i++) {
        // if (state.cards[i].id == id) {
          console.log(state.cards[i].id);
          for (let j = 0; j < state.cards[i].like.length; j++) {
            if (state.cards[i].like[j].user == state.currentUser) {
            
              return state.cards[i].like[j].liked;
            }
          }
        // }
      }
    },
  },

  mutations: {
    cardsInStore(state, payload) {
      state.cards = payload;
    },

    isLoggedIn(state, payload) {
      state.isLogeedIn = payload;
    },

    isCurrentUser(state, payload) {
      state.currentUser = payload;
    },

    isLoggedOut(state, payload) {
      state.isLogeedIn = payload;
    },
  },

  actions: {
    fetchCards: function ({ commit }) {
      let resultCards = [];
      db.collection("cards")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            resultCards.push(doc.data());
            console.log(resultCards);
          });
          commit("cardsInStore", resultCards);
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

          promises.push(
            uploadTask.then((snapshot) => snapshot.ref.getDownloadURL())
          );
        }
      }
      const URLs = await Promise.all(promises);
      db.collection("cards")
        .add({
          img: URLs,
          title: data.title,
          location: data.loc,
          price: data.price,
          description: data.desc,
          like: [],
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          var cityRef = db.collection("cards").doc(docRef.id);
          cityRef.set({ id: docRef.id }, { merge: true });
          router.push("/");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    },

    likeCard: function ({ commit }, id) {
      console.log("id: " + id);
      nLike = 0;

      db.collection("cards")
        .doc(id)
        .update({
          like: firebase.firestore.FieldValue.arrayUnion({
            user: this.state.currentUser,
            liked: true,
          }),
        })
        .then(() => {
          console.log("Document successfully updated!");
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
          commit("isCurrentUser", user.email);
          router.push("/");
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    },

    signOut: function ({ commit }) {
      auth
        .signOut()
        .then(() => {
          commit("isLoggedOut", false);
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
});
