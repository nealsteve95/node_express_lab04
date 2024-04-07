const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            // Son opciones pasadas
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
           // useFindAndModify: false ---> Aqui esta el error 
        })
        console.log('BD Conectada')
    }catch(error){
        console.log("error")
        process.exit(1); // Detenemos la app
    }

}

module.exports = conectarDB