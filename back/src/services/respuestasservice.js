import config from '../../dbconfig-env.js';
import sql from 'mssql'

export default class RespuestaService {
getAll = async () => {
    let returnArray = null;
    console.log('Estoy en RespuestaService.getAll()');
    try {
        let pool = await sql.connect(config);
       let result = await pool.request().query("SELECT * FROM Respuestas");
       returnArray = result.recordsets[0];
    }
    catch (error){
        console.log(error)
    }
    return returnArray;
    }
    
getByPregunta = async (id) => {
    let returnEntity=null;
    console.log('Estoy en RespuestaService.getByPregunta(id)');
    try {
        let pool=await sql.connect(config);
        let result = await pool.request()
            .input('pIdPregunta', sql.Int, id)
            .query('SELECT * FROM Respuestas WHERE IdPregunta = @pIdPregunta');
        returnEntity = result.recordsets[0];
    }
    catch (error){
        console.log(error)
    }
    return returnEntity;
}
}