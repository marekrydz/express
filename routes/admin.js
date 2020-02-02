const express = require('express');
const NewsModel = require('../models/NEWS');
const router = express.Router();

router.get('/admin', (req, res) => {
    NewsModel.find({}, (err, data) => {
        if (err) {
            console.log('I can not find News', err)
        }
        res.render('admin/index', {title: 'Admin', data});
    })
});

router.get('/news/add', (req, res) => {
    res.render('admin/news-form', {title: 'Add news to site', errors: {}, body: {}})
});

router.post('/news/add', (req, res) => {
    let information = '';
    let body = req.body;
    const newsModel = new NewsModel(body);
    let errors = newsModel.validateSync();

    if (errors === undefined) {
        errors = [];
    }

    newsModel.save((err) => {
        if (err) {
            console.log('Fail during save to DB');
        } else {
            body = {};
            information = 'News is added';
            console.log('Save to DB');
        }
        res.render('admin/news-form', {title: 'Add news to site', errors, body, information})
    });
});

router.get('/news/`delete/:id', (req, res) => {
    NewsModel.findByIdAndDelete({_id: req.params.id}, (err) => {
        if (err) {
            console.log('I can not delete this news');
        } else {
            console.log('News is deleted');
            res.redirect('/admin');
        }
    });
});

module.exports = router;
