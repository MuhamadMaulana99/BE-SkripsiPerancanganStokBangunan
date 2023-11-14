const {models: {barangKeluar,barangMasuk}} = require('../../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {tglKeluar, kodeBarang, namaBarang, jmlKeluar } = req.body
        // console.log(req.body, 'req.body')
        // if(!tglKeluar || || !kodeBarang){
        //     return res.send(`tglKeluar harus ada`);
        // }
        const add = await barangKeluar.create({tglKeluar, kodeBarang,namaBarang, jmlKeluar})
        res.json(add)
    },
    getUser: async (req, res)=>{
        const get = await barangKeluar.findAll({
            attributes: ['id','tglKeluar', 'kodeBarang', 'namaBarang', 'jmlKeluar']
          })
        res.json(get)
    },
    putUser: async (req, res)=>{
        const id = req.params.id
        const {tglKeluar, kodeBarang,namaBarang, jmlKeluar } = req.body
        const put = await barangKeluar.update({ tglKeluar, kodeBarang, namaBarang, jmlKeluar }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteUser: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await barangKeluar.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}