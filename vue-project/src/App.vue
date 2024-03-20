<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>

    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" /> -->
      <Header>      </Header>






    <!-- </div> -->


  <RouterView />
  <Footer></Footer> 
</template>
<style>
@import url('https://fonts.cdnfonts.com/css/agency-fb');
@import url('https://fonts.cdnfonts.com/css/hvdtrial-brandon-grotesque');



body {
  display: grid;
  place-items: center;
  font-family: 'HvDTrial Brandon Grotesque', sans-serif;
  /* min-height: 100vh; */
}
#app {
  inline-size: 400px;
}

img#real_estate {
  inline-size: 8rem;
  margin: .9rem 1rem .5rem 1rem;
  position: relative;
  z-index: 50;
}

h1 {
  font-size: 1.1rem;
  flex-wrap: wrap;
  margin-block-end: -1rem;
  text-transform:uppercase;
  margin-block-start: 2rem;
}

main {
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem;
}

</style>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}



/* body {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  margin: 0;
} */

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
