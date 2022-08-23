"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const employee_route_1 = require("./employee-route");
const branch_route_1 = require("./branch-route");
exports.routes = (0, express_1.Router)();
exports.routes.use('/employees', employee_route_1.employeeRouter);
exports.routes.use('/branches', branch_route_1.branchRouter);
