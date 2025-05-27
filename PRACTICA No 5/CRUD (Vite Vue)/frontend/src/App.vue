<template>
  <Agregar @ciudad-agregado="actualizar"/>
  <Listado ref="ciudad"/>
</template>
<script setup>
import Listado from './components/ListadoCiudad.vue';
import Agregar from './components/AgregarModal.vue';
import {ref} from 'vue';

const ciudad=ref(null);
const actualizar=()=>{
  ciudad.value?.TablaCiudades();
}
</script>

<style scoped>
</style>
