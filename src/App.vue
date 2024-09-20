<template>
  <div class="wrapper">
  <header>
    <a href="#">
      <img
          src="@/images/logo.svg"
          alt="логотип"/>
    </a>
  <nav>
    <router-link to="/">Форма</router-link>
    <router-link to="/preview">Превью</router-link>
  </nav>
  </header>
  <footer>
    <a href="#">
      all rights reserved
    </a>
  </footer>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

header {
  min-height: 76px;
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.10);
  padding-top: 28px;
  display: flex;

}

header a {
  padding-left: 92px;
}

nav {
  padding-left: 473px;
}
nav a {
  padding: 0 12px 0 12px;
  text-decoration: none;

  color: rgba(17, 17, 17, 0.48);
  /* 16 Paragraph 2 */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
}

footer {
  padding-top: 30px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 76px;
  background: #FAFAFA;
  /* BottomLine */
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.10);
}
footer a {
  text-decoration: none;
  color: #000;

  /* 13 Paragraph 3 */
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

</style>
