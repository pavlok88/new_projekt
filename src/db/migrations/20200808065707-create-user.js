'use strict';
const {NAME_PATTERN,PASSWORD_PATTERN,SALT} = require('../../constrains/index')
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          is: NAME_PATTERN
        }
      },
      lastName: {
        type: Sequelize.STRING
      },
      passwordHash: {
        type: Sequelize.TEXT
        field:'passwordHash',
        allowNull:false,
        set(val){this.setDataValue('password',bcrypt.hashSync(val,SULT))}
      },
      profilePicture: {
        type: Sequelize.STRING,
        allowNull:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};