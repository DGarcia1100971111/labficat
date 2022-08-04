import mongoose from "mongoose";

const CotizacionSchema=new mongoose.Schema({
   // id:{type:mongoose.Schema.ObjectId,required:true},
    codigoCotizacion:{type:Number,required:true,unique:true},
    clientes:[{type:String,maxlength:50,required:true}],
    items:[{type:String,maxlength:50,required:true}],
    duracionTotal:{type:string,maxlen:50,required:true},
    generadaPor:{type:String},
    estado:{type:string,maxlen:50,required:true},
    fechaRegistro:{type:Date,required:true,default:Date.now()},

})

export default mongoose.model("Cotizacion",CotizacionSchema)