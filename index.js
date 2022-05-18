const express = require("express");
const router = require("./routes");
const app = express();
const handlebars = require("express-handlebars");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const db = require("./app/models");

app.engine("handlebars", handlebars({}));

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/pages`);

app.use(cookieParser());
app.use(session({
    secret: "x319h39hh981h3jad",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 1000 } //por 24h mantem a sessao do usuario
}));

app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

app.use("/css", express.static(`${__dirname}/pages/css`));
app.use("/fonts", express.static(`${__dirname}/pages/fonts`));
app.use("/images", express.static(`${__dirname}/pages/images`));
app.use("/js", express.static(`${__dirname}/pages/js`));
app.use("/vendor", express.static(`${__dirname}/pages/vendor`));

app.use(express.urlencoded({ extended: false }));
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT);