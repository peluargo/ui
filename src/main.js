import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/material-symbols-rounded'
import router from '@/router/index'

// Import icon libraries
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import '@quasar/extras/eva-icons/eva-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    iconSet: quasarIconSet,
  })
  .use(router)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
