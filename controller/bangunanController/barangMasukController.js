const {models: {barangMasuk}} = require('../../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {jumlahMasuk, tglMasuk, kodeBarang, namaBarang, supllayer, hargaBarang, satuan } = req.body
        // console.log(req.body, 'req.body')
        // if(!jumlahMasuk || !tglMasuk || !kodeBarang){
        //     return res.send(`jumlahMasuk harus ada`);
        // }
        const add = await barangMasuk.create({jumlahMasuk, tglMasuk, kodeBarang,namaBarang, supllayer, hargaBarang, satuan})
        res.json(add)
    },
    getUser: async (req, res)=>{
        const get = await barangMasuk.findAll({
            attributes: ['id','jumlahMasuk', 'tglMasuk', 'kodeBarang', 'namaBarang', 'supllayer', 'hargaBarang', 'satuan']
          })
          const val = get?.map((value)=> {
            // console.log(value, 'll')
            return {
              ...value.dataValues,
              kodeBarang: JSON.parse(value?.kodeBarang),
              supllayer: JSON.parse(value?.supllayer),
              satuan: JSON.parse(value?.satuan)
            }
          })
        res.json(val)
    },
    putUser: async (req, res)=>{
        const id = req.params.id
        const {jumlahMasuk, tglMasuk, kodeBarang,namaBarang, supllayer, hargaBarang, satuan } = req.body
        const put = await barangMasuk.update({ jumlahMasuk, tglMasuk, kodeBarang, namaBarang, supllayer, hargaBarang, satuan }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteUser: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await barangMasuk.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}