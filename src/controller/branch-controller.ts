import { Request, Response} from "express";
import {Branch} from "../model/branch";


class BranchController {
    getAll = async (req: Request, res: Response) => {
        let branches = await Branch.find();
        res.status(200).json(branches);
    }

    addBranch = async (req: Request, res: Response) => {

        let branch = req.body;
        branch = await Branch.create(branch);

        res.status(201).json(branch);



    }

    deleteBranch = async (req: Request, res: Response) => {
        let id = req.params.id;

        let branch = await Branch.findById(id);
        if (!branch) {
            res.status(404).json();
        } else {
            branch.delete();
            res.status(204).json();
        }

    }

    getBranch = async (req: Request, res: Response) => {
        let id = req.params.id;

        let branch = await Branch.findById(id);
        if (!branch) {
            res.status(404).json();
        } else {
            res.status(200).json(branch);
        }

    }

    updateBranch = async (req: Request, res: Response) => {
        let id = req.params.id;
        let branch = await Branch.findById(id);
        if (!branch) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Branch.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            res.status(200).json(data);
        }
    }
}

export default new BranchController();