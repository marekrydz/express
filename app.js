var createError = require('http-errors');
var cookieSession = require('cookie-session');
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');
var questionnaireRouter = require('./routes/questionnaire');
var adminRouter = require('./routes/admin');
var projectsRouter = require('./routes/projects');
var apiRouter = require('./routes/api');
var curriculumVitaeRouter = require('./routes/curriculum-vitae');
var aboutMe = require('./routes/about-me');
var mail = require('./routes/mail');
sdasdsada
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
    name: 'session',
    keys: ['TryKey'],
    maxAge: 1000 * 60 * 60 * 24,
}));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

mongoose.connect('mongodb+srv://marco:marco@cluster0-yqgxm.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
        if (err) {
            console.log('Invalid connection');
        } else {
            console.log('Connected to DB')
        }
    });

app.use('/', indexRouter);
app.use('/', newsRouter);
app.use('/', questionnaireRouter);
app.use('/', adminRouter);
app.use('/', projectsRouter);
app.use('/', apiRouter);
app.use('/', curriculumVitaeRouter);
app.use('/', aboutMe);
app.use('/', mail);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
