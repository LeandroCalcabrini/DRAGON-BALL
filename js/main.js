

const contenido = document.querySelector(".container-card");


function cargarPersonajes(){
    const resultado = fetch("https://dragonball-api.com/api/characters?limit=100");

    resultado
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data)
            data.items.forEach(personaje => {
                let card = document.createElement("article");
                card.className ="card"
                card.innerHTML = `
                <img src=${personaje.image}>
                <div class="card-text">
                    <h2>  ${personaje.name}</h2>
                    <span class="grupo ${personaje.race}"> ${personaje.race}</span>
                    <p>Raza:<span>  ${personaje.affiliation}</span></p>
                    <p> Género: <span> ${personaje.gender}</span>
                    <p>Ki:<span> ${personaje.ki}</span></p>
                    <p>Max-ki:<span>  ${personaje.maxKi}</span></p>
                </div>
                `  
    contenido.append(card)
            });
        })
}
cargarPersonajes()















