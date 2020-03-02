"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_mongoose_1 = require("ts-mongoose");
var userSchema = ts_mongoose_1.createSchema({
    us: { type: String, required: true },
    ps: { type: String, required: true },
    sex: { type: Number, default: 0 },
    age: { type: Number },
}, { _id: false, timestamps: true });
exports.default = ts_mongoose_1.typedModel('User', userSchema);
//# sourceMappingURL=userModel.js.map