import {Router} from "express";
import {employeeRouter} from "./employee-route";
import {branchRouter} from "./branch-route";

export const routes = Router();
routes.use('/employees',employeeRouter);
routes.use('/branches',branchRouter);