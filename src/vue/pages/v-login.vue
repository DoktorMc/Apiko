<template>
  <div class="v-login-container">
    <div class="login_form">
      <div class="login_form-email">
        <span class="input_title">Email</span>
        <input type="text" name="" id="" class="email_input all_reg_log_input" placeholder="Example@gmail.com"/>
      </div>
      <div class="login_form-password">
        <span class="input_title">Password</span>
        <input type="text" name="" id="" class="password_input all_reg_log_input" />
      </div>
      <span class="form-button">Continue</span>
    </div>
    <div class="for-register">
      <span class="for-register-text">I have no account,</span>
       <router-link to="/reg" class="reg_log-link">register now</router-link>
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
