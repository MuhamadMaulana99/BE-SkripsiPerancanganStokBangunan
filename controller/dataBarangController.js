const {models: {dataBarang}} = require('../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {namaBarang, typeBarang, rak } = req.body
        // console.log(req.body, 'req.body')
        // if(!namaBarang || !typeBarang || !rak){
        //     return res.send(`nama harus ada`);
        // }
        const add = await dataBarang.create({namaBarang, typeBarang, rak})
        res.json(add)
    },
    getUser: async (req, res)=>{
        const get = await dataBarang.findAll({
            attributes: ['id','namaBarang', 'typeBarang', 'rak']
          })
        res.json(get)
    },
    putUser: async (req, res)=>{
        const id = req.params.id
        const {namaBarang, typeBarang, rak } = req.body
        const put = await dataBarang.update({ namaBarang, typeBarang, rak }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteUser: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await dataBarang.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}