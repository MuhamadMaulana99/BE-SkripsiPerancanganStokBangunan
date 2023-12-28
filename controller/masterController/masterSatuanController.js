const {models: {masterSatuan}} = require('../../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {name } = req.body
        const add = await masterSatuan.create({name})
        res.json(add)
    },
    getUser: async (req, res)=>{
        const get = await masterSatuan.findAll({
            attributes: ['id','name']
          })
        res.json(get)
    },
    putUser: async (req, res)=>{
        const id = req.params.id
        const {name} = req.body
        const put = await masterSatuan.update({ name }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteUser: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await masterSatuan.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}