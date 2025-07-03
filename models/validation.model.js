module.exports = (sequelize, DataTypes) => {
    const Validation = sequelize.define('Validation', {
        statut: {
            type: DataTypes.ENUM('EN_ATTENTE', 'VALIDÉ', 'REJETÉ'),
            allowNull: false,
            defaultValue: 'EN_ATTENTE'
        },
        commentaire: {
        type: DataTypes.TEXT,
        allowNull: true
        },
        dateValidation: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
        },
        besoinId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'besoin',
            key: 'id'
        }
        },
        utilisateurId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'utilisateur',
            key: 'id'
        }
        }
    }, {
        tableName: 'validation'
    });

    return Validation;
};
