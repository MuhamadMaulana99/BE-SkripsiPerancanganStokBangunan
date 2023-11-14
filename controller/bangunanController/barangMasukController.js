const {models: {barangMasuk}} = require('../../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {jumlahMasuk, tglMasuk, kodeBarang, namaBarang, supllayer } = req.body
        // console.log(req.body, 'req.body')
        // if(!jumlahMasuk || !tglMasuk || !kodeBarang){
        //     return res.send(`jumlahMasuk harus ada`);
        // }
        const add = await barangMasuk.create({jumlahMasuk, tglMasuk, kodeBarang,namaBarang, supllayer})
        res.json(add)
    },
    getUser: async (req, res)=>{
        const get = await barangMasuk.findAll({
            attributes: ['id','jumlahMasuk', 'tglMasuk', 'kodeBarang', 'namaBarang', 'supllayer']
          })
        res.json(get)
    },
    putUser: async (req, res)=>{
        const id = req.params.id
        const {jumlahMasuk, tglMasuk, kodeBarang,namaBarang, supllayer } = req.body
        const put = await barangMasuk.update({ jumlahMasuk, tglMasuk, kodeBarang, namaBarang, supllayer }, {
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