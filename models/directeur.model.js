module.exports = (sequelize, DataTypes) => {
    const Directeur = sequelize.define('Directeur', {
        utilisateurId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'utilisateurs',
                key: 'id'
            },
            allowNull: false
        }
    }, {
        tableName: 'directeurs'
    });

    return Directeur;
};
