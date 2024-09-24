const express = require("express");
const usuariosRutas=require("./routes/rutasUsuarios");
const app = express();
const port= process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/",usuariosRutas);

app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
})
