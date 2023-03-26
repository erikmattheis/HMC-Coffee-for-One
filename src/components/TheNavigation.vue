<template>
  <nav>
    <div class="container">
      <div class="left">
        <h1><router-link to="/">Coffee&nbsp;for&nbsp;One</router-link></h1>
      </div>
      <div class="right">
        <ul class="menu">
          <li>
            <h2><router-link to="/project">Project</router-link></h2>
          </li>
          <li>
            <h2><router-link to="/artist">Artist</router-link></h2>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  max-width: 920px;
  margin: 20px auto 0 auto;
}

.left {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 50%;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu li {
  height: 50%;
  text-align: left;
}

h1 {
  font-size: 55px;
  margin: 0;
  text-align: center;
  display: inline-block;
}

h1 a {
  background-color: #441111;
  color: #f5f5f5;
  text-decoration: none;
  padding: 0 30px;
  transition: background-color 0.45s, color 0.45s;
}

nav {
  display: inline-block;
  width: auto;
}

.right h2 {
  margin: 0;
  padding: 0 20px;
  text-align: left;
}

.right h2 a {
  color: #441111;
  text-decoration: none;
  transition: background-color 0.45s, color 0.45s;
}

.right h2:first-child a {
  margin-top: 0;
}

.right h2:last-child a {
  margin-bottom: 0;
}

.left a:hover {
  background-color: #f5f5f5;
  color: #441111;
  cursor: pointer;
}

.right li:hover {
  background-color: #441111;
  cursor: pointer;
}

.right li:hover a {
  color: #f5f5f5;
}
</style>
