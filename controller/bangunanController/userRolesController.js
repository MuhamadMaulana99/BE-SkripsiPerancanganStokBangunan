const {models: {userRoles}} = require('../../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {userName, password, userRole } = req.body
        // console.log(req.body, 'req.body')
        // if(!userName || !password || !userRole){
        //     return res.send(`userName harus ada`);
        // }
        const add = await userRoles.create({userName, password, userRole})
        res.json(add)
    },
    getUser: async (req, res)=>{
        const get = await userRoles.findAll({
            attributes: ['id','userName', 'password', 'userRole']
          })
        res.json(get)
    },
    putUser: async (req, res)=>{
        const id = req.params.id
        const {userName, password, userRole } = req.body
        const put = await userRoles.update({ userName, password, userRole }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteUser: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await userRoles.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}