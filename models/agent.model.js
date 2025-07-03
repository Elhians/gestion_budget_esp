module.exports = (sequelize, DataTypes) => {
    const Agent = sequelize.define('Agent', {
        utilisateurId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Utilisateur',
                key: 'id'
            }
        }
        // Pas besoin d’autres liens
    }, {
        tableName: 'agent'
    });

    return Agent;
};
