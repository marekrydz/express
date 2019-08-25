const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NewsModel =
    new Schema({
        title: {type: String, required: [true, 'Please add title']},
        content: {type: String, required: [true, 'Please add content']},
        date: {type: Date, default: Date.now}
    });

module.exports = mongoose.model('NewsCollection', NewsModel);
