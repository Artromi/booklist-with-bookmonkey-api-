import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: []
  }),
  actions: {
    async fetchBooks() {
      await fetch('http://localhost:4730/books')
        .then((response) => response.json())
        .then((bookData) => {
          this.books = bookData
        })
    },
    patchBook(book) {
      fetch('http://localhost:4730/books/' + book.id, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ isFav: book.isFav })
      })
        .then(() => {
          this.fetchBooks()
        })
        .catch((error) => window.alert(error))
    }
  },
  getters: {
    favoriteBooks: (state) => {
      return state.books.filter((book) => book.isFav)
    }
  }
})
