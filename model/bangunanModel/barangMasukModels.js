// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const suplayer = sequelize.define('tb_barang_masuk',{
        jumlahMasuk: {
            type: DataTypes.STRING(50),
            default: 'MAULANA',
        },
        kodeBarang: {
            type: DataTypes.STRING(100),
            default: 'Cisauk',
        },
        namaBarang: {
            type: DataTypes.STRING(20),
            default: null,
        },
        tglMasuk: {
            type: DataTypes.STRING(50),
            default: null,
        },
        supllayer: {
            type: DataTypes.STRING(100),
        },
        hargaBarang: {
            type: DataTypes.STRING(50),
        },
        satuan: {
            type: DataTypes.STRING(50),
        },
        deskripsi: {
            type: DataTypes.STRING(20),
        },
    })
    return suplayer;
}