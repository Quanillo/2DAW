const lista = [... document.getElementsByClassName('elements')];
const lista2 = document.querySelectorAll('.elements');
const modif = document.getElementById('el4');
const button = document.getElementById('button');
const propagation = (event) => {
    event.stopPropagation()
    console.log('clickando desde el boton')
}
modif.innerHTML = '<li>Pablo paquete</li>'

//lista2.forEach(()=>console.log('finded by query'));
//lista.forEach(()=>console.log('finded by class'));


//dispatch event