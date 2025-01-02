// Variables globales, estas a diferencia de las que están dentro de las funciones puedo llamarlas en cualquier lao

//Function StartMatipon
const sectionTakeAttack = document.getElementById("select_attack")
const buttonTakeMati = document.getElementById("button-Mati")

//Function TakeMatiPlayer
const sectionTakeMati = document.getElementById("select_mati")
const spanMatiPlayer = document.getElementById("name-mati-player")

//Function takeMatiPc
const spanMatiPc = document.getElementById("name-mati-pc")

//Function whoWon
const spanLivesPlayer = document.getElementById("lives-mati-player")
const spanLivesPc = document.getElementById("lives-mati-pc")

//Function CreateMessage
const sectionMessages = document.getElementById("resultado")
const playerAttacks = document.getElementById("player-Attacks")
const pcAttacks = document.getElementById("pc-Attacks")
const targetsContainer = document.getElementById('targetsContainer')
const attacksContainer = document.getElementById("attacksContainer")

//Los de la function CreateFinalMessage eran los mismos de CreateMessage

const sectionViewMap = document.getElementById("view-map")
const map = document.getElementById("map")

let audioMatipro = document.getElementById("audioMatipro")
let audioMatiexe = document.getElementById("audioMatiexe")
let audioMatinub = document.getElementById("audioMatinub")
let audioMatigranjero = document.getElementById("audioMatigranjero")
let audioMatiamoroso = document.getElementById("audioMatiamoroso")
let audioMatichill = document.getElementById("audioMatichill")
let playerId = null
let pcId = null
let matipons = []
let matiponsPc = []
let attackPlayer = []
let attackPc = []
let result 
let matiponsOption
let inputElmatipro
let inputElmatiexe 
let inputElmatinub 
let inputElmatigranjero 
let inputElmatiamoroso
let inputElmatichill
let matiPlayer 
let matiPlayerObject
let matiponAttacks 
let attacksMatiPc
let btnCandela 
let btnWater 
let btnMojon 
let btnPaper
let btnLight
let btnDark
let btns = []
let indexAttackPlayer
let indexAttackPc
let victoriesPlayer = 0
let victoriesPc = 0
let livesPlayer = 3
let livesPc = 3
let lienzo = map.getContext("2d")
let interval
let mapBackground = new Image()
mapBackground.src = "./imagenes/CityVille.png"
let heightSearched 
let widthMap = window.innerWidth - 20
const maxWidthMap = 680

if (widthMap > maxWidthMap) {
    widthMap = maxWidthMap - 20;
    heightSearched = maxWidthMap*600/800;
}

heightSearched = widthMap*600/800

map.width = widthMap
map.height = heightSearched

class Matipon{
    constructor(name, image, life, imageMap, id = null) { 
        this.id = id
        this.name = name
        this.image = image
        this.life = life
        this.attacks = []
        this.width = 40
        this.height = 40
        this.x = aleatorio (0, map.width -this.width)
        this.y = aleatorio(0, map.height-this.height) 
        this.mapImage = new Image()
        this.mapImage.src = imageMap
        this.speedX = 0
        this.speedY = 0
    }

    paintMatipon() {
        lienzo.drawImage(
            this.mapImage,
            this.x,
            this.y,
            this.width,
            this.height,
        )
    }
}

//estos son los matis del jugador
let Elmatipro = new Matipon("Elmatipro", "./imagenes/el_mati_pro_cuadrado.png", 5, "./imagenes/mati_pro_head.png",)

let Elmatiexe = new Matipon("Elmatiexe", "./imagenes/el_mati_exe_cuadrado.png", 5, "./imagenes/mati_exe_head.png")

let Elmatinub = new Matipon("Elmatinub", "./imagenes/el_mati_nub_cuadrado.png", 5, "./imagenes/mati_nub_head.png")

let Elmatigranjero = new Matipon("Elmatigranjero", "./imagenes/el_mati_granjero.png", 5, "./imagenes/mati_granjero_head.png")

let Elmatiamoroso = new Matipon("Elmatiamoroso", "./imagenes/el_mati_amoroso.png", 5, "./imagenes/mati_amoroso_head.png")

let Elmatichill = new Matipon("Elmatichill", "./imagenes/el_mati_chill.png", 5,"./imagenes/mati_chill_head.png")






