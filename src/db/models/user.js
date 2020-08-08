'use strict';
//const { Model } = require('sequelize');
const {NAME_PATTERN, SALT} = require('../../constrains');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: NAME_PATTERN,
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: NAME_PATTERN,
            }
        },
        password: {
            type: DataTypes.TEXT,
            field: 'passwordHash',
            allowNull: false,
            set(val) {
                this.setDataValue('password', bcrypt.hashSync(val, SALT));
            }
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {});
    User.associate = function (models) {
        User.hasMany(models.Task, {foreignKey: 'userId'});
    };
    return User;
};