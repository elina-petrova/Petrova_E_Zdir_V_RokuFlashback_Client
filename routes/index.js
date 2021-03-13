
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

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

module.exports = router;