const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const admminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    //console.log(admminData.products)
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    const products = admminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'}, ); //struktura plików ustawiona na katalog view, wybieramy plik, rozszerzenie pug także jest ust domyślnie, przekazujemy products w propsie
});

module.exports = router;