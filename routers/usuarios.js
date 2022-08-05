import {Router} from "express"

import { check } from "express-validator";
import helpersUsuarios from "../helpers/usuarios.js";
import { usuariosGetBuscar, usuariosGetBuscarid, usuariosGetBuscarNoE, usuariosGetBuscarRol, usuariosGetBuscartelefono, usuariosGetlogin, usuariosPost, usuariosPutEditar } from "../controllers/usuarios.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import validarExistaArchivo from "../middlewares/validar-exita-archivo.js";
const router = Router();

router.put("/:id",[
    check('id').isMongoId(),
    validarCampos,validarJWT
],usuariosPutEditar); 

router.post("/login",[
    check('email',"el email es obligatorio").isEmail(),
    check('password',"la contraseña es obligatoria").not().isEmpty(),
    validarCampos
],usuariosGetlogin);

router.get("/tel",usuariosGetBuscartelefono);

router.get("/b",usuariosGetBuscar);

router.get("/NoE",usuariosGetBuscarNoE);

router.get("/buscarid/:id",[
    check('id').isMongoId(),
    validarCampos
],usuariosGetBuscarid)


router.get("/buscarNoE",[
    check('nombre','email','numDocumento'),
    validarCampos
],usuariosGetBuscarNoE)
 

router.get("/tel,",[
    check('telefono'),
    validarCampos
],usuariosGetBuscartelefono)

router.get("/rol",usuariosGetBuscarRol);


// router.put("/",usuariosfotoPut); 
// router.put("/inactivar/:id",[
//     check('id').isMongoId(),
//     validarCampos
// // ],personasPutInactivar); 
// router.put("/activar/:id",[
//     check('id').isMongoId(),
//     validarCampos
// ],personasPutActivar); 

// //editar ususario
// router.put("/editar/:id",[
//     validarJWT,
//     check('id').isMongoId(),
//     validarExistaArchivo,
//     validarCampos
// ],personasPutEditar);
// router.put("/editar/:id",[
// ])



router.post("/insertarUsuario",[
    check('nombre',"El nombre es obligatoro").not().isEmpty(),
    check('direccion').not().isEmpty(),
    check('numDocumento').not().isEmpty(),
    check('nombre',"Debe tener menos de 25 caracteres").isLength({max:25}),
    check('password',"Es Obligatorio").not().isEmpty(),
    check('password',"Debe tener más de 8 caracteres").isLength({min:8}),
    check('email',"Es Obligatorio").not().isEmpty(),
    check('email',"No es un email valido").isEmail(),
    check('email').custom(helpersUsuarios.existeEmail),
    check("numDocumento").custom(helpersUsuarios.existenumDocumento),
    validarCampos,
],usuariosPost);


export default router;