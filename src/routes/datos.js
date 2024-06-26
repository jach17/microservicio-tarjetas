const { Router } = require("express");

const router = Router();
const contrlInfo = require ('../controllers/infoEmpresas')

router.get('/:id',contrlInfo.unregistro);

router.get('/',contrlInfo.registros);

router.post('/insertar',contrlInfo.insertarInfo);

router.delete('/:id',contrlInfo.eliminar)

router.put('/:id',contrlInfo.actualizar)

module.exports=router