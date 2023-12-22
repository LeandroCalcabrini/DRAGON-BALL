
const contenido = document.querySelector(".container-card");


function cargarPersonajes(){
    const resultado = fetch("https://dragonball-api.com/api/characters?limit=100");

    resultado
        .then(respuesta => respuesta.json())
        .then(data => {
            data.items.forEach(personaje => {
                let card = document.createElement("article");
                card.className ="card"
                card.innerHTML = `
                <img src=${personaje.image}>
                    <h2>  ${personaje.name}</h2>
                    <span class="grupo" id="${personaje.affiliation}">${personaje.affiliation} - ${personaje.gender} </span>
                    <p>Raza:<span>  ${personaje.race}</span></p>
                    <p>Ki:<span> ${personaje.ki}</span></p>
                    <p>Max-ki:<span>  ${personaje.maxKi}</span></p>
                </div>
                `  
    contenido.append(card)
            });
        })
}
 

        
cargarPersonajes()















