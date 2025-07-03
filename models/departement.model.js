module.exports = (sequelize, DataTypes) => {
    const Departement = sequelize.define('Departement', {
        nom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        },
        code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        }
    }, {
        tableName: 'departements'
    });

    return Departement;
};
