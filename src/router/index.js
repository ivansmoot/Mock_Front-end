import MockInterfaceCapture from '../components/Mock/MockInterfaceCapture.vue'
import MockDataSelect from '../components/Mock/MockDataSelect.vue'
import TheLogin from '../components/public/TheLogin.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: TheLogin },
    { path: '/login', component: TheLogin },
    { path: '/mock/interfacecapture', component: MockInterfaceCapture },
    { path: '/mock/dataselect', component: MockDataSelect }
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