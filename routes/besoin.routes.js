const express = require('express');
const router = express.Router();
const besoinController = require('../controllers/besoin.controller');

router.post('/', besoinController.createBesoin);
router.get('/', besoinController.getAllBesoins);
router.get('/:id', besoinController.getBesoinById);
router.delete('/:id', besoinController.deleteBesoin);

module.exports = router;
