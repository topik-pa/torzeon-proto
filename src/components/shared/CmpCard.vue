<template>
  <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal" v-html="tour.name"></h4>
      </div>
      <div class="card-body">
        <p>
          {{tour.description}}
        </p>
        <h3 class="card-title pricing-card-title">€{{tour.price}} <small class="text-muted">/ persona</small></h3>
        <h4 v-if="highlight == 'rating'" class="card-title pricing-card-title">Rating: {{tour.rating}} <small class="text-muted">/ 5</small></h4>
        <ul class="list-unstyled mt-3 mb-4">
          <li v-for="checkpoint in tour.checkpoints" :key="checkpoint.id">{{checkpoint.name}}</li>
        </ul>
        <router-link :to="{ name: 'tour', params: { id: tour.id } }" class="btn btn-lg btn-block btn-primary">Inizia adesso</router-link>
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

</style>
