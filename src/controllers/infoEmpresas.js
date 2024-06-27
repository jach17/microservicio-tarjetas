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
          if(empresa!=null){
              console.log(empresa);
              res.status(200).json(empresa);
         }else{
          res.status(400).json({mesaje:"No se encontro la infomación"})
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

contrlInfo.eliminar=async(req,res)=>{
     try{
         empresa = parseInt(req.params.id,10)

          if (isNaN(empresa)) {
               return res.status(400).json({ mensaje: "ID inválido, debe ser un número entero" });
             }
             
          empresa = await info.findOne({id:empresa})
          if(empresa!=null){
               res.status(200).json({mesaje:"Se Elimino correctamente"})
          }else{
               res.status(200).json({mesaje:"No se encontro el dato para eliminar"})
          }
     }catch(error){
          console.log(error)
          res.status(500).json({mesaje:"Error interno al procesar los datos"})
     }
}

contrlInfo.actualizar= async(req,res)=>{
     try{
          empresa = parseInt(req.params.id,10)

          if (isNaN(empresa)) {
               return res.status(400).json({ mensaje: "ID inválido, debe ser un número entero" });
             }
          empresa= await info.findOneAndUpdate({id:empresa},req.body)
          if(empresa!=null){
               res.status(200).json({mesaje:"Datos Actualizados"})
          }else{
               res.status(400).json({mesaje:"No se encontro ningun dato para actualizar"})
          }
     }catch(error){
          res.status(500).json({mesaje:"Error interno al procesar los dartos"})
     }

}


module.exports = contrlInfo