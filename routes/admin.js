const express = require('express');

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

    res.render('admin', {title: 'Admin'});
    console.log();
});

module.exports = router;
