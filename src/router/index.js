import { createRouter, createWebHashHistory } from 'vue-router'
import ForumView from '../views/ForumView.vue'
import IndividualView from '../views/IndividualView.vue'
import MatchView from '../views/MatchView.vue'

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
