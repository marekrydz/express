const express = require('express');
const router = express.Router();
const NewsModel = require('../models/NEWS');


/* GET home page. */
router.get('/news', (req, res) => {
    const news = NewsModel.find();
    news.sort({date: 'desc'});

    news.exec((err, data) => {
        if (err) {
            console.log('Problem with list in News label', err)
        } else {
            res.render('news', {title: 'News', data});
        }
    });

});

module.exports = router;
