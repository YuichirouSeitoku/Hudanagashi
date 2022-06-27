import { createRouter,createWebHistory } from 'vue-router';
import TopPage from '../components/TopPage.vue'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage
  },
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})

export default router