const { json } = require('sequelize');
const {models: {dataBarangsModel}} = require('../../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {deskripsi, hargaBarang, kodeBarang, namaBarang, jumlahMasuk, satuan } = req.body
        // console.log(req.body, 'req.body')
        // if(!deskripsi || !hargaBarang || !kodeBarang){
        //     return res.send(`deskripsi harus ada`);
        // }
        const add = await dataBarangsModel.create({deskripsi, hargaBarang, kodeBarang,namaBarang, jumlahMasuk, satuan})
        res.json(add)
    },
    getUser: async (req, res)=>{
        const get = await dataBarangsModel.findAll({
            attributes: ['id','deskripsi', 'hargaBarang', 'kodeBarang', 'namaBarang', 'jumlahMasuk', 'satuan']
          })
          // console.log(get, 'gessssst')
          const val = get?.map((value)=> {
            return {
              ...value.dataValues,
              kodeBarang: JSON.parse(value?.kodeBarang),
              satuan: JSON.parse(value?.satuan)
            }
          })
          // console.log(val);
        res.json(val)
    },
    putUser: async (req, res)=>{
        const id = req.params.id
        const {deskripsi, hargaBarang, kodeBarang,namaBarang, jumlahMasuk, satuan } = req.body
        const put = await dataBarangsModel.update({ deskripsi, hargaBarang, kodeBarang, namaBarang, jumlahMasuk, satuan }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteUser: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await dataBarangsModel.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}