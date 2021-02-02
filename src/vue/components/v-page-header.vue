<template>
  <div class="v-page-header_container">
    <div class="v-page-header_top-parts">
      <router-link to="/" class="v-page-header_logo"></router-link>
      <div class="right_part">
        <router-link v-if="checkStatus" to="/add" class="add">+add</router-link>
        <router-link v-if="!checkStatus" to="/login" class="login"
          >Login</router-link
        >
        <div class="user_ico-wraper" v-if="checkStatus">
          <div class="user_ico">{{ userIcon }}</div>
          <div class="user_drop_menu">
            <span class="user_drop_menu-name">{{ currentUser }}</span>
            <span class="user_drop_menu-logout_button" @click="logOut()"
              >LogOut</span
            >
          </div>
        </div>

        <router-link to="" class="like_filter"
          ><img src="img/heart-regular.svg" alt=""
        /></router-link>
      </div>
    </div>
    <div class="container">
      <div class="v-page-header_bottom-parts">
        <input
          class="search_by_name"
          type="text"
          v-model="searchname"
          name="searchname"
          id="searchname"
          placeholder="Search products by name"
          @input="onUpdate"
        />
        <input
          class="search_by_position"
          type="text"
          name="search_by_position"
          id="search_by_position"
          placeholder="Location"
        />
        <span class="search_button" @click="searchByName()">Search</span>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      queryString: "",
    };
  },

  methods: {
    logOut: function () {
      this.$store.dispatch("signOut");
    },

    onUpdate: function () {
      this.queryString = this.searchname;
    },
    searchByName() {
      this.$store.getters.getCardByName(this.queryString);
    },
  },
  computed: {
    userIcon() {
      let userName = this.$store.state.currentUser;
      return userName.substring(0, 2);
    },

    checkStatus() {
      return this.$store.state.isLogeedIn;
    },

    currentUser() {
      return this.$store.state.currentUser;
    },
  },
};
</script>

<style lang="scss" scoped></style>
