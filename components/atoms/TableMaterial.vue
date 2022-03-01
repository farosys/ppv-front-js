<template>
  <v-card class="py-2" elevation="4" outlined>
    <!-- {{ material }} -->
    <v-data-table :headers="headers" :items="material" :items-per-page="5">
      <template #[`item.actions`]="{ item }">
        <div class="pt-1">
          <v-btn
            color="info"
            :to="`/dashboard/material/visualizar/${item.id}`"
            link
            outlined
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          <!-- <v-btn
            color="warning"
            :to="`/dashboard/material/editar/${item.id}`"
            link
            outlined
          >
            <v-icon>mdi-pencil-box-outline</v-icon>
          </v-btn> -->
          <v-btn color="error" outlined @click="excluir(item.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    headers: [
      {
        text: "#",
        value: "id",
        width: "50px",
      },
      {
        text: "Título",
        value: "title",
      },
      {
        text: "Slug",
        value: "slug",
      },
      {
        text: "Ações",
        value: "actions",
      },
    ],
  }),
  computed: {
    material() {
      return this.books.articles;
    },
    ...mapGetters({
      books: 'books/$all'
    })
  },
  methods: {
    excluir(id) {
      this.$emit('delete', id);
    },
  },
};
</script>

<style>
</style>
