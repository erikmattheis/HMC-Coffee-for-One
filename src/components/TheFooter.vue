<template>
  <footer>
    <ul>
      <li>Heather M. Cole</li>
      <li>/</li>
      <li>DesignHMC</li>
      <li>/</li>
      <li><a href="mailto:heather@designhmc.com">heather@designhmc.com</a></li>
      <li>/</li>
      <li><a href="https://www.designHMC.com">www.designHMC.com</a></li>
      <li>/</li>
      <li>
        <a href="https://www.facebook.com/profile.php?id=100091115514165"><vue-feather type="facebook" /><span class="sr">Facebook</span></a>
      </li>
      <li>/</li>
      <li>
        <a href="https://www.instagram.com/heathermcole.coffeeforone/"><vue-feather type="instagram" /><span class="sr">Instagram</span></a>
      </li>
    </ul>
  </footer>
</template>

<script>
import VueFeather from "vue-feather";

export default {
  name: "TheFooter",
  components: {
    VueFeather,
  },
};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f5f5f5;
  font-size: 0.8rem;
}

ul {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 0.5rem;
  font-weight: 500;
}

vue-feather {
  margin-right: 0.5rem;
}

a {
  font-weight: 500;
  color: #8388e7;
  text-decoration: inherit;
}

a:hover {
  color: #9fa3e7;
}
</style>
