
require('dotenv').config()
import axios from 'axios'

const { createClient } = require('./plugins/contentful')
const cdaClient = createClient()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'MissionDay 高岡 特設サイト',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: ' description', content: 'MissionDay高岡の情報をまとめたWebサイトです。開催情報やミッション、おすすめスポットなどを紹介しています。' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://mdtakaoka.info' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://mdtakaoka.info/ogp.png' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'MissionDay 高岡 特設サイト' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'MissionDay高岡の情報を発信しています。' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{src:'~/plugins/shardsVue', mode: 'client'}
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', { id: 'UA-143029126-1' }]
  ],
  manifest: {
    name: 'MD高岡 情報サイト',
    short_name: "MD高岡.info",
    lang: 'ja'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  },
  generate: {
    fallback: true,
    routes() {
      let postRoute = cdaClient.getEntries({ content_type: 'post' })
        .then(entries => {
          return [...entries.items.map(entry => `/spot/${entry.sys.id}`)]
        });
      let missionRoute = cdaClient.getEntries({ content_type: 'mission' })
        .then(entries => {
          return [...entries.items.map(entry => `/mission/${entry.sys.id}`)]
        });
      let error = '/error';
      return Promise.all([postRoute, missionRoute, error]).then(values => {
        return values.join().split(',');
      })
    }
  },
}
