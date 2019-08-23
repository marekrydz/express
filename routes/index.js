const express = require('express');
const router = express.Router();
const user = 'marek';
const password = 'marek';

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {title: 'Express'});
});

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login'})
});

router.post('/login', (req, res) => {
    if (req.body.password === password && req.body.user === user) {
        req.session.admin = 1;
        res.redirect('/admin');
    } else {
        res.redirect('/login');
    }
});


module.exports = router;
