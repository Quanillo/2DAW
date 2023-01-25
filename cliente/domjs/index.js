import {imFirebase, getDocuments, onGetDocuments} from './firebase.js';

const list = document.getElementById('containerList');
const form = document.getElementById('form');

window.addEventListener('DOMContentLoaded', async ()=>{
    let html = '';
    await onGetDocuments('pets', (docs) =>{
        docs.forEach(doc =>{
            const {name, race} = doc.data()
            console.log(doc.data())
            const id = doc.id 
            html += `
                <div>
                    <p> Name ${name} </p>
                    <p> Race ${race}</p>
                </div>
            `
        })
        list.innerHTML += html;
    });
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form['name'].value;
    const race = form['race'].value;
    list.innerHTML += `
    <div>
        <p> Name ${name} </p>
        <p> Race ${race}</p>
    </div>
    `
    imFirebase();
} )
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