
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
                <img src="https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044374/hlpy6q013uw3itl5jzic.webp" alt="imagen-pj">
                <div class="container-text">
                    <h2>${personaje.name}</h2>
                    <p>Raza:<span>${personaje.race}</span></p>
                    <p>Ki:<span> ${personaje.ki}</span></p>
                    <p>Max-ki:<span>${personaje.maxki}</span></p>
                </div>
                `
        
    const contenido = document.getElementsByClassName("container-card");
    console.log(contenido)
    contenido.append(card)

            });
        })
}
        
cargarPersonajes()













