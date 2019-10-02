
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: '台灣好好玩│景點尋寶網路活動 參加抽大獎',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { property: 'og:url', content: 'http://taiwanfun.worldjournal.com/' },
      { property: 'title', content: '台灣好好玩│景點尋寶網路活動 參加抽大獎' },
      { property: 'og:image', content: 'http://taiwanfun.worldjournal.com/images/fb.jpg' },
      { property: 'og:description', content: '台灣怎麼玩最酷？該吃哪些美食？讓白貓帥帥和喔熊組長帶你探險去！' },
      { hid: 'title', name: 'title', content: '台灣好好玩│景點尋寶網路活動 參加抽大獎' },
      { hid: 'url', name: 'url', content: 'http://taiwanfun.worldjournal.com/' },
      { hid: 'image', name: 'image', content: 'http://taiwanfun.worldjournal.com/images/fb.jpg' },
      { hid: 'description', name:'description', content: '台灣怎麼玩最酷？該吃哪些美食？讓白貓帥帥和喔熊組長帶你探險去！' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css' },
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/ga.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
