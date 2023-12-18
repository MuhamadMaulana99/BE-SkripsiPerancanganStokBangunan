const expess = require('express');

const userRolesContoller = require('../controller/bangunanController/userRolesController.js');
const suplayerContoller = require('../controller/bangunanController/suplayerController.js');
const dataBarangsContoller = require('../controller/bangunanController/dataBarangsController.js');
const barangKeluarContoller = require('../controller/bangunanController/barangKeluarController.js');
const barangMasukContoller = require('../controller/bangunanController/barangMasukController.js');
const loginController= require('../controller/loginController/loginController.js');

const masterBarangContoller = require('../controller/masterController/masterBarangController.js');
const validation = require('../validation/user/validation.js');

const routers = expess.Router();

routers.post('/login',loginController.LoginUser);
routers.post('/register',loginController.addUser);
routers.get('/allUser',loginController.getUser);
routers.delete('/allUser/:id',loginController.deleteUser);
routers.put('/allUser/:id',loginController.putUser);

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

routers.get('/mstBarangs',masterBarangContoller.getUser);
routers.post('/mstBarangs',masterBarangContoller.addUser);
routers.delete('/mstBarangs/:id',masterBarangContoller.deleteUser);
routers.put('/mstBarangs/:id',masterBarangContoller.putUser);

module.exports = routers;