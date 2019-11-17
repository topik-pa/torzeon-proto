<template>
  <div class="mx-auto text-center stop" v-bind:class="{'private': stop.type=='private' }">
    <h3>{{stop.name}}</h3>

    <h5><a target="_blank" :href="stop.gmaps">See on Gmaps</a></h5>

    <router-link v-if="stop.hasOwnPage" :to="{ name: 'shop', params: { id: stop.id } }" class="btn btn-lg btn-block btn-primary">Pagina dedicata</router-link>

    <p>{{stop.description}}</p>

    <cmp-stop-image v-for="image in stop.images" :key="image.id" :image="image"></cmp-stop-image>

    <div class="ext-urls">
      <span v-for="link in stop.links" :key="link.url">
        <div>
          <a :href="link.url">{{link.name}}</a>
        </div>
      </span>
    </div>

    <button @click="checkStop" type="button" class="btn btn-primary">CHECK</button>

    <h5><a target="_blank" :href="stop.path">See the next path on Gmaps</a></h5>
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
    background-color: #EFEFEF;
  }

  .private {
    
    border: 1px solid gray;
  }
</style>
