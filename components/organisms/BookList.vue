<template>
  <div class="book-list">
    <BookCard v-for="book in $books.articles" :key="book.id" :book="book" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({$books: 'books/$all'})
  }
})
</script>

<style lang="scss" scoped>
.book-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  @include screen('small') {
    grid-template-columns: repeat(2, 1fr);
  }
  @include screen('medium') {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
