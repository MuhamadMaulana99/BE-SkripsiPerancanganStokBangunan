// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const barangKeluar = sequelize.define('tb_barang_keluar',{
        kodeBarang: {
            type: DataTypes.STRING(50),
            default: null,
        },
        namaBarang: {
            type: DataTypes.STRING(50),
            default: null,
        },
        jmlKeluar: {
            type: DataTypes.STRING(10),
            default: null,
        },
        tglKeluar: {
            type: DataTypes.STRING(50),
            default: null,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
    })
    return barangKeluar;
}