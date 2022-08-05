import {Router} from "express"
import {  muestrasPost,muestrasGetBuscar,muestrasGetBuscarid,muestrasGetBuscarTipo, muestrasGetBuscarDir, muestrasPutEditar,muestrasGetBuscarNombre
} from "../controllers/muestras.js";
import { check } from "express-validator";
import HelpersMuestras from "../helpers/muestras.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import {validarJWT} from "../middlewares/validarJWT.js"
import validarExistaArchivo from "../middlewares/validar-exita-archivo.js"



// agregar muestra
router.post("/",[
    validarJWT,
    check('nombre',"El nombre es obligatorio").not().isEmpty(),
    check('cantidad',"El campo cantidad es obligatorio").not().isEmpty(),
    check('registroSanitario',"El campo Registro Sanitario es obligatorio").not().isEmpty(),
    check('loteProducto',"El campo Lote del Producto es obligatorio").not().isEmpty(),
    check('fechaVencimiento',"El campo Fecha de Vencimientoes obligatorio").not().isEmpty(),
    check('fechaProduccion',"El campo fecha de Produccion obligatorio").not().isEmpty(),
    check('direccionTomaMuestra',"El campo direccion de la Toma de Muestra obligatorio").not().isEmpty(),
    check('cotizacion',"El campo cotizacion obligatorio").not().isEmpty(),
    check('tipoMuestra',"El campo tipo de Muestra es obligatorio").not().isEmpty(),
    validarCampos
],muestrasPost);


//buscar muestra po id
router.get("/buscarid/:id",[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(HelpersMuestras.existeMuestrasById), 
    validarCampos
],muestrasGetBuscarid)

// buscar actor por nombre
router.get("/nombre",[
    validarJWT,
   
    validarCampos
],muestrasGetBuscarNombre);


router.get("/listartodo",[
    validarJWT,
    check('id').isMongoId(),
    validarCampos
],muestrasGetBuscar);

router.get("/buscar/tipo",[
    validarJWT,

    validarCampos
],muestrasGetBuscarTipo);

router.get("/buscar/tipo",[
    validarJWT,

    validarCampos
],muestrasGetBuscarDir);







// const router = Router();
// // agregar foto a la pelicula
// router.put("/agregarfoto/:id", [
//     validarJWT,
//     check('id').isMongoId(),
//     validarExistaArchivo,
//     validarCampos
// ], peliculasPutfoto)
export default router;