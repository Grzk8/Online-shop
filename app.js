const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'handlebars'}));// 1- nazwa (taką samą nazwę musi mieć rozszerzenie pliku), używany silnik- funkcja, którą wywołujemy
app.set('view engine', 'handlebars');
//app.set('view engine', 'pug');// kompilujemy dynamiczne szablony z silnikiem pug
app.set('views', 'views'); //ustawiamy domyślny katalog views na views (w tym wypadku nie musimy tego robić - views jest katalogirm domyślnym)

const admminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const e = require('express');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page not found'});
});
app.listen(3000);
