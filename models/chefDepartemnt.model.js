module.exports = (sequelize, DataTypes) => {
    const ChefDepartement = sequelize.define('ChefDepartement', {
        enseignantId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'enseignants',
                key: 'utilisateurId'
            },
        allowNull: false
        },
        departementId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'departements',
                key: 'id'
            },
            allowNull: false,
            unique: true // un seul chef de département par département
        }
    }, {
        tableName: 'chefs_departements',
    });

    return Directeur;
};
