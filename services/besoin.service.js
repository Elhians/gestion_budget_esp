const { Besoin } = require('../models');

exports.createBesoin = async (data) => {
    if (!data.titre || !data.cout) {
        throw new Error("Le titre et le coût sont requis.");
    }
    data.statut = data.statut || 'EN_ATTENTE';
    return await Besoin.create(data);
};

exports.getAllBesoins = async () => {
    return await Besoin.findAll();
};

exports.getBesoinById = async (id) => {
    const besoin = await Besoin.findByPk(id);
    if (!besoin) throw new Error("Besoin non trouvé.");
    return besoin;
};

exports.deleteBesoin = async (id) => {
    const besoin = await Besoin.findByPk(id);
    if (!besoin) throw new Error("Besoin non trouvé.");
    await besoin.destroy();
    return { message: "Besoin supprimé avec succès." };
};
