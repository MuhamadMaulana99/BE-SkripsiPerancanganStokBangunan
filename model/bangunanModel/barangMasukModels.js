// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const suplayer = sequelize.define('tb_barang_masuk',{
        jumlahMasuk: {
            type: DataTypes.STRING(10),
            default: 'MAULANA',
        },
        kodeBarang: {
            type: DataTypes.STRING(10),
            default: 'Cisauk',
        },
        namaBarang: {
            type: DataTypes.STRING(20),
            default: null,
        },
        tglMasuk: {
            type: DataTypes.STRING(20),
            default: null,
        },
        supllayer: {
            type: DataTypes.STRING(25),
        },
        hargaBarang: {
            type: DataTypes.STRING(10),
        },
        satuan: {
            type: DataTypes.STRING(10),
        },
        deskripsi: {
            type: DataTypes.STRING(10),
        },
    })
    return suplayer;
}