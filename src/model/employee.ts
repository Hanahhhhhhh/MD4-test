import{model,Schema} from 'mongoose';

interface IEmployee{
    name? :string,
    age? :number,
    salary?: number,
    branch? : string
}
const employeeSchema = new Schema<IEmployee>({
    name : String,
    age : Number,
    salary: Number,
    branch: String
})
const Employee = model<IEmployee>('Employee', employeeSchema)
export {Employee};