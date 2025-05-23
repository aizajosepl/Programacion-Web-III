import User from "../models/prodmodels.js";
export const getUsers = async(req, res)=>{
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}
export const getUserById = async(req, res)=>{
    try{
        const response = await User.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}
export const createUser = async(req, res)=>{
    try{
        await User.create(req.body);
        res.status(201).json({message: "User Creado"});
    } catch (error){
        console.log(error.message);
    }
}
export const updateUser = async(req, res)=>{
    try{
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({message: "User Actualizado"});
    } catch (error){
        console.log(error.message);
    }
}
export const deleteUser = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({message: "User Eliminado"});
    } catch (error){
        console.log(error.message);
    }
}