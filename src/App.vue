<template>
  <HeaderComponent />
  <router-view />
</template>
<script>
import { useBookStore } from './stores/BooksStore';
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  setup() {
  const bookStore = useBookStore()

  return { bookStore }
  },
  components: { HeaderComponent }
}
</script>
