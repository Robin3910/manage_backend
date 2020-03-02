"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var foodModel_1 = __importDefault(require("../db/models/foodModel"));
var router = express_1.default.Router();
router.post('/addFood', function (req, res) {
    var _a = req.body, name = _a.name, price = _a.price, typeName = _a.typeName, typeId = _a.typeId, img = _a.img;
    foodModel_1.default.insertMany({
        name: name,
        price: price,
        typeName: typeName,
        typeId: typeId,
        img: img
    }).then(function () {
        res.send({
            err: 0,
            msg: 'add food success'
        });
    }, function () {
        res.send({
            err: -1,
            msg: 'add failed'
        });
    });
});
exports.default = router;
//# sourceMappingURL=foodRouter.js.map