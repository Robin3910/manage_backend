import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import userRouter from './routers/userRouter';
import foodRouter from './routers/foodRouter';
import fileRouter from './routers/fileRouter';
import db from './db/connection';

const cors = require('cors');

const app: express.Application = express();

// 引用第三方中间件，解析req.body
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// 设置静态目录，也是中间件
app.use(express.static(path.resolve(__dirname, './static')));

// 允许跨域访问
app.use(cors());

// 自定义中间件
app.use('/user', userRouter);
app.use('/food', foodRouter);
app.use('/file', fileRouter);

console.log(db);

app.get('/cors', (req, res) => {
    res.send({
        msg: 'cors success!'
    })
});

app.listen(8080, () => {
    console.log('server start at 8080');
});


