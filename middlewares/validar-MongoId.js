import mongoose from "mongoose";

const validarId = async(id)=>{
    const valido = mongoose.Types.ObjectId.isValid(id);
    if ( ! valido){
    throw new Error("el id no es valido");
    }

}
export { validarId}