const { Utilisateur } = require('../models');
const { sendResetPasswordEmail } = require('../utils/email');
const crypto = require('crypto');

exports.createUtilisateur = async (data) => {
    const exist = await Utilisateur.findOne({ where: { email: data.email } });
    if (exist) throw new Error("Email déjà utilisé");

    const resetToken = crypto.randomBytes(32).toString('hex');
    const expiration = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 heures

    const utilisateur = await Utilisateur.create({
        prenom: data.prenom,
        nom: data.nom,
        email: data.email,
        motDePasse: '',
        role: data.role,
        idDepartementAppartenance: data.idDepartementAppartenance || null,
        idDepartementDirection: data.idDepartementDirection || null,
        resetToken,
        resetTokenExpiration: expiration
    });

    await sendResetPasswordEmail(utilisateur.email, resetToken);

    return utilisateur;
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
