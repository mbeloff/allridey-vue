import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: ['australia', 'newzealand', 'southafrica'],
    global: [
      {
        name: 'Australia',
        urlname: 'australia',
        type: [
          {
            name: '2WD',
            section: [
              {
                heading: 'Damage Cover',
                data: [['Damage Cover', '$30/day Manual / $35/day Auto']]
              },
              {
                heading: 'Accomodation: January through October',
                data: [
                  ['Standard Car', '$0'],
                  ['Car with Roof Tent', '$15'],
                  ['Camper with Accom for 2', '$25'],
                  ['Camper with Accom for 3', '$35'],
                  ['Camper with Accom for 5', '$45']
                ]
              },
              {
                heading: 'Accomodation Variations',
                data: [['Hobart', '+$10']]
              },
              {
                heading: 'Kilometres',
                data: [
                  ['Kilometre Allowance', '250km/day included'],
                  ['Extra Kilometres', '$0.20/km'],
                  ['Unlimited Kilometres', '$20/day'],
                  [
                    'Minimum Hire for Unlimited Km',
                    'Zone 1: 2 Days / Zone 2: 5 Days'
                  ]
                ]
              },
              {
                heading: 'One Way Fees',
                data: [
                  ['Within Zone 1', '$150'],
                  ['Within Zone 2', '$500'],
                  ['Between Zone 1 & 2', '$500']
                ]
              },
              {
                heading: 'Premium Location Fees',
                data: [
                  [
                    'Darwin, Exmouth, Shark Bay, Alice Springs, Byron Bay',
                    '$85'
                  ],
                  ['Hobart', '$150'],
                  ['Broome', '$200']
                ]
              },
              {
                heading: 'Bonds',
                data: [
                  ['With Credit Card', '$0'],
                  ['No Credit Card', '$1000']
                ]
              },
              {
                heading: 'Administration Fee',
                data: [['', '7%']]
              }
            ],
            models: [
              {
                name: 'Standard Car',
                accom: '0',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1578014344/cv/allridey-i20.jpg'
              },
              {
                name: 'Car with Roof Ten',
                accom: '2-3',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1578014345/cv/bondi-mini-3.jpg'
              }
            ]
          },
          {
            name: '4WD',
            section: [
              {
                heading: 'Damage Cover',
                data: [['Damage Cover', '$55/day']]
              },
              {
                heading: 'Accomodation: January through June 15',
                data: [
                  ['Standard 4WD (no accom)', '$0'],
                  ['Premium 4WD (no accom)', '$35'],
                  ['AWD with accom for 5', '$45'],
                  ['4WD with accom for 2', '$45'],
                  ['Premium 4WD with accom for 2-5', '$75'],
                  ['Premium 4WD with accom for 2', '$95']
                ]
              },
              {
                heading: 'Accomodation: JUne 15 through October',
                data: [
                  ['Standard 4WD (no accom)', '$25'],
                  ['Premium 4WD (no accom)', '$55'],
                  ['AWD with accom for 5', '$95'],
                  ['4WD with accom for 2', '$85'],
                  ['Premium 4WD with accom for 2-5', '$140'],
                  ['Premium 4WD with accom for 2', '$160']
                ]
              },
              {
                heading: 'Accomodation Variations',
                data: [['Hobart', '+$10']]
              },
              {
                heading: 'Kilometres',
                data: [
                  ['Kilometre Allowance', '250km/day included'],
                  ['Extra Kilometres', '$0.20/km'],
                  ['Unlimited Kilometres', '$20/day'],
                  [
                    'Minimum Hire for Unlimited Km',
                    'Zone 1: 2 Days / Zone 2: 5 Days'
                  ]
                ]
              },
              {
                heading: 'One Way Fees',
                data: [
                  ['Within Zone 1', '$150'],
                  ['Within Zone 2', '$500'],
                  ['Between Zone 1 & 2', '$500']
                ]
              },
              {
                heading: 'Premium Location Fees',
                data: [
                  ['Exmouth, Shark Bay, Byron Bay', '$85'],
                  ['Darwin, Hobart, ALice Springs, Exmouth', '$150'],
                  ['Broome', '$400']
                ]
              },
              {
                heading: 'Bonds',
                data: [
                  ['With Credit Card', '$0'],
                  ['No Credit Card', '$1000'],
                  ['4WD/AWD Area of Use & Sand Bond', '$1000']
                ]
              },
              {
                heading: 'Administration Fee',
                data: [['', '10%']]
              }
            ]
          }
        ]
      },
      {
        name: 'New Zealand',
        urlname: 'newzealand'
      },
      {
        name: 'South Africa',
        urlname: 'southafrica'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
