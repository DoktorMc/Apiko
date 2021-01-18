<template>
  <div class="v-login-container">
    <div class="login_form">
      <div class="login_form-email">
        <span class="email_input_title">Email</span>
        <input type="text" name="" id="" class="email_input" placeholder="Example@gmail.com"/>
      </div>
      <div class="login_form-password">
        <span class="password_input_title">Password</span>
        <input type="text" name="" id="" class="password_input" />
      </div>
      <span class="login_form-button">Continue</span>
    </div>
    <div class="for-register">
      <span class="for-register-text">I have no account,</span>
       <router-link to="/register" class="add">register now</router-link>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.v-page-header_container {
  background: #ffffff;
}
</style>
