module.exports = (sequelize, DataTypes) => {
    const Departement = sequelize.define('departement', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }, {
        tableName: 'departement'
    });

    return Departement;
};
