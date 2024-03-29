// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')


module.exports = (sequelize, DataTypes)=>{
    const suplayer = sequelize.define('tb_data_barangs',{
        deskripsi: {
            type: DataTypes.STRING(100),
            default: null,
        },
        hargaBarang: {
            type: DataTypes.STRING(100),
            default: null,
        },
        kodeBarang: {
            type: DataTypes.STRING(100),
            default: null,
        },
        namaBarang: {
            type: DataTypes.STRING(100),
            default: null,
        },
        jumlahMasuk: {
            type: DataTypes.STRING(100),
            default: null,
        },
        satuan: {
            type: DataTypes.STRING(100),
            default: null,
        },
        // createdAt: {
        //     type: DataTypes.DATE,
        // },
    })
    return suplayer;
}