const ELMATIPRO_ATTACKS = [
    {name: "🔥", id: "button-candela"},
    {name: "🔥", id: "button-candela"},
    {name: "🧻", id: "button-paper"},
    {name: "💦", id: "button-water"},
    {name: "💩", id: "button-mojon"},
]
const ELMATIEXE_ATTACKS = [
    {name: "💦", id: "button-water"},
    {name: "💦", id: "button-water"},
    {name: "☀️", id: "button-light"},
    {name: "🔥", id: "button-candela"},
    {name: "💩", id: "button-mojon"},
]
const ELMATINUB_ATTACKS = [
    {name: "💩", id: "button-mojon"},
    {name: "💩", id: "button-mojon"},
    {name: "🕶️", id: "button-dark"},
    {name: "💦", id: "button-water"},
    {name: "🔥", id: "button-candela"},
]
const ELMATIGRANJERO_ATTACKS = [
    {name: "🧻", id: "button-paper"},
    {name: "🧻", id: "button-paper"},
    {name: "💩", id: "button-mojon"},
    {name: "☀️", id: "button-light"},
    {name: "🔥", id: "button-candela"},
]
const ELMATIAMOROSO_ATTACKS = [
    {name: "☀️", id: "button-light"},
    {name: "☀️", id: "button-light"},
    {name: "💩", id: "button-mojon"},
    {name: "💦", id: "button-water"},
    {name: "🕶️", id: "button-dark"},
]
const ELMATICHILL_ATTACKS = [
    {name: "🕶️", id: "button-dark"},
    {name: "🕶️", id: "button-dark"},
    {name: "💩", id: "button-mojon"},
    {name: "💦", id: "button-water"},
    {name: "🔥", id: "button-candela"},
]

//push player 
Elmatipro.attacks.push(...ELMATIPRO_ATTACKS)

Elmatiexe.attacks.push(...ELMATIEXE_ATTACKS)

Elmatinub.attacks.push(...ELMATINUB_ATTACKS)

Elmatigranjero.attacks.push(...ELMATIGRANJERO_ATTACKS)

Elmatiamoroso.attacks.push(...ELMATIAMOROSO_ATTACKS)

Elmatichill.attacks.push(...ELMATICHILL_ATTACKS)

//Push pc, los enemigos spawneaba automaticamente pero ahora se van a crear de manera dinamica 

// ElmatiproPc.attacks.push(...ELMATIPRO_ATTACKS)

// ElmatiexePc.attacks.push(...ELMATIEXE_ATTACKS)

// ElmatinubPc.attacks.push(...ELMATINUB_ATTACKS)

// ElmatigranjeroPc.attacks.push(...ELMATIGRANJERO_ATTACKS)

// ElmatiamorosoPc.attacks.push(...ELMATIAMOROSO_ATTACKS)

// ElmatichillPc.attacks.push(...ELMATICHILL_ATTACKS)

matipons.push(Elmatipro,Elmatiexe,Elmatinub,Elmatigranjero,Elmatiamoroso,Elmatichill)


function startMatipon(){
   
    sectionTakeAttack.style.display = "none"
    sectionViewMap.style.display = "none"
    

    matipons.forEach((matipon) =>{
        matiponsOption = `
        <input type="radio" name="mati" id=${matipon.name} />
        <label class="matipon-target"  for=${matipon.name}>
                <p>${matipon.name}</p>
                <img src=${matipon.image} alt=${matipon.name}>
        </label> 
        `
        targetsContainer.innerHTML += matiponsOption

        inputElmatipro = document.getElementById("Elmatipro")
        inputElmatiexe = document.getElementById("Elmatiexe")
        inputElmatinub = document.getElementById("Elmatinub")
        inputElmatigranjero = document.getElementById("Elmatigranjero")
        inputElmatiamoroso = document.getElementById("Elmatiamoroso")
        inputElmatichill = document.getElementById("Elmatichill")

    } )

    buttonTakeMati.addEventListener("click", takeMatiPlayer)

    joinToTheGame()

    // let btnRestart = document.getElementById("button-restart")
    // btnRestart.addEventListener("click", restartGame)

    //quite el boton restart porque al final lo crea con un createElement

}

function joinToTheGame () {
    fetch("http://192.168.101.11:8080/join")
    .then( function (res) {
        if (res.ok) {
            res.text()
                .then(function (response ){
                    console.log(response)
                    playerId = response
                    
                })
            
        }
    })

}
             
// bueno el document.algo tiene diferentes manera de identificar algo en el documento, la que se uso ahi arriba es por el ID, y ps el addeven nose que, escucha que pasa o identifica que 

