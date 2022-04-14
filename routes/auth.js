const express = require('express');
const { check, body} = require('express-validator');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login',[
    body('email').isEmail().withMessage('Incorrect email adress'),
    body('password', 'Invalid password').isLength({min: 5}).isAlphanumeric()
] , authController.postLogin);

router.post('/signup', check('email').isEmail().withMessage('Please enter a valid email'), authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.getReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;