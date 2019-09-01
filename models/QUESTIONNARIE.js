const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionnairesModel =
    new Schema({
        answer: {type: String, required: true},
        vote: {type: Number, required: true},
    });

module.exports = mongoose.model('Questionnaires', QuestionnairesModel);
