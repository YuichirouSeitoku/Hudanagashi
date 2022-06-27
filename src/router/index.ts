import { createRouter,createWebHistory } from 'vue-router';
import TopPage from '../components/TopPage.vue'
import QuizPage from '../components/QuizPage.vue'

const routes: Array<RouteConfig> = [
  { path: '/',     name: 'TopPage',  component: TopPage },
  { path: '/quiz', name: 'QuizPage', component: QuizPage },
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})

export default router