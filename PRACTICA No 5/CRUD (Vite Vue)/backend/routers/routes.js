import express from 'express';
import { ObtenerCiudad, AgregarCiudad, ActualizarCiudad, EliminarCiudad } from '../controllers/ciudadcontroller.js'
const routes = express.Router();

routes.get('/', ObtenerCiudad);
routes.post('/', AgregarCiudad);
routes.put('/:id_ciudad', ActualizarCiudad);
routes.delete('/:id_ciudad', EliminarCiudad);

export default routes;