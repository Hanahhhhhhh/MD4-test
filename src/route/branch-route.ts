import {Router} from "express";
import branchController from "../controller/branch-controller";

export const branchRouter = Router();
branchRouter.get('', branchController.getAll);
branchRouter.post('', branchController.addBranch);
branchRouter.get('/:id', branchController.getBranch);
branchRouter.put('/:id', branchController.updateBranch);
branchRouter.delete('/:id', branchController.deleteBranch);