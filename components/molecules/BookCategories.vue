<template>
  <div class="book-categories">
    <Chip
      v-for="category in $book.categories"
      :key="category.id"
      :text="category.name"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({ $book: "books/$single" }),
  },
});
</script>

<style lang="scss" scoped>
.book-categories {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 0.5rem;
}
</style>
