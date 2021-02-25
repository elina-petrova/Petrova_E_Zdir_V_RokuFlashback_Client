
const express = require('express');
const router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');

// whenever we get a request to api
// this router will catch the request
// and send it to our server
// and server will return it and
// give us a data

// making our server responsible
// for all data mining/requestss
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
    res.send('hit the main route');
})

module.exports = router;