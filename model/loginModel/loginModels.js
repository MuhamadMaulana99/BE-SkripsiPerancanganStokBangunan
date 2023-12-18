// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const login = sequelize.define('tb_login',{
        username: {
            type: DataTypes.STRING,
            default: null,
        },
        password: {
            type: DataTypes.STRING,
            default: null,
        },
        userRoles: {
            type: DataTypes.STRING,
            default: null,
        },
    })
    return login;
}