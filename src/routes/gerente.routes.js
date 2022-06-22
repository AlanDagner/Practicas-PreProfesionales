import { Router } from 'express'

const router = Router();
import * as gerenteCtrl from '../controllers/gerente.controller'

router.post('/', gerenteCtrl.crearGerente);
router.put('/:id',gerenteCtrl.actualizarGerente);
router.delete('/:id',gerenteCtrl.eliminarGerente);
router.get('/',gerenteCtrl.listarGerente);
router.get('/:id',gerenteCtrl.listarGerenteId);

export default router;