<template>
  <div class="flex flex-wrap items-center py-10 border-b-2 border-pink-600">
    <h1 class="font-bold text-pink-600 text-3xl mr-auto ml-10">Bookmonkey</h1>
    <nav class="mr-10 ml-10">
      <router-link class="border border-black rounded-lg px-1 text-lg"
      :class="{'bg-pink-300' : $route.name === 'books'}"
      to="/"
        >All Books</router-link
      >
      <router-link
        class="border border-black rounded-lg m-1 px-1 text-lg"
        to="/favorites"
        >Favorites</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
};
</script>
