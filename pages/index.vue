<template>
  <div>
    <p>
      {{ $all }}
    </p>
    {{ $single }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "IndexPage",
  async asyncData({ store }) {
    await store.dispatch("categories/index");
    await store.dispatch("categories/show", 1);
  },
  computed: {
    ...mapGetters({
      $all: "categories/$all",
      $single: "categories/$single",
    }),
  },
};
</script>
