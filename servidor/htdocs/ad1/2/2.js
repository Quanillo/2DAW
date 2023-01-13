const usuario = document.getElementById("usuario");
const pass = document.getElementById("pass").value;
const fecha = document.getElementById("fecha").value;
const aux = document.getElementById("aux").value;


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validate); 
});

function validate(evento){
    evento.preventDefault();

    if(usuario.length > 20)
        alert('Nombre de usuario deben ser 20 caracteres');
    else if(pass.length > 20)
        alert('Pass deben ser 20 caracteres');
    else {
        this.submit();
    }
       
}
