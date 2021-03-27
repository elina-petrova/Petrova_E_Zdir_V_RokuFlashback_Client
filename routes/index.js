
const express = require('express');
const router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');


router.use('/api', createProxyMiddleware({
    target: 'http://localhost:5050',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))
router.use('/ums', createProxyMiddleware({
    target: 'http://localhost:5050',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))


module.exports = router;