<template>
  <main class="bg-blue-100 min-h-screen">
    <div class="flex p-10">
      <ul class="flex flex-wrap justify-center">
        <li
          v-for="book in books"
          :key="book.id"
          class="flex flex-col w-72 sm:max-w-full m-1 bg-white rounded-md p-5 justify-between gap-1"
        >
          <h2 class="text-pink-800 font-bold">
            <router-link :to="{ name: 'detail', params: { id: book.id } }">{{
              book.title
            }}</router-link>
          </h2>
          <p class="text-sm">by: {{ book.author }}</p>
          <ButtonFav />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import ButtonFav from "@/components/ButtonFav.vue";

export default {
  components: { ButtonFav },
  data() {
    return {
      books: [],
    };
  },
  created() {
    // to get just 10 books:  ?_limit=10
    fetch("http://localhost:4730/books")
      .then((response) => response.json())
      .then((bookData) => {
        this.books = bookData;
      });
  },
};
</script>
