<template>
  <v-list>
    <v-list-item link to="/dashboard/conta">Minha Conta</v-list-item>
    <v-list-item link>Ajuda</v-list-item>
    <v-divider class="my-1"></v-divider>
    <v-list-item class="px-0">
      <v-btn text color="error" block @click="logout()">SAIR</v-btn>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      setLoged: "users/SET_LOGED"
    }),
    logout() {
      this.setLoged({});
      this.$router.push('/dashboard')
    }
  }
};
</script>

<style>
</style>
