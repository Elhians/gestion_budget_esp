module.exports = (sequelize, DataTypes) => {
    const Utilisateur = sequelize.define('Utilisateur', {
        prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        motDePasse: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Utilisateur;
};
