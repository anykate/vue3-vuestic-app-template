import App from '@/App.vue'
import router from '@/router'

import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import 'primeflex/primeflex.css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'

import 'vue-toastification/dist/index.css'

import '@/assets/css/style.css'

import VueMask from '@devindex/vue-mask'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'

createApp(App)
    .use(createVuestic())
    .use(router)
    .use(Toast, {
        // Setting the global default position
        position: POSITION.BOTTOM_RIGHT,
    })
    .use(createPinia())
    .use(VueMask)
    .mount('#app')
