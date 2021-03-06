const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
// const passportInit = require("./passport/init.js");
const EXPRESS_PORT = process.env.PORT || 3001;
const router = require("./controllers/routes")();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(router);
// const passport = passportInit(app);

// TODO: import router, call it with passport as param, and use it

app.get("*", (req, res) => {
    res.json({"success": true});
});

db.sequelize.sync().then(function() {
    app.listen(EXPRESS_PORT, () => {
        console.log(`Express server on port ${EXPRESS_PORT}`)
    });
});
