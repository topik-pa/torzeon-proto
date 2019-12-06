<template>
<div>

  <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-5" v-html="tour.name"></h1>
    <h2 class="display-5" v-html="tour.description"></h2>
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
        <div v-if="tour.roundTrip">Round trip</div>
        <div v-else>Linear trip</div>
    </div>

    <div class="mt-3">
      <button @click="showAll" type="button" class="btn btn-primary" :class="{disabled: full}">START</button>
    </div>
  </div>
  <div  v-if="full" class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <cmp-stop v-for="stop in tour.stops" :key="stop.id" :stop="stop"></cmp-stop>
  </div>

  <div v-if="full" class="mx-auto text-center paths">
    Promocode for "{{privateStop.name}}": 
    <span v-for="stop in stopsWPromo" :key="stop.promo">
      <span v-if="stop.checked">{{stop.promo}}</span>
      <span v-else>*</span>
    </span>
    <div id="progress">
      <div>
        <progress :value="progress" max="100"></progress>
      </div>
    </div>
    <span v-for="stop in tour.stops" :key="stop.id">
      <span v-if="stop.checked">&ofcir;</span>
      <span v-else>&olcir;</span>
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
      progress: 0,
    }
  },
  props: {
    
  },
  methods: {
    showAll() {
      this.full = true;
      this.progress = 0;
    },
    scroller() {
      var scrollPosition = window.scrollY;
      var scrollSize = document.documentElement.offsetHeight - window.innerHeight;
      var advanced = Math.round((scrollPosition * 100) / scrollSize);
      this.progress = advanced;
    },
    checked() {

    }
  },
  computed: {
    tour() {
      return this.$store.state.tours.filter((tour) => tour.id == this.$route.params.id)[0];
    },
    stopsWPromo() {
      return this.tour.stops.filter((stop) => stop.promo);
    },
    privateStop() {
      return this.tour.stops.filter((stop) => stop.type === 'private')[0];
    }
  },
  created () {
    window.addEventListener('scroll', this.scroller);
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroller);
  }
}
</script>

<style scoped>
.paths {
  background-color: #efefef;
  position: fixed;
  left: 0;
  right: 0;
  top:0;
  border-bottom: 1px solid gray;
}

.paths span {
  margin: 0 .5em;
}


</style>
