// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const masterBarang = sequelize.define('tb_mst_Barang',{
        kodeBarang: {
            type: DataTypes.STRING,
            default: null,
        },
        namaBarang: {
            type: DataTypes.STRING,
            default: null,
        },
    })
    return masterBarang;
}