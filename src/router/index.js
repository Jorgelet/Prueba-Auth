import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import CreateUserView from '../views/CreateUserView.vue'
import { useAuth } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/login',
      name: 'createuser',
      component: CreateUserView,
      meta: {
        requireAuth: false
      }
    }
  ]
})


router.beforeEach((to,from,next) =>{
  const auth = useAuth()
  const isAuth = auth.token

  if (to.meta.requireAuth && isAuth === null) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router
