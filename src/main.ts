import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "@/router";
import {pinia} from "@/store";

const app = createApp(App);

app.use(router)

/** Pinia is a new store management solution from Vue Team
 *  it is meant to be a substitute of Vuex
 *  You can find more information at https://pinia.vuejs.org/introduction.html
 * */
app.use(pinia)

app.mount('#app')
