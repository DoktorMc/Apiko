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
        <div class="filter_by_price_wraper">
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
      </div>
      <div class="cards_container">
        <div class="card_item" v-for="(card, key) in filterByPrice" :key="key">
          <img class="card_item-img" :src="card.img" alt="" />
          <span class="card_item-title">{{ card.title }}</span>
          <span class="card_item-price">$ {{ card.price }}</span>
          <div
            class="card_item-like"
            @click="liker(card.id)"
            :class="{ isLiked: false }"
          >
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
      isL: false,
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

    liker: function (id) {
      this.$store.dispatch("likeCard", id);
    },
  },
  computed: {
    allCards: function () {
      return this.$store.getters["getCards"];
    },

    liked: function (id) {
      console.log(this.getLike(id));
      return this.getLike(id);
    },

    filterByPrice: function () {
      let priceFrom = this.prcFrom || 0;
      let priceTo = this.prcTo || Infinity;

      let buffer = this.allCards;

      console.log(buffer);
      buffer = buffer.filter(
        (card) => priceFrom <= +card.price && +card.price <= priceTo
      );
      return buffer;
    },
  },
  created() {
    console.log("created ");
    this.$store.dispatch("fetchCards");
  },
  mounted() {
    console.log("mounted ");
  },
};
</script>

<style lang="scss" scoped></style>
