<template>
  <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <img alt="Vue logo" src="@/assets/logo.png" height="45">
    <h5 class="my-0 mr-md-auto font-weight-normal">Torzeon</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link to="/">Home</router-link>
      <router-link to="#">Contact us</router-link>
    </nav>
    <a class="btn btn-outline-primary" href="#">Sign up</a>
  </header>
</template>

<script>
export default {
  name: 'CmpHeader',
  props: {
  }
}
</script>

<style scoped>

</style>