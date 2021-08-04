import { createApp } from 'vue'
import App from './App.vue'

import Toast from "vue-toastification"
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "vue-toastification/dist/index.css"

createApp(App).use(router).use(store).use(Toast, {}).mount('#app')
