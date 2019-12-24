<template>
  <section>
      <img :src="image.url" :alt="image.alt"/>
      <h4>{{image.name}}</h4>
      <p>{{image.description}}</p>
  </section>
</template>

<script>
export default {
  name: 'CmpStopImage',
  data: function () {
    return {
      
    }
  },
  props: {
    image: Object
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
