const user = document.querySelector("#user")
const stand = document.querySelector("#stand")
const imguser = document.querySelector("#img-user")
const imgstand = document.querySelector("#img-stand")
const audio = document.querySelector("#audio-mundo")



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
                    audio.src = "./audio/Stardust crusaders.mp3"
                    numuser = Math.round(Math.random()*32);
                    console.log(numuser)  
                } else if (eleccionparte === "2") {
                    mundo = jojos.DiamondIsUnbreakable
                    audio.src = "./audio/Diamond Is Unbreakable.mp3"
                    numuser = Math.round(Math.random()*28);
                    console.log(numuser)  
                } else {
                    mundo = jojos.GoldenWind
                    audio.src = "./audio/Golden wind.mp3"
                    numuser = Math.round(Math.random()*28);
                    console.log(numuser)  
                }
                
                for (let i = 0; i < mundo.length; i++) {
                    
                    console.log(mundo[parseInt(numuser)].user)
                    user.innerHTML = mundo[parseInt(numuser)].user
                    stand.innerHTML = mundo[parseInt(numuser)].Stand
                    imguser.src = mundo[parseInt(numuser)].user_image
                    imgstand.src = mundo[parseInt(numuser)].stand_image
                }
            }

        }
    }
}

