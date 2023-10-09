const {models: {kelas}} = require('../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {name, asalSekolah, alamat } = req.body
        if(!name || !asalSekolah || !alamat){
            return res.send(`${name} harus ada`);
        }
        const add = await kelas.create({name, asalSekolah, alamat})
        res.json(add)
    },
    getUser: async (req, res)=>{
        const get = await kelas.findAll({
            attributes: ['id','name', 'asalSekolah', 'alamat']
          })
        res.json(get)
    },
    putUser: async (req, res)=>{
        const id = req.params.id
        const {name, asalSekolah, alamat } = req.body
        const put = await kelas.update({ name, asalSekolah, alamat }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteUser: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await kelas.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}