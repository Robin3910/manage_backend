import {createSchema, Type, typedModel} from 'ts-mongoose';

const foodSchema = createSchema({
        name: {type: String, required: true},
        price: {type: String, required: true},
        typeName: {type: String, required: true},
        typeId: {type: Number, required: true},
        img: {type: String, required: true},
    },
    {_id: false, timestamps: true}
);
export default typedModel('foods', foodSchema);

export interface FoodModel {
    name: string,
    price: string,
    typeName: string,
    typeId: number,
    img: string,
}
