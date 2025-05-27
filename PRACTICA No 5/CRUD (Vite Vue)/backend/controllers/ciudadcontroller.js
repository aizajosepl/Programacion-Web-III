import * as CidModel from '../models/ciudadmodel.js';
export const ObtenerCiudad = async(req,res) => {
	try{
		const ciudades = await CidModel.ObtenerCid();
		res.json(ciudades);
	}catch(error){
		res.status(500).json({error:error.message});
	}
}
export const AgregarCiudad = async(req,res) => {
	try{
		const {nombre, poblacion, region, id_pais} = req.body;
		const ciudades = await CidModel.AgregarCid(nombre,poblacion,region,id_pais);
		res.status(201).json(ciudades);
	}catch(error){
		res.status(400).json({error:error.message});
	}
}
export const ActualizarCiudad = async(req,res) => {
	try{
		const {id_ciudad} =req.params;
		const {nombre, poblacion, region, id_pais} = req.body;
		const ciudades = await CidModel.ActualizarCid(id_ciudad, nombre, poblacion, region, id_pais);
		res.status(201).json(ciudades);
	}catch(error){
		res.status(400).json({error:error.message});
	}
}
export const EliminarCiudad = async(req, res) => {
    try {
        const { id_ciudad } = req.params;
        const ciudades = await CidModel.EliminarCid(id_ciudad);
        res.status(201).json(ciudades);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}