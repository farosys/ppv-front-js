<template>
  <BookDetailsTemplate />
</template>

<script>
import { mapGetters } from "vuex";
export default{
  layout: 'ppv',
  async asyncData({ params, store }) {
    await store.dispatch('books/show', params.id)
  },
  head() {
    return {
      title: this.book.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.book.article.description
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      book: 'books/$single'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
