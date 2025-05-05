import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [nombre, setnombre] = useState("");
    const [codigo, setcodigo] = useState("");
    const [tipo, settipo] = useState("");
    const [precio, setprecio] = useState("");
    const [fechadeelaboracion, setfechadeelaboracion] = useState("");
    const [fechadevencimiento, setfechadevencimiento] = useState("");
    const navigate = useNavigate();

    const saveUser = async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5500/producto/',{
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
    }
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveUser}>
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
                    <div className="field">
                        <button type="submit" className="button is-success">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser;