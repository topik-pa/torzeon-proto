<template>
  <div class="mx-auto text-center stop" v-bind:class="{'private': stop.type=='private' }">
    <h3>{{stop.name}}</h3>

    <h4><a target="_blank" :href="stop.gmaps">Where am I?</a></h4>

    <router-link v-if="stop.hasOwnPage" :to="{ name: 'shop', params: { id: stop.id } }" class="btn btn-lg btn-primary" target="_blank">View more about this location</router-link>

    <p v-html="stop.description"></p>

    <cmp-stop-image v-for="image in stop.images" :key="image.id" :image="image"></cmp-stop-image>

    <section>
      <h4>Other infos from the Web</h4>
      <span v-for="link in stop.links" :key="link.url">
        <div>
          <a :href="link.url" target="_blank">{{link.name}}</a>
        </div>
      </span>
    </section>

    <section>
      <h4>Are you here?</h4>
      <button @click="checkStop" type="button" class="btn btn-primary" :class="{disabled: stop.checked}"><strong>CHECK</strong> THIS LOCATION!</button>
    </section>

    <section v-if="stop.path">
      <h4>Ready for the next step?</h4>
      <a target="_blank" :href="stop.path" type="button" class="btn btn-secondary">Reach next location</a>
    </section>

  </div>
</template>

<script>
import CmpStopImage from './CmpStopImage.vue'
export default {
  name: 'CmpStop',
  components: {
    CmpStopImage
  },
  data: function () {
    return {
      
    }
  },
  props: {
    stop: Object
  },
  methods: {
    checkStop() {
      this.stop.checked = true;
      if(stop.action === 'last') {
        //
      }     
    }
  },
  computed: {

  }
}
</script>

<style scoped>
  .stop {
    margin: 3em 0;    
    padding: 2em 1em;
    background-color: #f8f8f8;
  }
  .private {
    border: 1px solid gray;
    background-color: #efefef;
  }
</style>
