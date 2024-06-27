const { Router } = require("express");
const auth = require("../middlewares/auth")
const router = Router();
const contrlInfo = require ('../controllers/infoEmpresas')

router.get('/:id', auth, contrlInfo.unregistro);

router.get('/', auth, contrlInfo.registros);

router.post('/insertar', auth, contrlInfo.insertarInfo);

router.delete('/:id', auth, contrlInfo.eliminar)

router.put('/:id', auth, contrlInfo.actualizar)

router.get('/test/ping', auth, contrlInfo.ping);

module.exports=router