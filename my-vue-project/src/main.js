import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Login from './components/PageMainBody/Login.vue'
import Home from './components/PageMainBody/Home.vue'
import About from './components/PageMainBody/About.vue'
import Footprints from './components/PageMainBody/Footprints.vue'
import Upload from './components/PageMainBody/Upload.vue'

const routes =[
    { path: '/', component: Login },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/footprints', component: Footprints },
    { path: '/upload', component: Upload }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "router-link-active",
    linkExactActiveClass: "router-link-exact-active",
})

createApp(App).use(router).mount('#app')

