// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const suplayer = sequelize.define('tb_suplayer',{
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
        createdAt: {
            type: DataTypes.DATE,
        },
    })
    return suplayer;
}