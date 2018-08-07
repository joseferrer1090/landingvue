<template>
  <div class="AllApp">
    <menubar/>

    <router-view></router-view>

    <footer-content/>
  </div>
</template>

<script>

import Menu from "./components/home/partials/Menu.vue";
import Footer from "./components/home/partials/FooterContent.vue"

export default {
  name: 'App',
  components: {
    "menubar": Menu,
    "footer-content": Footer
  }
}
</script>

<style lang="sass">
  @import 'src/assets/css/main';
</style>
