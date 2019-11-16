<template>
  <div class="tour-light mb-4 shadow-sm">
    <router-link :to="{ name: 'tour', params: { id: tour.id } }">
      <img :src="tour.cover" height="140"/>
    </router-link>
      <div class="description">
        <h2>{{tour.name}}</h2>
        <p>{{tour.description}}</p>
        <router-link :to="{ name: 'tour', params: { id: tour.id } }" class="btn btn-primary">Inizia adesso</router-link>
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
