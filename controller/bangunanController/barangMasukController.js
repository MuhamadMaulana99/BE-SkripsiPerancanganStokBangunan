const {models: {barangMasuk, dataBarangsModel}} = require('../../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {deskripsi,jumlahMasuk, tglMasuk, kodeBarang, namaBarang, supllayer, hargaBarang, satuan } = req.body
        const findBarangMasuk = await dataBarangsModel.findOne({ where: { kodeBarang} });
        if(findBarangMasuk){
          await dataBarangsModel.update({ jumlahMasuk: parseInt(findBarangMasuk.jumlahMasuk ) + parseInt(jumlahMasuk) }, {
            where: {
              kodeBarang
            }
          });
        }else{
          const add = await dataBarangsModel.create({deskripsi, hargaBarang, kodeBarang,namaBarang, jumlahMasuk, satuan});
        }
        const add = await barangMasuk.create({deskripsi,jumlahMasuk, tglMasuk, kodeBarang,namaBarang, supllayer, hargaBarang, satuan})
        res.json(add)
    },
    getUser: async (req, res)=>{
        const get = await barangMasuk.findAll({
            attributes: ['id','deskripsi','jumlahMasuk', 'tglMasuk', 'kodeBarang', 'namaBarang', 'supllayer', 'hargaBarang', 'satuan']
          })
          const val = get?.map((value)=> {
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
        const {deskripsi, jumlahMasuk, tglMasuk, kodeBarang,namaBarang, supllayer, hargaBarang, satuan } = req.body
        const put = await barangMasuk.update({  deskripsi,jumlahMasuk, tglMasuk, kodeBarang, namaBarang, supllayer, hargaBarang, satuan }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteUser: async (req, res)=>{
        const id = req.params.id
        const findbarangMasuk = await barangMasuk.findOne({ where: { id } });
        if(findbarangMasuk){
          const findDataBarang = await dataBarangsModel.findOne({ where: { kodeBarang: findbarangMasuk.kodeBarang } });
          if(findDataBarang){
            await dataBarangsModel.update({ jumlahMasuk: parseInt(findDataBarang.jumlahMasuk ) - parseInt(findbarangMasuk.jumlahMasuk) }, {
              where: {
                kodeBarang: findbarangMasuk.kodeBarang
              }
            });
            const del = await barangMasuk.destroy({
              where: {
                id,
              }
            })
          }
        }

        return res.json(req.params)

    }
}