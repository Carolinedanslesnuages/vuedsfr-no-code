import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VIcon } from '@gouvminint/vue-dsfr'
import App from './App.vue'
import router from './router'

// Styles DSFR
import '@gouvfr/dsfr/dist/core/core.main.min.css'
import '@gouvfr/dsfr/dist/component/component.main.min.css'
import '@gouvfr/dsfr/dist/utility/utility.main.min.css'
import '@gouvminint/vue-dsfr/styles'
import '@gouvfr/dsfr/dist/scheme/scheme.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css'
import './main.css'

// Création de l'application
const app = createApp(App)

// Installation des plugins
app.use(createPinia())
app.use(router)

// Enregistrement des composants globaux
app.component('VIcon', VIcon)

// Montage de l'application
app.mount('#app')