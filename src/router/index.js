import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/components/pages/HomeView.vue'
import NewTaskView from '@/components/pages/NewTaskView.vue'
import PendingTaskView from '@/components/pages/PendingTaskView.vue'
import FinishedTasksView from '@/components/pages/FinishedTasksView.vue'
import CanceledTasksView from '@/components/pages/CanceledTasksView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/add', component: NewTaskView },
  { path: '/pending', component: PendingTaskView },
  { path: '/finished', component: FinishedTasksView },
  { path: '/canceled', component: CanceledTasksView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router