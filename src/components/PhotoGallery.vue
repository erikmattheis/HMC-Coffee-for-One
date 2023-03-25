<script>
  import axios from "axios";
  import infiniteScroll from "vue-infinite-scroll";

  import LightBox from "./LightBox.vue";

  export default {
    name: "PhotoGallery",
    components: {
      LightBox,
    },
    data() {
      return {
        mode: 0,
        lightbox: null,
        images: [],
        imagesToShow: [],
        currentImageCount: 0,
        imagesPerPage: 20,
        mousearea: [],
      };
    },
    directives: {
      infiniteScroll,
    },
    async mounted() {
      const response = await this.getImages();

      this.images = response.data.map(this.addGalleryPath);
      this.mousearea = Array(this.images.length).fill(false);
    },
    methods: {
      async getImages() {
        const response = await axios.get("/gallery/gallery.json");
        return response;
      },
      addGalleryPath(image) {
        const path = `./gallery/thumbs/${image.name}`;
        return { ...image, path, title: image.name, description: image.name + " caption" };
      },
      async updateImage(image) {
        const data = {
          name: image.name,
          title: image.title,
          description: image.description,
        };
        const response = await axios.post("http://localhost:3000/edit", image);
      },
      loadMoreImages() {
        const end = this.currentImageCount + this.imagesPerPage;
        this.imagesToShow = this.images.slice(this.currentImageCount, end);
        this.currentImageCount = end;
      },
    },
  };
</script>

<template>
  <div>
    <div
      class="card"
      v-for="(image, index) in images"
      :key="image.path"
      @click="lightbox = image"
      v-infinite-scroll="loadMoreImages"
    >
      <input
        v-if="mode === 1"
        type="text"
        v-model="image.title"
        @blur="updateImage(image)"
      />
      <img
        :src="`/gallery/thumbs/${image.name}`"
        class="thumb"
      />
      <textarea
        v-if="mode === 1"
        v-model="image.description"
        @blur="updateImage(image)"
      />
    </div>

    <LightBox
      :images="images"
      :image="lightbox"
      @close="lightbox = null"
    />
  </div>
</template>

<style scoped>
  .card {
    width: 180px;
    height: 240px;
    margin: 10px;
    display: inline-block;
    position: relative;
  }

  .thumb {
    max-width: 100%;
    max-height: 100%;
  }

  .card .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 5px 5px;
    box-sizing: border-box;
  }

  .card .overlay.visible {
    opacity: 1;
  }

  .card .overlay .title {
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
    padding: 5px;
  }

  .card .overlay .caption {
    font-size: 14px;
    color: white;
    padding: 5px;
  }
</style>
