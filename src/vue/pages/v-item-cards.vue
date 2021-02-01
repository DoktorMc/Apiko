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
      <div class="cards_container" v-for="(card, key) in cards" :key="key">
        <div class="card_field-item">
          <img :src="card.img" alt="" />
          <span>{{ card.title }}</span>
          <span>${{ card.price }}</span>
          <div v-if="card.like"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      cards: {},
    };
  },
  components: {
    "v-header": require("../components/v-page-header.vue"),
  },
  methods: {},
  computed: {
    allCards: function () {
      return (this.cards = this.$store.getters["getCards"]);
    },
  },
  mounted() {
    this.$store.dispatch("fetchCards");
    this.cards = this.$store.getters["getCards"];
    console.log(this.cards);
  },
};
</script>

<style lang="scss" scoped></style>
