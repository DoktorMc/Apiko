<template>
  <div class="v-page-header_container-guest">
    <div class="v-page-header_top-parts">
      <router-link to="/" class="v-page-header_logo"></router-link>
      <div class="right_part">
        <router-link to="/login" class="login">Login</router-link>
        <span v-if="checkStatus" class="like_filter"> 
          <svg width="25" height="25" preserveAspectRatio="xMidYMid meet">
              <use xlink:href="img/heart-like.svg#svg-heart"></use>
            </svg></span>
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
