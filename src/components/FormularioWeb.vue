<template>
  <div class="container app">
    <router-link to="/usuarios">Ver lista de usuarios</router-link>
    <h1 class="mt-4">Ingresa tus datos</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nombre:</label>
        <input  class="form-control mb-4" type="text" id="name" v-model="nombre" required>
      </div>
      <div>
        <label for="surname">Apellido:</label>
        <input  class="form-control mb-4" type="text" id="surname" v-model="apellido" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input  class="form-control mb-4" type="email" id="email" v-model="email" required>
      </div>
      <button class="btn btn-primary mt-2" type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nombre: '',
      email: ''
    };
  },
  methods: {
    submitForm() {
      const nuevoUsuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email
      };

      // Enviar los datos a la API utilizando Axios
      axios.post('https://649e09649bac4a8e669e8b5e.mockapi.io/usuarios', nuevoUsuario)
        .then(response => {
          //console.log('Usuario enviado correctamente', response.data);
          alert('Datos ingresados exitosamente');


          // Restablecer los datos del formulario
          this.nombre = '';
          this.apellido = '';
          this.email = '';
        })
        .catch(error => {
          //console.error('Error al enviar el usuario', error);
          alert('Hubo un error al ingresar los datos')
        });
    }
  }
};
</script>

<style scoped>

.app {
  width: 20%;
  margin: 0 auto;

}

.btn-primary {
  width: 35ch;
}

</style>

