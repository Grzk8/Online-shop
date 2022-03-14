const express = require('express');

const authContloller = require('../controllers/auth');

const router = express.Router();

router.get('/login', authContloller.getLogin);

module.exports = router;