"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_mongoose_1 = require("ts-mongoose");
var foodSchema = ts_mongoose_1.createSchema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    typeName: { type: String, required: true },
    typeId: { type: Number, required: true },
    img: { type: String, required: true },
}, { _id: false, timestamps: true });
exports.default = ts_mongoose_1.typedModel('foods', foodSchema);
//# sourceMappingURL=foodModel.js.map