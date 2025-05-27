<template>
  <el-table :data="ciudades" style="width: 100%" height="250">
    <el-table-column fixed prop="id_ciudad" label="Id Ciudad" width="150" />
    <el-table-column prop="nombre" label="Nombre" width="120" />
    <el-table-column prop="poblacion" label="Poblacion" width="120" />
    <el-table-column prop="region" label="Region" width="320" />
    <el-table-column prop="id_pais" label="ID Pais" width="320" />
    <el-table-column  label="Acciones" width="320" >
      <template #default="scoped">
        <el-button type="primary"  :icon="Edit" @click="MostrarInput(scoped.row)" circle />
        <el-button type="danger" :icon="Delete" @click="EliminarCidd(scoped.row.id_ciudad)" circle />
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="dialogFormVisible" title="Editar ciudad" width="500">
    <el-form :model="form" >
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
        <el-button type="primary" @click="ActualizarCiudadess()">
          Confirmar
        </el-button>
      </div>
    </el-form>
  </el-dialog>
</template>
<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import {getCiudades, ActualizarCiudad, EliminarCiudad} from '../api/apis.js';
import {ref,onMounted,reactive} from 'vue';
import { useToast } from "vue-toastification";
import {
  Delete,
  Edit
} from '@element-plus/icons-vue'
const toast = useToast();
const ciudades=ref([]);
const dialogFormVisible = ref(false);
const formLabelWidth = '140px';
const form = reactive({
 id_ciudad:null,
 nombre:'',
 poblacion:'',
 region:'',
 id_pais:''
})

const TablaCiudades = async()=>{
  try{
    const resultado = await getCiudades();
    ciudades.value = resultado;
  }catch(error){
    console.error(error);
  }
}
const TablaPaises = async()=>{
  try{
    const resultado = await getPaises();
    paises.value = resultado;
  }catch(error){
    console.error(error);
  }
}
const MostrarInput = async(ciudad)=>{
  try{
    form.id_ciudad=ciudad.id_ciudad;
    form.nombre=ciudad.nombre;
    form.poblacion=ciudad.poblacion;
    form.region=ciudad.region;
    form.id_pais=ciudad.id_pais;
    dialogFormVisible.value=true;
  }catch(error){
    console.error(error)
  }
}
const ActualizarCiudadess = async()=>{
  try{
    const data={
      id_ciudad:form.id_ciudad,
      nombre:form.nombre,
      poblacion:Number(form.poblacion),
      region:form.region,
      id_pais:Number(form.id_pais)
    }
    await ActualizarCiudad(data);
    dialogFormVisible.value=false;
    await TablaCiudades();
    toast.success("Se actualizo correctamente",{
      position: "top-right",
      timeout: 3000,
    })
  }catch(error){
    console.error(error);
  }
}

const EliminarCidd =async(id_ciudad)=>{

  ElMessageBox.confirm(
    'Estas seguro que deseas eliminar esta ciudad',
    'Eliminar',
    {
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      type: 'warning',
    }
  )
    .then(async() => {
      await EliminarCiudad(id_ciudad);
      await TablaCiudades()
        toast.success("Se Elimino correctamente",{
        position: "top-left",
        timeout: 3000,
      })
    })
    
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Eliminar cancelado',
      })
    })
}

onMounted( TablaCiudades )
defineExpose({ TablaCiudades })
</script>
<style scoped>

</style>