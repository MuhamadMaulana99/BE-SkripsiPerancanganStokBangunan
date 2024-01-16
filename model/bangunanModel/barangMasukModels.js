// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const suplayer = sequelize.define('tb_barang_masuk',{
        jumlahMasuk: {
            type: DataTypes.STRING(100),
            default: null,
        },
        kodeBarang: {
            type: DataTypes.STRING(100),
            default:null,
        },
        namaBarang: {
            type: DataTypes.STRING(100),
            default: null,
        },
        tglMasuk: {
            type: DataTypes.STRING(100),
            default: null,
        },
        supllayer: {
            type: DataTypes.STRING(255),
        },
        hargaBarang: {
            type: DataTypes.STRING(100),
        },
        satuan: {
            type: DataTypes.STRING(100),
        },
        deskripsi: {
            type: DataTypes.STRING(100),
        },
    })
    return suplayer;
}