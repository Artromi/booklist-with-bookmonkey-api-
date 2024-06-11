<template>
  <main class="bg-blue-100 min-h-screen flex items-start justify-center pt-10">
    <div class="flex items-center bg-white border rounded max-w-4xl p-1">
      <img :src="book.cover" alt="book.title" />
      <div class="">
        <h2 class="text-pink-800 font-bold">{{ book.title }}</h2>
        <p class="text-sm font-bold">{{ book.author }}</p>
        <p class="text-sm font-bold">ISBN: {{ book.isbn }}</p>
        <p class="">{{ book.abstract }}</p>
        <ButtonFav />
      </div>
    </div>
  </main>
</template>
<script>
import ButtonFav from '@/components/ButtonFav.vue'
export default {
  components: { ButtonFav },
  data() {
    return {
      book: {}
    }
  },
  created() {
    this.fetchBook()
  },
  methods: {
    fetchBook() {
      const bookId = this.$route.params.id
      fetch(`http://localhost:4730/books/${bookId}`)
        .then((response) => response.json())
        .then((bookData) => {
          this.book = bookData
        })
        .catch((error) => {
          console.error('Error fetching book:', error)
        })
    }
  }
}
</script>
