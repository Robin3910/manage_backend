"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var userRouter_1 = __importDefault(require("./routers/userRouter"));
var foodRouter_1 = __importDefault(require("./routers/foodRouter"));
var connection_1 = __importDefault(require("./db/connection"));
var app = express_1.default();
// 引用第三方中间件，解析req.body
app.use(body_parser_1.default.urlencoded());
app.use(body_parser_1.default.json());
// 设置静态目录，也是中间件
app.use(express_1.default.static(path_1.default.resolve(__dirname, './static')));
// 自定义中间件
app.use('/user', userRouter_1.default);
app.use('/food', foodRouter_1.default);
console.log(connection_1.default);
app.listen(8080, function () {
    console.log('server start at 8080');
});
//# sourceMappingURL=serve.js.map
