import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditUser = () => {
    const [nombre, setnombre] = useState("");
    const [codigo, setcodigo] = useState("");
    const [tipo, settipo] = useState("");
    const [precio, setprecio] = useState("");
    const [fechadeelaboracion, setfechadeelaboracion] = useState("");
    const [fechadevencimiento, setfechadevencimiento] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getUserById();
    },[]);
    const updateUser = async(e)=>{
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5500/producto/${id}`,{
                nombre,
                codigo,
                tipo,
                precio,
                fechadeelaboracion,
                fechadevencimiento
            });
            navigate("/");
        } catch(error){
            console.log(error);
        }
    };
    const getUserById = async()=>{
        const response = await axios.get(`http://localhost:5500/producto/${id}`);
        setnombre(response.data.nombre);
        setcodigo(response.data.codigo);
        settipo(response.data.tipo);
        setprecio(response.data.precio);
        setfechadeelaboracion(response.data.fechadeelaboracion);
        setfechadevencimiento(response.data.fechadevencimiento);
    }
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateUser}>
                    <div className="field">
                        <label className="label">Nombres</label>
                        <div className="control">
                            <input type="text" className="input" value={nombre} onChange={(e)=> setnombre(e.target.value)} placeholder="Nombres"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Codigo</label>
                        <div className="control">
                            <input type="text" className="input" value={codigo} onChange={(e)=> setcodigo(e.target.value)} placeholder="Codigo"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Tipo</label>
                        <div className="control">
                            <input type="text" className="input" value={tipo} onChange={(e)=> settipo(e.target.value)}placeholder="Tipo"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Precio</label>
                        <div className="control">
                            <input type="text" className="input" value={precio} onChange={(e)=> setprecio(e.target.value)} placeholder="Precio"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Fecha de Elaboracion</label>
                        <div className="control">
                            <input type="date" className="input" value={fechadeelaboracion} onChange={(e)=> setfechadeelaboracion(e.target.value)} placeholder="Fecha de Elaboracion"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Fecha de Vencimiento</label>
                        <div className="control">
                            <input type="date" className="input" value={fechadevencimiento} onChange={(e)=> setfechadevencimiento(e.target.value)} placeholder="Fecha de Vencimiento"/>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="button is-success">Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser;