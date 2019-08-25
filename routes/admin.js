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
    res.render('admin/news-form', {title: 'Add news to site', errors: {}, body: {}})
});

router.post('/news/add', (req, res) => {
    const body = req.body;
    const newsModel = new NewsModel(req.body);
    let errors = newsModel.validateSync();
    if (errors === undefined) {
        errors = [];
    }

    newsModel.save(err => {
        if (err) {
            console.log('Fail during save to DB');
        } else {
            console.log('Save to DB');
        }
    });

    res.render('admin/news-form', {title: 'Add news to site', errors, body})
});
module.exports = router;
