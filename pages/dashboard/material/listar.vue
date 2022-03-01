<template>
  <section>
    <v-dialog
      v-model="showModal"
      max-width="600px"
      @close="showModal = !showModal"
    >
      <ModalDelete :route="route" @alert="alerta"></ModalDelete>
    </v-dialog>

    <h1>Listar Material</h1>
    <Breadcrumbs :items="items"></Breadcrumbs>

    <v-alert
      v-model="showAlert"
      :type="typeAlert"
      transition="slide-y-transition"
      dismissible
      class="mt-3"
    >
      {{ messageAlert }}
    </v-alert>

    <TableMaterial class="mt-3" @delete="confirmDelete"></TableMaterial>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "dashboard",
  async asyncData({store}) {
    await store.dispatch('books/index')
  },
  data: () => ({
    items: [
      { text: "Dashboard", to: "/dashboard/home" },
      { text: "Material", disabled: true },
    ],
    showAlert: false,
    typeAlert: "success",
    messageAlert: "",
    showModal: false,
    key: "",
    route: "articles",
  }),
  methods: {
    ...mapActions({
      showBook: 'books/show',
      indexBooks: 'books/index'
    }),
    confirmDelete(id) {
      this.showBook(id);
      this.showModal = true;
    },
    alerta(obj) {
      if (obj.type == "success") {
        this.indexBooks()
      }
      this.showModal = false
      this.showAlert = true;
      this.typeAlert = obj.type;
      this.messageAlert = obj.message;
    },
  },
};
</script>

<style>
</style>
