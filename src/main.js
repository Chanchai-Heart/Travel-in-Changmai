import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'

import FloatLabel from 'primevue/floatlabel';


const app = createApp(App)

app.use(PrimeVue, {
    theme:{
  
    }
})

app.component('FloatLabel', FloatLabel)
app.use(router)
app.mount('#app')
