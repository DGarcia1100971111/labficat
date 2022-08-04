import Usuarios from "../models/usuarios.js"


const helpersUsuarios={
    existePersonaById : async (id) => {
        const existe = await Usuarios.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }
    },

    existeEmail :async(email) => {
        
            const existe = await Usuarios.findOne({ email });
        
        if (existe ) {
            //return res.status(401).json({ msg: `El email ya está registrado` });
            throw new Error(`El email ya está registrado`)
        }
        
       
    },
    existenumDocumento :async(numDocumento) => {
        
        const existe = await Usuarios.findOne({numDocumento });
    
    if (existe ) {
        //return res.status(401).json({ msg: `El email ya está registrado` });
        throw new Error(`El DOCUMENTO ya está registrado`)
    }
    
   
},


    

}
export default helpersUsuarios;