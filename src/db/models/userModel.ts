import { createSchema, Type, typedModel } from 'ts-mongoose';

const userSchema = createSchema(
    {
        us: {type: String, required: true},
        ps: {type: String, required: true},
        sex: {type: Number, default: 0},
        age: {type: Number},
    },
    { _id: false, timestamps: true }
);
export default typedModel('User', userSchema);

export interface UserModel {
    us: string,
    ps: string,
    sex: number,
    age: number
}
