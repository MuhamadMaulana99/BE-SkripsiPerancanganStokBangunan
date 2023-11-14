// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')


module.exports = (sequelize, DataTypes)=>{
    const suplayer = sequelize.define('tb_data_barangs',{
        deskripsi: {
            type: DataTypes.STRING,
            default: null,
        },
        hargaBarang: {
            type: DataTypes.STRING,
            default: null,
        },
        kodeBarang: {
            type: DataTypes.STRING,
            default: null,
        },
        namaBarang: {
            type: DataTypes.STRING,
            default: null,
        },
        stokBarang: {
            type: DataTypes.STRING,
            default: null,
        },
        satuan: {
            type: DataTypes.STRING,
            default: null,
        },
        // createdAt: {
        //     type: DataTypes.DATE,
        // },
    })
    return suplayer;
}