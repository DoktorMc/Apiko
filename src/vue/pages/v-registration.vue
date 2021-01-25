<template>
  <div class="v-registration-container">
    <div class="registration_form">
      <div class="form_title">Register</div>
      <div class="registration_form-email">
        <span class="input_title">Email</span>
        <input
          type="text"
          name=""
          id=""
          class="email_input all_reg_log_input"
          placeholder="Example@gmail.com"
        />
      </div>
      <div class="registration_form-full_name">
        <span class="input_title">Full name</span>
        <input
          type="text"
          name=""
          id=""
          class="full_name-input all_reg_log_input"
          placeholder="Tony Stark"
        />
      </div>
      <div class="registration_form-password">
        <span class="input_title">Password</span>
        <input type="text" name="" id="" class="password_input all_reg_log_input" />
      </div>
      <div class="registration_form-password">
        <span class="input_title">Password Again</span>
        <input type="text" name="" id="" class="password_input all_reg_log_input" />
      </div>

      <span class="form-button">Register</span>
    </div>
    <div class="for-log_in">
      <span class="for-log_in-text">I already have an account,</span>
      <router-link to="/login" class="reg_log-link">log in</router-link>
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
