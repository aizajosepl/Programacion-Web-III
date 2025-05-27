import axios from 'axios'

const API = 'http://localhost:3000/api/ciudad' 

export const getCiudades = async() => {
    try {
        const response = await axios.get(API);
        return response.data;
    } catch (error) {
        console.error(error)
        return []
    }
}

export const AgregarCiudades = async(ciudad) => {
    try {
        const response = await axios.post(API, ciudad);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const ActualizarCiudad = async(ciudad) => {
    try {
        const response = await axios.put(`${API}/${ciudad.id_ciudad}`, ciudad);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const EliminarCiudad = async(id_ciudad) => {
    try {
        const response = await axios.delete(`${API}/${id_ciudad}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}