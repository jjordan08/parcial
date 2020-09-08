const express = require ('express');
const appServer = express();

const myUser = require ('./models/game');

appServer.use(express.json());

var listGames = []

appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
});

// 1. Crear un nuevo juego

appServer.post ('/newgame' , (req, res)=>{

    // Agregamos el juego al arreglo

    listGames.push(req.body)

    res.send ('Game Added');
});

// 2. Eliminar un juego por id enviado como parámetro

appServer.post ('/deleteGame/:idGame' , (req, res)=>{
    const id = req.params.id
    listGames.forEach(function (element, index)  {
        if(element.id == id) {
            console.log("Se elimino el juego por ID")
            listUsers.splice(index, 1)
        }
    });
    res.send ('List Updated');
});

// 3. Mostrar todos los videojuegos

appServer.get ('/listaVideojuegos',
    (req, res) => {
        res.json(listGames)
    }
);

// 4. Traer un usuario por id enviado como parámetro

appServer.get ('/getUser/:idGame' , (req, res)=>{
    const gameId = req.params.idGame
    listUsers.forEach(function (element, index)  {
        if(element.id == gameId) {
            console.log("Encontro el videojuego por id")
            res.json(element)
        }
    });
});
