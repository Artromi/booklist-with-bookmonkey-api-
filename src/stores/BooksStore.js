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
    }
  }
})
