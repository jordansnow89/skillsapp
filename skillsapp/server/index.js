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

app.get('/api/getproducts', (req, res) => {
    app
        .get("db")
        .getProducts()
        .then(results => {
            res.json(results)
        })
        .catch(error => console.log(error))
})

app.post('/api/addproduct', (req, res) => {
    console.log(req.body)

    const { product_name, description, price } = req.body
    app
        .get("db")
        .addProduct([product_name, description, price])
        .then(response => {
            return res.status(200).json(response[0]);
        });
}, )


app.delete('/api/removeproduct', (req, res) =>
    req.app
        .get("db")
        .removeProduct([req.query.id])
        .then(results => {
            res.json(results)
        })
        .catch(error => console.log(error))
)

app.listen(3001, () => {
    console.log(`I am watching and waiting on 3001`)
})
