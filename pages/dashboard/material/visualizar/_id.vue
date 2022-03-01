<template>
  <section id="ver-material">
    <h1>Detalhes do Material</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <CardDetailsBook class="mt-3" :livro="livro"></CardDetailsBook>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "dashboard",
  async asyncData({ params, store }) {
    await store.dispatch("books/show", params.id);
  },
  data: () => ({
    items: [
      { text: "Dashboard", to: "/dashboard/home" },
      { text: "Material", to: "/dashboard/material/listar" },
      { text: "Visualizar", disabled: true },
    ],
    livro: [],
  }),
  computed: {
    ...mapGetters({
      $singleBooks: "books/$single",
    }),
  },
  created() {
    this.getMaterial();
  },
  methods: {
    getMaterial() {
      this.livro = this.$singleBooks.article;
    },
  },
};
</script>

<style>
</style>
