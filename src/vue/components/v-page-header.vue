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

        <label class="like_container"
          ><input
            v-if="checkStatus"
            type="checkbox"
            class="like_input"
            v-model="like_input"
            @change="likeFilter"
            name="like_input"
            id="" />
          <span v-if="checkStatus" class="like_filter">
            <svg width="30" height="30" preserveAspectRatio="xMidYMid meet">
              <use xlink:href="img/heart-like.svg#svg-heart"></use></svg></span
        ></label>
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
          v-model="searchlocation"
          name="search_by_position"
          id="search_by_position"
          placeholder="Location"
          @input="onUpdate"
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
      payload: {},
      queryString: "",
      queryLocation: "",
    };
  },

  methods: {
    logOut: function () {
      this.$store.dispatch("signOut");
    },

    onUpdate: function () {
      this.queryString = this.searchname || "";
      this.queryLocation = this.searchlocation || "";

      if (this.queryString == "" && this.queryLocation == "") {
        return this.$store.dispatch("fetchCards");
      } else {
        this.payload = {
          title: this.queryString,
          location: this.queryLocation,
        };
      }
    },

    searchByName() {
      this.$store.getters.getCardByNameAndLoc(this.payload);
    },

    likeFilter: function () {
      this.like_input
        ? this.$store.getters.getLikedCard
        : this.$store.dispatch("fetchCards");
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
