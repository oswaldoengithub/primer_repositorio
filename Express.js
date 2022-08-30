const express = require('express');
const Express = express();

const port = 3000;
//motor de plantilla
Express.set("view engine", "ejs");
Express.set("views", __dirname + "/views");

Express.use(express.static(__dirname + "/Public"));

Express.get('/',(req, res) =>{
    res.render("Index",{titulo :'mi titulo dinamico echo por oswaldo'})
})

Express.get('/servicios', (req, res) =>{
    res.render("servicios",{tituloServicios :'titulo dinamico de servicios echo por oswaldo'})
})

Express.use((req, res, next) =>{
    res.status(404).render("404",{
        titulo2:"404",
        descripcion:"titulo del sitio web 404"
    })
})

Express.listen(port, ()=>{
    console.log('servidor a su servicio en el puerto', port);
})
