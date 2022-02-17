const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', 'views'); 

const admminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//     User.findById('620407cd55f7621f6656aa94')
//     .then(user => {
//     req.user = new User(user.name, user.email, user.cart, user._id);
//     next();
//     })
//     .catch(err => console.log(err));
// });

app.use('/admin', admminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://user1:user1haslo@cluster0.wcshf.mongodb.net/shop?retryWrites=true').then(result => {
    app.listen(3000);
}).catch(err => {
    console.log(err);
})