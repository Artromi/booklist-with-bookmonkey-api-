<template>
  <div
    class="flex flex-col justify-around gap-1 bg-white rounded-md p-3"
      
  >
    <router-link :to="{ name: 'detail', params: { id: book.id } }"
      ><h2 class="text-pink-800 font-bold">{{ book.title }}</h2></router-link
    >
    <p class="text-sm">by: {{ book.author }}</p>
    <ButtonFav
      :class="book.isFav ? 'bg-pink-600 text-white' : 'bg-white'"
      @click="$emit('handlePatch', book)"
    />
  </div>
</template>

<script>
import ButtonFav from '@/components/ButtonFav.vue'

export default {
  components: {
    ButtonFav
  },
  props: {
    book: {
      type: Object
    }
  },
  emits: [ "handlePatch" ]

}
</script>
