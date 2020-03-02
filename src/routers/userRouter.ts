import express from 'express';
import userModel from "../db/models/userModel";

const router: express.Router = express.Router();

router.post('/register', (req, res) => {
    const {us, ps} = req.body;
    userModel.find({
        us
    }).then((data) => {
        if (!data.length) {
            userModel.insertMany({us, ps}).then((data) => {
                res.send({
                    err: 0,
                    msg: 'register success'
                });
            })
        } else {
            res.send({
                err: -1,
                msg: 'user name already exist'
            })
        }
    });
});

router.post('/find', (req, res)=>{
    const {us} = req.body;
    userModel.find({us}, (err, data)=>{
        if(data.length) {
            res.send({
                err: -1,
                msg: 'user name already exist'
            })
        } else {
            res.send({
                err: 0,
                msg: 'user name available'
            })
        }
    })
});

router.post('/login', (req, res) => {
    const {us, ps} = req.body;
    userModel.find({us, ps}, (err, data) => {
        if (err) {
            console.log(err);
            res.send({
                err: -2,
                msg: 'server internal error'
            });
            return;
        }
        if (data.length === 0) {
            res.send({
                err: -1,
                msg: 'wrong password or user name'
            });
            return;
        }
        res.send({
            err: 0,
            msg: 'login success'
        });
    })
});

export default router;
