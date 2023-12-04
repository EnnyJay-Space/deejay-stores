// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
// export default {

//   // devtools: { enabled: true },
//   modules: ['@nuxtjs/tailwindcss', "@nuxtjs/axios"],
//   app: {
//     head: {
//       title: 'Enny Jay Ecommerce',
//       meta:[
//         {name: 'description', content: 'Everything about Nuxt 3'}
//       ],
//       link:[
//         {rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
//       ]
//     }
//   },
//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: ["~/plugins/axios"],

//   runtimeConfig:{
//     ecommerceKey: process.env.VUE_APP_API
//   },
//   axios: {
//     // See https://github.com/nuxt-community/axios-module#options

//     baseURL: process.env.VUE_APP_API || '',
//   },

// }


export default defineNuxtConfig({
  app: {
    head: {
      title: 'Enny Jay Ecommerce',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  runtimeConfig: {
    ecommerceKey: process.env.VUE_APP_KEY,
    public: {
      BASE_URL: process.env.VUE_APP_KEY || 'http://localhost:3000',
    },
  },
  modules: [
    "@nuxtjs/tailwindcss"
  ],
})