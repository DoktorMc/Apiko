<template>
  <div class="main_app-container">
    <v-header></v-header>
      <div class="content_data">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
  components: {
    "v-header": require("./components/v-page-header.vue"),
  },

  methods: {},
  computed: {},
};
</script>

<style lang="sass"></style>
