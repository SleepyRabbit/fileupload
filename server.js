/**
 * Created by houenxing on 17/7/8.
 */
"use strict";

const express = require('express');
const app = express();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, __dirname + '/upload');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({
    storage: storage
})

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname})
});

// app.post('/upload',upload.single('avar'), function (req, res) {
//     console.log('upload!');
//     if(req.file) {
//         console.log("single file upload processing...");
//     }
// });

app.post('/upload',upload.array('avar', 12), function (req, res) {
    console.log('upload!');
    if(req.files) {
        console.log("multiple files upload processing...");
        // console.log(req.files);
    }
});

app.listen(3002, function () {
    console.log("Start listening port 3002...");
})
