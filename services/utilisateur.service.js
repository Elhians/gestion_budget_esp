const { Utilisateur } = require('../models');

exports.createUtilisateur = async (data) => {
    if (!data.nom || !data.email || !data.motDePasse) {
        throw new Error("Champs requis : nom, email, mot de passe");
    }

    const exist = await Utilisateur.findOne({ where: { email: data.email } });
    if (exist) throw new Error("Email déjà utilisé");

    return await Utilisateur.create(data);
};

exports.getAllUtilisateurs = async () => {
    return await Utilisateur.findAll();
};

exports.getUtilisateurById = async (id) => {
    const utilisateur = await Utilisateur.findByPk(id);
    if (!utilisateur) throw new Error("Utilisateur non trouvé.");
    return utilisateur;
};

exports.deleteUtilisateur = async (id) => {
    const utilisateur = await Utilisateur.findByPk(id);
    if (!utilisateur) throw new Error("Utilisateur non trouvé.");
    await utilisateur.destroy();
    return { message: "Utilisateur supprimé avec succès." };
};
