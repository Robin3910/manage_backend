/// <reference types="mongoose" />
/// <reference types="ts-mongoose/plugin" />
declare const _default: import("mongoose").Model<import("mongoose").Document & {
    __v: number;
    createdAt: Date;
    updatedAt: Date;
    name: {
        type: StringConstructor;
        required: boolean;
    };
    price: {
        type: StringConstructor;
        required: boolean;
    };
    typeName: {
        type: StringConstructor;
        required: boolean;
    };
    typeId: {
        type: NumberConstructor;
        required: boolean;
    };
    img: {
        type: StringConstructor;
        required: boolean;
    };
} & {}, {}> & {
    [name: string]: Function;
};
export default _default;
export interface FoodModel {
    name: string;
    price: string;
    typeName: string;
    typeId: number;
    img: string;
}
