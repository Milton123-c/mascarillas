const express = require("express");
const morgan = require("morgan");
const path = require("path");

//setting
const app = express();

app.set("port", process.env.Port || 3000);
app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//static file
app.use(express.static(path.join(__dirname, "public/")));

//rutas
app.use(require("./routes/rutas"));

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});