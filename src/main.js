import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from "firebase/app";

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";


const firebaseConfig = {
    apiKey: "AIzaSyCRBisVVXlxuAoGarsGPAW0xIjb5E_mZyg",
    authDomain: "auth-prueba-bc60e.firebaseapp.com",
    projectId: "auth-prueba-bc60e",
    storageBucket: "auth-prueba-bc60e.appspot.com",
    messagingSenderId: "677725912432",
    appId: "1:677725912432:web:5fc9f16b90ee6e5b7f63b5"
};

initializeApp(firebaseConfig)

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.mount('#app')
