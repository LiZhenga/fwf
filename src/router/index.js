import { createRouter, createWebHashHistory } from 'vue-router'
import ForumView from '../views/ForumView.vue'
import IndividualView from '../views/IndividualView.vue'
import MatchView from '../views/MatchView.vue'
import NewsView from '../views/NewsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ForumView
  },
  {
    path: '/match',
    name: 'match',
    component: MatchView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/individual',
    name: 'individual',
    component: IndividualView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
