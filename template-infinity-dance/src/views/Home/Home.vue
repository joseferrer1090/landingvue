<template>
  <div class="clearfix" id="wrapper">
    <menubar/>
    <p>Este es el contenido del home</p>
    <footer/>
  </div>
</template>

<script>

  import Menu from "./../../components/Menu.vue";
  import Footer from "./../../components/Footer.vue"

  export default {
    name: "Home",
    components: {
      "menubar": Menu,
      "footer": Footer
    }
  }
</script>