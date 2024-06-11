<template>
  <HeaderSection />
  <router-view />
</template>
<script>
import { useBookStore } from './stores/BooksStore'
import HeaderSection from './components/HeaderSection.vue'

export default {
  setup() {
    const bookStore = useBookStore()

    return { bookStore }
  },
  components: { HeaderSection }
}
</script>
