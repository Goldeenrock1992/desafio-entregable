<template>
    <div>
    <router-link to="/">Volver al formulario</router-link>
      <h1 class="mt-4">Lista de Usuarios</h1>
      <!-- <ul>
        <li v-for="usuario in usuarios" :key="usuario.id">
          {{ usuario.nombre }} {{ usuario.apellido }} - {{ usuario.email }} 
        </li>
      </ul> -->

      <table class="table table-bordered border border-info-subtle border-4 mt-5">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.apellido }}</td>
          <td>{{ usuario.email }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      usuarios() {
        return this.$store.state.usuarios;
      }
    },
    mounted() {
      this.$store.dispatch('fetchUsuarios');
    }
  };
  </script>

<style scoped>

table {
    width: 50%;
    margin: 0 auto;
}

</style>
  