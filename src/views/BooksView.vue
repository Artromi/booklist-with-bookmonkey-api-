<template>
 <main
    class="bg-blue-100 min-h-screen py-16 px-72 "
  >
  <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
     <BookDetailCard  v-for="book in bookStore.books" :key="book.id" :book="book" @handlePatch="favoriteToggle(book)"/>
  </div>
   
  </main>
</template>

<script>
import { useBookStore } from '@/stores/BooksStore'
import BookDetailCard from '@/components/BookDetailCard.vue'

export default {
  setup() {
    const bookStore = useBookStore()

    return { bookStore }
  },
  components: { BookDetailCard },
  data() {
    return {
    }
  },
  methods: {
    favoriteToggle(book) {
      book.isFav = !book.isFav
      this.bookStore.patchBook(book)
    }
  },
  mounted() {
    this.bookStore.fetchBooks()
  }
}
</script>
