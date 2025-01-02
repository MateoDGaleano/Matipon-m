// Importamos Express desde la carpeta node_modules
const express = require("express")

//esto para que no de errores de cors
const cors = require("cors")

// Creamos la aplicación de Express
const app = express()


app.use(express.static("public"))
app.use(cors())
app.use(express.json())

// Escojemos un puerto por el que el servidor web escuchará
const port = 8080;

const players = []

class Player {
    constructor(id) {
        this.id = id
    }

    assignMatipon(matipon){
        this.matipon = matipon
    }

    updatePosition (x, y) {
        this.x = x
        this.y = y
    }

    assignAttacks (attacks) {
        this.attacks = attacks
    }
}

class Matipon {
    constructor(name){
        this.name = name
    }
}


// Página para visualizar el mensaje
app.get("/join", (req, res) => {
    const id = `${Math.random()}` 

    const player = new Player(id)
    
    players.push(player)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

app.post("/matipon/:playerId", (req, res) => {
    const playerId = req.params.playerId || ""
    const name = req.body.matipon || ""
    const matipon = new Matipon(name)

    const playerIndex = players.findIndex((player) => playerId === player.id)

    if (playerIndex >= 0) {
        players[playerIndex].assignMatipon(matipon)
        
    }

    console.log(players);
    console.log(playerId);
    res.end()
       
})

app.post("/matipon/:playerId/position", (req, res) => {
    const playerId = req.params.playerId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const playerIndex = players.findIndex((player) => playerId === player.id)

    if (playerIndex >= 0) {
        players[playerIndex].updatePosition(x,y)
        
    }

    const enemies = players.filter((player) => playerId !== player.id)

    res.send({
        enemies
    })

})

app.post("/matipon/:playerId/attacks", (req, res) => {
    const playerId = req.params.playerId || ""
    const attacks = req.body.attacks || []

    const playerIndex = players.findIndex((player) => playerId === player.id)

    if (playerIndex >= 0) {
        players[playerIndex].assignAttacks(attacks)
        
    }

    res.end()

})

app.get("/matipon/:playerId/attacks", (req, res) => {
    const playerId = req.params.playerId || ""
    const player = players.find((player) => player.id === playerId)
    res.send({
        attacks: player.attacks || [],
    })

})




// Activamos el servidor en el puerto
app.listen(port, () => {
    console.log("Server working on port " + port)
})