const express = require('express');
const router = express.Router();
const NewsModel = require('../models/NEWS');


router.get('/projects', (req, res) => {
  res.render('projects')
});

module.exports = router;
