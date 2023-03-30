<template>
  <div class="wrapper">
    <div class="nav-box-wrapper">
      <div class="nav-box">
        <router-link class="nav-link" to="/">
          <h1>{{ linkText }}</h1>
        </router-link>
      </div>
    </div>
    <div class="right-box-wrapper">
      <div class="right-box">
        <router-link class="right-link" to="/">
          <h2>{{ topText }}</h2>
        </router-link>
      </div>
      <div class="right-box">
        <router-link class="right-link" to="/">
          <h2>{{ bottomText }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      linkText: 'Home',
      topText: 'Top',
      bottomText: 'Bottom',
    };
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-link {
  display: inline-block;
  text-decoration: none;
  color: #F5F5F5;
}

.nav-box {
  display: inline-block;
  padding: 1em 2em;
  background-color: #441111;
  color: #f5f5f5;
  transition: all 0.2s ease;
}

.nav-box:hover {
  background-color: #f5f5f5;
  color: #441111;
  cursor: pointer
}

.nav-box:hover a h1 {
  color: #441111;
}

.nav-box h1 {
  margin: 0;
  padding: 0;
}

.nav-box-wrapper {
  display: flex;
  justify-content: center;
}

.right-box-wrapper {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.right-box {
  padding: 0.5em 1em;
  height: 50%;
  background-color: #f5f5f5;
}

.right-link {
  display: block;
  text-decoration: none;
  color: #441111;
}

.right-box h2,
.right-box h2 {
  margin: 0;
  padding: 0;
}

.right-box h2 {
  font-size: 2em;
}

.right-box h2 {
  font-size: 1.5em;
}

h1 {
  font-size: 3em;
}
</style>
