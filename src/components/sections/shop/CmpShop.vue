<template>
  <div>
    <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-5">{{shop.name}}</h1>



    </div>
  </div>
</template>

<script>
export default {
  name: 'CmpShop',
  components: {

  },
  data: function () {
    return {

    }
  },
  props: {
    
  },
  methods: {

  },
  computed: {
    shop() {
      return this.$store.state.shops.filter((shop) => shop.id == this.$route.params.id)[0];
    }
  }
}
</script>

<style scoped>

</style>
