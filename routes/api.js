const NewsModel = require('../models/NEWS');
const express = require('express');
const router = express.Router();

router.get('/api/getNews/:title', (req, res) => {
    const title = req.params.title;
    NewsModel.findOne({title: title}, null, {sort: {title: 'asc'}}, (err, data) => {
        if (err) {
            console.log(err);
        }
        if(data===null || data === []){
            res.json('There is not such title. Try find again');
        }
        res.json(data);
    })
});

router.get('/api/getNews/sort/:sortType', (req, res) => {
    const sortType = req.params.sortType;
    NewsModel.find({}, null, {sort: {title: sortType}}, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);
    })
});

router.get('/api/getNews', (req, res) => {
    NewsModel.find({}, null, {sort: {title: 'asc'}}, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);
    })
});

module.exports = router;