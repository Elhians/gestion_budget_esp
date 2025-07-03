module.exports = (sequelize, DataTypes) => {
    const Besoin = sequelize.define('Besoin', {
        titre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        categorie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cout: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        statut: {
            type: DataTypes.ENUM('EN_ATTENTE', 'VALIDE', 'REJETE'),
            defaultValue: 'EN_ATTENTE'
        },
        dateSoumission: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        utilisateurId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Utilisateur',
                key: 'id'
            }
        }
    }, {
        tableName: 'besoin'
    });

    return Besoin;
};
