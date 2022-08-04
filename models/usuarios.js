import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    // id:{type:mongoose.Schema.ObjectId,required:true},
    nombre:{type:String,maxlength:50,required:true},
    estado:{type:Number,default:1},
    tipoDocumento:{type:Number,default:1},
    numDocumento:{type:String,required:true,unique:true},
    email:{type:String,maxlength:50,required:true,unique:true},
    password:{type:String,required:true,minlength:8},
    direccion:{type:String,required:true},
    telefono:{type:String,required:true,maxlength:50},
    foto:{type:String},
    especialidad:{type:String,maxlength:50},
    nombreContacto:{type:String,maxlength:50},
    telefonoContacto:{type:String,maxlength:50},
    fechaRegistro:{type:Date,required:true,default:Date.now()},
    rol:[{type:String,maxlength:50,required:true}]
})

export default mongoose.model("Usuario",UsuarioSchema) 


