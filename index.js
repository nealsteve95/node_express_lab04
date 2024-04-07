const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectar a la BD
conectarDB();
app.use(cors())

//Habilitacion de middlewars para recibir datos de tipo json
app.use(express.json()); //Para que los datos enviados


app.use('/api/productos',require('./routes/producto'))

// Definimos la ruta principal
/* app.get('/', (req,res)=>{
    res.send('Hola Mundo!')
}) */


app.listen(5000,"0.0.0.0",() => {
    console.log("El servidor esta corriendo bien")
})