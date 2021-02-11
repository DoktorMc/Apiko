<template>
  <div class="add_card_container">
    <v-header></v-header>
 <div class="container">
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
              class="imgAdder"
              type="file"
              id="files"
              ref="files"
              multiple
              @change="handleFileUploads()"
            />
            <span class="addButton" id="" @click="addImg()"
              ><img src="img/plus-solid.svg" alt=""
            /></span>
            <div class="selected_img" v-for="(src, key) in imgSrc" :key="key">
              <img :src="src" alt="" />
              <div class="delete_button" @click="delImg(key)">DELETE</div>
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
      this.$store.dispatch("addCard", this.payload);
    },
    addImg: function () {
      this.$refs.files.click();
    },
    delImg: function (i) {
      this.imgSrc.splice(i, 1);
    },

    handleFileUploads: function (e) {
      let uploadedFiles = this.$refs.files.files;

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.img.push(uploadedFiles[i]);
        let reader = new FileReader();
        reader.readAsDataURL(this.img[i]);
        reader.onload = () => {
          this.imgSrc.push(reader.result);
        };
      }
    },

    onUpdate: function () {
      this.payload = {
        src: this.img,
        title: this.title,
        loc: this.location,
        desc: this.description,
        price: this.price,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
