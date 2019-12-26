<template>
  <div>
    <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-5">{{shop.name}}</h1>
      <h2 class="display-5">{{shop.description}}</h2>


        <p>{{shop.address}}<br/>
        {{shop.tel}}<br/>
        {{shop.website}}</p>
  


      <section>
        <h3>Available services</h3>
        <div v-for="(value, key, index) in shop.amenities" :key="index" :class="{'active': value}" class="service">
          {{ key }}
        </div>
      </section>


      <section>
        <h3>Spoken languages</h3>
        <div v-for="(value, key, index) in shop.languages" :key="index" :class="{'active': value}" class="service">
          {{ key }}
        </div>
      </section>


      <section v-for="image in shop.images" :key="image.id">
        <h3>{{image.name}}</h3>
        <img :src="image.url" :alt="image.alt"/>          
        <p v-html="image.description"></p>
      </section>


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
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
  .service {
    color: red;
  }
  .active {
    color: green;
  }
</style>
