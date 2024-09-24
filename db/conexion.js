const admin = require("firebase-admin");
const keys = require("../keys.json");
admin.initializeApp({
    credential: admin.credential.cert(keys)
});

const proyecto = admin.firestore();

const usuarios = proyecto.collection("usuarios");

//console.log(usuarios);


module.exports = {
    usuarios
}
