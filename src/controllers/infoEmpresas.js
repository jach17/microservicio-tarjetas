const contrlInfo = {};
const info = require('../models/info')

let empresa;

contrlInfo.insertarInfo= async(req,res)=>{
     try{
          empresa = new info(req.body);
          await empresa.save();
          res.status(200).json({mesaje:"Informacion registrada"})
     }catch(error){
          console.log(error)
          res.status(500).json({mesaje:"Error al procesar los dartos"})
     }

}

contrlInfo.unregistro = async (req, res) => {
    try {
        let empresa = parseInt(req.params.id, 10);

        if (isNaN(empresa)) {
            return res.status(400).json({ mensaje: "ID inválido, debe ser un número entero" });
        }

        let datos = await info.findOne({ id: empresa });
        console.log("datos", datos); // Imprime los datos obtenidos
        if (datos !== null) {
            let bandera = datos.estatus;

            if (bandera === true) {
                res.status(200).json(datos);
            } else {
                res.status(400).json({ Estatus: bandera });
            }
        } else {
            res.status(404).json({ mensaje: "No se encuentra el dato" });
            console.log("Empresa no encontrada");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "Error interno al procesar datos" });
    }
}


contrlInfo.registros=async(req,res)=>{
     try{
          empresa = await info.find()
          console.log("Se mando a llamar la sentencia")
          res.status(200).json(empresa)
     }catch(error){
          console.log(error)
          res.status(500).json({mesaje:"Error interno al procesar datos"})
     }
}

contrlInfo.ping=async(req,res)=>{
     res.status(200).json("pong")
}

contrlInfo.eliminar = async (req, res) => {
     try {
         let empresaId = parseInt(req.params.id, 10);
 
         if (isNaN(empresaId)) {
             return res.status(400).json({ mensaje: "ID inválido, debe ser un número entero" });
         }
 
         const empresa = await info.findOne({ id: empresaId });
 
         if (empresa) {
             await info.findOneAndDelete({ id: empresaId });
             return res.status(200).json({ mensaje: "Se eliminó correctamente" });
         } else {
             return res.status(404).json({ mensaje: "No se encontró el dato para eliminar" });
         }
     } catch (error) {
         console.error(error);
         return res.status(500).json({ mensaje: "Error interno al procesar los datos" });
     }
 };

 contrlInfo.actualizar = async (req, res) => {
     try {
         let empresaId = parseInt(req.params.id, 10);
 
         if (isNaN(empresaId)) {
             return res.status(400).json({ mensaje: "ID inválido, debe ser un número entero" });
         }
 
         const empresa = await info.findOneAndUpdate(
             { id: empresaId },
             req.body,
             { new: true }  // Para devolver el documento actualizado
         );
 
         if (empresa) {
             return res.status(200).json({ mensaje: "Datos actualizados", data: empresa });
         } else {
             return res.status(404).json({ mensaje: "No se encontró ningún dato para actualizar" });
         }
     } catch (error) {
         console.error(error);
         return res.status(500).json({ mensaje: "Error interno al procesar los datos" });
     }
 };


module.exports = contrlInfo