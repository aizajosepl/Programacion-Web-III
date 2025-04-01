const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const employeeController = require('./controllers/employeeController');
const app = express();
	// Middleware del análisis del cuerpo
	app.use(bodyParser.urlencoded({ extended: false }));
	// Configurar el motor de vista
	app.set('view engine', 'ejs');
	// Rutas
	app.get('/', employeeController.getAllEmployees);
	// Crear un empleado (formulario)
	app.get('/employee/create', employeeController.createEmployeeForm);
	app.post('/employee/create', employeeController.createEmployee);
	// Actualizar a un empleado (formulario)
	app.get('/employee/update/:id', employeeController.updateEmployeeForm);
	app.post('/employee/update/:id', employeeController.updateEmployee);
	// Eliminar a un empleado
	app.post('/employee/delete/:id', employeeController.deleteEmployee);
	// Iniciar servidor
	const PORT = process.env.PORT || 3000;
	sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`El servidor se está ejecutando en el puerto ${PORT}`);
	});
});