
const express = require('express');
const router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('/api', createProxyMiddleware({
    //where our server is running
    //roku server
    target: 'http://localhost:5050',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

// this file is for handling
// UI requests
router.get('/', (req, res) => {
    // res.send('hit the main route');
    res.render('index', { message: 'hello from handlebars!' })
})
router.get('/portfolio', (req, res) => {
    // res.send('hit the main route');
    res.render('artwork', { anothermessage: 'You are on portfolio page' })
})

// other routes you might use
router.use((req, res) => {
    res.status(404);
    res.render('error', { layout: "errorLayout.hbs", errormessage: `you've lost your way! " ${req.url}" does not exist` });
})
module.exports = router;