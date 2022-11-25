const base = document.getElementById("nombre");
const altura = document.getElementById("edad");


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validate); 
});

function validate(){
        this.submit();
}

