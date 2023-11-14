// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const barangKeluar = sequelize.define('tb_barang_keluar',{
        kodeBarang: {
            type: DataTypes.STRING,
            default: null,
        },
        namaBarang: {
            type: DataTypes.STRING,
            default: null,
        },
        jmlKeluar: {
            type: DataTypes.STRING,
            default: null,
        },
        tglKeluar: {
            type: DataTypes.STRING,
            default: null,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
    })
    return barangKeluar;
}