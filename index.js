const express = require ('express');
const appServer = express();

const myUser = require ('./models/game');

appServer.use(express.json());

var listUsers = []

appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
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
