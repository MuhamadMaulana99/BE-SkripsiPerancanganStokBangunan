// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const masterSatuan = sequelize.define('tb_mst_Satuan',{
        name: {
            type: DataTypes.STRING(50),
            default: null,
        },
    })
    return masterSatuan;
}