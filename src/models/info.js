const {Schema,model, default: mongoose}=require('mongoose')
const autoincrement = require('mongoose-sequence')(mongoose);

const informacion= new Schema({
    id:{
        type:Number,
        unique:true,
        require:true
    },
    nombreEmpresa:String,
    telefono:String,
    whatsapp:String,
    direccion:String,
    correo:String,
    eslogan:String,
    paginaWb:String,
    paginaFb:String

},{
    versionKey:false,
    timestamps:true

});

informacion.plugin(autoincrement,{id:'id_seq',inc_field:'id'})
module.exports=model('Empresas',informacion);