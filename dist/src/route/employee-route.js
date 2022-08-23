"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = void 0;
const express_1 = require("express");
const employee_controller_1 = __importDefault(require("../controller/employee-controller"));
exports.employeeRouter = (0, express_1.Router)();
exports.employeeRouter.get('', employee_controller_1.default.getAll);
exports.employeeRouter.post('', employee_controller_1.default.addEmployee);
exports.employeeRouter.get('/:id', employee_controller_1.default.getEmployee);
exports.employeeRouter.put('/:id', employee_controller_1.default.updateEmployee);
exports.employeeRouter.delete('/:id', employee_controller_1.default.deleteEmployee);
