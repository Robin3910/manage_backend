import mongoose from 'mongoose';

// 设置路径，连接数据库
export default mongoose.connect('mongodb://localhost/local', {useNewUrlParser: true}).then(() => {
    console.log('we\'re connected to mongodb');
}, (err) => {
    console.log('connection error:', err)
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




