const utilisateurService = require('../services/utilisateur.service');

exports.createUtilisateur = async (req, res) => {
    try {
        const utilisateur = await utilisateurService.createUtilisateur(req.body);
        res.status(201).json(utilisateur);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllUtilisateurs = async (req, res) => {
    try {
        const utilisateurs = await utilisateurService.getAllUtilisateurs();
        res.status(200).json(utilisateurs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getUtilisateurById = async (req, res) => {
    try {
        const utilisateur = await utilisateurService.getUtilisateurById(req.params.id);
        res.status(200).json(utilisateur);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

exports.deleteUtilisateur = async (req, res) => {
    try {
        const result = await utilisateurService.deleteUtilisateur(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
