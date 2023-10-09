const expess = require('express');
const userController = require('../controller/userController.js');
const kelasController = require('../controller/kelasController.js');
const dataBarangController = require('../controller/dataBarangController.js');
const validation = require('../validation/user/validation.js');

const routers = expess.Router();

routers.get('/user',userController.getUser);
routers.post('/user',validation.addUser, userController.addUser);
routers.delete('/user/:id',userController.deleteUser);
routers.put('/user/:id',userController.putUser);

routers.get('/kelas',kelasController.getUser);
routers.post('/kelas',kelasController.addUser);
routers.delete('/kelas/:id',kelasController.deleteUser);
routers.put('/kelas/:id',kelasController.putUser);

routers.get('/dataBarang',dataBarangController.getUser);
routers.post('/dataBarang',dataBarangController.addUser);
routers.delete('/dataBarang/:id',dataBarangController.deleteUser);
routers.put('/dataBarang/:id',dataBarangController.putUser);

module.exports = routers;