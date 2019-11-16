<template>
<div>
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">All tours</h1>
  </div>
  <cmp-tour-light v-for="tour in tours" :key="tour.id" :tour="tour"></cmp-tour-light>
</div>
</template>

<script>
import CmpTourLight from '@/components/shared/CmpTourLight.vue'
export default {
  name: 'CmpTours',
  components: {
    CmpTourLight
  },
  props: {
  },
  data() {
    return {
      tours: this.$store.state.tours
    }
  },
}
</script>

<style scoped>

</style>
