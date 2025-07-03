module.exports = (sequelize, DataTypes) => {
    const Agent = sequelize.define('Agent', {
        utilisateurId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'utilisateurs',
            key: 'id'
        }
        }
        // Pas besoin d’autres liens
    }, {
        tableName: 'agents'
    });

    return Agent;
};
