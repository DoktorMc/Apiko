<template>
  <div class="v-item_cards">
    <v-header></v-header>
    <div class="container">
      <div class="item_cards-filters">
        <div class="filters-category_drop_list">
          <input type="text" class="category_input" />
          <div class="category_list"></div>
        </div>
        <input type="text" class="filters-price" />
        <div class="filter_line"></div>
        <input type="text" class="filters-price" />
      </div>
      <div class="items_container">
        
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
   components: {
    "v-header": require("../components/v-page-header.vue"),
  },
  methods: {},
  computed: {},
  mounted () {
    console.log(this.$store.state.isLogeedIn);
  },
};
</script>

<style lang="scss" scoped></style>
