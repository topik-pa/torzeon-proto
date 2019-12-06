<template>
  <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">    
    <h5 class="my-0 mr-md-auto font-weight-normal">      
      <router-link to="/"><img alt="Vue logo" src="@/assets/logo.png" height="45">Torzeon</router-link>
    </h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link to="/">Home</router-link>
      <router-link to="#" class="disabled">Contact us</router-link>
      <router-link to="#" class="disabled">Sign up</router-link>
    </nav>    
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
nav a {
  margin: 0 1rem;
}
</style>