const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateur.controller');

router.post('/', utilisateurController.createUtilisateur);
router.get('/', utilisateurController.getAllUtilisateurs);
router.get('/:id', utilisateurController.getUtilisateurById);
router.delete('/:id', utilisateurController.deleteUtilisateur);

module.exports = router;
