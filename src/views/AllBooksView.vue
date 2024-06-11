<template>
  <main
    class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 bg-blue-100 min-h-screen py-16 px-60"
  >
    <BookDetailCard />
  </main>
</template>

<script>
import BookDetailCard from '@/components/BookDetailCard.vue'

export default {
  components: { BookDetailCard },
  data() {
    return {
      books: []
    }
  }
}
</script>
