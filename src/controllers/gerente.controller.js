import { pool } from '../database'

export const crearGerente = async(req,res)=>{
    try {
        const{nombres, apellidos, cargo}= req.body;
        await pool.query('select *from fc_crear_gerente($1, $2, $3)',[nombres, apellidos, cargo]);
        return res.status(200).json({
            message:'Gerente registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar Gerente ...!');
    }
};


export const actualizarGerente = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {nombres, apellidos, cargo} = req.body;
        await pool.query('select *from fc_actualizar_gerente($1, $2, $3, $4)',[nombres, apellidos, cargo, id]);
        return res.status(200).json({
            message:'Gerente modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar Gerente ...!');
    }
};

export const eliminarGerente = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_gerente($1)',[id]);
        return res.status(200).json({
            message:'Persona eliminada correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar persona ...!');
    }
};

export const listarGerente = async (req,res)=>{
    try {
        const response = await pool.query('select *from fc_listar_gerente()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar gerente');
    }
};

export const listarGerenteId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_gerente_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar gerente');
    }
};