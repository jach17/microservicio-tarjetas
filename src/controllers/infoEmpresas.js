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

contrlInfo.unregistro=async(req,res)=>{
     try{
          empresa = parseInt(req.params.id,10)

          if (isNaN(empresa)) {
               return res.status(400).json({ mensaje: "ID inválido, debe ser un número entero" });
             }

          empresa = await info.findOne({id:empresa})
          
          let bandera = empresa.estatus
          console.log(bandera)
          if(empresa!=null && bandera == true){
            //console.log(empresa);
              res.status(200).json(empresa);
         }else{
          res.status(400).json({mesaje:"No se encontro la infomación o esta desactivado"})
         }
     }catch(error){
          console.log(error)
          res.send(500).json({mesajen:"Error interno al procesar datos"})
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