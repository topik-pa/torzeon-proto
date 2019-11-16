<template>
<div>

  <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-5">{{tour.name}}</h1>
    <h2 class="display-5">{{tour.description}}</h2>
    <img :src="tour.cover" alt="" class="img-fluid"/>


    <div>
        <strong>Start: </strong>{{tour.start}}
        <strong>End: </strong>{{tour.end}}
    </div>

    <div>
        <strong>Price: </strong>{{tour.price}}
        <strong>Rating: </strong>{{tour.rating}}/5
    </div>

    <div>
        <strong>Type: </strong>{{tour.type}}
        <strong>Duration: </strong>{{tour.duration}}
    </div>

    <div>
        <div v-if="tour.roundTrip">Round</div>
        <div v-else>Linear</div>
    </div>

    <div class="mt-3">
      <button @click="showAll" type="button" class="btn btn-primary">START</button>
    </div>
  </div>
  <div v-if="full" class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <cmp-stop v-for="stop in tour.stops" :key="stop.id" :stop="stop"></cmp-stop>
  </div>

  <div v-if="full" class="mx-auto text-center paths">
    <span v-for="stop in tour.stops" :key="stop.id">
      <span v-if="stop.checked">*</span>
      <span v-else>O</span>
    </span>
  </div>
</div>
</template>

<script>
import CmpStop from './CmpStop.vue'
export default {
  name: 'CmpTour',
  components: {
    CmpStop
  },
  data: function () {
    return {
      full: false,
    }
  },
  props: {
    
  },
  methods: {
    showAll() {
      this.full = true
    }
  },
  computed: {
    tour() {
      return this.$store.state.tours.filter((tour) => tour.id == this.$route.params.id)[0];
    }
  }
}
</script>

<style scoped>
.paths {
  background-color: red;
  position: fixed;
  left: 0;
  right: 0;
  top:0;
}

.paths span {
  margin: 0 .5em;
}


</style>
