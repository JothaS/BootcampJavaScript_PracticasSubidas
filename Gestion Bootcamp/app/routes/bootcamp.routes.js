
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware');
const BootcampController = require('../controllers/bootcamp.controller');

router.post('/bootcamp', verifyToken, BootcampController.createBootcamp);
router.post('/bootcamp/adduser', verifyToken, BootcampController.addUserToBootcamp);
router.get('/bootcamp/:id', verifyToken, BootcampController.findBootcampById);
router.get('/bootcamps', BootcampController.findAllBootcamps);

module.exports = router;
