const express = require('express');
const router = express.Router();
const AuthenticationHandler = require('../handlers/authentication');


router.post('/login', AuthenticationHandler.login);
router.get('/logout', AuthenticationHandler.logout);

module.exports = router
