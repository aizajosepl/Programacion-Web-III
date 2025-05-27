import pool from "../config/database.js";

export const ObtenerCid = async()=>{
	const [ciudad] = await pool.query('SELECT * FROM ciudad');
	return ciudad;
}
export const AgregarCid = async(nombre, poblacion, region, id_pais)=>{
	const[ciudad]= await pool.query('INSERT INTO ciudad (nombre, poblacion, region, id_pais) VALUE(?,?,?,?)',[nombre, poblacion, region, id_pais]);
	return { id:ciudad.insertId, nombre, poblacion, region, id_pais };
}
export const ActualizarCid = async(id_ciudad, nombre, poblacion, region, id_pais)=>{
	await pool.query('UPDATE ciudad SET nombre=?, poblacion=?, region=?, id_pais=? WHERE id_ciudad=?',[nombre, poblacion, region, id_pais, id_ciudad]);
	return { message: 'Se actualizo correctamente' };
}
export const EliminarCid = async(id_ciudad) => {
    await pool.query('DELETE FROM ciudad WHERE id_ciudad = ?', [id_ciudad]);
    return { message: 'Se elimino correctamente' };
}