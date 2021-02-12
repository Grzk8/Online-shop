const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error')

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', 'views'); 

const admminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const cartRoutes = require('./routes/cart');
const productsRoutes = require('./routes/products');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admminRoutes);
app.use(productsRoutes);
app.use(shopRoutes);
app.use(cartRoutes);


app.use(errorController.get404);
app.listen(3000);
