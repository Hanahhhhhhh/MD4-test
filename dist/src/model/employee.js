"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    salary: Number,
    branch: String
});
const Employee = (0, mongoose_1.model)('Employee', employeeSchema);
exports.Employee = Employee;
