require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");

const app = express()

const {
    CONNECTION_STRING,
    SESSION_SECRET } = process.env

massive(CONNECTION_STRING)
    .then(db => {
        app.set("db", db);
    })
    .catch(console.log);



app.use(json());
app.use(cors());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 525600 * 60 * 1000
    }
})
);


app.get('/api/me', (req, res, next) => {
    console.log(req.sessionID)

    if (req.user) res.json(req.user);
    else res.json("User is not logged in")
});


app.listen(3001, () => {
    console.log(`I am watching and waiting on 3001`)
})
