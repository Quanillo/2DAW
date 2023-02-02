import {imFirebase, getDocuments, onGetDocuments, addDocuments, deleteDocuments, getDocument} from './firebase.js';

const list = document.getElementById('containerList');
const formulario = document.getElementById('form');

formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const name = formulario['name'].value;
    const race = formulario['race'].value;
    await addDocuments("pets", {name: name, race: race})
    formulario.reset();
} )

window.addEventListener('DOMContentLoaded', async ()=>{
    await onGetDocuments('pets', (docs) =>{
        let html = '';
        docs.forEach(doc =>{
            const {name, race} = doc.data();
            const id = doc.id ;
            html += `
                <div>
                    <p> Name ${name} </p>
                    <p> Race ${race}</p>
                    <button class="btn-eliminar" data-id="${id}">Eliminar</button>
                    <button class='btn-modificar' data-id=${id}>modificar</button>
                </div>
            `;
        })
        list.innerHTML = html;

        const deleteButtons = list.querySelectorAll('.btn-eliminar');
        const modButtons = list.querySelectorAll('.btn-modificar');
    
        modButtons.forEach(btn => btn
                                    .addEventListener('click', async (e)=>{
                                        console.log('modificar');
                                        await getDocument("pets", e.target.dataset.id);
                                        const { name, race } = doc.data();
                                        formulario['namePet'].value = name;
                                        formulario['racePet'].value = race;
                                    }));
    
        deleteButtons.forEach(btn => btn
                                .addEventListener('click', async (e)=>{
                                    console.log(e.target.dataset.id)
                                    await deleteDocuments("pets", e.target.dataset.id)
                                }))
    })
    
    });
    
 


/*
window.addEventListener('DOMContentLoaded', async ()=>{
    let html = '';
    const docs = await getDocuments('pets');
    docs.forEach(doc =>{
        const {name, race} = doc.data()
        const id = doc.id 
        html += `
            <div>
                <p> Name ${name} </p>
                <p> Race ${race}</p>
            </div>
        `
    });
    list.innerHTML = html;
})*/