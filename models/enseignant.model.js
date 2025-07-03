module.exports = (sequelize, DataTypes) => {
    const Enseignant = sequelize.define('Enseignant', {
        utilisateurId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'utilisateurs',
                key: 'id'
            }
        },
        departementId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'enseignants'
    });

    return Enseignant;
};
