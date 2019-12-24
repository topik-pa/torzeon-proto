<template>
  <div> 
    <cmp-intro/>
    <cmp-find-by/>
    <cmp-tours-near-you/>
    <cmp-top-tours/>
    <cmp-browse-all/>
  </div>
</template>

<script>
import CmpIntro from './CmpIntro.vue'
import CmpFindBy from './CmpFindBy.vue'
import CmpToursNearYou from './CmpToursNearYou.vue'
import CmpTopTours from './CmpTopTours.vue'
import CmpBrowseAll from './CmpBrowseAll.vue'
export default {
  name: 'CmpHome',
  components: {
    CmpIntro,
    CmpFindBy,
    CmpToursNearYou,
    CmpTopTours,
    CmpBrowseAll
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

</style>
