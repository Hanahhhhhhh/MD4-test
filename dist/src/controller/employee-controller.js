"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("../model/employee");
class EmployeeController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let employees = yield employee_1.Employee.find().populate('branch', 'name');
            res.status(200).json(employees);
        });
        this.addEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let employee = req.body;
            employee = yield employee_1.Employee.create(employee);
            let newEmployee = yield employee_1.Employee.findById(employee._id).populate('branch', 'name');
            res.status(201).json(newEmployee);
        });
        this.deleteEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let employee = yield employee_1.Employee.findById(id);
            if (!employee) {
                res.status(404).json();
            }
            else {
                employee.delete();
                res.status(204).json();
            }
        });
        this.getEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let employee = yield employee_1.Employee.findById(id).populate('branch', 'name');
            if (!employee) {
                res.status(404).json();
            }
            else {
                res.status(200).json(employee);
            }
        });
        this.updateEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let employee = yield employee_1.Employee.findById(id);
            if (!employee) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                yield employee_1.Employee.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                employee = yield employee_1.Employee.findById(id).populate('branch', 'name');
                res.status(200).json(employee);
            }
        });
    }
}
exports.default = new EmployeeController();
