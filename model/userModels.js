// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const user = sequelize.define('tb_users',{
        name: {
            type: DataTypes.STRING,
            default: 'MAULANA',
        },
        alamat: {
            type: DataTypes.STRING,
            default: 'Cisauk',
        },
        noTlp: {
            type: DataTypes.STRING,
            default: null,
        },
    })
    return user;
}