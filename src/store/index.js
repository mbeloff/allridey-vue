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
        map:
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1582169132/maps/blue-map-au-zones.svg',
        policies:
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1583199066/cv/docs/au_policies_0220.pdf',
        vra:
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1583199065/cv/docs/au_rental_agreement_0220.pdf',
        type: [
          {
            name: '2WD',
            section: [
              {
                heading: 'Damage Cover',
                data: [['Damage Cover', '$30 Manual / $35 Auto']]
              },
              {
                heading: 'Accomodation: January through October',
                data: [
                  ['Standard Car no accom', '$0/day', 'n'],
                  ['Car with Roof Tent (ending soon)', '$15/day', 'n'],
                  ['Camper with Accom for 2', '$25/day', 'n'],
                  ['Camper with Accom for 3', '$35/day', 'n'],
                  ['Camper with Accom for 5', '$45/day', 'n']
                ]
              },
              {
                heading: 'Accomodation Variations',
                data: [['Hobart', '+$10/day']]
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
                heading: 'Administration',
                data: [['Booking Fee', '7%']]
              }
            ],
            models: [
              {
                name: 'Standard Car no accom',
                number: '1',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/Australia/All-Ridey/all-ridey-car',
                accom: '0',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1578014344/cv/allridey-i20.jpg'
              },
              // {
              //   name: 'Car with Roof Tent',
              //   number: '2',
              //   link:
              //     'https://campervanvillage.netlify.com/Vehicles/Australia/Bondi/compact-3-sleeper',
              //   accom: '2-3',
              //   img:
              //     'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1578014345/cv/bondi-mini-3.jpg'
              // },
              {
                name: 'Camper w/ 2 accom auto',
                number: '3',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/Australia/Aventus/aventus-2-Berth-a',
                accom: '2-3',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v3/cv/aventus-2-berth-automatic.jpg'
              },
              {
                name: 'Camper w/ 2 accom manual',
                number: '3',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/Australia/Aventus/aventus-2-Berth-m',
                accom: '2-3',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v2/cv/aventus-2-berth-manual.jpg'
              },
              {
                name: 'Camper w/ 2 or 3 accom',
                number: '3/4',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/Australia/Mystery-Machine',
                accom: '2-3',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1/cv/mm-2-berth.jpg'
              },
              {
                name: 'Camper w/ 5 accom',
                number: '5',
                link: '',
                accom: '2-3',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1578014344/cv/bondi-awd-5.jpg'
              }
            ]
          },
          {
            name: '4WD',
            note:
              'Please note: for all AWD/4WD hires, full payment must be made within 7 days of making a booking',
            section: [
              {
                heading: 'Damage Cover',
                data: [['Damage Cover', '$55/day']]
              },
              {
                heading: 'Accomodation: January through June 15',
                data: [
                  ['Standard 4WD (no accom)', '$0/day', 'n'],
                  ['AWD with accom for 5', '$45/day', 'n'],
                  ['4WD with accom for 2', '$45/day', 'n'],
                  ['Premium 4WD with accom for 2-5', '$75/day', 'n'],
                  ['Premium 4WD with accom for 2', '$95/day', 'n']
                ]
              },
              {
                heading: 'Accomodation: JUne 15 through October',
                data: [
                  ['Standard 4WD (no accom)', '$25/day', 'n'],
                  ['AWD with accom for 5', '$95/day', 'n'],
                  ['4WD with accom for 2', '$85/day', 'n'],
                  ['Premium 4WD with accom for 2-5', '$140/day', 'n'],
                  ['Premium 4WD with accom for 2', '$160/day', 'n']
                ]
              },
              {
                heading: 'Accomodation Variations',
                data: [['Hobart', '+$10/day']]
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
                  ['Shark Bay, Byron Bay', '$85'],
                  ['Darwin, Hobart, Alice Springs, Exmouth', '$150'],
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
                heading: 'Administration',
                data: [['Booking Fee', '10%']]
              }
            ],
            models: [
              {
                name: 'Standard 4WD no accom',
                number: '1',
                link: '',
                accom: '0',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1582167523/cv/rav4.jpg'
              },
              {
                name: 'AWD w/ accom for 5',
                number: '2',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/Australia/Bondi/AWD-5-sleeper',
                accom: '0',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v2/cv/bondi-awd-5.jpg'
              },
              {
                name: '4WD w/ accom for 2',
                number: '3',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/Australia/Armadillo/armadillo-2-Sleeper',
                accom: '2',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1576634305/cv/armadillo-2-sleeper.jpg'
              },
              {
                name: 'Premium 4WD w/ accom for 2-5',
                number: '4',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/Australia/Grip-4WD/grip-2-5-Berth',
                accom: '2-5',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v2/cv/grip-2-5-berth.jpg'
              },
              {
                name: 'Premium 4WD w/ accom for 2',
                number: '5',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/Australia/Armadillo/armadillo-fj-2-sleeper',
                accom: '2',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1577933595/cv/fj.jpg'
              }
            ]
          }
        ]
      },
      {
        name: 'New Zealand',
        urlname: 'newzealand',
        map:
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1582169131/maps/blue-map-nz-zones.svg',
        policies:
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1583199078/cv/docs/NZPOLICIES0220.pdf',
        vra:
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1583199078/cv/docs/NZVRA0220.pdf',
        type: [
          {
            name: '2WD',
            section: [
              {
                heading: 'Damage Cover',
                data: [['Damage Cover', '$30 Manual / $35 Auto']]
              },
              {
                heading: 'Accomodation: January through October',
                data: [
                  ['Standard Car no accom', '$0/day', 'n'],
                  ['Camper with Accom for 2', '$25/day', 'n']
                ]
              },
              {
                heading: 'Accomodation Variations',
                data: [['Auckland', '+$20/day']]
              },
              {
                heading: 'Kilometres',
                data: [
                  ['Kilometre Allowance', '250km/day included'],
                  ['Extra Kilometres', '$0.20/km'],
                  ['Unlimited Kilometres', '$20/day'],
                  ['Minimum Hire for Unlimited Km', '2 Days']
                ]
              },
              {
                heading: 'One Way Fees',
                data: [['', '$150']]
              },
              {
                heading: 'Bonds',
                data: [
                  ['With Credit Card', '$0'],
                  ['No Credit Card', '$1000']
                ]
              },
              {
                heading: 'Administration',
                data: [['Booking Fee', '7%']]
              }
            ],
            models: [
              {
                name: 'Standard Car no accom',
                number: '1',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/New-Zealand/All-Ridey/all-ridey-car',
                accom: '0',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1578023984/cv/almera.jpg'
              },
              {
                name: 'Camper w/ 2 accom',
                number: '2',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/New-Zealand/Aventus/aventus-2-berth',
                accom: '2',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v2/cv/nz2berthplain.jpg'
              }
            ]
          },
          {
            name: '4WD',
            note:
              'Please note: for all AWD/4WD hires, full payment must be made within 7 days of making a booking',
            section: [
              {
                heading: 'Damage Cover',
                data: [['Damage Cover', '$55/day']]
              },
              {
                heading: 'Accomodation: January through June 15',
                data: [
                  ['Premium 4WD (no accom)', '$35/day', 'n'],
                  [
                    'Premium 4WD with accom for 2-5',
                    '$55/day +$0.20 per km',
                    'n'
                  ]
                ]
              },
              {
                heading: 'Accomodation: June 15 through October',
                data: [
                  ['Premium 4WD (no accom)', '$55/day', 'n'],
                  [
                    'Premium 4WD with accom for 2-5',
                    '$55/day +$0.20 per km',
                    'n'
                  ]
                ]
              },
              {
                heading: 'Accomodation Variations',
                data: [['Auckland', '+$20/day']]
              },
              {
                heading: 'Kilometres',
                note:
                  'please note: Due to the Diesel Road User Charge, the Premium 4WD with accom for 2-5 is always charged $0.20 per km for all kms to be used. No free kms included and no unlimited km package available',
                data: [
                  ['Kilometre Allowance', '250km/day included'],
                  ['Extra Kilometres', '$0.20/km'],
                  ['Unlimited Kilometres', '$20/day'],
                  ['Minimum Hire for Unlimited Km', '2 Days']
                ]
              },
              {
                heading: 'One Way Fees',
                data: [['', '$150']]
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
                heading: 'Administration',
                data: [['Booking Fee', '10%']]
              }
            ],
            models: [
              {
                name: 'Premium 4WD no accom Queenstown Only',
                number: '1',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/New-Zealand/Armadillo/jeep',
                accom: '0',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v2/cv/nzarma-jeep.jpg'
              },
              {
                name: 'Premium 4WD w/ accom for 2-5',
                number: '2',
                link:
                  'https://campervanvillage.netlify.com/Vehicles/New-Zealand/Grip-4WD/grip-2-5-Berth',
                accom: '2-5',
                img:
                  'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1577937932/cv/nz-2-5.jpg'
              }
            ]
          }
        ]
      }
      // {
      //   name: 'South Africa',
      //   urlname: 'southafrica',
      //   map:
      //     'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1582169131/maps/blue-map-nz-zones.svg',
      //   policies:
      //     'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1580685724/cv/cv-nz-rental-policies-13-01-20.pdf',
      //   vra:
      //     'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1580685723/cv/cv-nz-rental-agreement-23-5-19.pdf',
      //   type: [
      //     {
      //       name: '2WD',
      //       section: [
      //         {
      //           heading: 'Damage Cover',
      //           data: [['Damage Cover', '$30 Manual / $35 Auto']]
      //         },
      //         {
      //           heading: 'Accomodation: January through October',
      //           data: [
      //             ['Standard Car no accom', '$0/day', 'n'],
      //             ['Camper with Accom for 2', '$25/day', 'n']
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
