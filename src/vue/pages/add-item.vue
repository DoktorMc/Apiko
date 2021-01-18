<template>
  <div class="add_movie_container">
    <span>Заполните все поля для добавления нового фильма</span>
    <form class="add_movie-form">
      <div class="add_movie-form_info">
        <div>
          <p>
            <span class="preview-poster"></span>
            <label for="img">Постер </label>

            <input
              type="text"
              name="img"
              class="add_movie-form_img"
              v-model="img"
              @input="onUpdate"
            />
          </p>
        </div>
        <div>
          <p>
            <input
              type="text"
              name="title"
              class="add_movie-form_title"
              placeholder="Название"
              v-model="title"
              @input="onUpdate"
            />
          </p>
          <p>
            <input
              type="text"
              name="genre"
              class="add_movie-form_genre"
              placeholder="Жанр"
              v-model="genre"
              @input="onUpdate"
            />
          </p>
          <p>
            <label for="strTime">Время сеанса </label>
            <input
              type="time"
              name="strTime"
              class="add_movie-form_strTime"
              v-model="stime"
              @input="onUpdate"
            />
          </p>
          <p>
            <label for="drtn">Продолжительность </label>
            <input
              type="time"
              name="drtn"
              class="add_movie-form_drtn"
              v-model="drtn"
              @input="onUpdate"
            />
          </p>
          <p>
            <label for="release">Дата релиза </label>
            <input
              type="date"
              name="release"
              class="add_movie-form_release"
              v-model="date"
              @input="onUpdate"
            />
          </p>
          <p>
            <input
              type="number"
              name="tcktPrice"
              class="add_movie-form_tcktPrice"
              placeholder="Стоимость"
              v-model="tcktPrice"
              @input="onUpdate"
            />
          </p>
        </div>
      </div>

      <span class="add_movie-form_btn" @click="writeMovie()"
        >Добавить фильм</span
      >
    </form>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      payload: {},
    };
  },

  methods: {
    writeMovie: function () {
      console.log(this.payload);
      this.$store.dispatch("addMovie", this.payload);
    },

    onUpdate: function () {
      this.payload = {
        src: this.img,
        title: this.title,
        genre: this.genre.split(","),
        strTime: this.stime,
        drtn: this.drtn,
        release: this.date,
        tcktPrice: this.tcktPrice,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
