// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const suplayer = sequelize.define('tb_barang_masuk',{
        jumlahMasuk: {
            type: DataTypes.STRING,
            default: 'MAULANA',
        },
        kodeBarang: {
            type: DataTypes.STRING,
            default: 'Cisauk',
        },
        namaBarang: {
            type: DataTypes.STRING,
            default: null,
        },
        tglMasuk: {
            type: DataTypes.STRING,
            default: null,
        },
        supllayer: {
            type: DataTypes.STRING,
        },
        hargaBarang: {
            type: DataTypes.STRING,
        },
        satuan: {
            type: DataTypes.STRING,
        },
        deskripsi: {
            type: DataTypes.STRING,
        },
    })
    return suplayer;
}