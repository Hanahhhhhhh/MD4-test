import { Request, Response} from "express";
import {Employee} from "../model/employee";


class EmployeeController {
    getAll = async (req: Request, res: Response) => {
        let employees = await Employee.find().populate('branch', 'name');
        res.status(200).json(employees);
    }

    addEmployee = async (req: Request, res: Response) => {

        let employee = req.body;
        employee = await Employee.create(employee);
        let newEmployee = await Employee.findById(employee._id).populate('branch', 'name');
        res.status(201).json(newEmployee);



    }

    deleteEmployee = async (req: Request, res: Response) => {
        let id = req.params.id;

        let employee = await Employee.findById(id);
        if (!employee) {
            res.status(404).json();
        } else {
            employee.delete();
            res.status(204).json();
        }

    }

    getEmployee = async (req: Request, res: Response) => {
        let id = req.params.id;

        let employee = await Employee.findById(id).populate('branch', 'name');
        if (!employee) {
            res.status(404).json();
        } else {
            res.status(200).json(employee);
        }

    }

    updateEmployee = async (req: Request, res: Response) => {
        let id = req.params.id;
        let employee = await Employee.findById(id);
        if (!employee) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Employee.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            employee = await Employee.findById(id).populate('branch','name');
            res.status(200).json(employee);
        }
    }
}

export default new EmployeeController();
