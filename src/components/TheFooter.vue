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
        <a href="https://www.facebook.com/designhmc"><vue-feather type="facebook" /><span class="sr">Facebook</span></a>
      </li>
      <li>/</li>
      <li>
        <a href="https://www.instagram.com/heathermcole.designhmc"><vue-feather type="instagram" /><span class="sr">Instagram</span></a>
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
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #1a1a1a;
    color: #fff;
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
    color: #adb0e5;
    text-decoration: inherit;
  }

  a:hover {
    color: #c2c4e6;
  }
</style>
