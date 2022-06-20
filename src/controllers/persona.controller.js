import { pool } from '../database'

export const crearPersona = async(req,res)=>{
    try {
        const{nombres, apellido_paterno, apellido_materno, direccion, dni, correo, telefono}= req.body;
        await pool.query('select *from fc_crear_persona($1, $2, $3, $4, $5, $6, $7)',[nombres, apellido_paterno, apellido_materno, direccion, dni, correo, telefono]);
        return res.status(200).json({
            message:'Persona registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar persona ...!');
    }
};


export const actualizarPersona = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {nombres, apellido_paterno, apellido_materno, direccion, dni, correo, telefono} = req.body;
        await pool.query('select *from fc_actualizar_persona($1, $2, $3, $4, $5, $6, $7, $8)',[nombres, apellido_paterno, apellido_materno, direccion, dni, correo, telefono, id]);
        return res.status(200).json({
            message:'Persona modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar persona ...!');
    }
};

export const eliminarPersona = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_persona($1)',[id]);
        return res.status(200).json({
            message:'Persona eliminada correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar persona ...!');
    }
};

export const listarPersona = async (req,res)=>{
    try {
        const response = await pool.query('select *from fc_listar_persona()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar persona');
    }
};

export const listarPersonaId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_persona_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar Persona');
    }
};