<template>
  <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal" v-html="tour.name"></h4>
      </div>
      <div class="card-body">
        <p v-html="tour.description"></p>
        <!--<h3 class="card-title pricing-card-title">&approx; €{{tour.price}} <small class="text-muted">/ each</small></h3>-->
        
        <h3 v-if="highlight == 'rating'" class="card-title pricing-card-title">Rating: {{tour.rating}} <small class="text-muted">/ 5</small></h3>
        <div v-else>
          <h3 class="card-title pricing-card-title"><small>Type: {{tour.type}}</small></h3>
          <h3 class="card-title pricing-card-title"><small>Duration: &approx;{{tour.duration}}</small></h3>
        </div>
        <ul class="list-unstyled mt-3 mb-4">
          <li v-for="checkpoint in tour.checkpoints" :key="checkpoint.id">{{checkpoint.name}}</li>
        </ul>
        <router-link :to="{ name: 'tour', params: { id: tour.id } }" class="btn btn-lg btn-block btn-primary" :class="{disabled: !tour.active}">Start now!</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CmpCard',
  props: {
    tour: Object,
    highlight: String
  }
}
</script>

<style scoped>
.card-header h4 {
  min-height: 2.3em;
}
</style>
