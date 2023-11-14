const Sequelize = require('sequelize');

const sequelize = new Sequelize('dbTokoBangunan', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});
// const userModels = require('./userModels.js')(sequelize, Sequelize.DataTypes);
// const kelasModel = require('./kelasModel.js')(sequelize, Sequelize.DataTypes);
// const dataBarangModel = require('./dataBarangModel.js')(sequelize, Sequelize.DataTypes);

const suplayerModel = require('./bangunanModel/suplayerModels.js')(sequelize, Sequelize.DataTypes);
const dataBarangsModel = require('./bangunanModel/dataBarangModels.js')(sequelize, Sequelize.DataTypes);
const barangMasukModel = require('./bangunanModel/barangMasukModels.js')(sequelize, Sequelize.DataTypes);
const barangKeluarModel = require('./bangunanModel/barangKeluarModels.js')(sequelize, Sequelize.DataTypes);
const userRolesModel = require('./bangunanModel/userRolesModels.js')(sequelize, Sequelize.DataTypes);
const db = {
  sequelize,
  models: {suplayer: suplayerModel, dataBarangsModel: dataBarangsModel, barangMasuk: barangMasukModel, barangKeluar: barangKeluarModel, userRoles: userRolesModel },

}
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = db