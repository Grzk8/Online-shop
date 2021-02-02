const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const admminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {

    const products = admminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/', 
        hasProducts: products.length > 0, 
        activeShop: true, 
        productCSS: true});
});

module.exports = router;