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
const branch_1 = require("../model/branch");
class BranchController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let branches = yield branch_1.Branch.find();
            res.status(200).json(branches);
        });
        this.addBranch = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let branch = req.body;
            branch = yield branch_1.Branch.create(branch);
            res.status(201).json(branch);
        });
        this.deleteBranch = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let branch = yield branch_1.Branch.findById(id);
            if (!branch) {
                res.status(404).json();
            }
            else {
                branch.delete();
                res.status(204).json();
            }
        });
        this.getBranch = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let branch = yield branch_1.Branch.findById(id);
            if (!branch) {
                res.status(404).json();
            }
            else {
                res.status(200).json(branch);
            }
        });
        this.updateBranch = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let branch = yield branch_1.Branch.findById(id);
            if (!branch) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                yield branch_1.Branch.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                res.status(200).json(data);
            }
        });
    }
}
exports.default = new BranchController();
