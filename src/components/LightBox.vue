<template>
  <div
    class="lightbox"
    v-if="image"
  >
    <div
      class="overlay"
      @click="closeLightbox"
    ></div>
    <div class="content">
      <button
        class="close-button"
        @click="closeLightbox"
      >
        X
      </button>
      <div class="nav-buttons">
        <button
          class="nav-button lb-prev"
          :disabled="currentIndex === 0"
          @click="prevImage"
        >
          &#8249;
        </button>
        <button
          class="nav-button lb-next"
          :disabled="currentIndex === images.length - 1"
          @click="nextImage"
        >
          &#8250;
        </button>
      </div>
      <div class="image-container">
        <img
          class="lightbox-image"
          :src="`/gallery/${image.name}`"
          :alt="image.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: Object,
        default: () => {},
      },
      images: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        currentIndex: this.images.findIndex((img) => img === this.image),
      };
    },
    methods: {
      closeLightbox() {
        this.$emit("close");
      },
      nextImage() {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++;
          this.$emit("update:image", this.images[this.currentIndex]);
        }
      },
      prevImage() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.$emit("update:image", this.images[this.currentIndex]);
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
    position: relative;
    display: flex;
    flex: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .lightbox .lightbox-image {
    max-height: 85vh;
    max-width: 85vh;
  }



  .image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-buttons {
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lb-prev {
  margin-right: auto;
}

.lb-next {
  margin-left: auto;
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
``
