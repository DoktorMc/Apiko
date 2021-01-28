<template>
  <div class="v-page-header_container">
    <div class="v-page-header_top-parts">
      <router-link to="/" class="v-page-header_logo"
        ><img src="img/logofull.png" alt=""
      /></router-link>
      <div class="right_part">
        <router-link v-if="isLoggedIn" to="/add" class="add">+add</router-link>
        <router-link v-if="!isLoggedIn" to="/login" class="login">Login</router-link>
        <router-link v-if="isLoggedIn" to="" class="user_ico"
          ><img src="img/user-circle-regular.svg" alt=""
        /></router-link>
        <router-link v-if="isLoggedIn" to="" class="like_filter"
          ><img src="img/heart-regular.svg" alt=""
        /></router-link>
      </div>
    </div>
    <div class="container">
      <div v-if="isLoggedIn" class="v-page-header_bottom-parts">
        <input
          class="search_by_name"
          type="text"
          name="search_by_name"
          id="search_by_name"
          placeholder="Search products by name"
        />
        <input
          class="search_by_position"
          type="text"
          name="search_by_position"
          id="search_by_position"
          placeholder="Location"
        />
        <span class="search_button">Search</span>
      </div>
    </div>
  </div>
</template>

<script>
let firebase = require('firebase/firebase');

module.exports = {
  data: function () {
    return {
      isLogeedIn: false,
      currentUser: false
    };
  },
  props: {},

  methods: {},
  created () {
    console.log(this.isLogeedIn);
    console.log(firebase.auth().currentUser);
    if (firebase.auth().currentUser) {
      this.isLogeedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
      console.log(this.isLogeedIn);
    }
  },
};
</script>

<style lang="scss" scoped></style>
