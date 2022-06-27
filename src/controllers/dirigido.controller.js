import { pool } from '../database'

export const listarDirigido = async (req,res)=>{
    try {
        const response = await pool.query('select *from fc_listar_dirigido()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarDirigidoId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_dirigido_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const crearDirigido = async(req,res)=>{
    try {
        const{nombres, apellidos, cargo}= req.body;
        await pool.query('select *from fc_crear_dirigido($1, $2, $3)',[nombres, apellidos, cargo]);
        return res.status(200).json({
            message:'Registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};


export const actualizarDirigido = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {nombres, apellidos, cargo} = req.body;
        await pool.query('select *from fc_actualizar_dirigido($1, $2, $3, $4)',[nombres, apellidos, cargo, id]);
        return res.status(200).json({
            message:'Modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};

export const eliminarDirigido = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_dirigido($1)',[id]);
        return res.status(200).json({
            message:'Eliminado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar ...!');
    }
};


