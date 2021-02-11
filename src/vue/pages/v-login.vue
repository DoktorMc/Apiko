<template>
  <div class="v-reg-log-container">
    <v-header-log-reg></v-header-log-reg>
    <div class="container">
      <div class="form_wraper">
        <div class="login_form">
          <div class="form_title">Login</div>
          <div class="login_form-email">
            <span class="input_title">Email</span>
            <input
              type="text"
              name="email"
              id="email"
              v-model="email"
              class="email_input all_reg_log_input"
              placeholder="Example@gmail.com"
              @input="onUpdate"
            />
          </div>
          <div class="login_form-password">
            <span class="input_title">Password</span>
            <input
              type="text"
              name="pass"
              v-model="pass"
              id="pass"
              class="password_input all_reg_log_input"
              @input="onUpdate"
            />
          </div>
          <span class="form-button" @click="loginIn()">Continue</span>
        </div>
        <div class="for-register">
          <span class="for-register-text">I have no account,</span>
          <router-link to="/reg" class="reg_log-link">register now</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      payload: {},
    };
  },
  components: {
    "v-header-log-reg": require("../components/v-page-header-log-reg.vue"),
  },
  methods: {
    loginIn: function () {
      this.$store.dispatch("signIn", this.payload);
    },

    onUpdate: function () {
      this.payload = {
        email: this.email,
        pass: this.pass,
      };
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
