import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import Main from '@/pages/Main.vue'
import HowItWorks from '@/pages/HowItWorks.vue'
import About from '@/pages/About.vue'
import Blog from '@/pages/Blog.vue'
import Error404 from '@/pages/Error404.vue'
import { useActionsStore } from "@/stores/actions"

const routes = [  
  { path: '/', component: LandingPage },
  { path: '/room/:room_code', component: Main },
  { path: '/how-it-works', component: HowItWorks },
  { path: '/about', component: About },
  { path: '/pricing', redirect: '/#pricing' },
  { path: '/blog', component: Blog },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Error404 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
});

router.beforeEach(async (to, from, next) => {
  if (to.path.startsWith('/room/')) {
    const roomCode = to.params.room_code as string;
    const actionsStore = useActionsStore(); 
    try {
      await actionsStore.joinRoom(roomCode); 
      next();
    } catch (error) {
      next({ name: 'NotFound' });
    }
  } else {
    next();
  }
});

export default router