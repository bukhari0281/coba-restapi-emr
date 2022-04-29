'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('patients', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            placeOfBirth: {
                type: Sequelize.STRING,
                allowNull: false
            },
            dateOfBirth: {
                type: Sequelize.STRING,
                allowNull: false
            },
            noId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            gender: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false
            },
            contact: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('patients');

    }
};