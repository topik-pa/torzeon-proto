<template>
  <div>
    <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-5">Itinerari vicini a te</h2>
    </div>
    <div class="card-deck mb-3 text-center">
      <cmp-card v-for="tour in tours" :key="tour.id" :tour="tour"></cmp-card>
    </div>
  </div>
</template>

<script>
import CmpCard from '@/components/shared/CmpCard.vue'
export default {
  name: 'CmpSuggestions',
  components: {
    CmpCard
  },
  data() {
    return {
      hello: 'Hi',
      tours: [
        {
          id: 0,
          active: true,
          name: 'Un sorso della Milano da bere',
          description: 'Un breve giro dei punti salienti della città meneghina',
          start: 'Stazione Centrale',
          end: 'Castello Sforzesco',
          price: '16.00',
          checkpoints: [
            {
              id: 0,
              name: 'Stazione Centrale',
              type: 'public',              
            },
            {
              id: 1,
              name: 'Teatro alla Scala',
              type: 'public',              
            },
            {
              id: 2,
              name: 'Duomo',
              type: 'public',              
            },
            {
              id: 3,
              name: 'Caffè Vecchia Brera',
              type: 'private',              
            },
            {
              id: 4,
              name: 'Castello Sforzesco',
              type: 'public',              
            },
          ],
          duration: '3h 45m',
          type: 'Classico',
          slug: 'itinerario-milano-stazione-duomo-castello-sforzesco'
        },

        {
          id: 1,
          active: false,
          name: 'Hai mai visto i pellicani a Milano?',
          description: 'Un giro attraverso le curiosità di una Milano che non ti aspetti',
          start: 'Duomo di Milano',
          end: 'Duomo di Milano',
          price: '8.00',
          checkpoints: [
            {
              id: 0,
              name: 'Duomo di Milano',
              type: 'public',              
            },
            {
              id: 1,
              name: 'Casa di Manzoni',
              type: 'public',              
            },
            {
              id: 2,
              name: 'Pellicani a Milano',
              type: 'public',              
            },
            {
              id: 3,
              name: 'Ristorante da Cencio',
              type: 'private',              
            },
          ],
          duration: '2h 30m',
          type: 'Ciriosità',
          slug: 'itinerario-milano-pellicani'
        },

        {
          id: 2,
          active: false,
          name: 'Stasera? <br/> Teatro!',
          description: 'Serata di cultura culinaria e teatrale nel centro cittadino',
          start: 'Teatro alla Scala',
          end: 'Piazza Gae Aulenti',
          price: '140.00',
          checkpoints: [
            {
              id: 0,
              name: 'Teatro alla Scala',
              type: 'public',              
            },
            {
              id: 1,
              name: 'Terrazza Aperol',
              type: 'private',              
            },
            {
              id: 2,
              name: 'Ristorante al Bauscia',
              type: 'private',              
            },
          ],
          duration: '4h 20m',
          type: 'Culturale',
          slug: 'itinerario-milano-teatro-e-aperitivo'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
