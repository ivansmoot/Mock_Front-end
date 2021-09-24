import InterfaceCapture from '../components/Mock/InterfaceCapture.vue'
import MockDataSelect from '../components/Mock/MockDataSelect.vue'
import Login from '../components/public/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/mock/interfacecapture', component: InterfaceCapture },
    { path: '/mock/mockdataselect', component: MockDataSelect }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
      // 始终滚动到顶部
      return { top: 0 }
    },
    routes
})

export { router }