const express = require('express');
const QuestionnairesModel = require('../models/QUESTIONNARIE');
const router = express.Router();

let question = 'What is yours favorite season';
let voteAdded = 'You send your vote before';
let isVoteButton = true;

/* GET home page. */
router.get('/questionnaire', (req, res) => {
    isVoteButton = true;
    voteAdded = "";
    console.log(isVoteButton);
    QuestionnairesModel.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('questionnaire', {title: 'Questionnaire', data, voteAdded, question, isVoteButton});
        }
    });
});

router.post('/questionnaire', (req, res) => {
    const id = req.body.answerId;
    console.log(req.session.questionnarie);
    if (req.session.questionnarie === 1) {
        const voteAdded = 'You send your vote before';
        question = "";
        isVoteButton = false;
        res.render('questionnaire', {title: 'Questionnaire', data: {}, voteAdded, question, isVoteButton});
        return;
    }

    if (id === undefined) {
        res.redirect('/questionnaire');
        return;
    }

    QuestionnairesModel.findById({_id: id}, (err, data) => {
        if (err) {
            console.log(err);
        }
        data.vote += 1;
        data.save(err => {
            if (err) {
                console.log(err);
            }
            req.session.questionnarie = 1;
            console.log('Vote added');
            res.redirect('/questionnaire');
        })
    })
});

module.exports = router;
