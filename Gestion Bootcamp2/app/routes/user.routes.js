
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware');
const UserController = require('../controllers/user.controller');

router.post('/signup', UserController.createUser);
router.post('/signin', UserController.signIn);
router.get('/user/:id', verifyToken, UserController.findUserById);
router.get('/users', verifyToken, UserController.findAllUsers);
router.put('/user/:id', verifyToken, UserController.updateUserById);
router.delete('/user/:id', verifyToken, UserController.deleteUserById);

module.exports = router;