//El innerHTML es para cambiar lo que dice en un texto donde pusimos span, y el .checked dice si algo es verdadero o falso, si paso o no, en este caso si se elegio el input del mati o no

function takeMatiPlayer(){
    if (inputElmatipro.checked){
        spanMatiPlayer.innerHTML = inputElmatipro.id 
        matiPlayer = inputElmatipro.id 
        audioMatipro.play()
    } else if (inputElmatiexe.checked){
        spanMatiPlayer.innerHTML = inputElmatiexe.id
        matiPlayer = inputElmatiexe.id 
        audioMatiexe.play()
    } else if (inputElmatinub.checked){
        spanMatiPlayer.innerHTML = inputElmatinub.id
        matiPlayer = inputElmatinub.id
        audioMatinub.play()
    } else if (inputElmatigranjero.checked){
        spanMatiPlayer.innerHTML = inputElmatigranjero.id
        matiPlayer = inputElmatigranjero.id
        audioMatigranjero.play()
    } else if (inputElmatiamoroso.checked){
        spanMatiPlayer.innerHTML = inputElmatiamoroso.id
        matiPlayer = inputElmatiamoroso.id
        audioMatiamoroso.play()
    } else if(inputElmatichill.checked){
        spanMatiPlayer.innerHTML = inputElmatichill.id
        matiPlayer = inputElmatichill.id
        audioMatichill.play()
    } else{
        alert("U must take a mati first, dumb")
        // location.reload();
        return
    }

    sectionTakeMati.style.display = "none"

    selectMatipon(matiPlayer)

    extrackAttacks(matiPlayer)
    sectionViewMap.style.display = "flex"
    showMap()
}

function selectMatipon(matiPlayer) {
    fetch(`http://192.168.101.11:8080/matipon/${playerId}`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            matipon: matiPlayer
        })
    } )
    
}

function extrackAttacks(matiPlayer){
    let attacks 
    for (let i = 0; i < matipons.length; i++) {
        if (matiPlayer === matipons[i].name) {
            attacks = matipons[i].attacks
        }
        
    }
    showAttacks(attacks)
}

function showAttacks(attacks) {
    attacks.forEach((attack) => {
        matiponAttacks = `
        <button id=${attack.id} class="attacks-btn btnAttack">${attack.name}</button>
        `
        //Se renderiza cada ataque del personaje 
        attacksContainer.innerHTML += matiponAttacks
    })
    //seleccionar botones luego de crearlos 
    btnCandela = document.getElementById("button-candela")
    btnWater = document.getElementById("button-water")
    btnMojon = document.getElementById("button-mojon")
    btnPaper = document.getElementById("button-paper")
    btnLight = document.getElementById("button-light")
    btnDark = document.getElementById("button-dark")
    btns = document.querySelectorAll(".btnAttack")
        
    // Agregar evento click de los botones, y esta funcion tampoco sirve porque ya abajo se esta haciendo el addEvenListener
    // btnCandela.addEventListener("click", attackCandela)
    // btnWater.addEventListener("click", attackWater)
    // btnMojon.addEventListener("click", attackMojon)

    
}

function attackSequence() {
    btns.forEach((btn) => {
        btn.addEventListener("click",(e) =>{
            // console.log(e) 
            if (e.target.textContent === "🔥") {
                attackPlayer.push("🔥")
                console.log(attackPlayer)
                btn.style.background = "#122f58"
                btn.style.border = "5px", "solid", "transparent"
                btn.disabled = true
            } else if (e.target.textContent === "💦"){
                attackPlayer.push("💦")
                console.log(attackPlayer)
                btn.style.background = "#122f58"
                btn.style.border = "5px", "solid", "transparent"
                btn.disabled = true
            } else if (e.target.textContent === "🧻"){
                attackPlayer.push("🧻")
                console.log(attackPlayer)
                btn.style.background = "#122f58"
                btn.style.border = "5px", "solid", "transparent"
                btn.disabled = true
            } else if (e.target.textContent === "☀️"){
                attackPlayer.push("☀️")
                console.log(attackPlayer)
                btn.style.background = "#122f58"
                btn.style.border = "5px", "solid", "transparent"
                btn.disabled = true
            }  else if (e.target.textContent === "🕶️"){
                attackPlayer.push("🕶️")
                console.log(attackPlayer)
                btn.style.background = "#122f58"
                btn.style.border = "5px", "solid", "transparent"
                btn.disabled = true
            }  else {
                attackPlayer.push("💩")
                console.log(attackPlayer)
                btn.style.background = "#122f58"
                btn.style.border = "5px", "solid", "transparent"
                btn.disabled = true
            }
            if (attackPlayer.length === 5){
             sendAttacks()

            }
        })
    })
   
}

