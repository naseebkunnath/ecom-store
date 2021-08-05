<template>
  <div>
    <nav-bar :authUser="authUser"/>
    <router-view />
  </div>
</template>

<script>

import NavBar from "./components/NavBar.vue";

export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    authUser() {
      return this.$store.getters.authUser;
    }
  }
}
</script>

<style>
  .nav-link, .color-white {
    color:white;
  }
</style>