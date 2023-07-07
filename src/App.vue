<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import FormularioWeb from './components/FormularioWeb.vue'
import VistaUsuarios from './components/VistaUsuarios.vue'

export default {
  name: 'App',
  components: {
    FormularioWeb,
    VistaUsuarios
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
