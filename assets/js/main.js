import DetallesPersonajes from './detallesPersonajes.js';

//-----------IIFE------------------------
let llamadoDePersonajes = (() => {
    let mostrar = document.querySelector('.resultados');
    let modal = document.querySelector('#modal');
    let perfil;
    let url = "https://rickandmortyapi.com/api/character";

    let solicitud = async ()=> {
        try {
            let busqueda = await fetch(url);
            perfil = await busqueda.json();
            return perfil;
        }catch (error) {
            console.error(error);
        }
    };

//-----------INSTANCIA------------------------
    let datosPersonajes = async (id) => {
        try{
            let respuesta = await fetch(`${url}/${id}`);
            let infoPersonaje = await respuesta.json();
            let cartoon = new DetallesPersonajes(infoPersonaje.id, infoPersonaje.name, infoPersonaje.species, infoPersonaje.gender, infoPersonaje.origin);
            document.querySelector(`#characters${infoPersonaje.id}`).innerHTML = cartoon.infoGeneral();
        } catch (error) {
            console.error(error);
        }
    };

    return {

//-----------LLAMADA PRINCIPAL------------------------
        mostrarPersonaje: async () => {
            try {
                let ficha = await solicitud();
                ficha.results.forEach((element) => {
                    mostrar.innerHTML += `
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <img src="${element.image}" type="button" data-toggle="modal" data-target="#exampleModal${element.id}" alt="${element.name}">
                            <div id="characters${element.id}" class="d-inline-block">
                                ${datosPersonajes(element.id)};
                            </div>
                    </div>`;
                });   
            } catch (error) {
                console.error(error);
            }
        },
//-----------MODAL------------------------
        modalPersonaje: async () => {
            try{
                let ficha = await solicitud();
                ficha.results.forEach((element) => {
                        modal.innerHTML += `
                        <div class="modal fade" id="exampleModal${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel${element.id}" aria-hidden="true">
                            <div class="modal-dialog ">
                                <div class="modal-content">
                                    <div class="nueva modal-header text-dark">
                                        <div>
                                            <img src="${element.image}" alt="${element.name}">
                                            <h5 class="modal-title" id="exampleModalLabel${element.id}">${element.name}</h5>
                                        <hr>
                                            <p>Number: ${element.id}</p>
                                            <p>Specie: ${element.species}</p>
                                            <p>Gender: ${element.gender}</p>
                                            <p>Origen: ${element.origin.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });  
            } catch (error) {
                console.error(error);
            }               
        },
//-----------SPINNER------------------------
        eliminarSpiner: async () => {
            try {
                let spiner = document.querySelector('.spinner-border')
                spiner.style.display = "none";
                cantidadPersonajes.innerHTML = `${perfil.results.length}`; 
            } catch (error) {
                console.error(error);
            }
        },
    };
})();

//-----------LLAMADAS------------------------
llamadoDePersonajes.mostrarPersonaje();
llamadoDePersonajes.modalPersonaje();
setTimeout(()=>{
    llamadoDePersonajes.eliminarSpiner();
},2000);