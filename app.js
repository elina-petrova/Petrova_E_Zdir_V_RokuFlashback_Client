const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3030;

// when we do rendering with handlebars
// we need to tell where they live
app.set('views', path.join(__dirname, 'views'));

//so express know what package we aresuing to render the views
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`app is runnin on ${port}`);
})

