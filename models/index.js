// api/models/index.js
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Importer les modèles
const BesoinModel = require('./besoin.model');
const UtilisateurModel = require('./utilisateur.model');
const ValidationModel = require('./validation.model');
const DepartementModel = require('./departement.model');


// Initialiser les modèles
const Departement = DepartementModel(sequelize, Sequelize.DataTypes);
const Utilisateur = UtilisateurModel(sequelize, Sequelize.DataTypes);
const Besoin = BesoinModel(sequelize, Sequelize.DataTypes);
const Validation = ValidationModel(sequelize, Sequelize.DataTypes);



// Synchroniser les modèles avec la base
sequelize.sync({ alter: true }) // alter ou force: true pour dev
    .then(() => console.log("✅ Base de données synchronisée"))
    .catch((err) => console.error("❌ Erreur de connexion :", err));
;

// Définir les relations entre les modèles
Besoin.belongsTo(Utilisateur, { foreignKey: 'idAuteur', as: 'auteur' });
Utilisateur.hasMany(Besoin, { foreignKey: 'idAuteur', as: 'besoins' });

Validation.belongsTo(Besoin, { foreignKey: 'besoinId', as: 'besoin' });
Besoin.hasMany(Validation, { foreignKey: 'besoinId', as: 'validations' });

Validation.belongsTo(Utilisateur, { foreignKey: 'idValidateur', as: 'validateur' });
Utilisateur.hasMany(Validation, { foreignKey: 'idValidateur', as: 'validations' });

Departement.hasMany(Utilisateur, { foreignKey: 'idDepartementAppartenance', as: 'utilisateurs' });
Utilisateur.belongsTo(Departement, { foreignKey: 'idDepartementAppartenance', as: 'departement' });

module.exports = {
    sequelize,
    Besoin,
    Utilisateur,
    Validation,
    Departement,
};
