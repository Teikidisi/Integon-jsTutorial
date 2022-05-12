const express = require("express"); //requerimos el modulo express
const fetch = require('node-fetch');
let ObjectId = require('mongodb').ObjectId;
const mongo = require("mongodb").MongoClient;
const {request,response} = require("express");
const app = express() //definir la app express 
app.use(express.json())
const url = "mongodb://127.0.0.1:27017";
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });


let db, alumnos, autores, credenciales
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    db = client.db("cursojavascript");
    dbdash = client.db("dashboard");
    console.log("Conectado a la DB");
    alumnos = db.collection("alumnos");
    autores = dbdash.collection("autores");
    credenciales = dbdash.collection("credenciales");
});


app.get("/demo", (request,response) => {
    console.log("se eejcutó la ruta demo..")
    response.send(200).json({ok:true});
});

app.get("/alumnos", (request,response) => {
    console.log("se ejecuto la ruta alumnos")
    alumnos.find().toArray((err,items) => {
        if (err){
            console.log(err);
            response.status(500).json({err:err})
            return;
        }
        response.status(200).json({alumnos:items});
        
    })
})

app.get("/alumnos/:id", (request,response) => {
    let alumnoId = request.params.id;
    alumnos.findOne({"_id" : ObjectId(alumnoId)}, (err,items) => {
        if (err){
            console.log(err);
            response.status(500).json({err:err})
            return;
        }
        response.status(200).json({alumnos:items});
    })
})

app.post("/alumnos", (request,response) => {
    console.log("posting");
    alumnos.insertOne({
        name: request.body.name,
        apellido: request.body.apellido,
        ciudad: request.body.ciudad,
    }),
    (err,result) => {
        if (err){
            console.log(err)
            response.status(500).json({err:err})
            return;
        }
        response.status(200).json({ok:true});
    };
});

app.get("/autores", (request,response) => {
    autores.find().toArray((err,items) => {
        if (err){
            console.log(err);
            response.status(500).json({err:err})
            return;
        }
        response.status(200).json({autores:items});
        
    })
})

app.post("/autores", (request,response) => {
    console.log("posting");
    console.log(JSON.stringify(request.body));
    if(request.body != null){
        autores.insertOne({
            nombre: request.body.nombre,
            correo: request.body.correo,
            foto: request.body.foto,
            puesto: request.body.puesto,
            area: request.body.area,
            fechaIngreso: request.body.fechaIngreso,
            estado: request.body.estado
        }),
        (err,result) => {
            if (err){
                console.log(err)
                response.status(500).json({error:err})
                return;
            }
            response.status(200).json({ok:true});
        };
    }
});

app.get("/credenciales", (request,response) => {
    console.log("se ejecuto la ruta alumnos")
    credenciales.find().toArray((err,items) => {
        if (err){
            console.log(err);
            response.status(500).json({err:err})
            return;
        }
        response.status(200).json({credenciales:items});
        
    })
})

app.listen(3005,() => {
    console.log("Escuchando en el puerto 3005...")
})


