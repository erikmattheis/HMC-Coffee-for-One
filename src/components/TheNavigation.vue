<template>
  <div class="wrapper">
    <div class="nav-box-wrapper">
      <div class="nav-box">
        <router-link class="nav-link" to="/">
          <h1>Coffee&nbsp;for&nbsp;One</h1>
        </router-link>
      </div>
    </div>
    <div class="right-box-wrapper">
      <div class="right-box">
        <router-link class="right-link" to="/project">
          <h2>Project</h2>
        </router-link>
      </div>
      <div class="right-box">
        <router-link class="right-link" to="/artist">
          <h2>Artist</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
}

.nav-link {
  display: inline-block;
  text-decoration: none;
  color: #F5F5F5;
  transition: color 0.2s ease-in-out;
}

.nav-box {
  display: inline-block;
  padding: 1em 2em;
  background-color: #441111;
  transition: all 0.2s ease;
  max-width: 100%;
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
  text-transform: uppercase;
}

.nav-box-wrapper {
  display: flex;
  justify-content: center;
}

.right-box-wrapper {
  display: flex;
  flex-direction: column;
}

.right-box {
  padding: 0.5em 1em;
  background-color: #f5f5f5;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  box-sizing: border-box;
}

.right-link {
  display: block;
  text-decoration: none;
  color: #441111;
  transition: color 0.2s ease-in-out;
}

.right-box:hover {
  background-color: #441111;
  cursor: pointer
}

.right-box:hover a h2 {
  color: #f5f5f5;
}

h1 {
  font-size: 3em;
}

.right-box h2 {
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 1.5em;
}

@media (max-width: 480px) {
  .right-box-wrapper {
    width: 100%;
    margin-left: 1.5em;
    margin-right: 1.5em;
  }

  .nav-box {
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
  }

  .right-box {
    height: auto;
    width: 100%;
    padding: 1em 1em;
  }

  h1 {
    font-size: 2em;
  }

  .right-box h2 {
    font-size: 1em;
  }
}
</style>
