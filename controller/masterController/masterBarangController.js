const {models: {masterBarang}} = require('../../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {kodeBarang, namaBarang } = req.body
        const add = await masterBarang.create({kodeBarang, namaBarang})
        res.json(add)
    },
    getUser: async (req, res)=>{
        const get = await masterBarang.findAll({
            attributes: ['id','kodeBarang', 'namaBarang']
          })
        res.json(get)
    },
    putUser: async (req, res)=>{
        const id = req.params.id
        const {kodeBarang, namaBarang } = req.body
        const put = await masterBarang.update({ kodeBarang, namaBarang }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteUser: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await masterBarang.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}