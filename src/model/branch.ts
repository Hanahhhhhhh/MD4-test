import {model, Schema} from "mongoose";

interface IBranch{
    name? :string;
}
const branchSchema =new Schema<IBranch>({
    name: String,
})
const Branch = model<IBranch>('Branch', branchSchema)
export {Branch}