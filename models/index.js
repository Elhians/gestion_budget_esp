// api/models/index.js
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Importer les modèles
const BesoinModel = require('./besoin.model');
const UtilisateurModel = require('./utilisateur.model');
const EnseignantModel = require('./enseignant.model');
const AgentModel = require('./agent.model');
const ValidationModel = require('./validation.model');
const Departement = require('./departement.model');
const ChefDepartement = require('./chefDepartement.model');
const Directeur = require('./directeur.model');

// Initialiser les modèles
const Besoin = BesoinModel(sequelize, Sequelize.DataTypes);
const Utilisateur = UtilisateurModel(sequelize, Sequelize.DataTypes);
const Enseignant = EnseignantModel(sequelize, Sequelize.DataTypes);
const Agent = AgentModel(sequelize, Sequelize.DataTypes);
const Validation = ValidationModel(sequelize, Sequelize.DataTypes);
const Departement = Departement(sequelize, Sequelize.DataTypes);
const ChefDepartement = ChefDepartement(sequelize, Sequelize.DataTypes);
const Directeur = Directeur(sequelize, Sequelize.DataTypes);

// Synchroniser les modèles avec la base
sequelize.sync({ alter: true }) // alter ou force: true pour dev
    .then(() => console.log("✅ Base de données synchronisée"))
    .catch((err) => console.error("❌ Erreur de connexion :", err));

Utilisateur.hasMany(Besoin, {
    foreignKey: 'utilisateurId',
    as: 'besoin'
});

Besoin.belongsTo(Utilisateur, {
    foreignKey: 'utilisateurId',
    as: 'utilisateur'
});
Utilisateur.hasOne(Enseignant, { 
    foreignKey: 'utilisateurId' 
});
Enseignant.belongsTo(Utilisateur, {
    foreignKey: 'utilisateurId' 
});

Utilisateur.hasOne(Agent, { foreignKey: 'utilisateurId' });
Agent.belongsTo(Utilisateur, { foreignKey: 'utilisateurId' });

Departement.hasMany(Enseignant, { foreignKey: 'departementId', as: 'enseignants' });
Enseignant.belongsTo(Departement, { foreignKey: 'departementId', as: 'departement' });

Departement.hasOne(ChefDepartement, { foreignKey: 'departementId', as: 'chefDepartement' });
ChefDepartement.belongsTo(Departement, { foreignKey: 'departementId' });

Enseignant.hasOne(ChefDepartement, { foreignKey: 'utilisateurId' });
ChefDepartement.belongsTo(Enseignant, { foreignKey: 'utilisateurId' });

Utilisateur.hasOne(Directeur, { foreignKey: 'utilisateurId' });
Directeur.belongsTo(Utilisateur, { foreignKey: 'utilisateurId' });


Besoin.hasMany(Validation, { foreignKey: 'besoinId', as: 'validations' });
Validation.belongsTo(Besoin, { foreignKey: 'besoinId', as: 'besoin' });

Utilisateur.hasMany(Validation, { foreignKey: 'utilisateurId', as: 'validationsFaites' });
Validation.belongsTo(Utilisateur, { foreignKey: 'utilisateurId', as: 'validateur' });


module.exports = {
    sequelize,
    Besoin,
    Utilisateur,
    Enseignant,
    Agent,
    Validation,
    Departement,
    ChefDepartement,
    Directeur
};
