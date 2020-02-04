const express = require('express');
const router = express.Router();

router.get('/mail', (req, res) => {
    res.render('mail');
});

module.exports = router;
