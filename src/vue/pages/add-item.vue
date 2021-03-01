<template>
  <div class="add_card_container">
    <div class="loader_layouts">
      <span class="loader" id="loader"></span>
    </div>
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
            :class="{ input_error: titleError }"
          />
          <span class="input_error-text" :class="{ error: titleError }"
            >empty field</span
          >
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
            :class="{ input_error: locError }"
          />
          <span class="input_error-text" :class="{ error: locError }"
            >empty field</span
          >
        </div>
        <div>
          <span class="input_title">description</span>
          <textarea
            type="text"
            name="description"
            :class="{ input_error: descError }"
            class="add_card-form_description"
            v-model="description"
            @input="onUpdate"
          />
          <span class="input_error-text" :class="{ error: descError }"
            >empty field</span
          >
        </div>
        <div>
          <span class="input_title">photos</span>
          <div class="add_card-form_images" :class="{ input_error: imgError }">
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
          <span class="input_error-text" :class="{ error: imgError }"
            >empty field</span
          >
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
            :class="{ input_error: priceError }"
          />
          <span class="input_error-text" :class="{ error: priceError }"
            >empty field</span
          >
        </div>

        <span class="form-button" @click="addCard($event)" dat-added="1" >SUBMIT</span>
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
      titleError: false,
      imgError: false,
      descError: false,
      locError: false,
      priceError: false,
      loader: false,
    };
  },
  components: {
    "v-header": require("../components/v-page-header-add-card.vue"),
  },
  methods: {
    addCard: function (e) {
      
      if (
        this.titleError == true ||
        this.imgError == true ||
        this.descError == true ||
        this.locError == true ||
        this.priceError == true
      ) {
        console.log("ERROR!!!");
        return;
      } else {
        let attr = e.target.getAttribute("dat-added");
        if (attr == 1) {
          this.$store.dispatch("addCard", this.payload);
          e.target.setAttribute("dat-added", 0);
        }else{
          alert('the card is already being added')
          return;
        }
      }
    },
    addImg: function () {
      this.$refs.files.click();
    },
    delImg: function (i) {
      this.imgSrc.splice(i, 1);
    },

    handleFileUploads: function (e) {
      let uploadedFiles = this.$refs.files.files;
      if (!uploadedFiles.length) {
        this.imgError = true;
      } else {
        this.imgError = false;
        for (var i = 0; i < uploadedFiles.length; i++) {
          this.img.push(uploadedFiles[i]);
          let reader = new FileReader();
          reader.readAsDataURL(this.img[i]);
          reader.onload = () => {
            this.imgSrc.push(reader.result);
          };
        }
      }
    },

    onUpdate: function () {
      if (!this.title) {
        this.titleError = true;
      } else {
        this.titleError = false;
      }
      if (!this.imgSrc.length) {
        this.imgError = true;
      } else {
        this.imgError = false;
      }
      if (!this.description) {
        this.descError = true;
      } else {
        this.descError = false;
      }
      if (!this.location) {
        this.locError = true;
      } else {
        this.locError = false;
      }
      if (!this.price) {
        this.priceError = true;
      } else {
        this.priceError = false;
      }

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
