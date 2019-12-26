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

import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

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
        name: 'A first taste of Milan',
        description: 'A short time trip around the main places on the city center with a taste of a delicious cr&ecirc;pe Milan style!',
        start: 'Stazione Centrale',
        end: 'Castello Sforzesco',
        price: '16.00',
        rating: 4.6,
        roundTrip: false, 
        city: 'Milano',
        cover: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
        stops: [
          {
            id: 0,            
            name: 'Stazione Centrale',
            type: 'public', 
            gmaps: 'https://goo.gl/maps/4UesoB2u579WrBm68',
            path: 'https://goo.gl/maps/FY7REQsgZu9Ridmx5',
            description: 'Here we are in the first step of our journey... <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc. Nulla id justo varius, auctor elit ac, tristique erat.',
            checked: false,
            hasOwnPage: false,
            promo: 'M',
            action: 'check',
            links: [
              {
                url: 'https://it.wikipedia.org/wiki/Stazione_di_Milano_Centrale',
                name: 'Stazione Centrale (from Wikipedia)'
              },
              {
                url: 'https://www.esquire.com/it/lifestyle/viaggi/a19151611/stazione-centrale-milano-curiosita/',
                name: 'Stazione Centrale (from Esquire)'
              },
              {
                url: 'https://www.panorama.it/cultura/arte-idee/michelangelo-pistoletto-spiega-la-sua-mela-reintegrata/',
                name: 'The apple (from Panorama)'
              }
            ],
            images: [
              {
                id: 0,
                name: 'Stazione Centrale main building',
                url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-923042218-1520434856.jpg?crop=1.00xw:0.847xh;0,0.0987xh&resize=480:*',
                alt: 'First image of stazione Centrale',
                description: 'The station was build in the... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc. Nulla id justo varius, auctor elit ac, tristique erat.'
              },
              {
                id: 1,
                name: 'The apple monument',
                url: 'https://www.artribune.com/wp-content/uploads/2016/03/La-Mela-Reintegrata-di-Pistoletto-in-Piazza-Duca-dAosta.jpg',
                alt: 'Second image of stazione Centrale',
                description: 'The big apple of Stazione Centrale... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.'
              }
            ]           
          },
          {
            id: 1,
            name: 'Teatro alla Scala',
            type: 'public', 
            gmaps: 'https://goo.gl/maps/hVMBRy9w6YL9ExY36',
            path: 'https://goo.gl/maps/LEynU8cz43AewS6e7', 
            description: 'One of the most famous... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc. Nulla id justo varius, auctor elit ac, tristique erat.',
            checked: false,
            hasOwnPage: false,
            promo: 'A',
            action: 'check',
            links: [
              {
                url: 'http://www.teatroallascala.org/it/index.html',
                name: 'Teatro alla Scala (official site)'
              },
              {
                url: 'https://it.wikipedia.org/wiki/Teatro_alla_Scala',
                name: 'Teatro alla Scala (Wikipedia)'
              }
            ],
            images: [
              {
                id: 0,
                name: 'Teatro alla Scala main building',
                url: 'https://quifinanza.files.wordpress.com/2019/03/teatro-alla-scala.jpg',
                alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.'
              },
              {
                id: 1,
                name: 'Teatro alla Scala interiors',
                url: 'https://onanotiziarioamianto.it/wp-content/uploads/2019/07/teatro-Scala.jpg',
                alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.'
              }
            ]             
          },
          {
            id: 2,
            name: 'Duomo',
            type: 'public', 
            gmaps: 'https://goo.gl/maps/aWae9qkr1GasgJQs5',
            path: 'https://goo.gl/maps/eKiBCzHGzNBUuaUe7',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc. Nulla id justo varius, auctor elit ac, tristique erat.',
            checked: false,
            hasOwnPage: false,
            promo: 'R',
            action: 'check',
            links: [
              {
                url: 'https://www.duomomilano.it/it/',
                name: 'Duomo di Milano (Official site)'
              },
              {
                url: 'https://it.wikipedia.org/wiki/Duomo_di_Milano',
                name: 'Duomo di Milano (Wikipedia)'
              }
            ],
            images: [
              {
                id: 0,
                url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
                alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.'
              },
              {
                id: 1,
                url: 'https://i2.wp.com/www.maart.mi.it/wp-content/uploads/2017/04/Maart-Milano-Duomo.png',
                alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.'
              }
            ]              
          },
          {
            id: 3,
            name: 'Caffè Vecchia Brera',
            type: 'private', 
            gmaps: 'https://goo.gl/maps/1KGVb7GvAwsJ1WQ88',
            path: 'https://goo.gl/maps/gwBY1VmGQm6K2eVs5', 
            fbPage: 'https://www.facebook.com/friuliforlife/', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
            checked: false,
            hasOwnPage: true,
            promo: 'C', 
            action: 'promo',           
            links: [
              {
                url: 'https://www.creperiacaffevecchiabrera.it/',
                name: 'Caffè Vecchia Brera (Official site)'
              }
            ],
            images: [
              {
                id: 0,
                url: 'https://media-cdn.tripadvisor.com/media/photo-s/14/fc/5e/56/welcoming-frontage.jpg',
                alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.'
              }
            ]            
          },
          {
            id: 4,
            name: 'Castello Sforzesco',
            type: 'public', 
            gmaps: 'https://goo.gl/maps/WmsDrifoSoWW1jej7',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
            checked: false,
            hasOwnPage: false, 
            promo: '',
            action: 'last',
            links: [
              {
                url: 'https://www.milanocastello.it/',
                name: 'Castello Sforzesco (official site)'
              },
              {
                url: 'https://it.wikipedia.org/wiki/Castello_Sforzesco',
                name: 'Castello Sforzesco (from Wikipedia)'
              }
            ],
            images: [
              {
                id: 0,
                url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg',
                alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.'
              },
              {
                id: 1,
                url: 'https://www.turismo.it/typo3temp/pics/24bd0ac83b.jpg',
                alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.'
              }
            ]              
          },
        ],
        duration: '3h 45m',
        type: 'Classic',
        slug: 'itinerario-milano-stazione-duomo-castello-sforzesco'
      },

      {
        id: 1,
        active: false,
        name: 'Did you ever seen pelicans in Milano?',
        description: 'A tour to see a never seen Milan<br/><br/>',
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
        type: 'Curiosità',
        slug: 'itinerario-milano-pellicani'
      },

      {
        id: 2,
        active: false,
        name: 'Tonight? <br/> Theatre!',
        description: 'A evening in the most famous Theatre in Milan in the city center<br/><br/>',
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
        name: 'Caffè Vecchia Brera',
        verified: true,
        address: 'Via dell’Orso, 20 – 20121 – Milano',
        description: 'A real bistrot Paris style',
        website: 'https://www.creperiacaffevecchiabrera.it/',
        tel: '+39 02 86 46 16 95',
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
            name: 'The Cafè',
            url: 'https://qul.imgix.net/483966d3-1592-48e0-8362-4acd21482c2d/354488_sld.jpg',
            alt: 'An image description',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam ullamcorper leo, at mollis magna tempus sit amet. In hac habitasse platea dictumst.'
          },
          {
            id: 1,
            name: 'Menù',
            url: 'https://b.zmtcdn.com/data/pictures/6/16300806/26fdfe96e84d7ad9e2ccd9ef77efe5c8_featured_v2.jpg',
            alt: 'An image description',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam ullamcorper leo, at mollis magna tempus sit amet. In hac habitasse platea dictumst.'
          },
          {
            id: 3,
            name: 'Our suggestion',
            url: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/32/78/67/caffe-vecchia-brera.jpg',
            alt: 'An image description',
            description: 'The Crepe with Grand Marnier - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam ullamcorper leo, at mollis magna tempus sit amet. EUR 8.50'
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
