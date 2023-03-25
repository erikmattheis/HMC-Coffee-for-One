<template>
  <nav>
    <h1><router-link to="/">Coffee for One</router-link></h1>
    <ul class="menu">
      <li>
        <h2><router-link to="/project">Project</router-link></h2>
      </li>
      <li>
        <h2><router-link to="/artist">Artist</router-link></h2>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 720px;
    margin: 20px auto 0 auto;
    list-style: none;
  }

  .menu li {
    width: 125px;
    height: 50px;
    transition: background-position-x 0.9s linear;
    text-align: center;
  }

  h1 a,
  .menu li a {
    color: #100;
    text-decoration: none;
    transition: all 0.45s;
  }

  h1 a {
    font-size: 42px;
  }
  li h2 a {
    font-size: 32px;
  }

  h1 a:hover,
  li h2 a:hover {
    color: #666;
  }

  .menu li:not(:last-child) {
    margin-right: 30px;
  }
</style>
