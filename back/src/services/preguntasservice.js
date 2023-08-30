import config from '../../dbconfig-env.js';
import sql from 'mssql'

export default class PreguntasService {
getAll = async () => {
    let returnArray = null;
    console.log('Estoy en PreguntaService.getAll()');
    try {
        let pool = await sql.connect(config);
       let result = await pool.request().query("SELECT * FROM Preguntas");
       returnArray = result.recordsets[0];
    }
    catch (error){
        console.log(error)
    }
    return returnArray;
    }   
getById = async (id) => {
    let returnEntity=null;
    console.log('Estoy en PreguntaService.getById(id)');
    try {
        let pool=await sql.connect(config);
        let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('SELECT * FROM Preguntas WHERE IdPregunta = @pId');
        returnEntity = result.recordsets[0];
    }
    catch (error){
        console.log(error)
    }
    return returnEntity;
} 
}