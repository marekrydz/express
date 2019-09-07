const express = require('express');
const router = express.Router();
const config = require('../config');

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {title: 'Express'});
});

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login'})
});

router.post('/login', (req, res) => {
    if (req.body.password === config.login && req.body.user === config.login) {
        req.session.admin = 1;
        res.redirect('/admin');
    }
    else {
        res.redirect('/login');
    }
});

router.get('*', (req, res) => {
    res.send('not found');
});

module.exports = router;
