import express from 'express';
import foodModel from "../db/models/foodModel";
import mockData from '../db/mockData';

const ObjectId = require('mongodb').ObjectID;

const router: express.Router = express.Router();
router.post('/addFood', (req, res) => {
    const {
        name,
        price,
        typeName,
        typeId,
        img
    } = req.body;
    foodModel.insertMany({
        name,
        price,
        typeName,
        typeId,
        img
    }).then(() => {
        res.send({
            err: 0,
            msg: 'add food success'
        })
    }, () => {
        res.send({
            err: -1,
            msg: 'add failed'
        })
    })
});

router.post('/getTypeByTypeId', (req, res) => {
    const {typeId} = req.body;
    // console.log(typeId);
    foodModel.find({
        typeId
    }, (err, data) => {
        if (err) console.log(err);
        console.log(data);
        res.send({
            err: 0,
            msg: 'find success',
            data: data
        })
    });
});

router.post('/getFoodByKw', (req, res) => {
    const {kw} = req.body;
    const reg = new RegExp(kw);
    foodModel.find({
        name: reg,
    }, (err, data) => {
        if (err) console.log(err);
        console.log(data);
        res.send({
            err: 0,
            msg: 'find success',
            data: data
        })
    })
});

router.post('/removeById', (req, res) => {
    const {_id} = req.body;
    foodModel.deleteOne({_id: ObjectId(_id)}, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.send({
                err: 0,
                msg: 'remove success'
            })
        }
    })
});

router.post('/update', (req, res) => {
    const {
        name,
        price,
        typeName,
        typeId,
        img,
        _id
    } = req.body;
    console.log(req.body);
    foodModel.updateOne({_id: ObjectId(_id)}, {
        name,
        price,
        typeName,
        typeId,
        img,
    }, (err, data) => {
        if (err) console.log(err);
        res.send({
            err: 0,
            msg: 'update success',
            data: data
        })
    })
});

router.post('/getInfoByPage', (req, res) => {
    const {page} = req.body;
    foodModel.find().limit(5).skip((page - 1) * 5).then((data) => {
        res.send({
            err: 0,
            msg: 'page search success',
            data: data
        })
    }, (err) => {
        if (err) {
            res.send({
                err: -1,
                msg: 'page search failed',
                data: err
            })
        }
    });
});

router.get('/addMockData', (req, res) => {
    foodModel.insertMany(mockData).then((data) => {
        console.log('insert mockData');
        res.send({
            err: 0,
            msg: 'insert mockData success',
            data,
        });
    }, (err) => {
        if (err) console.log(err);
        res.send({
            err: -1,
            msg: 'insert mockData failed',
            data: err,
        });
    });
});

router.get('/getAllFoodData', (req, res) => {
    foodModel.find({}).then((data) => {
        res.send({
            err: 0,
            msg: 'get all data success',
            data,
        })
    })
});

export default router;

