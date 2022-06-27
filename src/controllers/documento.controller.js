import {pool} from '../database'

export const listarDocumento = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_documento()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al listar documentos');
    }
};

export const listarDocumentoId = async(req,res)=>{
    try { //select *from fc_listar_post_id(1);
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_documento_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar documento');
    }
};

export const crearDocumento = async(req,res)=>{
    try {
        const{c_presentacion, c_convenio, c_aceptacion, plan_practica, constancia_final, idestudiante}= req.body;
        await pool.query('select *from fc_crear_documento($1, $2, $3, $4, $5, $6)',[c_presentacion, c_convenio, c_aceptacion, plan_practica, constancia_final, idestudiante]);
        return res.status(200).json({
            message:'Documento registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar documento ...!');
    }
};

export const actualizarDocumento = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {c_presentacion, c_convenio, c_aceptacion, plan_practica, constancia_final, idestudiante} = req.body;
        await pool.query('select *from fc_actualizar_documento($1, $2, $3, $4, $5, $6, $7)',[c_presentacion, c_convenio, c_aceptacion, plan_practica, constancia_final, idestudiante, id]);
        return res.status(200).json({
            message:'Documento modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar documento ...!');
    }
};

export const eliminarDocumento = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_documento($1)',[id]);
        return res.status(200).json({
            message:'Documento eliminado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar documento ...!');
    }
};