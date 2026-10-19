const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
 
// Teszt
app.get("/teszt", (req, res) => {
    res.send("MUKODIK");
});
// Szerver indítása
app.listen(PORT, () => {
    console.log("A szerver fut: http://localhost:" + PORT);
});