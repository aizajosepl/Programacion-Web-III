<template> 
  <el-button type="primary" plain @click="dialogFormVisible = true">Agregar nueva ciudad</el-button>
  <el-dialog v-model="dialogFormVisible" title="Agregar ciudad" width="500">
    <el-form :model="form" @submit.prevent="EnviarCiudad()">
      <el-form-item label="Nombre: " :label-width="formLabelWidth">
        <el-input v-model="form.nombre" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Poblacion: " :label-width="formLabelWidth">
        <el-input v-model="form.poblacion" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Region: " :label-width="formLabelWidth">
        <el-input v-model="form.region" autocomplete="off" />
      </el-form-item>
      <el-form-item label="ID Pais: " :label-width="formLabelWidth">
        <el-input v-model="form.id_pais" autocomplete="off" />
      </el-form-item>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancelar</el-button>
        <el-button type="primary" native-type="submit">
          Confirmar
        </el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script setup>
import {reactive,ref} from 'vue';
import {AgregarCiudades} from '../api/apis.js';
import { useToast } from "vue-toastification";
const dialogFormVisible = ref(false);
const formLabelWidth = '140px';
const emit= defineEmits(['ciudad-agregado']);
const toast = useToast();
const form = reactive({
 nombre:'',
 poblacion:'',
 region:'',
 id_pais:''
})

const EnviarCiudad=async()=>{
  try{
    const data={
      ...form,
      poblacion:parseFloat(form.poblacion),
      id_pais:Number(form.id_pais)
    }
    await AgregarCiudades(data);
    dialogFormVisible.value=false;
    emit('ciudad-agregado');
    toast.success("Se agrego correctamente",{
        position: "top-center",
        timeout: 3000,
    })

  }catch(error){
    console.error(error);

  }
}
</script>
<style scoped>
</style>