require('dotenv').config()

const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const db = require('./db')
const usersRouter = require('./routes/user-router');
const authRouter = require('./routes/auth-router');
const wishRouter = require('./routes/wish-router')

const app = express()
const apiPort = 3000

/**
 * Using express-session middleware for persistent user session. Be sure to
 * familiarize yourself with available options. Visit: https://www.npmjs.com/package/express-session
 */
 app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // set this to true on production
    }
}));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/api', wishRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))