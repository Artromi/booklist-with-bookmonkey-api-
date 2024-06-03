<template>
  <main class="bg-blue-100 min-h-screen">
    <div class="flex p-10">
      <ul class="flex flex-wrap justify-center">
        <li
          v-for="book in bookStore.books"
          :key="book.id"
          class="flex flex-col w-72 sm:max-w-full m-1 bg-white rounded-md p-5 justify-between gap-1"
        >
          <h2 class="text-pink-800 font-bold">
            <router-link :to="{ name: 'detail', params: { id: book.id } }">{{
              book.title
            }}</router-link>
          </h2>
          <p class="text-sm">by: {{ book.author }}</p>
          <ButtonFav @toggle-favorite="receiveEmit(book)" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import ButtonFav from '@/components/ButtonFav.vue'
import { useBookStore } from '@/stores/BooksStore';

export default {
  setup() {
  const bookStore = useBookStore()

  return { bookStore }
  },
  components: { ButtonFav },
  data() {
    return {
      books: []
    }
  },
  created() {
    this.bookStore.fetchBooks()
  },
  methods: {
    receiveEmit(book) {
      console.log('emit received')
      fetch('http://localhost:4730/books/' + book.id, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ isFav: true })
      })
        .then(() => {
          // buttonfarbe anpassen / als fav markiert

          console.log(book)
        })
        .catch((error) => window.alert(error))
    }
  }
}
</script>
