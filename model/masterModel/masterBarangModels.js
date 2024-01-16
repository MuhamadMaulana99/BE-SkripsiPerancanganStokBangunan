// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const masterBarang = sequelize.define('tb_mst_Barang',{
        kodeBarang: {
            type: DataTypes.STRING(10),
            default: null,
        },
        namaBarang: {
            type: DataTypes.STRING(20),
            default: null,
        },
    })
    return masterBarang;
}