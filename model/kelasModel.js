module.exports = (sequelize, DataTypes)=>{
    const kelas = sequelize.define('tb_kelas',{
        name: {
            type: DataTypes.STRING,
            default: null,
        },
        asalSekolah: {
            type: DataTypes.STRING,
            default: null,
        },
        alamat: {
            type: DataTypes.STRING,
            default: null,
        },
    })
    return kelas;
}