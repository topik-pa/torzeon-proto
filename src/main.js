import Vue from 'vue';
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import CmpHome from './components/sections/home/CmpHome.vue';
import CmpTour from './components/sections/tour/CmpTour.vue';
import CmpTours from './components/sections/tours/CmpTours.vue';
import CmpShop from './components/sections/shop/CmpShop.vue';

Vue.use(Vuex)
Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/', name: 'home', component: CmpHome },
  { path: '/tour/:id', name: 'tour', component: CmpTour },
  { path: '/tours', name: 'tours', component: CmpTours },
  { path: '/shop/:id', name: 'shop', component: CmpShop },
];

const router = new VueRouter({
  routes 
});

const store = new Vuex.Store({
  state: {
    count: 0,
    tours: [
      {
        id: 0,
        active: true,
        name: 'Un sorso della Milano da bere',
        description: 'Un breve giro dei punti salienti della città meneghina',
        start: 'Stazione Centrale',
        end: 'Castello Sforzesco',
        price: '16.00',
        rating: 4.6,
        roundTrip: false, 
        city: 'Milano',
        cover: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
        promocode: 'MARC',
        revealedPromocode: '',
        stops: [
          {
            id: 0,            
            name: 'Stazione Centrale',
            type: 'public', 
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            path: 'https://goo.gl/maps/FY7REQsgZu9Ridmx5',
            description: 'Il momento più significativo...',
            checked: false,
            hasOwnPage: false,
            promo: 'M',
            links: [
              {
                url: 'https://it.wikipedia.org/wiki/Misato_Katsuragi',
                name: 'Info da Wikipedia'
              }
            ],
            images: [
              {
                id: 0,
                url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
                alt: '',
                description: 'Una bella immagine'
              }
            ]           
          },
          {
            id: 1,
            name: 'Teatro alla Scala',
            type: 'public', 
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            path: 'https://goo.gl/maps/FY7REQsgZu9Ridmx5', 
            description: '',
            checked: false,
            hasOwnPage: false,
            promo: 'A',
            links: [
              {
                url: '',
                name: ''
              }
            ],
            images: [
              {
                id: 0,
                url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
                alt: '',
                description: ''
              }
            ]             
          },
          {
            id: 2,
            name: 'Duomo',
            type: 'public', 
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            path: 'https://goo.gl/maps/FY7REQsgZu9Ridmx5',
            description: '',
            checked: false,
            hasOwnPage: false,
            promo: 'R',
            links: [
              {
                url: '',
                name: ''
              }
            ],
            images: [
              {
                id: 0,
                url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
                alt: '',
                description: ''
              }
            ]              
          },
          {
            id: 3,
            name: 'Caffè Vecchia Brera',
            type: 'private', 
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            path: 'https://goo.gl/maps/FY7REQsgZu9Ridmx5',  
            description: '',
            checked: false,
            hasOwnPage: true,
            promo: 'C',            
            links: [
              {
                url: '',
                name: ''
              }
            ],
            images: [
              {
                id: 0,
                url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
                alt: '',
                description: ''
              }
            ]            
          },
          {
            id: 4,
            name: 'Castello Sforzesco',
            type: 'public', 
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            description: '',
            checked: false,
            hasOwnPage: false,
            promo: '',
            images: [
              {
                id: 0,
                url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
                alt: '',
                description: ''
              }
            ]              
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
        rating: 4.0,
        roundTrip: false, 
        city: 'Milano',
        cover: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
        stops: [
          {
            id: 0,
            name: 'Duomo di Milano',
            type: 'public',  
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            path: 'https://goo.gl/maps/FY7REQsgZu9Ridmx5', 
            description: '',
            checked: false,
            hasOwnPage: false,
            links: [
              {
                url: '',
                name: ''
              }
            ],
            images: [
              {
                id: 0,
                url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
                alt: '',
                description: ''
              }
            ]            
          },
          {
            id: 1,
            name: 'Casa di Manzoni',
            type: 'public', 
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            path: 'https://goo.gl/maps/FY7REQsgZu9Ridmx5',
            description: '',
            checked: false,
            hasOwnPage: false,
            links: [
              {
                url: '',
                name: ''
              }
            ],             
          },
          {
            id: 2,
            name: 'Pellicani a Milano',
            type: 'public', 
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            path: 'https://goo.gl/maps/FY7REQsgZu9Ridmx5', 
            description: '',
            checked: false,
            hasOwnPage: false,
            links: [
              {
                url: '',
                name: ''
              }
            ],            
          },
          {
            id: 3,
            name: 'Ristorante da Cencio',
            type: 'private',  
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            description: '',
            checked: false,
            hasOwnPage: false,
            images: [
              {
                id: 0,
                url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
                alt: '',
                description: ''
              }
            ]             
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
        rating: 2.6,
        roundTrip: false, 
        city: 'Milano',
        cover: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
        stops: [
          {
            id: 0,
            name: 'Teatro alla Scala',
            type: 'public',   
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            path: 'https://goo.gl/maps/FY7REQsgZu9Ridmx5',
            description: '',
            checked: false,
            hasOwnPage: false,
            links: [
              {
                url: '',
                name: ''
              }
            ],
            images: [
              {
                id: 0,
                url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
                alt: '',
                description: ''
              }
            ]            
          },
          {
            id: 1,
            name: 'Terrazza Aperol',
            type: 'private',  
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            path: 'https://goo.gl/maps/FY7REQsgZu9Ridmx5',  
            description: '',
            checked: false,
            hasOwnPage: false,
            links: [
              {
                url: '',
                name: ''
              }
            ],          
          },
          {
            id: 2,
            name: 'Ristorante al Bauscia',
            type: 'private', 
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            checked: false,
            hasOwnPage: false,
          },
        ],
        duration: '4h 20m',
        type: 'Culturale',
        slug: 'itinerario-milano-teatro-e-aperitivo'
      }
    ],
    shops: [
      {
        id: 3,
        name: 'Vecchia Brera',
        verified: true,
        address: '',
        description: '',
        location: '',
        amenities: {
          wifi: true,
          conditioning: true,
          promotions: true,
          garden: false,
          terrace: false,
          deor: true,
          handicapp: true
        },
        languages: {
          italian: true,
          english: true,
          german: false,
          chinese: false,
        },
        images: [
          {
            id: 0,
            url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
            alt: '',
            description: 'Una bella immagine'
          }
        ]

      }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
