<template>
  <div class="add_card_container">
    <v-header></v-header>

    <form class="add_card-form">
      <span class="form_title">Add product</span>
      <div>
        <span class="input_title">title</span>
        <input
          type="text"
          name="title"
          class="input-add_card"
          placeholder="For example: Iron man suit"
          v-model="title"
          @input="onUpdate"
        />
      </div>
      <div>
        <span class="input_title">locstion</span>
        <input
          type="text"
          name="location"
          class="input-add_card"
          placeholder="For example: Los Angeles, CA"
          v-model="location"
          @input="onUpdate"
        />
      </div>
      <div>
        <span class="input_title">description</span>
        <textarea
          type="text"
          name="description"
          class="add_card-form_description"
          v-model="description"
          @input="onUpdate"
        />
      </div>
      <div>
        <span class="input_title">photos</span>
        <div class="add_card-form_images">
          <input
            class="addButton"
            type="file"
            id="files"
            ref="files"
            multiple
            @change="handleFileUploads()"
          />
          <!-- <span class = "addButton" id="" @click="addImg()"><img src="img/plus-solid.svg" alt=""></span> -->
          <div class="selected_img" v-for="src in imgSrc">
            <img :src="src" alt="" />
          </div>
        </div>
      </div>

      <div>
        <span class="input_title">price</span>
        <input
          type="number"
          name="price"
          class="input-add_card"
          placeholder="Price"
          v-model="price"
          @input="onUpdate"
        />
      </div>

      <span class="form-button" @click="addCard()">SUBMIT</span>
    </form>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      title: "",
      location: "",
      description: "",
      img: [],
      price: "",
      imgSrc: [],
      payload: {},
    };
  },
  components: {
    "v-header": require("../components/v-page-header-add-card.vue"),
  },
  methods: {
    addCard: function () {
      console.log(this.payload);
      this.$store.dispatch("addCadr", this.payload);
    },

    handleFileUploads: function (e) {
      let uploadedFiles = this.$refs.files.files;
      let reader = new FileReader();
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.img.push(uploadedFiles[i]);
      }
      for (let j = 0; j < this.img.length; j++) {
        console.log(this.img[j]);
        reader.readAsDataURL(this.img[j]);
        reader.onload = () => {
          this.imgSrc.push(reader.result);
        };
      }
      console.log(this.img);
      console.log(this.imgSrc);
    },

    onUpdate: function () {
      this.payload = {
        src: this.img,
        title: this.title,
        tcktPrice: this.tcktPrice,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
