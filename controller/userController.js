const {models: {user}} = require('../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {name, alamat, noTlp } = req.body
        // console.log(req.body, 'req.body')
        // if(!name || !alamat || !noTlp){
        //     return res.send(`nama harus ada`);
        // }
        const add = await user.create({name, alamat, noTlp})
        res.json(add)
    },
    getUser: async (req, res)=>{
        const get = await user.findAll({
            attributes: ['id','name', 'alamat', 'noTlp']
          })
        res.json(get)
    },
    putUser: async (req, res)=>{
        const id = req.params.id
        const {name, alamat, noTlp } = req.body
        const put = await user.update({ name, alamat, noTlp }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteUser: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await user.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}