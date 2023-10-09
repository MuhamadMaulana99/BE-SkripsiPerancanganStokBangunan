module.exports = (sequelize, DataTypes)=>{
    const kelas = sequelize.define('tb_dataBarang',{
        idBarang: {
            type: DataTypes.UUID,
        },
        namaBarang: {
            type: DataTypes.STRING,
            default: null,
        },
        typeBarang: {
            type: DataTypes.STRING,
            default: null,
        },
        rak: {
            type: DataTypes.STRING,
            default: null,
        },
    })
    return kelas;
}