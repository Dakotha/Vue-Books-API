import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/books',
      component: () => import('../views/book/Layout.vue'),
      children: [
        {
          path: '',
          name: 'book.index',
          component: () => import('../views/book/BookIndexView.vue')
        },
        {
          path: 'create',
          name: 'book.create',
          component: () => import('../views/book/BookCreateView.vue')
        },
        {
          path: ':id/edit',
          name: 'book.edit',
          props: true,
          component: () => import('../views/book/BookEditView.vue')
        }
      ]
    },
    {
      path: '/authors',
      component: () => import('../views/author/Layout.vue'),
      children: [
        {
          path: '',
          name: 'author.index',
          component: () => import('../views/author/AuthorIndexView.vue')
        },
        {
          path: 'create',
          name: 'author.create',
          component: () => import('../views/author/AuthorCreateView.vue')
        },
        {
          path: ':id/edit',
          name: 'author.edit',
          props: true,
          component: () => import('../views/author/AuthorEditView.vue')
        }
      ]
    },
    {
      path: '/categories',
      component: () => import('../views/category/Layout.vue'),
      children: [
        {
          path: '',
          name: 'category.index',
          component: () => import('../views/category/CategoryIndexView.vue')
        },
        {
          path: 'create',
          name: 'category.create',
          component: () => import('../views/category/CategoryCreateView.vue')
        },
        {
          path: ':id/edit',
          name: 'category.edit',
          props: true,
          component: () => import('../views/category/CategoryEditView.vue')
        }
      ]
    },
  ]
})

export default router
