<template>
<div>
  <div>
    <img :src="image.url" :alt="image.alt"/>
    <p>{{image.description}}</p>
  </div>
</div>
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
