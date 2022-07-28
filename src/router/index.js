import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/indexView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AddListView',
    name: 'AddListView',
    // route level code-splitting
    // this generates a separate chunk (AddListView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AddListView" */ '../views/AddListView.vue')
  },
  {
    path: '/SettingSubView',
    name: 'SettingSubView',
    // route level code-splitting
    // this generates a separate chunk (SettingSubView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SettingSubView" */ '../views/SettingSubView.vue')
  },
  {
    path: '/indexView',
    name: 'indexView',
    // route level code-splitting
    // this generates a separate chunk (indexView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "indexView" */ '../views/indexView.vue')
  },
  {
    path: '/ListDairy',
    name: 'ListDairy',
    // route level code-splitting
    // this generates a separate chunk (ListDairy.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ListDairy" */ '../views/ListDairy.vue')
  },
  {
    path: '/SettingMainView',
    name: 'SettingMainView',
    // route level code-splitting
    // this generates a separate chunk (SettingMainView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SettingMainView" */ '../views/SettingMainView.vue')
  },
  {
    path: '/DiaryMainView',
    name: 'DiaryMainView',
    // route level code-splitting
    // this generates a separate chunk (DiaryMainView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DiaryMainView" */ '../views/DiaryMainView.vue')
  },
  {
    path: '/HealingView',
    name: 'HealingView',
    // route level code-splitting
    // this generates a separate chunk (HealingView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "HealingView" */ '../views/HealingView.vue')
  },
  {
    path: '/ShopView',
    name: 'ShopView',
    // route level code-splitting
    // this generates a separate chunk (ShopView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ShopView" */ '../views/ShopView.vue')
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    // route level code-splitting
    // this generates a separate chunk (LoginView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "LoginView" */ '../views/LoginView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
