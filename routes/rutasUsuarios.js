var rutas = require("express").Router();
var {mostrarUsuarios,nuevoUsuario,borrarUsuario,buscarPorID} = require("../db/usuariosDB");

// var {Router} = require("express");

rutas.get("/", async (req,res)=>{
    //res.send("Hola estas en raiz");
    var usuarioValido = await mostrarUsuarios();
    console.log(usuarioValido);
    res.json(usuarioValido);
});

rutas.get("/buscarPorId/:id",async(req,res)=>{
    usuarioValido = await buscarPorID(req.params.id);
    res.json(usuarioValido);
});

rutas.get("/borrarUsuario/:id",async(req,res)=>{
    var usuarioBorrado = await borrarUsuario(req.params.id);
    res.json(usuarioBorrado);
});

rutas.post("/nuevoUsuario",async(req,res)=>{
    var usuarioValido = await nuevoUsuario (req.body);
    res.json(usuarioValido);
});



module.exports = rutas;