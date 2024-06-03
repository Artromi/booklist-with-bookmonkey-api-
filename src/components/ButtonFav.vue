<template>
  <button
    @click="toggleFavState()"
    class="bg-white border border-pink-600 rounded px-2 text-sm self-start"
  >
    Favorite
  </button>
</template>

<script>
export default {
  emits: ['toggle-favorite'] ,
  methods: {
    toggleFavState() {
      this.$emit('toggle-favorite')
    }
  }
}
</script>
