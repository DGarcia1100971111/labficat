import Muestras from "../models/muestras.js"


const muestrasPost= async (req,res)=>{
    const {nombre,descripcion,cantidad,registroSanitario,loteProducto,fechaVencimiento,presentacionProducto,fechaProduccion,fechaHoraRecoleccion,municipioRecoleccion,departamentoRecoleccion,direccionTomaMuestra,lugarTomaMuestra,fotoMuestraRecolectada,procedimientoMuestreo,tipoMuestra,matrizMuestra,cotizacion}=req.body
    const muestras= new Muestras({nombre,descripcion,cantidad,registroSanitario,loteProducto,fechaVencimiento,presentacionProducto,fechaProduccion,fechaHoraRecoleccion,municipioRecoleccion,departamentoRecoleccion,direccionTomaMuestra,lugarTomaMuestra,fotoMuestraRecolectada,procedimientoMuestreo,tipoMuestra,matrizMuestra,cotizacion})
    await muestras.save()

    res.json({
        msg:"registro de muestra exitosa"
    })
}
//Insertar muestras

const muestrasGetBuscar = async(req,res)=>{
    const muestras = await Muestras.find({})
    res.json({
        muestras

    })
}
//Listar todas las muestras

const muestrasGetBuscarid = async (req, res) => {
    const { id } = req.params;
    const muestras = await Muestras.findById(id);
    res.json({
      muestras,
    });
  };
  //Buscar muestra por ID- falta por nomnbre

  const muestrasGetBuscarTipo = async (req, res) => {
    const {tipo} = req.params;
    const muestras = await Muestras.find(tipo);
    res.json({
      muestras,
    });
  };

  //Listar muestras por tipo

  const muestrasGetBuscarDir = async (req, res) => {
    const { direccion} = req.params;
    const muestras = await Muestras.find(direccion);
    res.json({
      muestras,
    });
  };

  //Listar por ciudad y departamento

  const muestrasPutEditar = async (req, res) => {
    const { id } = req.params;
    const { nombre,descripcion,cantidad,registroSanitario,loteProducto,fechaVencimiento,presentacionProducto,fechaProduccion,fechaHoraRecoleccion,municipioRecoleccion,departamentoRecoleccion,direccionTomaMuestra,lugarTomaMuestra,fotoMuestraRecolectada,procedimientoMuestreo,tipoMuestra,matrizMuestra,cotizacion } = req.body;
    const muestras = await Muestras.findByIdAndUpdate(id, {
      nombre,
      descripcion,
      cantidad,registroSanitario,
      loteProducto,fechaVencimiento,
      presentacionProducto,
      fechaProduccion,
      fechaHoraRecoleccion,
      municipioRecoleccion,
      departamentoRecoleccion,
      direccionTomaMuestra,
      lugarTomaMuestra,
      fotoMuestraRecolectada,
      procedimientoMuestreo,
      tipoMuestra,
      matrizMuestra,
      cotizacion,
    });
    res.json({
      msg: "actualizacion de datos exitosa",
    });
  };

  //Modificar datos de la muestra

  export {
    muestrasPost,muestrasGetBuscar,muestrasGetBuscarid,muestrasGetBuscarTipo, muestrasGetBuscarDir, muestrasPutEditar
  
  };