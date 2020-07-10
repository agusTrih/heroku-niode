const express = require("express");
const app = express();

const port = process.env.port || 3001;
const path = require("path");

// membaca  file external
app.use(express.static("views"));

// untuk menampilkan file html
app.get("/products", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/product.html"));
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/home.html"));
});
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
