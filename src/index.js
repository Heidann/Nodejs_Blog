const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./resources/routes");

// static
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());

// HTTPS logger
app.use(morgan("combined"));

// template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "./resources/views"));

//route init
route(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
