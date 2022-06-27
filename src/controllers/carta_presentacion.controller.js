import { pool } from '../database'

export const listarCarta_Presentacion = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_carta_presentacion()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar cartas de presentacion');
    }
};

export const listarCarta_PresentacionId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_carta_presentacion_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar carta de presentacion');
    }
};


export const crearCarta_Presentacion = async(req,res)=>{
    try {
        const{id_empresa, idsolicitud}= req.body;
        await pool.query('select *from fc_crear_carta_presentacion($1, $2)',[id_empresa, idsolicitud]);
        return res.status(200).json({
            message:'Carta de presentacion registrada correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar carta de presentacion ...!');
    }
};

export const actualizarCarta_Presentacion = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_empresa, idsolicitud} = req.body;
        await pool.query('select *from fc_actualizar_carta_presentacion($1, $2, $3)',[id_empresa, idsolicitud, id]);
        return res.status(200).json({
            message:'Carta de presentacion modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar carta de presentacion ...!');
    }
};

export const eliminarCarta_Presentacion = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_carta_presentacion($1)',[id]);
        return res.status(200).json({
            message:'Carta de presentacion eliminada correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar carta de presentacion ...!');
    }
};
