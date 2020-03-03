import express, {Request} from 'express';
import Multer, {FileFilterCallback} from "multer";
import path from 'path';

const router: express.Router = express.Router();
const type = ['jpg', 'png', 'jpeg', 'gif'];

const storage = Multer.diskStorage({
    destination: (req, file: Express.Multer.File, callback) => {
        // 必须传绝对路径
        callback(null, path.resolve(process.cwd(), './src/static/upload/img'));
    },
    filename: (req, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) => {
        const type = file.mimetype.split('/')[1];
        callback(null, `${Date.now()}.${type}`);
    }
});

const fileFilterFunc = (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
    const {mimetype} = file;
    const fileType = mimetype.split('/')[1];
    if (type.indexOf(fileType) === -1) {
        console.log('wrong file type');
        callback(null, false);
    } else {
        callback(null, true);
    }
};

const multer = Multer({
    storage,
    fileFilter: fileFilterFunc
});

router.post('/uploadImg', multer.single('file'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any

    console.log(req.file);
    const file: Express.Multer.File = req.file;
    const filePathArr = file.path.split('/');
    const filePath = filePathArr[filePathArr.length - 1];
    if (file) {
        res.send({
            err: 0,
            msg: 'upload img success',
            data: filePath
        });
    } else {
        res.send({
            err: -1,
            msg: 'upload failed',
        });
    }

});

export default router;