function sendAttacks () {
    fetch(`http://192.168.101.11:8080/matipon/${playerId}/attacks`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            attacks: attackPlayer
        })
    })
      
    // if (!attackInterval){ //solo inicia si no existe
        interval = setInterval(getAttacks, 50)
    // }
}

function getAttacks () {
    fetch(`http://192.168.101.11:8080/matipon/${pcId}/attacks`)
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({ attacks }) {
                        if (attacks.length === 5) {
                            attackPc = attacks 
                             whoWon()
                        }
                    })
                    // clearInterval(attackInterval)
                    // attackInterval = null //limpia el intervalo 
            }
        })
}
                           

function takeMatiPc(pc){
    // let randomMati = aleatorio(0, matipons.length -1)

    spanMatiPc.innerHTML = pc.name
    attacksMatiPc = pc.attacks
    attackSequence()
}

//Estas funciones ya no sirven porque ya imprimimis los ataques en la funcion de attackSequence
// function attackCandela(){
//     attackPlayer = "Candela"
//     attackRandomPc()
// }
// function attackWater(){
//     attackPlayer = "Water"
//     attackRandomPc()
// }
// function attackMojon(){
//     attackPlayer = "Mojon"
//     attackRandomPc()
// }

function attackRandomPc(){
    
    let attackRandom = aleatorio(0,attacksMatiPc.length -1)

    attackPc.push(attacksMatiPc[attackRandom].name)

    attacksMatiPc.splice(attackRandom,1)

    //con el splice se arregló todo, es dificil entender, el splice elimina y devuelve un elemento dentro del array de ataques, o sea uno random

    //     if (attackRandom == 0 || attackRandom == 1){
    //         attackPc.push("CANDELA")
    //     } else if (attackRandom == 3 || attackRandom == 4){
    //         attackPc.push("WATER")
    //     } else
    //     {attackPc.push("MOJON")
            
    //     }

        console.log(attackPc)
        startCombat()
    


        // createMessage()
}
//La funcion no funcionaba XD, porque no la habia llamado en la de attackRandomPc, tenia que llamar primero la funcion de whoWon antes de la de createMessage, para que la variable result ya tenga valor establecido
function startCombat() {
    if (attackPlayer.length === 5) {
        whoWon()
    }
}

function indexBothOpponets(player, pc){
    indexAttackPlayer = attackPlayer[player];
    indexAttackPc = attackPc[pc];
}

function whoWon() {
        clearInterval(interval)
        // if (attackPlayer.length !== 5 || attackPc.length !== 5) {
        //     console.error("Ataques incompletos : ", attackPlayer, attackPc)
        //     return;
        // }

        for (let index = 0; index < attackPlayer.length; index++) {
            if(attackPlayer[index] === attackPc[index]){
                indexBothOpponets(index, index)
                createMessage("Empateee")

            } else if((attackPlayer[index] === "💦" && attackPc[index] === "🔥") || (attackPlayer[index] === "🔥" && attackPc[index] === "🧻") || (attackPlayer[index] === "🧻" && attackPc[index] === "💩")||(attackPlayer[index] === "💩" && attackPc[index] === "🕶️") || (attackPlayer[index] === "🕶️" && attackPc[index] === "☀️")||(attackPlayer[index] === "☀️" && attackPc[index] === "💦")|| (attackPlayer[index] === "💦" && attackPc[index] === "🧻")|| (attackPlayer[index] === "💦" && attackPc[index] === "💩")|| (attackPlayer[index] === "🔥" && attackPc[index] === "💩")|| (attackPlayer[index] === "🔥" && attackPc[index] === "🕶️")|| (attackPlayer[index] === "🧻" && attackPc[index] === "🕶️")||(attackPlayer[index] === "💩" && attackPc[index] === "☀️")|| (attackPlayer[index] === "🕶️" && attackPc[index] === "💦")||(attackPlayer[index] === "☀️" && attackPc[index] === "🔥")||(attackPlayer[index] === "☀️" && attackPc[index] === "🧻")  ){
                indexBothOpponets(index,index)
                createMessage("U wonn")
                victoriesPlayer++
                spanLivesPlayer.innerHTML = victoriesPlayer
            } else{
                indexBothOpponets(index, index)
                createMessage("U just losttt losserrr")
                victoriesPc++
                spanLivesPc.innerHTML = victoriesPc
            } 
           
        }
        
        checkVictories()
    
        }

