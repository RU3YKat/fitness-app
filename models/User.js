const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {}
// install bcrypt and call here to checkPassword 
// and return bcrypt.compareSync
// checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);

// maybe add a field for calculated BMI using api calculator?
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
        // hooks: {
        //     // set up beforeCreate lifecycle "hook" functionality
        //     async beforeCreate(newUserData) {
        //         newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //         return newUserData;
        //     },
    
        //     async beforeUpdate(updatedUserData) {
        //         updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //         return updatedUserData;
        //     }
        // },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;