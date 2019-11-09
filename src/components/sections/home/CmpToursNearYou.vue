<template>
  <div>
    <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-5">Itinerari vicini a te</h2>
    </div>
    <div class="card-deck mb-3 text-center">
      <cmp-card v-for="tour in tours" :key="tour.id" :tour="tour"></cmp-card>
    </div>
  </div>
</template>

<script>
import CmpCard from '@/components/shared/CmpCard.vue'
export default {
  name: 'CmpSuggestions',
  components: {
    CmpCard
  },
  data() {
    return {
      hello: 'Hi',
      tours: this.$store.state.tours
    }
  },
}
</script>

<style scoped>

</style>
