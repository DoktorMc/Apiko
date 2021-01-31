<template>
  <div class="v-page-header_container">
    <div class="v-page-header_top-parts">
      <router-link to="/" class="v-page-header_logo"></router-link>
      <div class="right_part">
        <router-link v-if="!checkStatus" to="/login" class="login"
          >Login</router-link
        >
        <router-link v-if="checkStatus" to="" class="user_ico"
          ><img src="img/user-circle-regular.svg" alt=""
        /></router-link>
        <router-link to="" class="like_filter"
          ><img src="img/heart-regular.svg" alt=""
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
    
    };
  },
  props: {},

  methods: {},
  computed: {
    checkStatus() {
      return this.$store.state.isLogeedIn; 
    }
  },
  
};
</script>

<style lang="scss" scoped></style>
