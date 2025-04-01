const Employee = require('../models/Employee');

const employeeController = {
    getAllEmployees: async (req, res) => {
        try {
        const employees = await Employee.findAll();
        res.render('index', { employees });
        } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
        }
    },

    createEmployeeForm: (req, res) => {
        res.render('create');
    },

    createEmployee: async (req, res) => {
        const { firstName, lastName, email } = req.body;
        try {
            await Employee.create({ firstName, lastName, email });
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    updateEmployeeForm: async (req, res) => {
        const { id } = req.params;
        try {
            const employee = await Employee.findByPk(id);
            res.render('update', { employee });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    updateEmployee: async (req, res) => {
        const { id } = req.params;
        const { firstName, lastName, email } = req.body;
        try {
            await Employee.update(
                { firstName, lastName, email },
                { where: { id } }
            );
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    deleteEmployee: async (req, res) => {
        const { id } = req.params;
        try {
            await Employee.destroy({ where: { id } });
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },
};

module.exports = employeeController;