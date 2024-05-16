import { createRouter, createWebHashHistory } from "vue-router";
import AllBooksView from "../views/AllBooksView.vue";
import FavoritesView from "../views/FavoritesView.vue";
import BookDetailView from "@/views/BookDetailView.vue";

const routes = [
  {
    path: "/",
    name: "books",
    component: AllBooksView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: BookDetailView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
