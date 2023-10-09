const Sequelize = require('sequelize');

const sequelize = new Sequelize('dbtest', 'postgres', 'postgres', {
    host: 'localhost',
    dialect:'postgres'
});
const userModels = require('./userModels.js')(sequelize,Sequelize.DataTypes);
const kelasModel = require('./kelasModel.js')(sequelize,Sequelize.DataTypes);
const dataBarangModel = require('./dataBarangModel.js')(sequelize,Sequelize.DataTypes);
const db = {
    sequelize,
    models: {user: userModels, kelas: kelasModel, dataBarang: dataBarangModel},
    
}
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  module.exports = db