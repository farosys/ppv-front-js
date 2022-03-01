<template>
  <HomeTemplate />
</template>

<script>
export default{
  layout: 'ppv',
  async asyncData({store}) {
    await store.dispatch('books/index')
  }
}
</script>
