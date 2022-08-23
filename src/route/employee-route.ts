import {Router} from "express";
import employeeController from "../controller/employee-controller";

export const employeeRouter = Router();
employeeRouter.get('', employeeController.getAll);
employeeRouter.post('', employeeController.addEmployee);
employeeRouter.get('/:id', employeeController.getEmployee);
employeeRouter.put('/:id', employeeController.updateEmployee);
employeeRouter.delete('/:id', employeeController.deleteEmployee);
