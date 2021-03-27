const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3030;

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "landing.html"));
});
app.get("/homepage", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`app is runnin on ${port}`);
})