function checkVictories(){
            if (victoriesPlayer === victoriesPc){
                createMessageFinal("vaya vaya, empate")
                createRestartBtn()
            } else if (victoriesPlayer > victoriesPc){
                createMessageFinal("U won master")
                createRestartBtn()
            }else {
                createMessageFinal("u lost losser")
                createRestartBtn()
            }
        }

//Recuerda que cuando llames variables no pongas comas, porque no funciona, le paso a un amigo :(. El appendChild basicamente agrega un texto o un parrafo o una lista o lo que queramos a un lugar especifico, aqui agregamos la varaible paragraph a la section de mensajes

function createMessage(resultado){

    let newPlayerAttack = document.createElement("p")
    let newPcAttack = document.createElement("p")

    sectionMessages.innerHTML = resultado
    newPlayerAttack.innerHTML = indexAttackPlayer
    newPcAttack.innerHTML = indexAttackPc

    
    playerAttacks.appendChild(newPlayerAttack)
    pcAttacks.appendChild(newPcAttack)

   
}

function createMessageFinal(finalResult){
    
    sectionMessages.innerHTML = finalResult

    // btnCandela.disabled = true

    // btnWater.disabled = true
    
    // btnMojon.disabled = true , cambio la logica entonces eso no funciona 

   
}

function createRestartBtn(){
    let sectionRestart = document.getElementById("Restart")
    let btnRestart = document.createElement("button")
    btnRestart.innerHTML = "🔃"

    sectionRestart.appendChild(btnRestart)
    btnRestart.addEventListener("click", restartGame)
}

function restartGame(){
    location.reload()
}

function showMap(){
    
    matiPlayerObject = getObjectMatipon(matiPlayer)
    console.log(matiPlayerObject, matiPlayer);
    interval = setInterval(paintCanvas, 50)

    window.addEventListener("keydown", pressedKey )

    window.addEventListener("keyup", stopMoving)
}

function paintCanvas() { //sobreescribe la imagen en el mapa teniendo en cuenta el valor de los objetos
    
    matiPlayerObject.x = matiPlayerObject.x + matiPlayerObject.speedX //avanza segun la velocidad  
    matiPlayerObject.y = matiPlayerObject.y + matiPlayerObject.speedY
    lienzo.clearRect(0, 0, map.width, map.height) // metodo para poder limpiar el lienzo al mover la imgagen, sino se qeudarían todas las img que han cambiado de posicion sucesivamente 
    lienzo.drawImage(
        mapBackground,
        0,
        0,
        map.width,
        map.height,
    )
    matiPlayerObject.paintMatipon()

    sendPosition(matiPlayerObject.x, matiPlayerObject.y )

    matiponsPc.forEach(function (matipon) {
        if (matipon != undefined) {
        matipon.paintMatipon()
        checkCollision(matipon)
        }
    })

    // ya no se ponen todos automaticamente sino depende los que entren al serverr y ahi si se pintan
    // ElmatiproPc.paintMatipon()
    // ElmatiexePc.paintMatipon()
    // ElmatinubPc.paintMatipon()
    // ElmatigranjeroPc.paintMatipon()
    // ElmatiamorosoPc.paintMatipon()
    // ElmatichillPc.paintMatipon()
    // if (matiPlayerObject.speedX !== 0 || matiPlayerObject.speedY !== 0){
    //     checkCollision(ElmatiproPc)
    //     checkCollision(ElmatiexePc)
    //     checkCollision(ElmatinubPc)
    //     checkCollision(ElmatigranjeroPc)
    //     checkCollision(ElmatiamorosoPc)
    //     checkCollision(ElmatichillPc)
    // }
    stopMapEdges();
}

