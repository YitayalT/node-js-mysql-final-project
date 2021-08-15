const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();
          
router.post('/register', authController.register );

router.post('/login', authController.login );

router.get('/logout', authController.logout );

router.get('/new_entry', authController.new_entry );

module.exports = router;