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
              @keyup.enter="loginIn()"
            />
           
          </div>
          <div class="login_form-password">
            <span class="input_title">Password</span>
            <input
              type="password"
              name="pass"
              v-model="pass"
              id="pass"
              class="password_input all_reg_log_input"
              @input="onUpdate"
              @keyup.enter="loginIn()"
            />
          </div>
          <span class="form-button" @click="loginIn()" @keyup.enter="loginIn()">Continue</span>
           <span class="login_form-errors" v-for="error in isError">{{error}}</span>
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
      // errors: this.$store.state.logedInError,
    };
  },
  components: {
    "v-header-log-reg": require("../components/v-page-header-log-reg.vue"),
  },
  methods: {
    loginIn: function () {
      let formData = this.payload;
      console.log(formData);
      if(formData){

      }
      this.$store.dispatch("signIn", this.payload);
    },

    onUpdate: function () {

      this.payload = {
        email: this.email,
        pass: this.pass,
      };
    },

    
  },
  computed: {
    isError: function () {
      return this.$store.state.logedInError;
    }
  },
};
</script>

<style lang="scss" scoped></style>
