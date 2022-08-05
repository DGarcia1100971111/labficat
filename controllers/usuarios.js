import Usuarios from "../models/usuarios.js"
import bcryptjs from "bcryptjs";
import { generarJWT } from "../middlewares/validar-jwt.js";

//agregar usuarios......ya

const usuariosPost = async (req, res) => {
  const { nombre, estado, tipoDocumento, numDocumento, email, password, direccion, telefono, foto, especialidad, nombreContacto, telefonoContacto, fechaRegistro, rol } = req.body;
  let salt = bcryptjs.genSaltSync(10);
  const usuarios = new Usuarios({ nombre, estado, tipoDocumento, numDocumento, email, password, direccion, telefono, foto, especialidad, nombreContacto, telefonoContacto, fechaRegistro, rol });
  usuarios.password = bcryptjs.hashSync(password, salt);
  await usuarios.save();
  res.json({
    msg: "registro exitoso",
  });
};

//buscar todoslos usuarios.....ya

const usuariosGetBuscar = async (req, res) => {
  const usuarios = await Usuarios.find({});
  res.json({
    usuarios,
  });
};

//buscar usuarios por id ......ya

const usuariosGetBuscarid = async (req, res) => {
  const { id } = req.params;
  const usuarios = await Usuarios.findById(id);
  res.json({
    usuarios,
  });
};



// loguearse......ya
const usuariosGetlogin = async (req, res) => {
  let { email, password } = req.body;

  const usuarios = await Usuarios.findOne({ email });

  if (!usuarios) res.json({ msg: "Usuario no encontrado1" });
  
  else {
    const validPassword = bcryptjs.compareSync(password, usuarios.password);

    if (validPassword) {
      const token = await generarJWT(usuarios.id);
      res.json({
        usuarios,
        token,
      });
    } else {
      res.json({ msg: "Usuario no encontrado2" });
    }
  }
};

// buscar usuarios por nombre,email, numero de documento.......ya

const usuariosGetBuscarNoE = async (req, res) => {
  const { value } = req.query;
  const usuarios = await Usuarios.find({
    $or: [
      { nombre: new RegExp(value, "i") },
      { email: new RegExp(value, "i") },
      { numDocumento: new RegExp(value, "i") },
    ],
  });
  res.json({
    usuarios,
  });
};

// buscar usuarios por telefono.....ya

const usuariosGetBuscartelefono = async (req, res) => {
  const { telefono} = req.query;
  const usuarios = await Usuarios.find({telefono});
  res.json({
    usuarios,
  });
};


//listar usuarios por rol...........ya
const usuariosGetBuscarRol = async (req, res) => {
  const { rol} = req.query;
  const usuarios = await Usuarios.find({rol});
  res.json({
    usuarios,
  });
};

//listar usuarios por direccion

const usuariosGetBuscarDir = async (req, res) => {
  const { direccion} = req.query;
  const usuarios = await Usuarios.find({direccion});
  res.json({
    usuarios,
  });
};

//listar usuarios por especialidad
const usuariosGetBuscarEsp = async (req, res) => {
  const { especialidad} = req.query;
  const usuarios = await Usuarios.find({especialidad});
  res.json({
    usuarios,
  });
};
// modificar datos de usuario............ya


const usuariosPutEditar = async (req, res) => {
  const { id } = req.params;
  const { nombre, estado, tipoDocumento, numeroDocumento, email, password, direcion, telefono, foto, especialidad, nombreContacto, telefonoContacto, fechaRegistro, rol } = req.body;
  const usuarios = await Usuarios.findByIdAndUpdate(id, {
    nombre, 
    estado,
    tipoDocumento,
    numeroDocumento,
    email,
    password,
    direcion,
    telefono,
    foto,
    especialidad,
    nombreContacto,
    telefonoContacto,
    fechaRegistro,
    rol,
  });
  res.json({
    msg: "actualizacion de datos exitosa",
  });
};

export {
  usuariosPost,usuariosPutEditar,usuariosGetBuscarEsp,usuariosGetlogin, usuariosGetBuscarRol,usuariosGetBuscarDir, usuariosGetBuscar, usuariosGetBuscarid, usuariosGetBuscarNoE,usuariosGetBuscartelefono

};