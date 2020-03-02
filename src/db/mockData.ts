import {FoodModel} from "./models/foodModel";

const Mock = require('mockjs');

let data: FoodModel[] = [];
for (let i = 0; i < 100; i++) {
    data.push(Mock.mock({
        'name|1-5': /\w/,
        'price|1-2': /\d/,
        'typeName': /小菜|主食|凉菜/,
        'typeId|1': /\d/,
        'img': '/static/girl.png'
    }))
}

export default data;

