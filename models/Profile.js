const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Profile extends Model {
// install bcrypt and call here to checkPassword 
checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
    }
}

// maybe add a field for calculated BMI using api calculator?
Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        profilename: {
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
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        start: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        goal: {
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
        },
        
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newProfileData) {
                newProfileData.password = await bcrypt.hash(newProfileData.password, 10);
                return newProfileData;
            },
    
            async beforeUpdate(updatedProfileData) {
                updatedProfileData.password = await bcrypt.hash(updatedProfileData.password, 10);
                return updatedProfileData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile'
    }
);

module.exports = Profile;