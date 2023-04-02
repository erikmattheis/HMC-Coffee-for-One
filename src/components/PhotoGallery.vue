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
      imgName: this.$route.params.imgName,
      images: [],
      imagesToShow: [],
      isMobile: false,
      currentImageCount: 0,
      imagesPerPage: 20,
      mousearea: [],
    };
  },
  directives: {
    infiniteScroll,
  },
  created() {
    window.addEventListener('resize', this.checkIsMobile)
    this.checkIsMobile()
  },
  destroyed() {
    window.removeEventListener('resize', this.checkIsMobile)
  },
  async mounted() {
    const response = await this.getImages();
    this.images = response.data.map(this.addGalleryPath);
    this.mousearea = Array(this.images.length).fill(false);
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth < 480 || window.orientation === 0 || window.orientation === 180
    },
    closeLightbox() {
      this.$router.push({ name: "photoGallery" });
    },
    async getImages() {
      const response = await axios.get("/gallery/gallery.json");
      return response;
    },
    addGalleryPath(image) {
      return { ...image, title: image.name, description: image.name + " caption", name: image.name.split('.')[0] };
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
  <section>
    <div
      class="card"
      v-for="(image, index) in images"
      :key="image.name"
      @click="!isMobile && $router.push({ name: 'onePhoto', params: { imgName: image.name.split('.')[0] } })"
      v-infinite-scroll="loadMoreImages"
    >
      <input
        v-if="mode === 1"
        type="text"
        v-model="image.title"
        @blur="updateImage(image)"
      />
      <img
        :alt="image.title"
        :src="isMobile ? `/gallery/full/${image.name}.jpg` : `/gallery/thumbs/${image.name}.jpg`"
        class="thumb"

      />
      <textarea
        v-if="mode === 1"
        v-model="image.description"
        @blur="updateImage(image)"
      />
    </div>
    imgName: {{ imgName }}
    <LightBox
      :images="images"
      :img-name="imgName"
      @close="closeLightbox()"
    />
  </section>
</template>

<style scoped>
section {
  margin: 120px auto;
}

.card {
  max-height: 240px;
  margin: 10px;
  display: inline-block;
  position: relative;
}

.thumb {
  max-width: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

@media (min-width: 480px) {
  .card {
    width: auto;
  }

  .thumb {
    width: auto;
    height: 100%;
  }
}

.thumb:hover {
  cursor: pointer;
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
  margin-bottom: 10px;
  padding: 5px;
}

.card .overlay .caption {
  font-size: 14px;
  padding: 5px;
}
</style>
