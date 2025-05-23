import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const UserList = () => {
    const[users, setUser] = useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = async ()=>{
        const response = await axios.get('http://localhost:5500/producto');
        setUser(response.data);
    };

    const deleteUser = async(id)=>{
        try {
            await axios.delete(`http://localhost:5500/producto/${id}`);
            getUsers();
        } catch(error){
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is half">
                <h1 className="columns is-centered is half is-fullwidth">Lista de Productos</h1>
                <Link to={`add`} className="button is-success">Adicionar</Link>
                <table className="table is=striped is-fullwidth" >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nombre</th>
                            <th>Codigo</th>
                            <th>Tipo</th>
                            <th>Precio</th>
                            <th>Fecha de Elaboracion</th>
                            <th>Fecha de Vencimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=>(
                            <tr key={user.id}>
                                <td>{index+1}</td>
                                <td>{user.nombre}</td>
                                <td>{user.codigo}</td>
                                <td>{user.tipo}</td>
                                <td>{user.precio}</td>
                                <td>{user.fechadeelaboracion}</td>
                                <td>{user.fechadevencimiento}</td>
                                <td>
                                    <Link to={`edit/${user.id}`} className="button is-small is-info">Editar</Link>
                                    <button onClick={()=> deleteUser(user.id)} className="button is-small is-danger">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;