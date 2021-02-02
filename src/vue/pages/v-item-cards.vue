<template>
  <div class="v-item_cards">
    <v-header></v-header>
    <div class="container">
      <div class="item_cards-filters">
        <div class="filters-category_drop_list">
          <input
            type="text"
            class="category_input"
            placeholder="Choose Category"
          />
          <div class="category_list"></div>
        </div>
        <input
          type="number"
          v-model="pFrom"
          class="filters-price"
          placeholder="Price from (USD)"
          @input="onUpdate"
        />
        <div class="filter_line"></div>
        <input
          type="number"
          v-model="pTo"
          class="filters-price"
          placeholder="Price to (USD)"
          @input="onUpdate"
        />
      </div>
      <div class="cards_container">
        <div class="card_item" v-for="(card, key) in filterByPrice" :key="key">
          <img class="card_item-img" :src="card.img" alt="" />
          <span class="card_item-title">{{ card.title }}</span>
          <span class="card_item-price">$ {{ card.price }}</span>
          <div class="card_item-like">
            <svg width="25" height="25" preserveAspectRatio="xMidYMid meet">
              <use xlink:href="img/heart-like.svg#svg-heart"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      prcFrom: null,
      prcTo: null,
      cards: [],
    };
  },
  components: {
    "v-header": require("../components/v-page-header.vue"),
  },
  methods: {
    onUpdate: function () {
      this.prcFrom = this.pFrom;
      this.prcTo = this.pTo;
    },
  },
  computed: {
    allCards: function () {
      return (this.cards = this.$store.getters["getCards"]);
    },

    filterByPrice: function () {
      let priceFrom = this.prcFrom;
      let priceTo = this.prcTo;
      if (priceFrom == null || priceFrom === '') {
        priceFrom = 0;
        
      }if (priceTo == null || priceTo === '') {
          priceTo = Infinity;
        }
      console.log('from  - '+priceFrom);
      console.log('to - '+priceTo);
      let buffer = this.$store.getters["getCards"];
      console.log(buffer);
      buffer = buffer.filter(
        (card) => priceFrom <= +card.price && +card.price <= priceTo
      );
      return buffer;
    },
  },
  created() {
    console.log("created " + this.cards);
    this.$store.dispatch("fetchCards");
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
