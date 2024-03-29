
import express, { Router } from 'express';
import router from './routes/index.js';
const app= express();

//Definir puerto
const port= process.env.PORT||4000;

//Habilitar PUG
app.set('view engine','pug');

//Agregar Router
app.use('/', router);


//callback si arranca correctamente va a decir en que puerto arranco
app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})