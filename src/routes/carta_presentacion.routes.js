import { Router } from 'express'

const router = Router();
import * as carta_presentacionCtrl from '../controllers/carta_presentacion.controller'

router.get('/', carta_presentacionCtrl.listarCarta_Presentacion);
router.get('/:id', carta_presentacionCtrl.listarCarta_PresentacionId);
router.post('/', carta_presentacionCtrl.crearCarta_Presentacion);
router.put('/:id', carta_presentacionCtrl.actualizarCarta_Presentacion);
router.delete('/:id', carta_presentacionCtrl.eliminarCarta_Presentacion);

export default router;