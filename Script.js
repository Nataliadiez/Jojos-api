const user = document.querySelector("#user")
const stand = document.querySelector("#stand")
const imguser = document.querySelector("#img-user")
const imgstand = document.querySelector("#img-stand")
const audio = document.querySelector("#audio-mundo")
const div_card = document.querySelector(".card")
const musica_mundo = document.querySelector(".musica-mundo")
const animacion_img_inicio = document.querySelector(".animate__animated")


const efectos = () => {
    animacion_img_inicio.classList.add("animate__flip")
    let efecto_sonido = document.querySelector("#efecto-sonido")
    efecto_sonido.src = "./audio/sawardo audio.mp3"
}
    


musica_mundo.addEventListener("change", (event) => {
    if(musica_mundo.value === "1") {
        audio.src = "./audio/Stardust crusaders.mp3"
    } else if (musica_mundo.value === "2") {
        audio.src = "./audio/Diamond Is Unbreakable.mp3"
    } else if (musica_mundo.value === "3") {
        audio.src = "./audio/Golden wind.mp3"
    }
})
document.querySelector("#boton-click").addEventListener("click", function(){
    reunirdatos()
    
})

const reunirdatos = () => {
    let jojos = new XMLHttpRequest();
    jojos.open('GET','catalogo.JSON');
    jojos.send();
    jojos.onreadystatechange = (e) => {
        if(jojos.readyState === 4){
            if(jojos.status === 200) {
                let eleccionparte = document.querySelector("#eleccion-mundos").value
                let numuser = Math.round(Math.random()*10);
                jojos = JSON.parse(jojos.responseText)
                console.log(jojos)
                let mundo;
                if(eleccionparte === "1") {
                    mundo = jojos.StardustCrusaders
                    numuser = Math.round(Math.random()*32);
                    div_card.classList.remove("oculto")
                    console.log(numuser)  
                } else if (eleccionparte === "2") {
                    mundo = jojos.DiamondIsUnbreakable
                    numuser = Math.round(Math.random()*28);
                    div_card.classList.remove("oculto")
                    console.log(numuser)  
                } else {
                    mundo = jojos.GoldenWind
                    numuser = Math.round(Math.random()*28);
                    div_card.classList.remove("oculto")
                    console.log(numuser)  
                }
                
                    mundo.forEach(x => {
                        console.log(mundo[parseInt(numuser)].user)
                        user.innerHTML = mundo[parseInt(numuser)].user
                        stand.innerHTML = mundo[parseInt(numuser)].Stand
                        imguser.src = mundo[parseInt(numuser)].user_image
                        imgstand.src = mundo[parseInt(numuser)].stand_image
                        
                    });
                    
                    
                
            }

        }
    }
}

