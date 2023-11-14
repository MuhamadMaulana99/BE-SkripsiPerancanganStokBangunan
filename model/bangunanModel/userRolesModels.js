// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const userRoles = sequelize.define('tb_userRoles',{
        userName: {
            type: DataTypes.STRING,
            default: 'MAULANA',
        },
        password: {
            type: DataTypes.STRING,
            default: 'Cisauk',
        },
        userRole: {
            type: DataTypes.STRING,
            default: null,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
    })
    return userRoles;
}