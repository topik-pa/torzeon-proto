<template>
  <div class="tour-light mb-4 shadow-sm">
    <router-link :to="{ name: 'tour', params: { id: tour.id } }">
      <img :src="tour.cover" height="140"/>
    </router-link>
      <div class="description">
        <h2 v-html="tour.name"></h2>
        <p v-html="tour.description"></p>
        <router-link :to="{ name: 'tour', params: { id: tour.id } }" class="btn btn-primary" :class="{disabled: !tour.active}">Start this tour!</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CmpTourLight',
  props: {
    tour: Object,
  }
}
</script>

<style scoped>
 .tour-light {
   padding: 1rem;
   display: flex;
 }
 .description {
   padding-left: 2em;
 }
</style>
