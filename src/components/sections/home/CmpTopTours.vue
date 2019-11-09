<template>
  <div>
    <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-5">I tour più gettonati</h2>
    </div>
    <div class="card-deck mb-3 text-center">
      <cmp-card v-for="tour in bestTours" :key="tour.id" :tour="tour" :highlight="'rating'"></cmp-card>
    </div>    
  </div>
</template>

<script>
import CmpCard from '@/components/shared/CmpCard.vue'
export default {
  name: 'CmpTopTours',
  components: {
    CmpCard
  },
  data() {
    return {
      hello: 'Hi',
      tours: this.$store.state.tours
    }
  },
  computed: {
    bestTours() {
      return this.$store.state.tours.filter((tour) => tour.rating >= 4.0);
    }
  }
}
</script>

<style scoped>

</style>
