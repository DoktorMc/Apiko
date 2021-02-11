<template>
  <div class="v-reg-log-container">
    <v-header-log-reg></v-header-log-reg>
    <div class="container">
      <div class="form_wraper">
        <div class="registration_form">
          <div class="form_title">Register</div>
          <div class="registration_form-email">
            <span class="input_title">Email</span>
            <input
              type="text"
              v-model="email"
              name="email"
              id="email"
              class="email_input all_reg_log_input"
              placeholder="Example@gmail.com"
              @input="onUpdate"
            />
          </div>
          <div class="registration_form-full_name">
            <span class="input_title">Full name</span>
            <input
              type="text"
              v-model="name"
              name="name"
              id="name"
              class="full_name-input all_reg_log_input"
              placeholder="Tony Stark"
              @input="onUpdate"
            />
          </div>
          <div class="registration_form-password">
            <span class="input_title">Password</span>
            <input
              type="text"
              v-model="pass"
              name="pass"
              id="passw"
              class="password_input all_reg_log_input"
              @input="onUpdate"
            />
          </div>
          <div class="registration_form-password">
            <span class="input_title">Password Again</span>
            <input
              type="text"
              v-model="passAgain"
              name="passAgain"
              id="passwA"
              class="password_input all_reg_log_input"
              @input="onUpdate"
            />

            <span class="form-button" @click="addUser()">Register</span>
          </div>
        </div>
        <div class="for-log_in">
          <span class="for-log_in-text">I already have an account,</span>
          <router-link to="/login" class="reg_log-link">log in</router-link>
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
    addUser: function () {
      if (Object.keys(this.payload).length == 0) {
        console.log("EROOR !!!");
        this.$router.go(0);
        return;
      } else {
        console.log(!this.payload.length);
        console.log(this.payload);
        this.$store.dispatch("addUser", this.payload);
      }
    },

    onUpdate: function () {
      // this.$store.commit("idForMovie");
      let password = "";
      if (this.pass == this.passAgain) {
        password = this.pass;
        this.payload = {
          email: this.email,
          pass: password,
        };
      } else {
        this.payload = {};

        return;
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
