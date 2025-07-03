module.exports = (sequelize, DataTypes) => {
    const ChefDepartement = sequelize.define('ChefDepartement', {
        enseignantId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Enseignant',
                key: 'utilisateurId'
            },
        allowNull: false
        },
        departementId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Departement',
                key: 'id'
            },
            allowNull: false,
            unique: true // un seul chef de département par département
        }
    }, {
        tableName: 'chef_departement',
    });

    return ChefDepartement;
};
