// userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

router.post('/auth/google', registerUser);

module.exports = router;
