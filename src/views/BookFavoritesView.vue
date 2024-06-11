<template>
 <main
    class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 bg-blue-100 min-h-screen py-16 px-60"
  >
    <BookDetailCard  v-for="book in bookStore.favoriteBooks" :key="book.id" :book="book" @handlePatch="favoriteToggle(book)"/>
  </main>
</template>

<script>
import BookDetailCard from '@/components/BookDetailCard.vue';
import { useBookStore } from '@/stores/BooksStore'

export default {
  setup() {
    const bookStore = useBookStore()

    return { bookStore }
  },
  components: { BookDetailCard },
  
}
</script>
