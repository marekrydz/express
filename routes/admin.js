const express = require('express');
const NewsModel = require('../models/NEWS');
const router = express.Router();

/* GET home page. */
router.all('*', (req, res, next) => {
    if (req.session.admin !== 1) {
        res.redirect('/login');
        return;
    }
    next();
});

router.get('/admin', (req, res) => {
    res.render('admin/index', {title: 'Admin'});
});

router.get('/news/add', (req, res) => {
    res.render('admin/news-form', {title: 'Add news to site'})
});

router.post('/news/add', (req, res) => {
    const newsModel = new NewsModel(req.body);

    newsModel.save(err => {
        if (err) {
            console.log(err)
        } else {
            console.log('Save to DB');
        }
    });

    console.log(req.body);
    res.render('admin/news-form', {title: 'Add news to site'})
});
module.exports = router;