function sendPosition (x, y) {
    fetch(`http://192.168.101.11:8080/matipon/${playerId}/position`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res){
        if (res.ok){
            res.json()
                .then(function ({ enemies }) {
                    console.log(enemies);
                    matiponsPc = enemies.map(function (pc) {
                         let matiponPc = null
                         if(pc.matipon != undefined){ 
                            const matiponName = pc.matipon.name || "" 
                                if (matiponName === "Elmatipro") {
                                    matiponPc = new Matipon("Elmatipro", "./imagenes/el_mati_pro_cuadrado.png", 5, "./imagenes/mati_pro_head.png", pc.id)
                                } else if (matiponName === "Elmatiexe"){
                                    matiponPc = new Matipon("Elmatiexe", "./imagenes/el_mati_exe_cuadrado.png", 5, "./imagenes/mati_exe_head.png", pc.id)
                                } else if (matiponName === "Elmatinub"){
                                    matiponPc  = new Matipon("Elmatinub", "./imagenes/el_mati_nub_cuadrado.png", 5, "./imagenes/mati_nub_head.png", pc.id)
                                } else if (matiponName === "Elmatigranjero") {
                                    matiponPc  = new Matipon("Elmatigranjero", "./imagenes/el_mati_granjero.png", 5, "./imagenes/mati_granjero_head.png", pc.id)
                                } else if (matiponName === "Elmatiamoroso"){
                                    matiponPc  = new Matipon("Elmatiamoroso", "./imagenes/el_mati_amoroso.png", 5, "./imagenes/mati_amoroso_head.png", pc.id)
                                } else if (matiponName === "Elmatichill") {
                                    matiponPc  = new Matipon("Elmatichill", "./imagenes/el_mati_chill.png", 5,"./imagenes/mati_chill_head.png", pc.id)
                                }

                            
                                
                                matiponPc.x  = pc.x
                                matiponPc.y  = pc.y
                                
                                return matiponPc
                            }
                        })     
                })
        }
    })
}

function moveRight() {
    matiPlayerObject.speedX = 5
}

function moveLeft() {
    matiPlayerObject.speedX = - 5
}

function moveDown() {
    matiPlayerObject.speedY =  5
}

function moveUp() {
    matiPlayerObject.speedY = - 5
}


function stopMoving() {
    matiPlayerObject.speedX = 0
    matiPlayerObject.speedY = 0
}

function pressedKey(event) {
    switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
            moveUp()
            break
        case "ArrowDown":
        case "s":
        case "S":
            moveDown()
            break
        case "ArrowLeft":
        case "a":
        case "A":
            moveLeft()
            break
        case "ArrowRight":
        case "d":
        case "D":
            moveRight()
            break
        default:
            break;
    }
}

function getObjectMatipon() {
    for (let i = 0; i < matipons.length; i++) {
        if (matiPlayer === matipons[i].name) {
            return matipons[i]
        }
        
    }
}

function checkCollision(pc) {
    const topMatiPc = pc.y
    const bottomMatiPc = pc.y + pc.height
    const rightMatiPc = pc.x + pc.width
    const leftMatiPc = pc.x

    const topMatiPlayer =
         matiPlayerObject.y
    const bottomMatiPlayer =
         matiPlayerObject.y + matiPlayerObject.height
    const rightMatiPlayer =
         matiPlayerObject.x + matiPlayerObject.width
    const leftMatiPlayer = 
        matiPlayerObject.x

    if (
        bottomMatiPlayer < topMatiPc ||
        topMatiPlayer > bottomMatiPc ||
        rightMatiPlayer < leftMatiPc ||
        leftMatiPlayer > rightMatiPc
    ) {
        return;
    } 
    stopMoving()
    clearInterval(interval)
    console.log("Se detecto una colision");

    pcId = pc.id
    sectionTakeAttack.style.display = "flex" 
    sectionViewMap.style.display = "none"
    takeMatiPc(pc)

    // console.log(spanLivesPlayer, spanLivesPc); // Asegúrate de que no sean null

}

function stopMapEdges() {
//verificar si los matis pasaron el borde del mapa

const upMap = 0;
const downMap = map.height - matiPlayerObject.height;
const rightMap = map.width;
const leftMap = 0;

const upPlayer = matiPlayerObject.y;
const rightPlayer = matiPlayerObject.x +matiPlayerObject.width;
const leftPlayer = matiPlayerObject.x;

if (upPlayer<upMap) {
    matiPlayerObject.y = upMap;
}

if (upPlayer > downMap){
    matiPlayerObject.y = downMap;
}

if (rightPlayer > rightMap){
    matiPlayerObject.x = rightMap - matiPlayerObject.width;
}

if (leftPlayer < leftMap) {
    matiPlayerObject.x = leftMap;
}


}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



window.addEventListener("load", startMatipon)

