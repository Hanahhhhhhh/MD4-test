"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.branchRouter = void 0;
const express_1 = require("express");
const branch_controller_1 = __importDefault(require("../controller/branch-controller"));
exports.branchRouter = (0, express_1.Router)();
exports.branchRouter.get('', branch_controller_1.default.getAll);
exports.branchRouter.post('', branch_controller_1.default.addBranch);
exports.branchRouter.get('/:id', branch_controller_1.default.getBranch);
exports.branchRouter.put('/:id', branch_controller_1.default.updateBranch);
exports.branchRouter.delete('/:id', branch_controller_1.default.deleteBranch);
