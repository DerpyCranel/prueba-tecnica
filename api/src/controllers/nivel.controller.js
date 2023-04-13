import {pool} from "../db.js"


//funcion para crear datos en la tabla nivel
export const createNivel=async (req,res)=>{
    try {

        const {nivel}=req.body;
        const[rows]=await pool.query(
            "INSERT INTO niveles (nivel) VALUES (?)",[nivel]
        );

        res.send({
            id_nivel: rows.insertId,
            nivel
        });
   
    } catch (error) {
        return res.status(500).json({message:"error al insertar datos"})
        
    }
}

//funcion para mostar los datos de la tabla niveles
export const getNiveles=async(req,res)=>{
    try {
        const [rows]= await pool.query("SELECT * FROM niveles");
        res.json(rows);
    } catch (error) {

        return res.status(500).json({message:"error al mostrar los datos"})
        
    }
}


//funcion para  eliminar datos de niveles

export const deleteNiveles=async(req,res)=>{
    try {

        const[result]=await pool.query("DELETE FROM niveles WHERE id_nivel=?",
        [req.params.id]);

        if(result.affectedRows<=0)
            return res.status(404).json({message: "datos no encontrados"})
        res.sendStatus(204);        
    } catch (error) {

        return res.status(500).json({message:"error al eliminar los datos"})
        
    }
}


//funcion para editar niveles 


export const updateNivel=async(req,res)=>{
    const {id}= req.params;
    const {nivel}=req.body;

    try {

        const [result]=await pool.query("UPDATE niveles SET nivel= IFNULL(?,nivel) WHERE id_nivel=?",
        [nivel,id]);

        if(result.affectedRows === 0)
            return res.status(404).json({message:"datos no encontrados"});

        const [rows]= await pool.query("SELECT * FROM niveles WHERE id_nivel=?",[id]);
        res.json(rows[0]);
        
    } catch (error) {

        return  res.status(500).json({message:"ocurrio un error"})
        
    }
}