const user = document.querySelector("#user")
const stand = document.querySelector("#stand")
const imguser = document.querySelector("#img-user")
const imgstand = document.querySelector("#img-stand")





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
                const numuser = document.querySelector("#num-user").value
                jojos = JSON.parse(jojos.responseText)
                console.log(jojos)
                let mundo;
                if(eleccionparte === "1") {
                    mundo = jojos.StardustCrusaders
                } else if (eleccionparte === "2") {
                    mundo = jojos.DiamondIsUnbreakable
                } else {
                    mundo = jojos.GoldenWind
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

