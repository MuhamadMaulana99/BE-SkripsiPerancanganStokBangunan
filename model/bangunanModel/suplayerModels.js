// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const suplayer = sequelize.define('tb_suplayer',{
        name: {
            type: DataTypes.STRING(50),
            default: 'MAULANA',
        },
        alamat: {
            type: DataTypes.STRING(50),
            default: 'Cisauk',
        },
        noTlp: {
            type: DataTypes.STRING(20),
            default: null,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
    })
    return suplayer;
}