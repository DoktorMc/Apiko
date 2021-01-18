<template>
  <div class="v-page-header_container">
    <div class="v-page-header_top-parts">
      <router-link to="/" class="v-page-header_logo"
        ><img src="img/logofull.png" alt=""
      /></router-link>
      <div class="right_part">
        <router-link to="/add" class="add">+add</router-link>
        <router-link to="/login" class="login">Login</router-link>
        <router-link to="/add" class="user_ico"><img src="img/user-circle-regular.svg" alt=""></router-link>
        <router-link to="/add" class="like_filter"><img src="img/heart-regular.svg" alt=""></router-link>
      </div>
    </div>
    <div class="container">
      <div class="v-page-header_bottom-parts">
        <input class="search_by_name" type="text" name="" id="" placeholder="Search products by name"/>
        <input class="search_by_position" type="text" name="" id="" placeholder="Location"/>
        <span class="search_button">Search</span>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
  props: {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
