const express = require('express');
const path = require('path');
const router = express.Router();
const app= express();

router.get('/curriculum-vitae', (req, res) => {
    if (req.session.admin !== 1) {
        res.redirect('/login');
        return;
    }
    res.render('curriculum-vitae');
});

app.use(express.static(path.join(__dirname, "public")));

router.post('/curriculum-vitae', (req, res) => {
    res.download(path.join(__dirname, "../downloads/Marek-Rydzewski-CV.pdf"));
});

module.exports = router;
