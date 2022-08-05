import express from "express"
import cors from "cors"
import bdconectar from '../database/config.js'
 import Usuarios from '../routers/Usuarios.js';



class Server {
    constructor() {
        this.app = express();
        this.middlewares();
        this.port = process.env.PORT
        this.conectarbd()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static("public"))
        
    }

    routes() {
        this.app.use("/proyecto/usuarios", Usuarios)
    }

    async conectarbd() {
        await bdconectar()
    }

    escuchar() {
        this.app.listen(this.port, () => {
            console.log(`servidor escuchando en el puerto ${this.port}`);
        })
    }
}


export default Server



// import express from 'express'
// import cors from "cors"
// import bdconectar from '../database/config.js';
// import Peliculas from "../routers/peliculas.js";
// import favoritos from '../routers/favoritos.js';
// import Actores from '../routers/actores.js';

// import comentarios from '../routers/comentarios.js';
// import fileUpload from 'express-fileupload';









