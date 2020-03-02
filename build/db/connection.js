"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
// 设置路径，连接数据库
exports.default = mongoose_1.default.connect('mongodb://localhost/local', { useNewUrlParser: true }).then(function () {
    console.log('we\'re connected to mongodb');
}, function (err) {
    console.log('connection error:', err);
});
// 设置集合模型
// let userSchema = new mongoose.Schema({
//     us: String,
//     ps: String,
//     age: Number,
//     sex: {
//         type: Number,
//         default: 0
//     }
// });
// 将schema转换为数据模型
// let users = mongoose.model('users', userSchema);
// let users = mongoose.model('users', userSchema);
// 插入数据
// users.insertMany([{
//     us: 'robin', ps: '123', age: 24, sex: 0
// }]).then(() => {
//     console.log('insert success');
// }, (err) => {
//     console.log(err);
// });
// 查询数据
// users.find().then((data) => {
//     console.log('data', data);
// }, (err) => {
//     console.log(err);
// });
//# sourceMappingURL=connection.js.map