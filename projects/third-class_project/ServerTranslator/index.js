const express = require("express");
const morgan = require("morgan");
const router = require("./router");
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', // La URL de tu aplicación React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*', // Permite cualquier encabezado
    credentials: true 
  };


app.use(cors());

app.set("port", 5001)
app.use(morgan('dev')); //Muestra las peticiones por consola
app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
    console.log("Funciona");
    res.send("ok")
})

app.listen(app.get("port") , () => { 
    console.log(`Servidor ejecutándose en el puerto ${app.get("port")}`)
});