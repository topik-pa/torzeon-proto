<template>
  <div id="app">
    <cmp-header/>
    <div class="container">
      <router-view/>
      <cmp-footer/>
    </div>   
  </div>
</template>

<script>
import CmpHeader from './components/shared/CmpHeader.vue'
import CmpFooter from './components/shared/CmpFooter.vue'

export default {
  name: 'app',
  components: {
    CmpHeader,
    CmpFooter
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

section {
  margin: 3em 0;
}

section p {
  font-style: italic;
}

a.disabled {
  color: gray;
  pointer-events: none;
}
</style>
