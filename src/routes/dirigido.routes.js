import { Router } from 'express'

const router = Router();
import * as dirigidoCtrl from '../controllers/dirigido.controller'

router.get('/',dirigidoCtrl.listarDirigido);
router.get('/:id',dirigidoCtrl.listarDirigidoId);
router.post('/', dirigidoCtrl.crearDirigido);
router.put('/:id',dirigidoCtrl.actualizarDirigido);
router.delete('/:id',dirigidoCtrl.eliminarDirigido);


export default router;