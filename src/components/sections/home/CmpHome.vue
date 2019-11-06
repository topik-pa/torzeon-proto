<template>
  <div> 
    <cmp-intro/>
    <cmp-suggestions/>
    <cmp-find-tour/>
  </div>
</template>

<script>
import CmpIntro from './CmpIntro.vue'
import CmpSuggestions from './CmpSuggestions.vue'
import CmpFindTour from './CmpFindTour.vue'
export default {
  name: 'CmpHome',
  components: {
    CmpIntro,
    CmpSuggestions,
    CmpFindTour
  }
}
</script>

<style scoped>

</style>
