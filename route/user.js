const expess = require('express');
const userController = require('../controller/userController.js');
const kelasController = require('../controller/kelasController.js');
const dataBarangController = require('../controller/dataBarangController.js');

const userRolesContoller = require('../controller/bangunanController/userRolesController.js');
const suplayerContoller = require('../controller/bangunanController/suplayerController.js');
const dataBarangsContoller = require('../controller/bangunanController/dataBarangsController.js');
const barangKeluarContoller = require('../controller/bangunanController/barangKeluarController.js');
const barangMasukContoller = require('../controller/bangunanController/barangMasukController.js');
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

routers.get('/userRoles',userRolesContoller.getUser);
routers.post('/userRoles',userRolesContoller.addUser);
routers.delete('/userRoles/:id',userRolesContoller.deleteUser);
routers.put('/userRoles/:id',userRolesContoller.putUser);

routers.get('/suplayer',suplayerContoller.getUser);
routers.post('/suplayer',suplayerContoller.addUser);
routers.delete('/suplayer/:id',suplayerContoller.deleteUser);
routers.put('/suplayer/:id',suplayerContoller.putUser);

routers.get('/dataBarangs',dataBarangsContoller.getUser);
routers.post('/dataBarangs',dataBarangsContoller.addUser);
routers.delete('/dataBarangs/:id',dataBarangsContoller.deleteUser);
routers.put('/dataBarangs/:id',dataBarangsContoller.putUser);

routers.get('/barangKeluar',barangKeluarContoller.getUser);
routers.post('/barangKeluar',barangKeluarContoller.addUser);
routers.delete('/barangKeluar/:id',barangKeluarContoller.deleteUser);
routers.put('/barangKeluar/:id',barangKeluarContoller.putUser);

routers.get('/barangMasuk',barangMasukContoller.getUser);
routers.post('/barangMasuk',barangMasukContoller.addUser);
routers.delete('/barangMasuk/:id',barangMasukContoller.deleteUser);
routers.put('/barangMasuk/:id',barangMasukContoller.putUser);

module.exports = routers;