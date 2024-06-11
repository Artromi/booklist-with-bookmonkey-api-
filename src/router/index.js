import { createRouter, createWebHashHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'
import BookFavoritesView from '../views/BookFavoritesView.vue'
import BookDetailView from '@/views/BookDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'books',
    component: BooksView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: BookFavoritesView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: BookDetailView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
