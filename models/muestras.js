
import mongoose from "mongoose";

const muestrasSchema= new mongoose.Schema({
  // id:{type:mongoose.Schema.ObjectId,required:true},
    nombre:{type:String,maxlength:100,required:true},
    descripcion:{type:String,required:true,},
    cantidad:{type:Number,maxlenght:50},
    registroSanitario:{type:String,maxlength:100},
    loteProducto:{type:int,maxlengh:80},
    fechaVencimiento:{type:Date},
    presentacionProducto:{type:String,maxlength:100},
    fechaProduccion:{type:Date},
    fechaHoraRecoleccion:{type:Date,required:true},
    municipioRecoleccion:{type:String,required:true},
    departamentoRecoleccion:{type:String,required:true},
    direccionTomaMuestra:{type:String,required:true},
    lugarTomaMuestra:{type:String,required:true},
    fotoMuestraRecolectada:{type:String},
    procedimientoMuestreo:{type:String,required:true},
    tipoMuestra:[{type:String,required:true}],
    matrizMuestra:{type:String},
    cotizacion:[
        {items:{type:Number,required}},
        {valorTotal:{type:Number,required}},
        {duracionTotal:{type:Date,required}},
    ]
}) 

export default mongoose.model("muestras",muestrasSchema)
