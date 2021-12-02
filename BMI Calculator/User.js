const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {}
// install bcrypt and call here to checkPassword 
// and return bcrypt.compareSync
// checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        startWeight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        goalWeight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        birthDate: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;