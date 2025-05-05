import express from "express";
import {getUsers, getUserById, createUser, updateUser, deleteUser} from "../controllers/prodcontrollers.js"

const urouter = express.Router();
urouter.get('/producto', getUsers);
urouter.get('/producto/:id', getUserById);
urouter.post('/producto', createUser);
urouter.patch('/producto/:id', updateUser);
urouter.delete('/producto/:id', deleteUser);

export default urouter;