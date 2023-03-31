<template>
  <div class="lightbox" v-if="name">
    <div class="overlay" @click="closeLightbox"></div>
    <div class="content">
      <div class="image-container">
        <button class="close-button" @click="closeLightbox"><vue-feather type="x" /><span class="sr">X</span></button>
        <button class="nav-button lb-prev" :disabled="currentIndex === 0" @click="prevImage">&#8249;</button>
        <img class="lightbox-image" :src="`/gallery/full/${name}.jpg`" :alt="image.title" />
        <button class="nav-button lb-next" :disabled="currentIndex === images.length - 1" @click="nextImage">&#8250;</button>
      </div>
    </div>
  </div>
</template>
      
<script>
import VueFeather from "vue-feather";

export default {
  props: {
    imgName: {
      type: String,
      default: () => { },
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    VueFeather,
  },
  data() {
    return {
      image: this.images.findIndex((img) => img.name === this.imgName),
      name: this.imgName,
      currentIndex: this.images.findIndex((img) => img.name === this.name),
    };
  },
  methods: {
    closeLightbox() {
      this.$emit("close");
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.image = this.images[this.currentIndex];
        this.name = this.images[this.currentIndex].name;
        this.$emit("update:image", this.image);
      }
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.image = this.images[this.currentIndex];
        this.name = this.images[this.currentIndex].name;
        this.$emit("update:image", this.image);
      }
    },
  },
};
</script>
      
<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
}

.lightbox .overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.lightbox .content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.lightbox .lightbox-image {
  max-height: 85vh;
  max-width: 85vw;
  object-fit: contain;
}

.image-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  cursor: pointer;
}

.lb-prev {
  left: 0;
}

.lb-next {
  right: 0;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  font-size: 2rem;
  cursor: pointer;
}
</style>
      