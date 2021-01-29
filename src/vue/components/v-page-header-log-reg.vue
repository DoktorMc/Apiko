<template>
  <div class="v-page-header_container-guest">
    <div class="v-page-header_top-parts">
      <router-link to="/" class="v-page-header_logo"></router-link>
      <div class="right_part">
        <router-link to="/login" class="login">Login</router-link>
        <router-link to="" class="like_filter"
          ><img src="img/heart-regular_black.svg" alt=""
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
let firebase = require("firebase/firebase");

module.exports = {
  data: function () {
    return {};
  },
  props: {},

  methods: {},
  
};
</script>

<style lang="scss" scoped></style>
