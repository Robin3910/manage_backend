/// <reference types="mongoose" />
/// <reference types="ts-mongoose/plugin" />
declare const _default: import("mongoose").Model<import("mongoose").Document & {
    __v: number;
    createdAt: Date;
    updatedAt: Date;
    us: {
        type: StringConstructor;
        required: boolean;
    };
    ps: {
        type: StringConstructor;
        required: boolean;
    };
    sex: {
        type: NumberConstructor;
        default: number;
    };
    age: {
        type: NumberConstructor;
    };
} & {}, {}> & {
    [name: string]: Function;
};
export default _default;
export interface UserModel {
    us: string;
    ps: string;
    sex: number;
    age: number;
}
