<template>
  <div class="flex flex-wrap justify-evenly items-center py-10 border-b-2 border-pink-600">
    <h1 class="font-bold text-pink-600 text-3xl ml-10">Bookmonkey</h1>
    <nav class="ml-10">
      <router-link
        class="border border-pink-600 rounded-lg px-1 text-lg mr-2"
        :class="{ 'bg-pink-600 text-white': $route.name === 'books' }"
        to="/"
        >All Books</router-link
      >
      <router-link
        class="border border-pink-600 rounded-lg px-1 text-lg"
        to="/favorites"
        :class="{ 'bg-pink-600 text-white': $route.name === 'favorites' }"
        >Favorites</router-link
      >
    </nav>
  </div>
</template>
