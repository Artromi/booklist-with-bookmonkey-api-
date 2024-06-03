<template>
  <main class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6   bg-blue-100 min-h-screen p-3">
    <div
    class="flex flex-col justify-around gap-1 bg-white rounded-md p-3 "
    v-for="book in bookStore.books"
          :key="book.id">
     <router-link :to="{ name: 'detail', params: { id: book.id } }"><h2 class="text-pink-800 font-bold">{{book.title}}</h2></router-link>
     <p class="text-sm">by: {{book.author}}</p>
     <ButtonFav @toggle-favorite="receiveEmit(book)"/>
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
