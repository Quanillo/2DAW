const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const edad = document.getElementById("edad");
const dni = document.getElementById("dni");
const mail = document.getElementById("mail");
const web = document.getElementById("web");
const gustos = document.getElementById("gustos");


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validate); 
});

function validate(){
    if(nombre.length > 2 || apellidos.length > 2){
        alert('Nombre o apellidos demasiado cortos.');
    } 
    else{
        this.submit();
    }    
}

