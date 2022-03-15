const express = require('express');

const authContloller = require('../controllers/auth');

const router = express.Router();

router.get('/login', authContloller.getLogin);

router.post('/login', authContloller.postLogin);

module.exports = router;